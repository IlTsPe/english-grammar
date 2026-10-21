"""Озвучка упражнений «На слух» в mp3 (нейроголос Microsoft через edge-tts).

Запуск из корня проекта:
    python tools/make_audio.py art-a-an art-the   — перегенерировать указанные темы
    python tools/make_audio.py --all              — все темы, где есть упражнение «На слух»

Файлы: audio/<id темы>-<номер предложения>.mp3. Сайт находит запись по тексту предложения через audio/index.js
(текст → файл); тишина до и после голоса из записи вырезается, чтобы полоса проигрывания совпадала с речью. Если предложение в data/*.js поменяли, а mp3 не перегенерировали, сайт читает его голосом браузера.
Нужен Python-пакет edge-tts: pip install edge-tts
"""
import asyncio
import json
import math
import re
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / 'audio'
INDEX = AUDIO / 'index.js'
VOICE = 'en-GB-SoniaNeural'  # британский голос, как и в озвучке браузером
RATE = '+0%'                 # обычная скорость
FRAME = 0.024                # длительность кадра mp3, с
LEAD, TAIL = 0, 0.04         # запас до первого и после последнего слова, с (граница первого слова и так чуть раньше звука)

# data/*.js — обычные скрипты, и фразы «На слух» в них записаны однотипно: тема начинается строкой «{ id: '…'»,
# упражнение — «{ type: 'listen' … items: [», дальше по строке на предложение: ["английский", "перевод"]
TOPIC = re.compile(r"^\{ id: '([^']+)'")
LISTEN = re.compile(r"type: 'listen'")
ITEM = re.compile(r'^\s*\[("(?:[^"\\]|\\.)*"),')


def listen_items():
    out, tid, inside = {}, None, False
    for f in sorted((ROOT / 'data').glob('*.js')):
        for line in f.read_text(encoding='utf-8').splitlines():
            if m := TOPIC.match(line):
                tid, inside = m.group(1), False
            elif LISTEN.search(line):
                inside = True
                out[tid] = []
            elif inside and (m := ITEM.match(line)):
                out[tid].append(json.loads(m.group(1)))
            elif inside and line.strip().startswith(']'):
                inside = False
    return out


def read_index():
    if not INDEX.exists():
        return {}
    text = INDEX.read_text(encoding='utf-8')
    return json.loads(text[text.index('{'):text.rindex('}') + 1])


def write_index(index):
    body = json.dumps(dict(sorted(index.items(), key=lambda kv: kv[1])), ensure_ascii=False, indent=1)
    INDEX.write_text('/* создается tools/make_audio.py: текст предложения «На слух» → mp3 в этой папке */\n'
                     f'window.AUDIO = {body};\n', encoding='utf-8', newline='\n')  # LF, как во всем репозитории


def mp3_frames(data):
    """Режет mp3 на кадры. Сервис отдает MPEG-2 Layer III 24 кГц 48 кбит/с без служебных заголовков: каждый кадр —
    576 отсчетов (24 мс) и 144 байта (+1, если в заголовке бит дополнения)"""
    frames, i = [], 0
    while i + 4 <= len(data):
        head = int.from_bytes(data[i:i + 4], 'big')
        if head >> 21 != 0x7FF or (head >> 19) & 3 != 2 or (head >> 12) & 15 != 6 or (head >> 10) & 3 != 1:
            sys.exit(f'Неожиданный формат mp3 (байт {i}): сервис поменял формат, обрезку тишины надо переделать')
        size = 144 + ((head >> 9) & 1)
        frames.append(data[i:i + size])
        i += size
    return frames


async def synth(text, path):
    """Пишет mp3 без тишины до и после голоса: сервис присылает границы слов (в единицах по 100 нс), по ним
    отрезаются целые кадры, с небольшим запасом, чтобы не срезать начало первого звука и затухание последнего.
    Возвращает длительность записи в секундах"""
    audio, words = bytearray(), []
    async for chunk in edge_tts.Communicate(text, VOICE, rate=RATE, boundary='WordBoundary').stream():
        if chunk['type'] == 'audio':
            audio += chunk['data']
        elif chunk['type'] == 'WordBoundary':
            words.append((chunk['offset'], chunk['offset'] + chunk['duration']))
    frames = mp3_frames(audio)
    start = max(0, int((words[0][0] / 1e7 - LEAD) / FRAME))
    end = min(len(frames), math.ceil((words[-1][1] / 1e7 + TAIL) / FRAME))
    path.write_bytes(b''.join(frames[start:end]))
    return round((end - start) * FRAME, 2)


async def main(args):
    items = listen_items()
    ids = list(items) if args == ['--all'] else args
    unknown = [i for i in ids if i not in items]
    if not ids or unknown:
        sys.exit(f'Нет темы с упражнением «На слух»: {", ".join(unknown)}' if unknown else __doc__)
    AUDIO.mkdir(exist_ok=True)
    index = read_index()
    for tid in ids:
        # записи темы удаляются целиком: тексты могли поменяться
        # (по точному шаблону «id-номер»: у t-future и t-future-perfect общее начало)
        index = {k: v for k, v in index.items() if not re.fullmatch(re.escape(tid) + r'-\d+', v)}
        for n, text in enumerate(items[tid], 1):
            name = f'{tid}-{n}'
            sec = await synth(text, AUDIO / f'{name}.mp3')
            index[text] = name
            print(f'{name}.mp3  {sec} с  {text}')
    write_index(index)


asyncio.run(main(sys.argv[1:]))

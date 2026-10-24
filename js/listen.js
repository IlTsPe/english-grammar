/* «На слух»: запись mp3 из audio/ (make_audio.py из папки tools рядом с сайтом), а если ее нет — озвучка браузером (Web Speech API), британский
   голос, если он есть. Каждое предложение — свой плеер: кнопка и полоса прогресса */
const AUDIO = window.AUDIO || {}; /* текст предложения → имя mp3, audio/index.js */
const speech = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
const SPEECH_RATE = 1; /* обычная скорость голоса */
let speaking = null; /* плеер, который сейчас звучит */
const spokenSec = new Map(); /* текст → длительность, измеренная при прослушивании */
/* из нескольких измерений берется наименьшее: событие конца речи браузер присылает с задержкой, и у некоторых голосов
   она растет от раза к разу — если запоминать последнее измерение, полоса с каждым прослушиванием ехала бы медленнее */
const rememberSec = (text, sec) => spokenSec.set(text, Math.min(spokenSec.get(text) ?? Infinity, sec));
function enVoice() {
  const vs = speechSynthesis.getVoices();
  return vs.find(v => /^en[-_]GB/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null;
}
function stopSpeech() {
  const p = speaking; speaking = null;
  if (speech) speechSynthesis.cancel();
  if (p) p.idle();
}
/* буквы фразы: звучат только они, пробелы и знаки препинания времени почти не занимают */
const letters = s => (s.match(/[a-z0-9']/gi) || []).length;
/* длительность оценивается по буквам — около 0,07 с на букву при обычной скорости (так говорят голоса Windows и Android) */
/* измерение по событию конца речи включает задержку браузера, поэтому длиннее оценки оно не берется: полосе лучше
   дойти до конца чуть раньше звука, чем отставать от него */
const speechSec = text => Math.min(.2 + letters(text) * .07 / SPEECH_RATE, spokenSec.get(text) ?? Infinity);
const PLAY_ICON = '<svg aria-hidden="true"><use href="#i-play"/></svg>';
const STOP_ICON = '<svg aria-hidden="true"><use href="#i-stop"/></svg>';
function makePlayer(text, label) {
  const box = el('div', 'listen__player');
  const btn = el('button', 'listen__play'); btn.type = 'button';
  const track = el('span', 'bar listen__track'); track.setAttribute('aria-hidden', 'true');
  const fill = el('i', 'listen__fill'); track.append(fill);
  /* полоса едет непрерывно: каждый кадр со скоростью, при которой она подойдет к концу как раз к ожидаемому концу звука.
     dur — ожидаемая длительность (измеренная раньше или оценка); события «началось слово» уточняют ее, поэтому полоса
     может ускориться или замедлиться, но не встает и не прыгает. Событие конца речи браузер присылает с задержкой
     после того, как звук стих, поэтому полоса его не ждет: к концу звука она уже полная. heard — когда, по последнему
     слову, звук кончился; это время запоминается как длительность фразы для следующего прослушивания */
  /* utter — текущий запуск: события запусков, которые уже остановлены или закончились, ни на что не влияют */
  let frame = 0, hold = null, t0 = 0, last = 0, share = 0, dur = 0, heard = 0, ended = false, utter = null;
  const paint = () => fill.style.setProperty('--p', share);
  /* запись: файл загружается при первом нажатии. Полоса идет за позицией самого звука (currentTime), а не по часам:
     на телефоне звук начинается заметно позже события 'playing' (устройство вывода включается не сразу, особенно при
     первом запуске), и полоса по часам доходила до конца и останавливала запись раньше, чем та успевала зазвучать.
     Конец — по событию 'ended' (тишина до и после голоса из файлов вырезана при генерации) */
  const file = AUDIO[text];
  let audio = null;
  const finishAudio = () => {
    if (ended || speaking !== player) return;
    speaking = null;
    cancelAnimationFrame(frame); frame = 0;
    share = 1; paint(); ended = true;
    hold = setTimeout(player.idle, 300);
  };
  const stepAudio = () => {
    if (audio.duration) { share = Math.max(share, audio.currentTime / audio.duration); paint(); }
    frame = requestAnimationFrame(stepAudio);
  };
  const playAudio = () => {
    if (!audio) {
      audio = new Audio(`audio/${file}.mp3`);
      audio.addEventListener('playing', () => { if (speaking === player && !frame) frame = requestAnimationFrame(stepAudio); });
      audio.addEventListener('ended', finishAudio);
      /* файл не загрузился (нет сети) — плеер возвращается в покой */
      audio.addEventListener('error', () => { if (speaking === player) speaking = null; player.idle(); });
    }
    /* перемотка — только у уже загруженного файла: до загрузки он и так начнется с начала */
    if (audio.readyState) audio.currentTime = 0;
    /* AbortError — запуск прерван остановкой, это не ошибка; любой другой отказ (браузер не дал играть) — в покой,
       чтобы плеер не оставался «включенным» без звука */
    audio.play().catch(e => {
      if (e.name !== 'AbortError' && speaking === player) { speaking = null; player.idle(); }
    });
  };
  const step = now => {
    const dt = (now - last) / 1000, sec = (now - t0) / 1000; last = now;
    /* звук по последнему слову уже кончился — плеер завершается, не дожидаясь запоздалого события конца
       (speaking = null, чтобы оно потом ничего не делало) */
    if (!ended && heard && sec > heard + .15) { if (speaking === player) speaking = null; ended = true; utter = null; rememberSec(text, heard); }
    if (ended) share += (1 - share) * Math.min(1, dt * 12);
    else share += (1 - share) * Math.min(1, dt / Math.max(.05, dur - sec));
    if (ended && share > .995) {
      share = 1; paint(); frame = 0;
      /* полная полоса держится мгновение, затем плеер возвращается в покой */
      hold = setTimeout(player.idle, 300);
      return;
    }
    paint();
    frame = requestAnimationFrame(step);
  };
  const player = {
    /* покой: полоса пустая */
    idle() {
      cancelAnimationFrame(frame); clearTimeout(hold); frame = 0; hold = null;
      share = t0 = heard = 0; ended = false; utter = null; paint();
      if (audio) audio.pause();
      btn.innerHTML = PLAY_ICON; btn.setAttribute('aria-label', `Прослушать ${label}`);
      box.classList.remove('listen__player--on');
    },
    play() {
      stopSpeech();
      player.idle();
      speaking = player;
      btn.innerHTML = STOP_ICON; btn.setAttribute('aria-label', `Остановить ${label}`);
      box.classList.add('listen__player--on');
      if (file) return playAudio();
      const u = new SpeechSynthesisUtterance(text), voice = enVoice();
      utter = u;
      u.lang = voice ? voice.lang : 'en-GB'; if (voice) u.voice = voice; u.rate = SPEECH_RATE;
      u.onstart = () => {
        if (utter !== u) return;
        t0 = last = performance.now(); dur = speechSec(text); frame = requestAnimationFrame(step);
      };
      /* темп — секунд на букву уже сказанного (знаки препинания и пробелы не звучат); оставшиеся буквы в этом темпе дают
         конец звука. Оценка смешивается с прежней, чтобы скорость менялась мягко; на последнем слове берется как есть */
      u.onboundary = e => {
        if (utter !== u || e.name !== 'word' || !t0) return;
        const sec = (performance.now() - t0) / 1000, said = letters(text.slice(0, e.charIndex)), rest = text.slice(e.charIndex);
        if (sec < .3 || !said) return;
        const end = sec + letters(rest) * sec / said;
        if (/\s\S/.test(rest.trim())) dur = (dur + end) / 2; else dur = heard = end;
      };
      u.onend = () => {
        if (utter !== u) return;
        if (t0) rememberSec(text, heard || (performance.now() - t0) / 1000);
        if (speaking === player) speaking = null;
        ended = true; utter = null;
        if (!frame) { last = performance.now(); frame = requestAnimationFrame(step); }
      };
      u.onerror = () => { if (utter !== u) return; if (speaking === player) speaking = null; player.idle(); };
      speechSynthesis.speak(u);
    }
  };
  /* остановить можно и во время дотягивания полосы после конца речи */
  const toggle = () => { if (speaking === player || ended) { stopSpeech(); player.idle(); } else player.play(); };
  btn.addEventListener('click', toggle);
  if (!file && !speech) { btn.disabled = true; btn.title = 'Этот браузер не умеет озвучивать текст'; }
  player.idle();
  box.append(btn, track);
  return box;
}

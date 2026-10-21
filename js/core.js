/* ================= Приложение ================= */
const LEVELS = { A1: 'Начальный', A2: 'Элементарный', B1: 'Средний', B2: 'Выше среднего', C1: 'Продвинутый', C2: 'Свободное владение' };
const CHAPTERS = window.BOOK.slice().sort((a, b) => a.n - b.n);
const TOPICS = [];
CHAPTERS.forEach(ch => ch.topics.forEach((t, i) => { t.ch = ch; t.num = `${ch.n}.${i + 1}`; TOPICS.push(t); }));
const topicById = Object.fromEntries(TOPICS.map(t => [t.id, t]));
const chapById = Object.fromEntries(CHAPTERS.map(c => ['ch-' + c.id, c]));

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = s => { const sp = el('span'); sp.innerHTML = esc(s).replace(/\(([^)]+)\)/g, '<span class="ex__hint">($1)</span>'); return sp; };

function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function shuffled(arr, seed) { return arr.map((v, i) => ({ v, k: hash(seed + '|' + i + '|' + v) })).sort((a, b) => a.k - b.k).map(o => o.v); }

/* Сравнение ответов без учета регистра, пунктуации, фигурных кавычек и сокращений. */
function norm(s) {
  s = s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/[—–]/g, '-').replace(/[.!?,;:"“”«»]/g, ' ').replace(/\s+-\s+/g, ' ').replace(/\s+/g, ' ').trim();
  s = s.replace(/\bwon't\b/g, 'will not').replace(/\bcan't\b/g, 'cannot').replace(/\bshan't\b/g, 'shall not')
       .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have')
       .replace(/\bcan not\b/g, 'cannot');
  return s.replace(/\s+/g, ' ').trim();
}
/* у 's и 'd по два значения (he's = he is / he has, I'd = I would / I had), поэтому их нельзя свести к одной форме,
   как n't или 'll: обе стороны раскрываются во все прочтения и совпадают, если хоть одно прочтение общее.
   Только после местоимений и вопросительных слов — Tom's / my brother's остаются притяжательными. */
const AMBIGUOUS = /\b(i|you|he|she|it|we|they|that|there|here|what|who|where|when|how|let)'(s|d)\b/;
const READINGS = { s: ['is', 'has'], d: ['would', 'had'] };
function readings(s) {
  const m = s.match(AMBIGUOUS);
  if (!m) return [s];
  const [whole, word, c] = m, at = m.index;
  const subs = word === 'let' ? (c === 's' ? ['let us'] : [whole]) : READINGS[c].map(r => `${word} ${r}`);
  return subs.flatMap(sub => readings(s.slice(0, at) + sub + s.slice(at + whole.length)));
}
const accepts = (answers, value) => {
  const mine = readings(norm(value));
  return answers.split('|').some(a => readings(norm(a)).some(r => mine.includes(r)));
};
const firstAnswer = answers => { const a = answers.split('|')[0]; return a === '-' ? '—' : a; };

/* Единицы счета: одна на пропуск, одна на пункт выбора / перевода. */
const gapAnswers = it => Array.isArray(it[1]) ? it[1] : [it[1]];
function units(ex) {
  if (ex.type === 'text') return ex.answers.length;
  if (ex.type === 'gap') return ex.items.reduce((n, it) => n + gapAnswers(it).length, 0);
  return ex.items.length;
}
/* порядок упражнений на экране: индексы t.ex (по ним хранится прогресс) без поля at идут по порядку, упражнение с at
   встает на это место (номер на экране); новые упражнения дописываются в конец массива, и прогресс старых не сдвигается */
const exOrders = new Map();
function exOrder(t) {
  if (!exOrders.has(t)) {
    const order = t.ex.map((ex, i) => i).filter(i => !t.ex[i].at);
    t.ex.map((ex, i) => i).filter(i => t.ex[i].at).sort((a, b) => t.ex[a].at - t.ex[b].at).forEach(i => order.splice(t.ex[i].at - 1, 0, i));
    exOrders.set(t, order);
  }
  return exOrders.get(t);
}
const exNo = (t, ei) => exOrder(t).indexOf(ei) + 1;

let progress = store.get('gk2-progress', {});
let studied = store.get('gk2-studied', {});
let bookmarks = store.get('gk2-bookmarks', {}); /* id темы → время добавления в избранное */
let notes = store.get('gk2-notes', []); /* «Мои заметки», см. renderNotesPage */
if (!Array.isArray(notes)) notes = [];
let answers = store.get('gk2-answers', {});
let levelFilter = store.get('gk2-level', '');
let route = null;
let viaBookmarks = false; /* открытая тема пришла из списка «Избранное» */

/* доля в целых процентах; 100 только когда сделано все, поэтому 199 из 200 показывает 99, а не округленные 100 */
const pctOf = (s, tot) => !tot ? 0 : s >= tot ? 100 : Math.min(99, Math.round(100 * s / tot));
/* баллы темы: по одному на пропуск или пункт ее упражнений плюс один за правило, отмеченное изученным, —
   так что с неизученным правилом ни тема, ни ее раздел или уровень не доходят до 100% */
function topicStats(t) {
  const p = progress[t.id] || {};
  let s = studied[t.id] ? 1 : 0, tot = 1, tried = !!studied[t.id];
  /* min(): счет, сохраненный до того, как в упражнении убрали пропуск, не должен выталкивать тему за 100% */
  t.ex.forEach((ex, i) => { tot += units(ex); if (p[i]) { s += Math.min(p[i][0], units(ex)); tried = true; } });
  return { s, tot, tried, pct: pctOf(s, tot) };
}
function chapterStats(ch, level) {
  let s = 0, tot = 0, tried = false;
  ch.topics.filter(t => !level || t.level === level).forEach(t => { const r = topicStats(t); s += r.s; tot += r.tot; tried = tried || r.tried; });
  return { s, tot, tried, pct: pctOf(s, tot) };
}

/* Прогресс книги: каждое правило — один балл (если отмечено изученным), каждое упражнение — до одного балла по доле верных ответов
   в последней проверке. 100% только когда все правила изучены и все упражнения решены без ошибок. */
function bookProgress() {
  let got = 0, rules = 0, exs = 0;
  TOPICS.forEach(t => {
    rules++; if (studied[t.id]) got++;
    t.ex.forEach((ex, i) => { exs++; const r = progress[t.id] && progress[t.id][i]; if (r) got += r[0] / r[1]; });
  });
  const total = rules + exs;
  return { share: 100 * got / total, pct: Math.floor(100 * got / total), full: got === total, rules, exs, total };
}

/* блок прогресса, показываемый в раскрывающемся «Прогрессе» */
function overallBox() {
  let total = 0, perfect = 0;
  TOPICS.forEach(t => t.ex.forEach((ex, i) => {
    total++;
    const r = progress[t.id] && progress[t.id][i];
    if (r && r[0] === r[1]) perfect++;
  }));
  /* «Выполнено» = «Без ошибок» + «С ошибками»: каждое проверенное упражнение — одно или другое */
  const wrong = mistakeCount();
  const book = bookProgress();
  const box = el('div', 'overall');
  box.innerHTML = `<div class="overall__row"><span>Правил изучено</span><b class="overall__value">${TOPICS.filter(t => studied[t.id]).length} из ${TOPICS.length}</b></div>
    <div class="overall__row"><span>Выполнено упражнений</span><b class="overall__value">${perfect + wrong} из ${total}</b></div>
    <div class="overall__row"><span>Без ошибок</span><b class="overall__value">${perfect}</b></div>
    <button class="overall__row overall__mistakes" type="button" data-go="mistakes"${route === 'mistakes' ? ' aria-current="page"' : ''}>
      <span>С ошибками</span><span class="overall__mistakes-end"><b class="overall__value">${wrong}</b>${arrowHtml('next')}</span></button>
    <div class="overall__book">
      <div class="overall__row"><span>Прохождение тренажера</span></div>
      <div class="bar bar--labeled" style="--p:${book.share}%"><i class="bar__fill${book.full ? ' bar__fill--full' : ''}" style="width:${book.share}%"></i><span class="bar__label">${book.pct}%</span><span class="bar__label bar__label--on-fill" aria-hidden="true">${book.pct}%</span></div>
      <p class="overall__note">${foldNote('book')}</p>
    </div>
    <div class="overall__file">
      <div class="overall__row"><span>Резервная копия</span></div>
      <div class="overall__file-btns">
        <button class="overall__file-btn" type="button" data-file="export" title="Сохранить прогресс в файл"${saveLocked() ? ' disabled' : ''}>Сохранить</button>
        <button class="overall__file-btn" type="button" data-file="import" title="Загрузить прогресс из файла">Загрузить</button>
      </div>
      <p class="overall__note${fileMsg ? ' overall__note--' + fileMsg[0] : ''}" role="status">${fileMsg ? esc(fileMsg[1]) : foldNote('backup')}</p>
    </div>`;
  return box;
}

/* свернутые заметки в блоке «Прогресс». Свернутый текст обрывается после нескольких угасающих слов, сразу за ними «Показать еще»
   (как в постах ВКонтакте); открытый — весь текст со «Скрыть». Открыт или нет, помнится только пока открыта страница
   (перерисовки сохраняют, перезагрузка начинает свернутым). Каждая заметка: [видимый текст, угасающие слова, остальное] */
const FOLD_NOTES = {
  book: ['', 'Учитываются изученные', ' правила и верные ответы в упражнениях. 100% — все изучено и решено без ошибок.'],
  backup: ['Прогресс хранится только в этом браузере. ', 'Чтобы перенести прогресс',
    ' в другой браузер или на другое устройство, сохраните данные в файл — для этого нажмите кнопку «Сохранить». На новом устройстве нажмите «Загрузить» и выберите сохраненный файл.'],
};
const notesOpen = {};
function foldNote(key) {
  const [head, fade, tail] = FOLD_NOTES[key], open = !!notesOpen[key];
  const btn = `<button class="overall__more-btn" type="button" data-fold-note="${key}" aria-expanded="${open}">${open ? 'Скрыть' : 'Показать еще'}</button>`;
  /* свернуто: угасающие слова и кнопка переносятся вместе, поэтому кнопка всегда стоит сразу за ними */
  return head + (open ? `${fade}${tail} ${btn}` : `<span class="overall__fade-row"><span class="overall__fade">${fade}</span> ${btn}</span>`);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-fold-note]');
  if (!b) return;
  const key = b.dataset.foldNote, note = b.closest('.overall__note');
  notesOpen[key] = !notesOpen[key];
  note.innerHTML = foldNote(key);
  $('[data-fold-note]', note).focus();
});

/* кнопка «Прогресс»: полоса и процент прогресса книги, число упражнений с ошибками */
function renderOverall() {
  const book = bookProgress(), wrong = mistakeCount();
  const b = $('#progBtn');
  b.innerHTML = `<span>Прогресс</span><span class="bar bar--thin side__stat-bar" aria-hidden="true">${barFill(book.full ? 100 : Math.min(book.share, 99))}</span>` +
    `<b class="side__stat-pct">${book.pct}%</b>` + (wrong ? `<span class="side__badge" title="С ошибками: ${wrong}">${wrong}</span>` : '') + FOLD_ARROW;
  b.setAttribute('aria-label', `Прогресс: тренажер пройден на ${book.pct}%` + (wrong ? `, с ошибками ${wrong}` : ''));
  renderFold('prog');
}

/* порядок «Работы над ошибками»: по уровню A1 → C2, внутри уровня по номеру темы, затем по упражнению */
const mistakeOrder = (t, i) => Object.keys(LEVELS).indexOf(t.level) * 1e6 + TOPICS.indexOf(t) * 1000 + (i == null ? 0 : exNo(t, i));

/* упражнения, у которых последняя проверка ниже полного счета (ошибки или пустые ответы), в порядке mistakeOrder;
   «Заново» сбрасывает проверку, поэтому упражнение уходит из списка, пока его не проверят снова */
function mistakes() {
  const out = [];
  TOPICS.forEach(t => {
    const exs = exOrder(t).map(i => [i, progress[t.id] && progress[t.id][i]]).filter(([, r]) => r && r[0] < r[1]);
    if (exs.length) out.push({ t, exs });
  });
  return out.sort((a, b) => mistakeOrder(a.t) - mistakeOrder(b.t));
}
const mistakeCount = () => mistakes().reduce((n, m) => n + m.exs.length, 0);

/* фильтр уровня «Работы над ошибками»: свой, не тот, что в меню (тот следует за каждой открытой темой);
   сохраненный уровень, в котором ошибок не осталось, сменяется на «Все» */
let mistakesLevel = store.get('gk2-mistakes-level', '');
let mistakesPage = 0; /* открытая страница списка, только пока сайт открыт */
function mistakesFilter() {
  return mistakesLevel && mistakes().some(m => m.t.level === mistakesLevel) ? mistakesLevel : '';
}

/* упражнение после (topic, ei) в «С ошибками» в пределах фильтра уровня страницы, по кругу к началу; null, если оно единственное */
function nextMistake(topic, ei) {
  const cur = mistakeOrder(topic, ei);
  const level = mistakesFilter();
  const all = mistakes().filter(m => !level || m.t.level === level).flatMap(({ t, exs }) => exs.map(([i]) => ({ t, i, at: mistakeOrder(t, i) }))).filter(m => m.at !== cur);
  return all.find(m => m.at > cur) || all[0] || null;
}

/* упражнение, открытое из «Работы над ошибками», получает панель для возврата к списку и перехода к следующему */
let mistakeFocus = null, pendingFocus = null;

/* открыть тему и показать одно из ее упражнений */
function openExercise(topicId, ei) {
  pendingFocus = { t: topicId, ei };
  go(topicId);
  const box = $(`#main .ex[data-ei="${ei}"]`);
  if (!box) return;
  /* прыжок, а не плавная прокрутка: новая страница все равно открывается, а мигание показывает, куда смотреть */
  box.scrollIntoView({ block: 'start' });
  box.classList.remove('ex--flash'); void box.offsetWidth; box.classList.add('ex--flash');
}

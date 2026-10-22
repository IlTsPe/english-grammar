/* ---------- Аккордеоны: «Прогресс» и «Избранное» ---------- */
/* каждый открывается сам по себе; какие открыты, запоминается (gk2-folds) */
const FOLD_ARROW = '<svg class="side__fold-arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5 7.5 6 4 9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let folds = store.get('gk2-folds', {});
const FOLD = { prog: ['#progBtn', '#progFold', '#progBody'], bm: ['#bmBtn', '#bmFold', '#bmBody'] };
/* содержимое рисуется, пока блок открыт, и обновляется при каждом изменении прогресса и избранного */
function renderFold(kind) {
  if (folds[kind]) $(FOLD[kind][2]).replaceChildren(kind === 'prog' ? overallBox() : bookmarksBox());
}
/* animate — клик по кнопке (при загрузке блок сразу в своем состоянии) */
function setFold(kind, open, animate = false) {
  folds[kind] = open; store.set('gk2-folds', folds);
  const [btn, box] = FOLD[kind];
  const apply = () => {
    $(box).classList.toggle('side__fold--open', open);
    $(box).inert = !open;
    $(btn).setAttribute('aria-expanded', String(open));
  };
  if (foldAnim[kind]) foldAnim[kind]();
  if (open) renderFold(kind);
  if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) { apply(); return; }
  if (open) apply();
  slideFold(kind, $(box), open, open ? null : apply);
}
/* раскрытие без анимации раскладки (на телефоне она шла рывками): блок сразу получает свою высоту, а дальше только сдвиги —
   содержимое выезжает из-под кнопки (его обрезает .side__fold-clip), все ниже в меню съезжает вместе с ним.
   Закрытие — то же в обратную сторону, высота меняется в конце (done). foldAnim[kind] — досрочно завершить прошлую анимацию */
const foldAnim = {};
function slideFold(kind, fold, open, done) {
  const content = fold.querySelector('.side__fold-clip > *');
  const h = fold.offsetHeight;
  if (!content || !h) { if (done) done(); return; }
  /* все, что ниже блока: следующие соседи его обертки и ее предков до самого меню */
  const below = [];
  for (let n = fold.parentElement; n && !n.matches('.side'); n = n.parentElement)
    for (let sib = n.nextElementSibling; sib; sib = sib.nextElementSibling) below.push(sib);
  const shut = `translateY(${-h}px)`, opts = { duration: 180, easing: 'cubic-bezier(.25, .7, .35, 1)' };
  const frames = open ? [shut, 'none'] : ['none', shut];
  const anims = [content.animate({ transform: frames, opacity: open ? [0, 1] : [1, 0] }, opts),
    ...below.map(b => b.animate({ transform: frames }, opts))];
  const finish = () => { delete foldAnim[kind]; anims.forEach(a => a.cancel()); if (done) done(); };
  foldAnim[kind] = finish;
  anims[0].onfinish = () => { if (foldAnim[kind] === finish) finish(); };
}
/* весь список разделов сворачивается под «Разделы тренажера» (gk2-toc-folded); при поиске он виден всегда */
let tocFolded = store.get('gk2-toc-folded', false);
function syncTocFold() {
  const open = !tocFolded || !!$('#search').value.trim();
  $('#tocFold').classList.toggle('side__fold--open', open);
  $('#tocFold').inert = !open;
  $('#tocToggle').setAttribute('aria-expanded', String(open));
}
/* кнопки с data-go: ссылки на страницы в меню и шапке и ссылки из разметки (блок прогресса) */
document.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go); });

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
}

/* ---------- Прогресс страницы: вся книга в «Содержании», текущий раздел на остальных ---------- */
function progressBlock(ch, curLevel) {
  const box = el('div', 'page-prog'); box.id = 'pageProg';
  box.dataset.scope = ch ? ch.id : '';
  box.dataset.level = curLevel || '';
  fillProgress(box);
  return box;
}
function fillProgress(box) {
  const ch = box.dataset.scope ? CHAPTERS.find(c => c.id === box.dataset.scope) : null;
  const topics = ch ? ch.topics : TOPICS;
  let s = 0, tot = 0, done = 0, exn = 0;
  topics.forEach(t => {
    const st = topicStats(t); s += st.s; tot += st.tot;
    t.ex.forEach((e, i) => { exn++; if (progress[t.id] && progress[t.id][i]) done++; });
  });
  /* вся книга: та же цифра, что в меню; раздел — баллы его тем (включая изученные правила) */
  const pct = ch ? pctOf(s, tot) : bookProgress().pct;
  /* разбивка по уровням, если охват больше одного уровня; уровень открытой темы залит */
  const levels = Object.keys(LEVELS).filter(l => topics.some(t => t.level === l));
  const rows = levels.length > 1 ? levels.map(l => {
    let ls = 0, lt = 0;
    topics.filter(t => t.level === l).forEach(t => { const st = topicStats(t); ls += st.s; lt += st.tot; });
    const p = pctOf(ls, lt);
    return `<div class="page-prog__level" title="${LEVELS[l]}"><span class="lvl-tag page-prog__tag${l === box.dataset.level ? ' lvl-tag--filled' : ''}">${l}</span><span class="bar bar--thin">${barFill(p)}</span>${pctLabel(p, 'page-prog__value')}</div>`;
  }).join('') : '';
  box.innerHTML = `<div class="page-prog__row"><span>${ch ? `Раздел ${ch.n} пройден на` : 'Тренажер пройден на'}</span>${pctLabel(pct, 'page-prog__value')}</div>
    <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">${barFill(pct)}</div>
    <div class="page-prog__row"><span>Упражнений выполнено</span><b class="page-prog__value">${done} из ${exn}</b></div>` +
    (rows ? `<div class="page-prog__levels" aria-label="Прогресс по уровням">${rows}</div>` : '');
}

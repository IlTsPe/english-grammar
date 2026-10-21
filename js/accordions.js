/* ---------- Аккордеоны: «Прогресс» и «Избранное» ---------- */
/* каждый открывается сам по себе; какие открыты, запоминается (gk2-folds) */
const FOLD_ARROW = '<svg class="side__fold-arrow" viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5 7.5 6 4 9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let folds = store.get('gk2-folds', {});
const FOLD = { prog: ['#progBtn', '#progFold', '#progBody'], bm: ['#bmBtn', '#bmFold', '#bmBody'] };
/* содержимое рисуется, пока блок открыт, и обновляется при каждом изменении прогресса и избранного */
function renderFold(kind) {
  if (folds[kind]) $(FOLD[kind][2]).replaceChildren(kind === 'prog' ? overallBox() : bookmarksBox());
}
function setFold(kind, open) {
  folds[kind] = open; store.set('gk2-folds', folds);
  const [btn, box] = FOLD[kind];
  renderFold(kind);
  $(box).classList.toggle('side__fold--open', open);
  $(box).inert = !open;
  $(btn).setAttribute('aria-expanded', String(open));
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

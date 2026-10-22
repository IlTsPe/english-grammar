/* ---------- Боковое меню ---------- */
/* прогресс для выбранного фильтра уровня: набранные баллы / все баллы; скрыт для «Все» (его показывает блок .overall) */
function renderLevelProgress() {
  const box = $('#lvlProg');
  box.hidden = !levelFilter;
  if (!levelFilter) return;
  const topics = TOPICS.filter(t => t.level === levelFilter);
  let s = 0, tot = 0;
  topics.forEach(t => { const r = topicStats(t); s += r.s; tot += r.tot; });
  const pct = pctOf(s, tot);
  box.innerHTML = `<div class="lvl-prog__row"><span>Уровень <span class="lvl-tag lvl-tag--sm" title="${LEVELS[levelFilter]}">${levelFilter}</span> пройден на</span>${pctLabel(pct, 'lvl-prog__value')}</div>
    <div class="bar bar--thin">${barFill(pct)}</div>`;
}

function renderLevels() {
  const box = $('#levelChips'); box.innerHTML = '';
  [['', 'Все'], ...Object.keys(LEVELS).map(l => [l, l])].forEach(([v, label]) => {
    const b = el('button', 'level-chip', label); b.type = 'button';
    b.setAttribute('aria-pressed', String(levelFilter === v));
    b.dataset.level = v;
    b.addEventListener('click', () => { levelFilter = v; store.set('gk2-level', v); renderLevels(); renderToc(); });
    box.append(b);
  });
  fillLevelChips();
}

/* каждый чип заливается зеленым снизу до доли набранных баллов своего уровня (для «Все» — всей книги);
   на 100% (все правила изучены и все упражнения всех тем решены полностью) он получает еще и --done */
function fillLevelChips() {
  document.querySelectorAll('#levelChips .level-chip').forEach(b => {
    const level = b.dataset.level;
    let s = 0, tot = 0;
    TOPICS.filter(t => !level || t.level === level).forEach(t => { const r = topicStats(t); s += r.s; tot += r.tot; });
    const pct = tot ? 100 * s / tot : 0;
    if (level) b.style.setProperty('--lvl', pct + '%'); /* у «Все» жидкости нет */
    b.classList.toggle('level-chip--done', tot > 0 && s === tot);
    b.title = `${level ? LEVELS[level] : 'Весь тренажер'} · пройдено ${pctOf(s, tot)}%`;
  });
}

/* Аккордеон: одновременно открыт один раздел (хранится в gk2-open-chap); поиск открывает все совпадения. */
let openChap = store.get('gk2-open-chap', null);
let justToggled = null;
function setOpenChap(id) { openChap = id; store.set('gk2-open-chap', id); }

/* искры вокруг ленточки «В избранном»: смещение от ее центра (px), задержка (s), точка вместо плюса */
/* ленточка стоит на 6px правее текста, поэтому левые искры — только над и под ним */
const BM_SPARKS = [[13, -9, .15, 0], [-8, -13, .25, 1], [12, 8, .35, 1], [-1, -15, .45, 1], [16, -1, .55, 0], [-7, 14, .65, 0], [5, 15, .7, 1]];
/* символы на барабане «Правило изучено»; он останавливается на последнем */
const SLOT_REEL = ['★', '✗', '?', '♦', '✓', '•', '✗', '★', '?', '✓'];
/* стрелка, которая сдвигается в свою сторону, пока на ее кнопку наведено (см. .arrow). Рисунок, а не символ «→»: в шрифтах сайта
   его нет, и на Android стрелка из системного шрифта стояла ниже середины строки; «←» — та же, отраженная */
const ARROW_SVG = '<svg class="arrow__icon" viewBox="0 0 14 10"><path d="M1 5h12M9.5 2 12.5 5 9.5 8"/></svg>';
const arrowHtml = (dir, cls = '') => `<span class="arrow arrow--${dir}${cls ? ' ' + cls : ''}" aria-hidden="true">${ARROW_SVG}</span>`;
/* плашка прогресса: на 100% зеленая обводка, ниже — заливка цветом по диапазону; cls добавляет класс элемента родителя */
const pill = (pct, cls = '') => `<span class="pill pill--${pct >= 100 ? 'good' : pct > 60 ? 'high' : pct > 30 ? 'mid' : 'low'}${cls ? ' ' + cls : ''}" style="--p:${pct}%">${pct}%</span>`;
/* заливка полосы прогресса; на 100% становится зеленой */
const barFill = pct => `<i class="bar__fill${pct >= 100 ? ' bar__fill--full' : ''}" style="width:${pct}%"></i>`;
/* процент рядом с полосой; на 100% становится зеленым */
const pctLabel = (pct, cls = '', tag = 'b') => `<${tag} class="pct${pct >= 100 ? ' pct--full' : ''}${cls ? ' ' + cls : ''}">${pct}%</${tag}>`;

function setChapOpen(box, open) {
  box.classList.toggle('chap--open', open);
  box.querySelector('.chap__btn').setAttribute('aria-expanded', String(open));
  box.querySelector('.chap__body').inert = !open;
}

/* наведению нужно настоящее движение мыши: перерисовка или прокрутка ставят под неподвижный курсор новые пункты, и браузер подсвечивал их,
   будто на них навели. Пока у <html> есть .pointer-still, правила наведения выключены (они ограничены :where(:root:not(.pointer-still)));
   класс ставится при загрузке и при каждой перерисовке содержания и снимается первым движением мыши. Касание его никогда не снимает */
let pointerAt = '';
function holdHover() { document.documentElement.classList.add('pointer-still'); }
document.addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse') return;
  const at = e.clientX + ',' + e.clientY;
  if (at === pointerAt) return; /* собственное движение браузера после изменения раскладки, с теми же координатами */
  pointerAt = at;
  document.documentElement.classList.remove('pointer-still');
});

function renderToc() {
  holdHover();
  const q = $('#search').value.trim().toLowerCase();
  const filtering = !!(q || levelFilter);
  if (isAbout(route)) $('#infoBtn').setAttribute('aria-current', 'page'); else $('#infoBtn').removeAttribute('aria-current');
  if (route === 'contents') $('#tocContents').setAttribute('aria-current', 'page'); else $('#tocContents').removeAttribute('aria-current');
  document.querySelectorAll('.page-link').forEach(b => b.toggleAttribute('aria-current', b.dataset.go === 'about' ? isAbout(route) : route === b.dataset.go));
  renderLevelProgress();
  fillLevelChips();
  const list = $('#tocList'); list.innerHTML = '';
  let shown = 0;
  CHAPTERS.forEach(ch => {
    const match = ch.topics.filter(t => (!levelFilter || t.level === levelFilter) &&
      (!q || (t.title + ' ' + t.sub + ' ' + ch.title).toLowerCase().includes(q)));
    if (filtering && !match.length) return;
    const open = q ? true : ch.id === openChap;
    /* раздел, открытый переходом, сначала рисуется закрытым, затем раскрывается в следующем кадре */
    const animateIn = open && justToggled === ch.id;
    /* раздел открытой страницы (сам раздел или одна из его тем); тема, открытая из «Избранного», отмечается только в том списке */
    const current = !viaBookmarks && (route === 'ch-' + ch.id || (topicById[route] && topicById[route].ch === ch));
    const box = el('div', current ? 'chap chap--current' : 'chap');
    const cb = el('button', 'chap__btn'); cb.type = 'button';
    if (current) cb.setAttribute('aria-current', 'location');
    /* плашка считает только выбранный уровень и появляется, когда начата тема этого уровня
       (если начата только на другом уровне, она показывала непонятные 0%) */
    const cs = chapterStats(ch, levelFilter);
    const lv = [...new Set(ch.topics.map(t => t.level))].sort();
    cb.innerHTML = `<span class="chap__num">${ch.n}</span><span>${esc(ch.title)}<small class="chap__meta">${ch.topics.length} ${plural(ch.topics.length, 'тема', 'темы', 'тем')}</small>` +
      `<span class="chap__levels" aria-label="Уровни">${lv.map(l => `<span class="lvl-tag lvl-tag--sm" title="${LEVELS[l]}">${l}</span>`).join('')}</span></span>` +
      `<span class="chap__end">${cs.tried ? pill(cs.pct) : ''}` +
      '<span class="chap__arrow" aria-hidden="true"><svg class="chap__arrow-icon" viewBox="0 0 12 12" width="12" height="12"><path d="M4 2.5 7.5 6 4 9.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></span>';
    /* название раздела только раскрывает и сворачивает его; страница раздела открывается из «Обзора всего раздела» внутри */
    cb.addEventListener('click', () => {
      if (box.classList.contains('chap--open')) { setChapOpen(box, false); if (!q) setOpenChap(null); }
      else if (q) setChapOpen(box, true);
      else { justToggled = ch.id; setOpenChap(ch.id); renderToc(); }
    });
    box.append(cb);
    if (levelFilter && !q && match.length < ch.topics.length) {
      const note = el('small', 'chap__meta', `${match.length} из ${ch.topics.length} ${plural(ch.topics.length, 'темы', 'тем', 'тем')} уровня ${levelFilter}`);
      cb.querySelector('.chap__meta').after(note);
    }
    /* тело рисуется всегда, чтобы анимировать раскрытие и закрытие */
    const body = el('div', 'chap__body');
    const clip = el('div', 'chap__clip');
    const sub = el('div', 'chap__topics');
    const ov = el('button', 'topic-btn topic-btn--overview chap__topic'); ov.type = 'button';
    ov.innerHTML = `<span>Обзор всего раздела</span>${arrowHtml('next', 'topic-btn__arrow')}`;
    if (route === 'ch-' + ch.id) ov.setAttribute('aria-current', 'page');
    ov.addEventListener('click', () => go('ch-' + ch.id));
    sub.append(ov);
    (filtering ? match : ch.topics).forEach(t => { const b = topicButton(t); b.classList.add('chap__topic'); sub.append(b); });
    clip.append(sub); body.append(clip); box.append(body);
    setChapOpen(box, open && !animateIn);
    if (animateIn) requestAnimationFrame(() => requestAnimationFrame(() => setChapOpen(box, true)));
    shown++;
    list.append(box);
  });
  justToggled = null;
  $('#tocToggle .toc__label').textContent = levelFilter ? `Разделы уровня ${levelFilter}` : 'Разделы тренажера';
  $('#tocCount').textContent = shown || '';
  syncTocFold();
  if (!shown) list.innerHTML = '<p class="toc__empty">Ничего не нашлось. Попробуйте «past», «артикль» или снимите фильтр уровня.</p>';
  renderBookmarks();
  renderNotes();
}

/* ленточка избранного; cls добавляет класс элемента того места, где она стоит */
const bmIcon = (cls = '') => `<svg class="bm-icon${cls ? ' ' + cls : ''}" viewBox="0 0 11 14" aria-hidden="true"><path d="M1 1.5A1 1 0 0 1 2 .5h7a1 1 0 0 1 1 1V13L5.5 10 1 13z" fill="currentColor"/></svg>`;

function topicButton(t, fromBookmarks = false) {
  const b = el('button', fromBookmarks ? 'topic-btn bookmarks__topic' : 'topic-btn'); b.type = 'button';
  /* открытая тема подсвечивается только в том списке, из которого ее открыли: «Избранное» или список содержания */
  if (t.id === route && fromBookmarks === viaBookmarks) b.setAttribute('aria-current', 'page');
  const st = topicStats(t);
  b.innerHTML = `<span>${esc(t.title)}${bookmarks[t.id] ? bmIcon('topic-btn__bm') : ''}<small class="topic-btn__meta">${t.num} · ${t.level}${studied[t.id] ? ' · <span class="topic-btn__studied">правило ✓</span>' : ''}</small></span>` +
    (st.tried ? pill(st.pct, 'topic-btn__pill') : '');
  if (bookmarks[t.id]) b.title = 'В избранном';
  b.addEventListener('click', () => go(t.id, true, true, fromBookmarks));
  return b;
}

/* «Избранное»: темы в избранном в порядке книги, независимо от фильтра уровня и поиска меню;
   свои чипы уровней (только уровни, где есть избранное, gk2-bm-level) сужают список. Становится золотым, пока открытая тема пришла из этого списка. */
let bmLevel = store.get('gk2-bm-level', '');
function bookmarksBox() {
  const marked = TOPICS.filter(t => bookmarks[t.id]);
  const levels = Object.keys(LEVELS).filter(l => marked.some(t => t.level === l));
  const level = levels.includes(bmLevel) ? bmLevel : '';
  const box = el('section', 'bookmarks' + (viaBookmarks && bookmarks[route] ? ' bookmarks--active' : ''));
  box.setAttribute('aria-label', 'Избранное');
  if (levels.length > 1) {
    const bar = el('div', 'bookmarks__levels'); bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Уровень сложности');
    ['', ...levels].forEach(l => {
      const n = l ? marked.filter(t => t.level === l).length : marked.length;
      const b = el('button', 'bookmarks__level', l || 'Все'); b.type = 'button';
      b.title = `${l ? LEVELS[l] : 'Все уровни'} · ${n} ${plural(n, 'тема', 'темы', 'тем')}`;
      b.setAttribute('aria-pressed', String(l === level));
      b.addEventListener('click', () => { bmLevel = l; store.set('gk2-bm-level', l); renderFold('bm'); });
      bar.append(b);
    });
    box.append(bar);
  }
  const list = el('div', 'bookmarks__list');
  marked.filter(t => !level || t.level === level).forEach(t => list.append(topicButton(t, true)));
  if (!marked.length) list.innerHTML = '<p class="bookmarks__empty">Пока пусто. Отметьте тему кнопкой «Добавить в избранное» на ее странице.</p>';
  box.append(list);
  return box;
}
/* кнопка «Избранное»: ленточка и число; золотая, пока открытая тема пришла из списка */
function renderBookmarks() {
  const n = TOPICS.filter(t => bookmarks[t.id]).length;
  const b = $('#bmBtn');
  b.innerHTML = `${bmIcon()}<span>Избранное</span><b class="side__count">${n || ''}</b>` + FOLD_ARROW;
  b.setAttribute('aria-label', `Избранное: ${n}`);
  b.classList.toggle('side__bm--active', viaBookmarks && !!bookmarks[route]);
  renderFold('bm');
}

/* «Мои заметки»: свободные заметки, не привязанные к темам, — [{ id, text, c: создана, at: последняя правка }], новые первыми;
   хранятся в gk2-notes, поэтому попадают в резервную копию */
const searchIcon = () => `<svg class="search-icon" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="7" cy="7" r="4.6"/><path d="M10.4 10.4L14 14"/></svg>`;
const notesIcon = (cls = '') => `<svg class="notes-icon${cls ? ' ' + cls : ''}" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.8 2.7a1.5 1.5 0 0 1 2.1 2.1L5.6 12.1 2.5 13l.9-3.1z"/><path d="M9.6 3.9l2.1 2.1"/></svg>`;
const noteDate = at => new Date(at).toLocaleString('ru-RU', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
/* кнопка меню только ведет на страницу: число и стрелка «→» (не шеврон аккордеона), подсвечена, пока страница открыта */
function renderNotes() {
  const b = $('#notesBtn');
  b.innerHTML = `${notesIcon()}<span>Мои заметки</span><b class="side__count">${notes.length || ''}</b>` + arrowHtml('next', 'topic-btn__arrow side__go');
  b.setAttribute('aria-label', `Мои заметки: ${notes.length}`);
  if (route === 'notes') b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  document.querySelectorAll('.page-link[data-go="notes"]').forEach(h => {
    h.innerHTML = `${notesIcon('action-btn__icon')}<span>${h.dataset.label}</span><b class="page-link__count">${notes.length || ''}</b>`;
    h.setAttribute('aria-label', `Мои заметки: ${notes.length}`);
  });
}
const NOTE_MAX = 255; /* предел длины заметки */
const NOTES_PAGE = 7; /* заметок на странице «Моих заметок» */
const MISTAKES_PAGE = 7; /* тем на странице «Работы над ошибками» */
/* номера страниц в `nav` (скрыт, если страница одна); `pick(k)` открывает страницу k. Стрелки — только где есть куда идти;
   при многих страницах: первая, последняя, текущая с соседями и «…» на месте пропусков (1 … 4 5 6 … 100),
   у края — пять подряд (1 2 3 4 5 … 100) */
function fillPaging(nav, page, count, pick) {
  nav.replaceChildren();
  nav.hidden = count < 2;
  if (count < 2) return;
  const pageBtn = (k, html, label) => {
    const b = el('button', 'paging__btn'); b.type = 'button'; b.innerHTML = html;
    if (label) b.setAttribute('aria-label', label);
    if (k === page && !label) b.setAttribute('aria-current', 'page');
    b.addEventListener('click', () => pick(k));
    nav.append(b);
  };
  if (page > 0) pageBtn(page - 1, arrowHtml('prev'), 'Предыдущая страница');
  const nums = new Set(count <= 7 ? [...Array(count).keys()] : [0, count - 1, page - 1, page, page + 1]);
  if (count > 7 && page <= 3) [1, 2, 3, 4].forEach(k => nums.add(k));
  if (count > 7 && page >= count - 4) [2, 3, 4, 5].forEach(k => nums.add(count - k));
  let prev = -1;
  [...nums].filter(k => k >= 0 && k < count).sort((x, y) => x - y).forEach(k => {
    if (k - prev === 2) pageBtn(prev + 1, String(prev + 2)); /* пропуск в одну страницу показывает эту страницу, а не «…» */
    else if (k - prev > 2) nav.append(el('span', 'paging__gap', '…'));
    pageBtn(k, String(k + 1)); prev = k;
  });
  if (page < count - 1) pageBtn(page + 1, arrowHtml('next'), 'Следующая страница');
}
const saveNotes = () => { store.set('gk2-notes', notes); renderNotes(); };

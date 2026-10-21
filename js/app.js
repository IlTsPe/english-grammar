/* ---------- Маршрутизация ---------- */
/* syncToc = false при загрузке страницы: аккордеон сохраняет свое сохраненное состояние, а не следует за маршрутом */
const PAGES = ['contents', 'mistakes', 'notes', 'about',...ABOUT.map(p => 'about-' + p.id)];
function go(id, scroll = true, syncToc = true, fromBookmarks = false) {
  if (!(PAGES.includes(id) || topicById[id] || chapById[id])) id = 'contents';
  route = id;
  stopSpeech();
  viaBookmarks = fromBookmarks;
  mistakeFocus = pendingFocus; pendingFocus = null;
  const curCh = topicById[id] ? topicById[id].ch : chapById[id];
  /* «Избранное» и список содержания независимы: тема, открытая из избранного, не трогает список содержания (открытый раздел, фильтр уровня) */
  if (syncToc && !fromBookmarks && curCh && curCh.id !== openChap) { justToggled = curCh.id; setOpenChap(curCh.id); }
  const main = $('#main'); main.innerHTML = '';
  const wrap = el('div', 'sheet__inner');
  if (topicById[id]) {
    const t = topicById[id];
    /* чипы уровней следуют за открытым уроком, кроме открытого из «Избранного» */
    if (!fromBookmarks && levelFilter !== t.level) { levelFilter = t.level; store.set('gk2-level', levelFilter); renderLevels(); }
    renderTopic(t, wrap);
  }
  else if (chapById[id]) renderChapter(chapById[id], wrap);
  else if (id === 'mistakes') renderMistakesPage(wrap);
  else if (id === 'notes') renderNotesPage(wrap);
  else if (id === 'about') renderAboutPage(wrap);
  else if (aboutPage(id)) renderAboutTopic(aboutPage(id), wrap);
  else renderContents(wrap);
  main.append(wrap);
  document.documentElement.classList.toggle('page--glow', isAbout(id));
  /* переход на другую страницу добавляет запись в историю, поэтому работают «Назад» / «Вперед» браузера; первая отрисовка и перерисовки той же страницы только заменяют ее */
  try { if (booted && location.hash.slice(1) !== id) history.pushState(null, '', '#' + id); else history.replaceState(null, '', '#' + id); } catch (e) {}
  store.set('gk2-last', id);
  renderToc();
  renderOverall();
  setDrawer(false);
  if (scroll) window.scrollTo(0, 0);
}

$('#tocContents').addEventListener('click', () => go('contents'));
$('#infoBtn').addEventListener('click', () => go('about'));
$('#notesBtn').addEventListener('click', () => go('notes'));
$('#brandLink').addEventListener('click', e => { e.preventDefault(); go('contents'); });

/* Скрыть / показать меню на десктопе; выбор запоминается. */
function setSide(collapsed, focus) {
  $('#app').classList.toggle('app--side-collapsed', collapsed);
  $('#floatTools').hidden = !collapsed;
  $('#sideShow').setAttribute('aria-expanded', String(!collapsed));
  $('#sideHide').setAttribute('aria-expanded', String(!collapsed));
  store.set('gk2-side-collapsed', collapsed);
  if (focus) (collapsed ? $('#sideShow') : $('#sideHide')).focus();
}
$('#sideHide').addEventListener('click', () => setSide(true, true));

/* ---------- Тема ---------- */
let themeTimer;
/* при каждом наведении звезды кнопки темы получают новый случайный порядок, а лучи центрируются по значку */
document.querySelectorAll('.theme-toggle').forEach(b => {
  const shuffle = () => {
    b.querySelectorAll('.theme-toggle__stars i').forEach(s => { s.style.transitionDelay = (Math.random() * .3).toFixed(2) + 's'; });
    /* лучи начинаются из центра видимого значка */
    const icon = [...b.querySelectorAll('svg')].find(s => s.getClientRects().length), r = b.getBoundingClientRect();
    if (icon) { const i = icon.getBoundingClientRect(); b.style.setProperty('--cx', i.left - r.left + i.width / 2 + 'px'); b.style.setProperty('--cy', i.top - r.top + i.height / 2 + 'px'); }
  };
  /* солнце: один оборот за 12 с, пока наведено; при уходе плавно доворачивается до следующего шага в 45°, где восемь лучей выглядят как в покое */
  const sun = b.querySelector('.theme-toggle__sun');
  let spin = null;
  const spinStart = () => {
    /* запускают и наведение, и фокус (клик ставит фокус на кнопку под курсором): вторая анимация потеряла бы первую, и та осталась бы крутиться */
    if (spin || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sun.style.transition = 'none'; sun.style.transform = '';
    spin = sun.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 12000, iterations: Infinity });
  };
  const spinStop = () => {
    if (!spin) return;
    const angle = (spin.currentTime % 12000) / 12000 * 360;
    spin.cancel(); spin = null;
    sun.style.transform = `rotate(${angle}deg)`;
    void sun.getBoundingClientRect();
    sun.style.transition = 'transform .5s ease-out';
    sun.style.transform = `rotate(${Math.ceil(angle / 45) * 45}deg)`;
  };
  b.addEventListener('pointerenter', () => { shuffle(); spinStart(); });
  b.addEventListener('focus', () => { shuffle(); spinStart(); });
  b.addEventListener('pointerleave', spinStop);
  b.addEventListener('blur', spinStop);
});
document.querySelectorAll('.theme-toggle').forEach(b => b.addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  const apply = () => { root.dataset.theme = next; store.set('gk2-theme', next); syncThemeBtn(); };
  if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) { document.startViewTransition(apply); return; }
  root.classList.add('theme-anim');
  apply();
  clearTimeout(themeTimer);
  themeTimer = setTimeout(() => root.classList.remove('theme-anim'), 150);
}));
$('#sideShow').addEventListener('click', () => setSide(false, true));
setSide(!!store.get('gk2-side-collapsed', false), false);
$('#search').addEventListener('input', renderToc);
/* ---------- Мобильный drawer ---------- */
function setDrawer(open, focus) {
  $('#drawer').classList.toggle('drawer--open', open);
  $('#drawerBackdrop').classList.toggle('drawer-backdrop--open', open);
  document.documentElement.style.overflow = open ? 'hidden' : '';
  $('#menuBtn').setAttribute('aria-expanded', String(open));
  /* кнопка закрытия шириной с «Меню» в шапке, которую она заменяет под пальцем */
  if (open) $('#drawerClose').style.width = $('#menuBtn').getBoundingClientRect().width + 'px'; /* точно, без округления, как у offsetWidth */
  if (focus) (open ? $('#drawerClose') : $('#menuBtn')).focus();
}
$('#menuBtn').addEventListener('click', () => setDrawer(true, true));
$('#drawerClose').addEventListener('click', () => setDrawer(false, true));
$('#drawerBackdrop').addEventListener('click', () => setDrawer(false));
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if ($('#drawer').classList.contains('drawer--open')) setDrawer(false, true);
});
matchMedia('(max-width: 880px)').addEventListener('change', () => setDrawer(false));
/* «Назад» / «Вперед» (popstate) и hash, набранный в адресной строке (hashchange), открывают эту страницу */
/* ссылка «restore», вставленная в открытую вкладку: вернуть собственный адрес страницы и предложить импорт */
const followHash = () => {
  const id = location.hash.slice(1);
  if (id.startsWith(LINK_KEY)) { history.replaceState(null, '', '#' + route); openLink(id); }
  else if (id && id !== route) go(id);
};
window.addEventListener('popstate', followHash);
window.addEventListener('hashchange', followHash);
let booted = false;
renderLevels();
const startId = location.hash.slice(1);
go(startId && (PAGES.includes(startId) || topicById[startId] || chapById[startId]) ? startId : store.get('gk2-last', 'contents'), false, false);
booted = true;
/* открыто по ссылке «restore»: go() уже заменила адрес на собственный адрес страницы */
if (startId.startsWith(LINK_KEY)) openLink(startId);
renderOverall();
$('#tocToggle').insertAdjacentHTML('beforeend', FOLD_ARROW);

/* «Поддержать автора»: банкноты для дождя при наведении, у каждой своя скорость, начало и качание; каждая держится своей полосы
   кнопки, поэтому дождь покрывает ее от края до края, включая углы; при каждом новом падении она получает новое место в полосе,
   качание, наклон и переворот, поэтому дождь никогда не повторяется */
(function () {
  if (!matchMedia('(hover: hover)').matches) return; /* у сенсорных экранов нет наведения — и дождя нет */
  const box = $('#donateBills'), N = 16, rnd = (a, b) => a + Math.random() * (b - a);
  const shuffle = b => {
    b.style.setProperty('--x', (2 + (+b.dataset.slot + Math.random()) * 96 / N).toFixed(1) + '%');
    b.style.setProperty('--sw', rnd(3, 8).toFixed(1) + 'px');
    b.style.setProperty('--r', rnd(10, 40).toFixed(0) + 'deg');
    b.style.setProperty('--fl', rnd(30, 160).toFixed(0) + 'deg');
  };
  /* полосы раздаются в случайном порядке, чтобы соседние по времени не падали рядом */
  const slots = [...Array(N).keys()].sort(() => Math.random() - .5);
  for (let n = 0; n < N; n++) {
    const b = document.createElement('i');
    b.dataset.slot = slots[n];
    b.style.setProperty('--t', rnd(1.6, 2.4).toFixed(2) + 's');
    b.style.setProperty('--d', (n * .13 + rnd(0, .1)).toFixed(2) + 's');
    b.style.setProperty('--s', rnd(.5, .85).toFixed(2) + 's');
    b.style.setProperty('--sd', (-rnd(0, .8)).toFixed(2) + 's');
    shuffle(b); b.append(document.createElement('b')); box.append(b);
  }
  box.addEventListener('animationiteration', e => { if (e.animationName === 'bill-fall') shuffle(e.target); });
})();
$('#tocToggle').addEventListener('click', () => {
  /* во время поиска список принудительно открыт; переключатель тогда очищает поиск и сворачивает список */
  if ($('#search').value.trim()) { $('#search').value = ''; tocFolded = true; }
  else tocFolded = !tocFolded;
  store.set('gk2-toc-folded', tocFolded);
  renderToc();
});
Object.keys(FOLD).forEach(k => { $(FOLD[k][0]).addEventListener('click', () => setFold(k, !folds[k])); setFold(k, !!folds[k]); });

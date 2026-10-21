/* Помощники, которыми файлы данных пишут правила. */
window.BOOK = [];
const T = (head, rows) => {
  const labels = head.map(h => h.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;'));
  return `<div class="rule-table"><table class="rule-table__table"><thead class="rule-table__head"><tr>${head.map(h => `<th class="rule-table__th">${h}</th>`).join('')}</tr></thead>` +
    `<tbody class="rule-table__body">${rows.map(r => `<tr class="rule-table__row">${r.map((c, i) => `<td class="rule-table__cell" data-label="${labels[i] || ''}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
};
const E = list => `<ul class="examples">${list.map(([en, ru]) => `<li class="examples__item"><span class="examples__en">${en}</span><span class="examples__ru">${ru}</span></li>`).join('')}</ul>`;
const N = t => `<div class="note"><div>${t}</div></div>`;
const M = (label, words) => `<div class="markers"><span class="markers__label">${label}</span>${words.map(w => `<span class="markers__word">${w}</span>`).join('')}</div>`;
const F = t => `<div class="formula">${t}</div>`;

/* кнопки темы (ряд на десктопе, плавающие кнопки, мобильная шапка) в HTML пустые и заполняются здесь по одному шаблону:
   звезды и лучи для наведения, луна и солнце, подпись (скрыта CSS у мобильной кнопки только со значком).
   Текст подписи ставит syncThemeBtn сразу после. Код выполняется здесь, сразу после разметки и до загрузки файлов
   данных, поэтому кнопки никогда не видны пустыми или с неверным названием темы */
function themeToggleHtml() {
  const icon = 'action-btn__icon';
  return `<span class="theme-toggle__stars" aria-hidden="true">${'<i></i>'.repeat(8)}</span><span class="theme-toggle__rays" aria-hidden="true"></span>`
    + `<svg class="${icon} theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path class="theme-toggle__moon-body" d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/></svg>`
    + `<svg class="${icon} theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55"/></svg>`
    + '<span class="theme-toggle__label"></span>';
}
document.querySelectorAll('.theme-toggle').forEach(b => { b.innerHTML = themeToggleHtml(); });
syncThemeBtn();
function syncThemeBtn() {
  const dark = document.documentElement.dataset.theme !== 'light';
  /* подпись называет тему, на которую переключает кнопка; кнопка только со значком в мобильной шапке получает ее как aria-label */
  const action = dark ? 'Включить светлую тему' : 'Включить темную тему';
  document.querySelectorAll('.theme-toggle').forEach(b => {
    b.title = action;
    const label = b.querySelector('.theme-toggle__label');
    /* у кнопки мобильной шапки подпись просто «Тема» (data-label), поэтому полное действие она получает еще и как aria-label */
    if (label) label.textContent = b.dataset.label || (dark ? 'Светлая тема' : 'Темная тема');
    if (!label || b.dataset.label) b.setAttribute('aria-label', action);
  });
}

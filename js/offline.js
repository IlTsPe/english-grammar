/* Офлайн-режим: регистрация service worker (sw.js) и блок на странице «Работа без интернета» — состояние основы сайта
   и записей «На слух»: скачать / докачать / удалить. Записи кладутся в тот же кэш, из которого их отдает sw.js */
const AUDIO_CACHE = 'gk-audio', SITE_CACHE = 'gk-site';
/* корень тренажера — <base href> (как ROOT в app.js, который подключается позже) */
const SITE_ROOT = new URL('./', document.baseURI);
const OFFLINE_OK = location.protocol !== 'file:' && 'serviceWorker' in navigator && 'caches' in window;
const audioFiles = () => [...new Set(Object.values(window.AUDIO || {}))].map(f => new URL(`audio/${f}.mp3`, SITE_ROOT).href);
const mb = bytes => `${(bytes / 1048576).toFixed(1).replace('.', ',')} МБ`;
let audioJob = null; /* идет скачивание: { done, total, stop } — переживает уход со страницы и возврат */
let audioFailed = false; /* последнее скачивание прервала ошибка сети */

if (OFFLINE_OK) addEventListener('load', () => navigator.serviceWorker.register(new URL('sw.js', SITE_ROOT).href).catch(() => {}));

/* блок в разметке страницы (ABOUT, id 'offline'): заполняется здесь и перерисовывается при каждом изменении */
async function mountOffline(box) {
  if (!OFFLINE_OK) {
    box.innerHTML = '<p class="offline__row">Офлайн-режим доступен только на сайте: в этом браузере или при открытии файла с диска он не работает.</p>';
    return;
  }
  const site = await caches.open(SITE_CACHE).then(c => c.keys()).then(k => k.length).catch(() => 0);
  const files = audioFiles();
  const saved = new Set(await caches.open(AUDIO_CACHE).then(c => c.keys()).then(k => k.map(r => r.url)).catch(() => []));
  const have = files.filter(f => saved.has(f)).length;
  const usage = await navigator.storage?.estimate?.().then(e => e.usage).catch(() => 0);
  const total = window.AUDIO_BYTES || 0;
  const rows = [];
  rows.push(`<div class="offline__row"><span class="offline__name">Основа сайта</span><span class="offline__state${site ? ' offline__state--ok' : ''}">${site ? 'сохранена' : 'сохраняется при первом заходе'}</span></div>`);
  let state, btns = '';
  if (audioJob) {
    state = `скачивается: ${audioJob.done} из ${audioJob.total}`;
    btns = '<button class="btn" type="button" data-act="stop">Остановить</button>';
  } else if (have === files.length && have) {
    state = `скачаны · ${mb(total)}`;
    btns = '<button class="btn" type="button" data-act="delete">Удалить записи</button>';
  } else if (have) {
    state = `скачано ${have} из ${files.length}`;
    btns = `<button class="btn btn--primary" type="button" data-act="get">Докачать</button><button class="btn" type="button" data-act="delete">Удалить записи</button>`;
  } else {
    state = 'не скачаны';
    btns = `<button class="btn btn--primary" type="button" data-act="get">Скачать записи · ${mb(total)}</button>`;
  }
  rows.push(`<div class="offline__row"><span class="offline__name">Записи «На слух»</span><span class="offline__state${have === files.length && have && !audioJob ? ' offline__state--ok' : ''}${audioJob ? ' offline__state--job' : ''}">${state}</span></div>`);
  if (audioJob) rows.push(`<span class="bar offline__bar"><span class="bar__fill" style="width: ${jobPercent()}%"></span></span>`);
  if (audioFailed && !audioJob) rows.push('<p class="offline__error">Не удалось скачать записи: проверьте подключение к интернету и нажмите «Докачать».</p>');
  rows.push(`<div class="offline__tools">${btns}</div>`);
  if (usage) rows.push(`<p class="offline__usage">Сейчас сайт занимает на устройстве ${mb(usage)}.</p>`);
  box.innerHTML = rows.join('');
  box.onclick = e => {
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'get') getAudio();
    if (act === 'stop') audioJob.stop = true;
    if (act === 'delete') caches.delete(AUDIO_CACHE).then(() => mountOffline(box));
  };
}

/* скачивание по одному файлу; уже скачанные пропускаются. Просим браузер не удалять сохраненное при нехватке места */
async function getAudio() {
  navigator.storage?.persist?.().catch(() => {});
  const cache = await caches.open(AUDIO_CACHE);
  const saved = new Set((await cache.keys()).map(r => r.url));
  const todo = audioFiles().filter(f => !saved.has(f));
  audioJob = { done: 0, total: todo.length, stop: false };
  audioFailed = false;
  /* блок ищется заново: пока идет скачивание, страницу могли перерисовать или уйти с нее */
  const redraw = () => { const b = $('.offline'); if (b) mountOffline(b); };
  redraw();
  for (const url of todo) {
    if (audioJob.stop) break;
    try {
      const r = await fetch(url, { cache: 'no-cache' });
      if (!r.ok) throw new Error(r.status);
      await cache.put(url, r);
    } catch {
      audioFailed = true;
      break;
    }
    audioJob.done++;
    /* по ходу меняются только счетчик и полоса, без перерисовки блока */
    const st = $('.offline__state--job'), fill = $('.offline__bar .bar__fill');
    if (st) st.textContent = `скачивается: ${audioJob.done} из ${audioJob.total}`;
    if (fill) fill.style.width = jobPercent() + '%';
  }
  audioJob = null;
  redraw();
}

const jobPercent = () => Math.round(audioJob.done / audioJob.total * 100);

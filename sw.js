/* Офлайн-режим (service worker; подключает js/app.js, только на сайте — не с диска).
   Основа сайта (CORE: страница, стили, скрипты, темы и упражнения, шрифты, иконки) сохраняется при первом заходе сама.
   Порядок «сначала сеть»: с интернетом всегда свежая версия (ответ сети заодно обновляет сохраненную копию), без сети или
   при долгом ответе — сохраненная копия. Поэтому после выкладки новой версии ничего обновлять вручную не нужно.
   Записи «На слух» (audio/*.mp3) сюда не входят: их скачивает и удаляет пользователь на странице «Работа без интернета»
   (js/offline.js, кэш AUDIO_CACHE); здесь они только отдаются из сохраненных, если скачаны. */
const SITE_CACHE = 'gk-site', AUDIO_CACHE = 'gk-audio';
const WAIT = 3000; /* мс: столько ждем сеть, если есть сохраненная копия */

/* список основы — пишет make_pages.py (папка tools рядом с сайтом) по файлам сайта; вручную не править.
   Новая версия списка меняет этот файл, и браузер переустанавливает service worker */
// CORE-START
const CORE = [
  './',
  '404.html',
  'manifest.webmanifest',
  'style.css',
  'audio/index.js',
  'fonts/fonts.css',
  'fonts/golos-text-normal-400-cyrillic-ext.woff2',
  'fonts/golos-text-normal-400-cyrillic.woff2',
  'fonts/golos-text-normal-400-latin-ext.woff2',
  'fonts/golos-text-normal-400-latin.woff2',
  'fonts/jetbrains-mono-normal-500-cyrillic-ext.woff2',
  'fonts/jetbrains-mono-normal-500-cyrillic.woff2',
  'fonts/jetbrains-mono-normal-500-latin-ext.woff2',
  'fonts/jetbrains-mono-normal-500-latin.woff2',
  'fonts/literata-italic-400-cyrillic-ext.woff2',
  'fonts/literata-italic-400-cyrillic.woff2',
  'fonts/literata-italic-400-latin-ext.woff2',
  'fonts/literata-italic-400-latin.woff2',
  'fonts/literata-normal-400-cyrillic-ext.woff2',
  'fonts/literata-normal-400-cyrillic.woff2',
  'fonts/literata-normal-400-latin-ext.woff2',
  'fonts/literata-normal-400-latin.woff2',
  'fonts/unbounded-normal-600-cyrillic-ext.woff2',
  'fonts/unbounded-normal-600-cyrillic.woff2',
  'fonts/unbounded-normal-600-latin-ext.woff2',
  'fonts/unbounded-normal-600-latin.woff2',
  'js/accordions.js',
  'js/app.js',
  'js/backup.js',
  'js/core.js',
  'js/exercises.js',
  'js/head.js',
  'js/helpers.js',
  'js/listen.js',
  'js/menu.js',
  'js/offline.js',
  'js/pages.js',
  'data/01-articles.js',
  'data/02-nouns.js',
  'data/03-pronouns.js',
  'data/04-quantifiers.js',
  'data/05-adjectives.js',
  'data/06-prepositions.js',
  'data/07-tenses.js',
  'data/08-passive.js',
  'data/09-reported.js',
  'data/10-infinitive.js',
  'data/11-participle.js',
  'data/12-gerund.js',
  'data/13-ing-forms.js',
  'data/14-complex-object.js',
  'data/15-complex-subject.js',
  'data/16-conditionals.js',
  'data/17-modals.js',
  'data/18-tests.js',
  'data/19-extra.js',
  'favicon/apple-touch-icon.png',
  'favicon/favicon-192.png',
  'favicon/favicon-512.png',
  'favicon/favicon-maskable-512.png',
  'favicon/favicon.svg'
];
// CORE-END

const ROOT = new URL('./', self.location).href;
const abs = url => new URL(url, ROOT).href; /* './' → ROOT */
const SHELL = ROOT + '404.html'; /* открывает любую страницу по ее адресу (idFromPath в js/app.js) */

self.addEventListener('install', e => {
  /* по одному файлу: если какого-то нет, остальные все равно сохранятся */
  e.waitUntil(caches.open(SITE_CACHE).then(cache => Promise.allSettled(CORE.map(abs).map(url =>
    fetch(url, { cache: 'reload' }).then(r => r.ok && cache.put(url, r)))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  /* копии файлов, которых больше нет в основе, удаляются */
  const want = new Set(CORE.map(abs));
  e.waitUntil(caches.open(SITE_CACHE)
    .then(cache => cache.keys().then(keys => Promise.all(keys.filter(r => !want.has(r.url)).map(r => cache.delete(r)))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(ROOT)) return;
  const url = req.url.split(/[?#]/)[0].replace(/\/index\.html$/, '/');
  if (/\/audio\/[^/]+\.mp3$/.test(url)) return e.respondWith(audio(req, url));
  if (req.mode === 'navigate') return e.respondWith(page(req, url));
  e.respondWith(file(req, url));
});

/* файл основы: сеть с ожиданием WAIT, затем сохраненная копия. Копии хранятся только у файлов из CORE */
async function file(req, url) {
  const cache = await caches.open(SITE_CACHE);
  const saved = await cache.match(url);
  const net = fetch(req).then(r => {
    if (saved && r.ok && r.status === 200) cache.put(url, r.clone());
    return r;
  });
  if (!saved) return net;
  return Promise.race([net.catch(() => saved), new Promise(ok => setTimeout(() => ok(saved), WAIT))]);
}

/* страница: сеть; без сети — сохраненная главная или оболочка 404.html, которая сама откроет страницу по адресу */
async function page(req, url) {
  const cache = await caches.open(SITE_CACHE);
  const saved = await cache.match(url) || (url !== ROOT && await cache.match(SHELL));
  const net = fetch(req).then(r => {
    if (url === ROOT && r.ok && r.status === 200) cache.put(url, r.clone());
    return r;
  });
  if (!saved) return net;
  return Promise.race([net.catch(() => saved), new Promise(ok => setTimeout(() => ok(saved), WAIT))]);
}

/* запись «На слух»: скачанная — из сохраненных (с поддержкой Range: плеер просит файл по частям), иначе из сети */
async function audio(req, url) {
  const saved = await (await caches.open(AUDIO_CACHE)).match(url);
  if (!saved) return fetch(req);
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.get('range') || '');
  if (!range) return saved;
  const blob = await saved.blob();
  const start = range[1] ? +range[1] : Math.max(0, blob.size - +range[2]);
  const end = range[1] && range[2] ? Math.min(+range[2], blob.size - 1) : blob.size - 1;
  if (start > end) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${blob.size}` } });
  return new Response(blob.slice(start, end + 1), { status: 206, headers: {
    'Content-Type': 'audio/mpeg', 'Content-Length': String(end - start + 1), 'Content-Range': `bytes ${start}-${end}/${blob.size}` } });
}

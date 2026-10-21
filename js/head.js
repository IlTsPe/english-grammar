/* манифест (установка на домашний экран) подключается только по http/https: с диска (file://) браузер не дает его прочитать
   и пишет в консоль ошибку CORS */
if (location.protocol !== 'file:') document.head.insertAdjacentHTML('beforeend', '<link rel="manifest" href="manifest.webmanifest">');
/* тема: сохраненный выбор, по умолчанию темная; ставится до первой отрисовки. Ссылка «restore» несет тему, в которой ее скопировали
   (…&theme=light): страница открывается в ней без сохранения — после импорта прогресс приносит свою тему */
(function () {
  var t; try { t = JSON.parse(localStorage.getItem('gk2-theme')); } catch (e) {}
  var m = /^#restore=[^&]*&theme=(light|dark)/.exec(location.hash);
  if (m) t = m[1];
  if (t !== 'light') t = 'dark';
  document.documentElement.dataset.theme = t;
})();

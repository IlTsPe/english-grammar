/* манифест (установка на домашний экран) подключается только по http/https: с диска (file://) браузер не дает его прочитать
   и пишет в консоль ошибку CORS */
if (location.protocol !== 'file:') document.head.insertAdjacentHTML('beforeend', '<link rel="manifest" href="manifest.webmanifest">');
/* тема: сохраненный выбор, по умолчанию темная; ставится до первой отрисовки */
(function () {
  var t; try { t = JSON.parse(localStorage.getItem('gk2-theme')); } catch (e) {}
  if (t !== 'light') t = 'dark';
  document.documentElement.dataset.theme = t;
})();

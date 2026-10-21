/* ---------- Резервная копия: все, что приложение хранит в localStorage (gk2-*), одним JSON-файлом ---------- */
/* fileMsg: последний результат под кнопками, [вид, текст]; хранится здесь, потому что блок перерисовывается */
const BACKUP_APP = 'grammar-online';
/* сообщение об успехе исчезает через 15 секунд; новое сохранение за это время только обновляет его и снова начинает 15 секунд */
let fileMsg = null, fileMsgTimer;
function showFileMsg(kind, text) {
  fileMsg = [kind, text];
  renderFold('prog');
  clearTimeout(fileMsgTimer);
  if (kind === 'ok') fileMsgTimer = setTimeout(() => { fileMsg = null; renderFold('prog'); }, 15000);
}
/* ключи удаленных функций: убираются из этого браузера, из новых копий и при загрузке старых */
const OLD_KEYS = ['gk2-redo', 'gk2-toc-follow'];
try { OLD_KEYS.forEach(k => localStorage.removeItem(k)); } catch (e) {}
function backupKeys() {
  const keys = [];
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('gk2-') && !OLD_KEYS.includes(k)) keys.push(k); } } catch (e) {}
  return keys.sort();
}
function backupObject(now) {
  const data = {};
  backupKeys().forEach(k => { data[k] = store.get(k, null); });
  return { app: BACKUP_APP, version: 1, saved: now.toISOString(), data };
}
const isBackup = b => !!b && b.app === BACKUP_APP && !!b.data && typeof b.data === 'object' && !Array.isArray(b.data)
  && Object.keys(b.data).every(k => k.startsWith('gk2-'));
function exportBackup() {
  const now = new Date();
  const json = JSON.stringify(backupObject(now), null, 1);
  const a = el('a');
  a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  const d = n => String(n).padStart(2, '0');
  a.download = `grammar-progress-${now.getFullYear()}-${d(now.getMonth() + 1)}-${d(now.getDate())}-${d(now.getHours())}${d(now.getMinutes())}.json`;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  showFileMsg('ok', `Прогресс по грамматике успешно сохранен в файл «${a.download}». Файл сохранен в папку загрузок.`);
}
/* «Сохранить» нажата больше 3 раз за 2 секунды: каждое нажатие скачивает еще один файл, поэтому кнопка блокируется
   с предупреждением и отсчетом до 0 — 7 секунд первые два раза, 30 секунд потом. Число предупреждений
   забывается после спокойной минуты. Блокировка хранится в localStorage, поэтому перезагрузка страницы ее не снимает
   (ключ без префикса gk2-: он не попадает в копии). */
const SAVE_LOCKS = [7, 7, 30], SAVE_KEY = 'gk-save-lock';
let saveClicks = [], saveTick, saveShown;
let { until: saveUntil = 0, total: saveTotal = 0, strikes: saveStrikes = 0 } = store.get(SAVE_KEY, {}) || {};
/* неразрывный пробел держит число вместе со словом */
const seconds = n => `${n} ${plural(n, 'секунду', 'секунды', 'секунд')}`;
const saveLocked = () => Date.now() < saveUntil;
function saveWarning(n) {
  return (saveTotal > SAVE_LOCKS[0]
      ? `Вы снова нажимаете «Сохранить» слишком часто, поэтому кнопка выключена на ${seconds(saveTotal)}.`
      : 'Пожалуйста, не нажимайте «Сохранить» так часто: каждое нажатие скачивает еще один файл.'
        + (saveStrikes === SAVE_LOCKS.length - 1 ? ` Если это повторится, кнопка выключится на ${seconds(SAVE_LOCKS.at(-1))}.` : ''))
    + ` Кнопка снова заработает через ${seconds(n)}.`;
}
function saveClicked() {
  const now = Date.now();
  if (now < saveUntil) return;
  saveClicks = saveClicks.filter(t => now - t < 2000).concat(now);
  if (saveClicks.length <= 3) return exportBackup();
  saveClicks = [];
  if (now - saveUntil > 60000) saveStrikes = 0;
  saveTotal = SAVE_LOCKS[Math.min(saveStrikes, SAVE_LOCKS.length - 1)];
  saveStrikes++;
  saveUntil = now + saveTotal * 1000;
  store.set(SAVE_KEY, { until: saveUntil, total: saveTotal, strikes: saveStrikes });
  showFileMsg('bad', saveWarning(saveTotal));
  runSaveLock();
}
/* отсчет: меняется только текст, блок не пересобирается каждую секунду; на 0 кнопка возвращается */
function runSaveLock() {
  clearInterval(saveTick);
  saveShown = null;
  const tick = () => {
    const left = Math.max(0, Math.ceil((saveUntil - Date.now()) / 1000));
    if (left === saveShown) return;
    saveShown = left;
    fileMsg = ['bad', saveWarning(left)];
    document.querySelectorAll('.overall__file .overall__note').forEach(n => { n.textContent = fileMsg[1]; });
    if (left > 0) return;
    clearInterval(saveTick);
    setTimeout(() => { if (fileMsg && fileMsg[0] === 'bad') fileMsg = null; renderFold('prog'); }, 400);
  };
  tick();
  saveTick = setInterval(tick, 200);
}
if (saveLocked()) runSaveLock();
/* что хранит копия: изученные правила, выполненные упражнения без ошибок и с ошибками, избранное (темы, известные этой версии) и заметки */
function backupSummary(data) {
  const ids = o => Object.keys(o && typeof o === 'object' ? o : {}).filter(id => topicById[id]);
  let ex = 0, perfect = 0, wrong = 0;
  ids(data['gk2-progress']).forEach(id => {
    const e = data['gk2-progress'][id];
    if (!e || typeof e !== 'object') return;
    Object.values(e).forEach(r => {
      ex++;
      if (!Array.isArray(r)) return;
      if (r[0] < r[1]) wrong++; else perfect++;
    });
  });
  return { studied: ids(data['gk2-studied']).length, ex, perfect, wrong, bm: ids(data['gk2-bookmarks']).length, notes: Array.isArray(data['gk2-notes']) ? data['gk2-notes'].length : 0 };
}
const EX_TOTAL = TOPICS.reduce((n, t) => n + t.ex.length, 0);
/* копия, прочитанная из файла: ее данные и время сохранения или null, если файл не наш */
function readBackup(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onerror = () => resolve(null);
    reader.onload = () => {
      let b;
      try { b = JSON.parse(reader.result); } catch (e) { b = null; }
      resolve(isBackup(b) ? b : null);
    };
    reader.readAsText(file);
  });
}
/* «Отправить ссылкой»: та же копия, упакованная в сам адрес (#restore=…, deflate + base64url), поэтому файл не нужен.
   Открытие такой ссылки показывает окно импорта с этим прогрессом; данные сразу убираются из адресной строки. */
const LINK_KEY = 'restore=';
async function packLink(text) {
  const bytes = new Uint8Array(await new Response(new Blob([text]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer());
  let s = '';
  bytes.forEach(c => { s += String.fromCharCode(c); });
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function unpackLink(code) {
  const bytes = Uint8Array.from(atob(code.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
  return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();
}
async function shareLink() {
  let url;
  try { url = location.href.split('#')[0] + '#' + LINK_KEY + await packLink(JSON.stringify(backupObject(new Date()))) + '&theme=' + document.documentElement.dataset.theme; }
  catch (e) { return showFileMsg('bad', 'Этот браузер не умеет создавать ссылку. Сохраните прогресс в файл.'); }
  showLinkBox(url);
}
/* ссылка спрятана за словами «Прогресс по грамматике» (длинный адрес никогда не показывается); «Копировать» кладет ее
   в буфер обмена ссылкой с этим текстом плюс голый адрес для мест, которые принимают только простой текст */
const LINK_TEXT = 'Прогресс по грамматике';
function showLinkBox(url) {
  /* системное меню «Поделиться»; с локального файла не показываем: Яндекс Браузер на file:// роняет вкладку */
  const canShare = !!navigator.share && location.protocol !== 'file:';
  const d = el('dialog', 'modal');
  d.setAttribute('aria-labelledby', 'linkTitle');
  d.innerHTML = `<div class="modal__body">
    <h2 class="modal__title" id="linkTitle">Ссылка на ваш прогресс</h2>
    <p class="modal__text">Отправьте ссылку куда удобно: мессенджер, почта, заметки. Откройте ее на другом устройстве, чтобы загрузить текущий прогресс.</p>
    <div class="modal__share-box">
      <span class="modal__share">${LINK_TEXT}</span>
      <div class="modal__copied" role="status"><div class="modal__copied-clip"><span class="modal__copied-text"></span></div></div>
    </div>
    <div class="modal__foot${canShare ? ' modal__foot--three' : ''}">
      <button class="btn btn--primary" type="button" data-act="copy">Копировать</button>
      ${canShare ? '<button class="btn" type="button" data-act="share">Поделиться</button>' : ''}
      <button class="btn modal__close" type="button" data-act="cancel">Закрыть</button>
    </div>
  </div>`;
  const close = () => { clearTimeout(doneTimer); d.close(); d.remove(); };
  async function copy() {
    const html = `<a href="${esc(url)}">${LINK_TEXT}</a>`;
    try {
      /* браузер, который не разрешает и не запрещает (нет ответа на запрос разрешения), через секунду получает запасной способ */
      await Promise.race([
        navigator.clipboard.write([new ClipboardItem({ 'text/html': new Blob([html], { type: 'text/html' }), 'text/plain': new Blob([url], { type: 'text/plain' }) })]),
        new Promise((_, fail) => setTimeout(fail, 1000))]);
      return true;
    } catch (e) {}
    /* старые браузеры: команда копирования, а нашу ссылку кладет в буфер событие copy */
    const put = e => { e.clipboardData.setData('text/html', html); e.clipboardData.setData('text/plain', url); e.preventDefault(); };
    document.addEventListener('copy', put);
    try { return document.execCommand('copy'); } catch (e) { return false; } finally { document.removeEventListener('copy', put); }
  }
  /* «Ссылка скопирована» выезжает, и карточка на 3 секунды становится зеленой. Пока сообщение еще видно, новый клик только
     перезапускает 3 секунды — выезд играет, только когда сообщения нет */
  let doneTimer;
  function say(text, ok) {
    const box = $('.modal__copied', d), share = $('.modal__share', d);
    clearTimeout(doneTimer);
    $('.modal__copied-text', d).textContent = text;
    box.classList.toggle('modal__copied--bad', !ok);
    box.classList.add('modal__copied--show');
    share.classList.toggle('modal__share--copied', ok);
    if (ok) doneTimer = setTimeout(() => { box.classList.remove('modal__copied--show'); share.classList.remove('modal__share--copied'); }, 3000);
  }
  d.addEventListener('click', async e => {
    if (e.target === d) return close();
    const act = e.target.closest('[data-act]')?.dataset.act;
    if (act === 'cancel') close();
    else if (act === 'copy') {
      if (await copy()) say('Ссылка скопирована', true);
      else say('Не получилось скопировать: браузер не дал доступ к буферу обмена. Разрешите его и попробуйте еще раз.', false);
    } else if (act === 'share') {
      /* AbortError — пользователь сам закрыл меню, это не ошибка */
      try { await navigator.share({ title: LINK_TEXT, url }); }
      catch (err) { if (err.name !== 'AbortError') say('Не получилось открыть меню «Поделиться». Скопируйте ссылку кнопкой «Копировать».', false); }
    }
  });
  d.addEventListener('cancel', e => { e.preventDefault(); close(); });
  document.body.append(d);
  d.showModal();
  $('[data-act=copy]', d).focus();
}
async function openLink(hash) {
  /* ссылка, вставленная в открытую вкладку: скрипт в head уже отработал, поэтому тема ссылки ставится здесь */
  const theme = /&theme=(light|dark)/.exec(hash);
  if (theme && document.documentElement.dataset.theme !== theme[1]) { document.documentElement.dataset.theme = theme[1]; syncThemeBtn(); }
  let b = null;
  try { b = JSON.parse(await unpackLink(hash.slice(LINK_KEY.length).split('&')[0])); } catch (e) {}
  openImport({ backup: isBackup(b) ? b : null });
}
/* «Загрузить» сразу открывает это окно: сначала красное предупреждение о перезаписи,
   затем файл — выбранный кнопкой или брошенный на блок — и что в нем. «Перезаписать» выключена, пока
   не выбран подходящий файл; она заменяет все ключи gk2-* ключами из файла и перезагружает страницу. Закрывают Esc, «Отмена» или фон. */
/* fromLink: {backup}, прочитанная из ссылки «restore» (null, если ссылка битая), — показывается сразу вместо файла */
function openImport(fromLink) {
  let backup = null;
  const d = el('dialog', 'modal');
  d.setAttribute('aria-labelledby', 'modalTitle');
  d.setAttribute('aria-describedby', 'modalWarn');
  d.innerHTML = `<div class="modal__body">
    <h2 class="modal__title" id="modalTitle">Загрузить прогресс ${fromLink ? 'по ссылке' : 'из файла'}</h2>
    <div class="modal__warn" id="modalWarn">
      <p>При импорте все данные о прогрессе, а также содержимое раздела «Избранное» в этом браузере на текущем устройстве будут <b class="modal__warn-title">перезаписаны</b> данными ${fromLink ? 'из ссылки' : 'из файла'}. Объединить их нельзя — произойдет полная перезапись.</p>
      <p>Заранее убедитесь, что все необходимые данные сохранены.</p>
    </div>
    ${fromLink ? '<div class="modal__file" aria-live="polite"></div>' : `<div class="modal__drop">
      <div class="modal__file" aria-live="polite"></div>
      <button class="modal__pick" type="button" data-act="pick">Выбрать файл</button>
      <p class="modal__hint">или перетащите файл .json сюда</p>
    </div>`}
    <div class="modal__foot">
      <button class="btn modal__ok" type="button" data-act="ok" disabled>Перезаписать</button>
      <button class="btn modal__close" type="button" data-act="cancel">Закрыть</button>
    </div>
  </div>`;
  const input = Object.assign(el('input'), { type: 'file', accept: '.json,application/json', hidden: true });
  d.append(input);
  const close = () => { clearTimeout(errorTimer); d.close(); d.remove(); };
  const row = (label, value) => `<div class="overall__row"><span>${label}</span><b class="overall__value">${value}</b></div>`;
  /* ошибка исчезает через 15 секунд, как сообщение после сохранения; новая ошибка за это время только
     заменяет текст и снова начинает 15 секунд. Из ссылки она остается: больше показывать нечего */
  let errorTimer;
  function showError(html) {
    const box = $('.modal__file', d);
    clearTimeout(errorTimer);
    box.innerHTML = `<p class="modal__error">${html}</p>`;
    if (!fromLink) errorTimer = setTimeout(() => { if ($('.modal__error', box)) box.innerHTML = ''; }, 15000);
  }
  /* name: имя файла или null для ссылки */
  function show(b, name) {
    backup = b;
    const box = $('.modal__file', d);
    clearTimeout(errorTimer);
    $('[data-act=ok]', d).disabled = !backup;
    if (!fromLink) $('[data-act=pick]', d).textContent = 'Выбрать другой файл';
    if (!backup) {
      showError(name === null ? 'Ссылка повреждена или скопирована не полностью.' : `${esc(name)} — это не файл прогресса «Грамматика онлайн».`);
      return;
    }
    const when = backup.saved && !isNaN(new Date(backup.saved)) ? new Date(backup.saved).toLocaleString('ru-RU', { dateStyle: 'long', timeStyle: 'short' }) : '';
    const sum = backupSummary(backup.data);
    box.innerHTML = `<p class="modal__name"><b>${name === null ? 'Прогресс из ссылки' : esc(name)}</b>${when ? `<span>сохранен ${esc(when)}</span>` : ''}</p>
      <div class="modal__stats">${row('Правил изучено', `${sum.studied} из ${TOPICS.length}`)}${row('Выполнено упражнений', `${sum.ex} из ${EX_TOTAL}`)}${sum.ex ? row('Без ошибок', sum.perfect) : ''}${sum.wrong ? row('С ошибками', sum.wrong) : ''}${row('«Избранное»', sum.bm)}${row('Заметки', sum.notes)}</div>`;
  }
  async function choose(file) { if (file) show(await readBackup(file), file.name); }
  input.addEventListener('change', () => { const f = input.files[0]; input.value = ''; choose(f); });
  d.addEventListener('click', e => {
    if (e.target === d) return close(); /* затемненный фон */
    const btn = e.target.closest('[data-act]');
    const act = btn && btn.dataset.act;
    if (act === 'cancel') close();
    else if (act === 'pick') input.click();
    else if (act === 'ok' && backup) {
      try {
        backupKeys().forEach(k => localStorage.removeItem(k));
        Object.entries(backup.data).forEach(([k, v]) => { if (v !== null && !OLD_KEYS.includes(k)) localStorage.setItem(k, JSON.stringify(v)); });
      } catch (err) { showError('Браузер не дал сохранить данные.'); return; }
      location.reload();
    }
  });
  d.addEventListener('cancel', e => { e.preventDefault(); close(); });
  /* ссылка приносит свои данные: выбора и перетаскивания файла там нет — у файлов свое окно («Загрузить») */
  const drop = $('.modal__drop', d);
  if (drop) {
    drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('modal__drop--over'); });
    drop.addEventListener('dragleave', e => { if (!drop.contains(e.relatedTarget)) drop.classList.remove('modal__drop--over'); });
    drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('modal__drop--over'); choose(e.dataTransfer.files[0]); });
  }
  document.body.append(d);
  d.showModal();
  if (fromLink) show(fromLink.backup, null);
  $(fromLink ? (fromLink.backup ? '[data-act=ok]' : '[data-act=cancel]') : '[data-act=pick]', d).focus();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-file]');
  if (!b) return;
  const act = b.dataset.file;
  if (act === 'export') saveClicked(); else if (act === 'link') shareLink(); else openImport();
});

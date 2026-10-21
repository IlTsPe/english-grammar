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
function backupKeys() {
  const keys = [];
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k.startsWith('gk2-')) keys.push(k); } } catch (e) {}
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
/* «Загрузить» сразу открывает это окно: сначала красное предупреждение о перезаписи,
   затем файл — выбранный кнопкой или брошенный на блок — и что в нем. «Перезаписать» выключена, пока
   не выбран подходящий файл; она заменяет все ключи gk2-* ключами из файла и перезагружает страницу. Закрывают Esc, «Отмена» или фон. */
function openImport() {
  let backup = null;
  const d = el('dialog', 'modal');
  d.setAttribute('aria-labelledby', 'modalTitle');
  d.setAttribute('aria-describedby', 'modalWarn');
  d.innerHTML = `<div class="modal__body">
    <h2 class="modal__title" id="modalTitle">Загрузить прогресс из файла</h2>
    <div class="modal__warn" id="modalWarn">
      <p>При импорте все данные о прогрессе, а также содержимое раздела «Избранное» в этом браузере на текущем устройстве будут <b class="modal__warn-title">перезаписаны</b> данными из файла. Объединить их нельзя — произойдет полная перезапись.</p>
      <p>Заранее убедитесь, что все необходимые данные сохранены.</p>
    </div>
    <div class="modal__drop">
      <div class="modal__file" aria-live="polite"></div>
      <button class="modal__pick" type="button" data-act="pick">Выбрать файл</button>
      <p class="modal__hint">или перетащите файл .json сюда</p>
    </div>
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
     заменяет текст и снова начинает 15 секунд */
  let errorTimer;
  function showError(html) {
    const box = $('.modal__file', d);
    clearTimeout(errorTimer);
    box.innerHTML = `<p class="modal__error">${html}</p>`;
    errorTimer = setTimeout(() => { if ($('.modal__error', box)) box.innerHTML = ''; }, 15000);
  }
  /* name: имя выбранного файла */
  function show(b, name) {
    backup = b;
    const box = $('.modal__file', d);
    clearTimeout(errorTimer);
    $('[data-act=ok]', d).disabled = !backup;
    $('[data-act=pick]', d).textContent = 'Выбрать другой файл';
    if (!backup) {
      showError(`${esc(name)} — это не файл прогресса «Грамматика онлайн».`);
      return;
    }
    const when = backup.saved && !isNaN(new Date(backup.saved)) ? new Date(backup.saved).toLocaleString('ru-RU', { dateStyle: 'long', timeStyle: 'short' }) : '';
    const sum = backupSummary(backup.data);
    box.innerHTML = `<p class="modal__name"><b>${esc(name)}</b>${when ? `<span>сохранен ${esc(when)}</span>` : ''}</p>
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
        Object.entries(backup.data).forEach(([k, v]) => { if (v !== null) localStorage.setItem(k, JSON.stringify(v)); });
      } catch (err) { showError('Браузер не дал сохранить данные.'); return; }
      location.reload();
    }
  });
  d.addEventListener('cancel', e => { e.preventDefault(); close(); });
  const drop = $('.modal__drop', d);
  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('modal__drop--over'); });
  drop.addEventListener('dragleave', e => { if (!drop.contains(e.relatedTarget)) drop.classList.remove('modal__drop--over'); });
  drop.addEventListener('drop', e => { e.preventDefault(); drop.classList.remove('modal__drop--over'); choose(e.dataTransfer.files[0]); });
  document.body.append(d);
  d.showModal();
  $('[data-act=pick]', d).focus();
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-file]');
  if (!b) return;
  const act = b.dataset.file;
  if (act === 'export') saveClicked(); else openImport();
});

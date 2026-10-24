/* ---------- Упражнения ---------- */
const FIELD_MARKS = ['ex__field--ok', 'ex__field--bad', 'ex__field--miss'];
const OPT_MARKS = ['ex__opt--ok', 'ex__opt--bad'];
const LINE_MARKS = ['listen__line--ok', 'listen__line--bad', 'listen__line--miss'];
const ITEM_MARKS = ['ex__item--ok', 'ex__item--bad', 'ex__item--miss'];
/* поле перевода — textarea в одну строку, растущая по тексту. Где нет field-sizing: content, высота считается здесь
   (у скрытого поля scrollHeight 0 — тогда высота по умолчанию, одна строка) */
const fieldSizing = CSS.supports('field-sizing', 'content');
function fitTr(inp) {
  if (fieldSizing || inp.tagName !== 'TEXTAREA') return;
  inp.style.height = '';
  if (inp.scrollHeight) inp.style.height = inp.scrollHeight + inp.offsetHeight - inp.clientHeight + 'px';
}
if (!fieldSizing) addEventListener('resize', () => document.querySelectorAll('textarea.ex__tr').forEach(fitTr));

/* пропуск — type="search": у text Chromium на Android (Chrome, Яндекс) держит над клавиатурой панель автозаполнения
   (пароли, карты, адреса) даже при autocomplete="off", у search и textarea ее нет. Крестик очистки скрыт в style.css,
   стирание по Esc отменено в обработчике клавиш, Enter на клавиатуре — «далее» (enterkeyhint) */
function makeGap(answers, id, label) {
  const inp = el('input', 'ex__field ex__gap');
  inp.type = 'search'; inp.id = id; inp.autocomplete = 'off'; inp.spellcheck = false; inp.enterKeyHint = 'next';
  inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('aria-label', label);
  const longest = Math.max(...answers.split('|').map(s => s.length));
  inp.style.width = Math.max(4, Math.min(longest + 2, 24)) + 'ch';
  return inp;
}

function fillGaps(container, text, answers, idBase, label) {
  const parts = text.split('___');
  const inputs = [];
  parts.forEach((part, k) => {
    container.append(fmt(part));
    if (k < parts.length - 1) {
      const inp = makeGap(answers[k] || '', `${idBase}-${k}`, `${label}, пропуск ${k + 1}`);
      container.append(inp); inputs.push(inp);
    }
  });
  return inputs;
}

function renderEx(t, ex, ei) {
  const box = el('section', 'ex' + (ex.type === 'listen' ? ' ex--listen' : ''));
  box.dataset.ei = ei;
  box.innerHTML = `<div class="ex__head"><span class="ex__num">Упражнение ${exNo(t, ei)}</span><p class="ex__task">${ex.task}</p></div>`;
  const rows = [];
  const idBase = `x-${t.id}-${ei}`;

  /* показанные ответы остаются до «Скрыть ответы» (или перезагрузки страницы): ввод, проверка и сброс их сохраняют */
  let keysShown = false;
  const clearRow = row => {
    row.li.querySelectorAll('.ex__verdict').forEach(v => v.remove());
    row.li.classList.remove(...ITEM_MARKS);
    if (row.selfBtn) row.selfBtn.hidden = true;
  };

  if (ex.type === 'text') {
    const div = el('div', 'ex__text');
    const row = { li: div, q: div, inputs: fillGaps(div, ex.text, ex.answers, idBase, 'Текст') };
    rows.push(row); box.append(div);
  } else {
    const ol = el('ol', 'ex__items');
    ex.items.forEach((it, ii) => {
      const li = el('li', 'ex__item'); const row = { it, li };
      if (ex.type === 'gap') {
        const q = el('div', 'ex__q');
        row.q = q; row.inputs = fillGaps(q, it[0], gapAnswers(it), `${idBase}-${ii}`, `Предложение ${ii + 1}`);
        li.append(q);
      } else if (ex.type === 'choice') {
        const q = el('div', 'ex__q');
        const [before, after = ''] = it[0].split('___');
        const blank = el('span', 'ex__blank', ' ');
        q.append(fmt(before), blank, fmt(after));
        const opts = el('div', 'ex__opts'); opts.setAttribute('role', 'group');
        shuffled(it[1], it[0]).forEach(o => {
          const b = el('button', 'ex__opt', o); b.type = 'button'; b.setAttribute('aria-pressed', 'false');
          b.addEventListener('click', () => {
            if (row.sel === o) return; /* тот же вариант — ответ не изменился */
            opts.querySelectorAll('.ex__opt').forEach(x => { x.setAttribute('aria-pressed', String(x === b)); x.classList.remove(...OPT_MARKS); });
            row.sel = o; blank.textContent = o; blank.classList.remove('ex__blank--miss'); clearRow(row); if (keysShown) showKey(row); unlock(); save();
          });
          opts.append(b);
        });
        Object.assign(row, { q, blank, opts });
        li.append(q, opts);
      } else if (ex.type === 'translate') {
        const q = el('div', 'ex__q ex__q--ru', it[0]);
        const inp = el('textarea', 'ex__field ex__tr');
        inp.rows = 1; inp.id = `${idBase}-${ii}`; inp.autocomplete = 'off'; inp.spellcheck = false;
        inp.setAttribute('autocapitalize', 'off'); inp.setAttribute('aria-label', `Перевод предложения ${ii + 1}`);
        inp.placeholder = 'Ваш перевод';
        const selfBtn = el('button', 'ex__self-ok', 'Мой вариант тоже верен'); selfBtn.type = 'button'; selfBtn.hidden = true;
        Object.assign(row, { q, inputs: [inp], selfBtn });
        li.append(q, inp);
      } else if (ex.type === 'listen') {
        /* предложение собирается из слов-плиток: слово из набора встает в конец строки, слово из строки возвращается
           в набор; знаки препинания не нужны — проверка их не учитывает */
        const words = it[0].split(/\s+/).map(w => w.replace(/^[^\w']+|[^\w']+$/g, '')).filter(Boolean);
        let order = shuffled(words.map((w, k) => k), it[0]);
        if (order.every((k, i) => k === i)) order = order.reverse();
        const line = el('div', 'listen__line'), picked = el('span', 'listen__picked');
        line.append(picked);
        const bank = el('div', 'listen__bank'); bank.setAttribute('role', 'group'); bank.setAttribute('aria-label', `Слова предложения ${ii + 1}`);
        const tiles = order.map(k => { const b = el('button', 'ex__opt listen__word', words[k]); b.type = 'button'; bank.append(b); return b; });
        const changed = () => { line.classList.remove(...LINE_MARKS); clearRow(row); row.draw(); if (keysShown) showKey(row); unlock(); save(); };
        tiles.forEach(b => b.addEventListener('click', e => {
          if (row.pick.includes(b)) return;
          row.pick.push(b); changed();
          /* нажатое слово становится неактивным — с клавиатуры (detail 0) фокус переходит к следующему свободному, после
             последнего к «Проверить». При касании и мыши фокус не переносится: браузер прокрутил бы страницу к кнопке */
          if (!e.detail) (tiles.find(x => !row.pick.includes(x)) || bCheck).focus();
        }));
        Object.assign(row, {
          q: line, line, tiles, pick: [],
          value: () => row.pick.map(b => b.textContent).join(' '),
          draw() {
            picked.replaceChildren(...row.pick.map(b => {
              const c = el('button', 'ex__opt listen__word', b.textContent); c.type = 'button';
              c.setAttribute('aria-label', `Убрать «${b.textContent}»`);
              c.addEventListener('click', () => { row.pick.splice(row.pick.indexOf(b), 1); changed(); });
              return c;
            }));
            tiles.forEach(b => { const used = row.pick.includes(b); b.disabled = used; b.classList.toggle('listen__word--used', used); });
            line.classList.toggle('listen__line--empty', !row.pick.length);
          }
        });
        row.draw();
        li.append(makePlayer(it[0], `предложение ${ii + 1}`), line, bank);
      }
      /* строка «Ответ: …»: есть у перевода и «На слух»; выбор показывает свой ответ на самом варианте */
      if (ex.type === 'translate' || ex.type === 'listen') { row.key = el('div', 'ex__key'); row.key.hidden = true; li.append(row.key); }
      if (row.selfBtn) li.append(row.selfBtn);
      ol.append(li); rows.push(row);
    });
    box.append(ol);
  }

  /* ввод снимает отметки; Enter переходит к следующему полю */
  rows.forEach(row => (row.inputs || []).forEach(inp => {
    inp.addEventListener('input', () => {
      if (inp.value.includes('\n')) inp.value = inp.value.replace(/\s*\n\s*/g, ' '); /* перевод — одна строка, вставленный перенос становится пробелом */
      fitTr(inp); inp.classList.remove(...FIELD_MARKS); row.credited = false; clearRow(row); unlock(); save();
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Escape' && inp.type === 'search') e.preventDefault(); /* поле поиска стерло бы ответ */
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const all = [...box.querySelectorAll('input, textarea')];
      const next = all[all.indexOf(inp) + 1];
      if (next) next.focus(); else if (!bCheck.disabled) check();
    });
  }));

  const foot = el('div', 'ex__foot');
  const bCheck = el('button', 'btn btn--primary ex__btn', 'Проверить'); bCheck.type = 'button';
  const bShow = el('button', 'btn ex__btn', 'Показать ответы'); bShow.type = 'button'; bShow.setAttribute('aria-pressed', 'false');
  /* проверять нечего, пока не дан хотя бы один ответ */
  const blank = () => rows.every(r => ex.type === 'choice' ? !r.sel : ex.type === 'listen' ? !r.pick.length : r.inputs.every(i => !i.value.trim()));
  const syncBlank = () => { const b = blank(); bCheck.disabled = b; bCheck.title = b ? 'Сначала введите хотя бы один ответ' : ''; };
  /* любое изменение ответа снова делает доступными «Проверить» и «Показать ответы» */
  const unlock = () => { syncBlank(); bShow.hidden = false; };
  const bReset = el('button', 'btn ex__btn', 'Заново'); bReset.type = 'button';
  const score = el('span', 'ex__score'); score.setAttribute('aria-live', 'polite');
  foot.append(bCheck, bShow, bReset, score);
  if (ex.type === 'listen' && !speech && ex.items.some(it => !AUDIO[it[0]])) foot.append(el('span', 'listen__note', 'Озвучка недоступна в этом браузере'));
  box.append(foot);

  const answerOf = (row, k) => ex.type === 'text' ? ex.answers[k] : ex.type === 'gap' ? gapAnswers(row.it)[k] : row.it[1];
  const total = units(ex);
  let checked = false;
  /* когда все ответы верны, «Показать ответы» есть что показать только в переводах: другие принимаемые варианты
     или эталонная формулировка строки, засчитанной по «Мой вариант тоже верен» */
  const hasAlternatives = ex.type === 'translate' && ex.items.some(it => it[1].includes('|'));
  /* последняя проверка для «Работы над ошибками»: [номера неверных пунктов, номера пустых пунктов];
     пункт — предложение (пропуск в упражнении «text»), неверен, если неверен любой его пропуск, пуст, если остальные пусты */
  let marks = null;
  function countMarks() {
    const wrong = [], blank = [];
    const mark = (n, state) => { if (state === 'wrong') wrong.push(n); else if (state === 'blank') blank.push(n); };
    const stateOf = (ok, value) => ok ? 'ok' : value.trim() ? 'wrong' : 'blank';
    rows.forEach((row, ri) => {
      if (ex.type === 'choice') { mark(ri + 1, !row.sel ? 'blank' : row.sel === row.it[1][0] ? 'ok' : 'wrong'); return; }
      if (ex.type === 'translate') { const v = row.inputs[0].value; mark(ri + 1, stateOf(row.credited || accepts(row.it[1], v), v)); return; }
      if (ex.type === 'listen') { const v = row.value(); mark(ri + 1, stateOf(accepts(row.it[0], v), v)); return; }
      const res = row.inputs.map((inp, k) => stateOf(accepts(answerOf(row, k), inp.value), inp.value));
      if (ex.type === 'text') res.forEach((r, k) => mark(k + 1, r));
      else mark(ri + 1, res.includes('wrong') ? 'wrong' : res.includes('blank') ? 'blank' : 'ok');
    });
    return [wrong, blank];
  }

  /* ответы хранятся в localStorage: gk2-answers[тема][упражнение] = { v: значения по строкам, c: засчитанные строки, k: проверено, m: отметки } */
  function save() {
    const v = rows.map(r => ex.type === 'choice' ? (r.sel ?? null) : ex.type === 'listen' ? r.pick.map(b => b.textContent) : r.inputs.map(i => i.value));
    const empty = v.every(x => x == null || (Array.isArray(x) && x.every(s => !s)));
    answers[t.id] = answers[t.id] || {};
    if (empty) { delete answers[t.id][ei]; if (!Object.keys(answers[t.id]).length) delete answers[t.id]; }
    else answers[t.id][ei] = { v, c: rows.map((r, i) => r.credited ? i : -1).filter(i => i >= 0), k: checked, ...(checked && marks ? { m: marks } : {}) };
    store.set('gk2-answers', answers);
  }

  function rowScore(row) {
    if (ex.type === 'choice') return row.sel === row.it[1][0] ? 1 : 0;
    if (ex.type === 'translate') return row.credited || accepts(row.it[1], row.inputs[0].value) ? 1 : 0;
    if (ex.type === 'listen') return accepts(row.it[0], row.value()) ? 1 : 0;
    return row.inputs.reduce((n, inp, k) => n + (accepts(answerOf(row, k), inp.value) ? 1 : 0), 0);
  }

  function showScore() {
    const ok = rows.reduce((n, r) => n + rowScore(r), 0);
    /* после проверки «Проверить» ждет изменения ответа: повторная проверка тех же ответов ничего не даст.
       Любая правка снова включает кнопку (unlock) */
    bCheck.disabled = true;
    bCheck.title = ok === total ? '' : 'Измените ответ, чтобы проверить снова';
    bShow.hidden = ok === total && !hasAlternatives && !rows.some(r => r.credited);
    if (bShow.hidden && keysShown) hideKeys();
    score.textContent = `${ok} из ${total}` + (ok === total ? ' · без ошибок' : '');
    score.className = 'ex__score' + (ok === total ? ' ex__score--good' : ok / total < .5 ? ' ex__score--low' : '');
    return ok;
  }

  function updateScore() {
    const ok = showScore();
    /* считается последняя проверка, а не лучшая: счет под упражнением, прогресс и «С ошибками» всегда согласованы */
    progress[t.id] = progress[t.id] || {};
    progress[t.id][ei] = [ok, total]; store.set('gk2-progress', progress);
    renderToc(); renderOverall(); renderRedoBar(); syncExTabs();
    const pp = $('#pageProg'); if (pp) fillProgress(pp);
  }

  function check(silent) {
    rows.forEach(row => {
      clearRow(row);
      let good;
      if (ex.type === 'choice') {
        good = row.sel === row.it[1][0];
        row.opts.querySelectorAll('.ex__opt').forEach(b => { b.classList.remove(...OPT_MARKS); if (b.textContent === row.sel) b.classList.add(good ? 'ex__opt--ok' : 'ex__opt--bad'); });
        if (!row.sel) row.blank.classList.add('ex__blank--miss');
      } else if (ex.type === 'listen') {
        good = accepts(row.it[0], row.value());
        row.line.classList.remove(...LINE_MARKS);
        row.line.classList.add(good ? 'listen__line--ok' : row.pick.length ? 'listen__line--bad' : 'listen__line--miss');
      } else {
        good = true;
        row.inputs.forEach((inp, k) => {
          const g = ex.type === 'translate' ? (row.credited || accepts(row.it[1], inp.value)) : accepts(answerOf(row, k), inp.value);
          inp.classList.remove(...FIELD_MARKS);
          inp.classList.add(g ? 'ex__field--ok' : inp.value.trim() ? 'ex__field--bad' : 'ex__field--miss');
          if (!g) good = false;
        });
        if (ex.type === 'translate' && !good && row.inputs[0].value.trim()) row.selfBtn.hidden = false;
      }
      if (ex.type !== 'text') {
        /* строка без ответа — отдельная отметка: полоса слева у нее не красится */
        const empty = ex.type === 'choice' ? !row.sel : ex.type === 'listen' ? !row.pick.length : row.inputs.every(i => !i.value.trim());
        row.li.classList.add(good ? 'ex__item--ok' : empty ? 'ex__item--miss' : 'ex__item--bad');
        const v = el('span', 'ex__verdict ex__verdict--' + (good ? 'ok' : 'bad'), good ? '✓' : '✗');
        v.setAttribute('aria-label', good ? 'верно' : 'ошибка');
        row.q.append(v);
      }
    });
    checked = true; marks = countMarks();
    if (keysShown) rows.forEach(showKey);
    if (!silent) { updateScore(); save(); }
  }

  rows.forEach(row => {
    if (!row.selfBtn) return;
    row.selfBtn.addEventListener('click', () => {
      row.credited = true;
      row.inputs[0].classList.remove(...FIELD_MARKS); row.inputs[0].classList.add('ex__field--ok');
      row.selfBtn.hidden = true;
      const v = row.q.querySelector('.ex__verdict'); if (v) { v.className = 'ex__verdict ex__verdict--ok'; v.textContent = '✓'; }
      marks = countMarks();
      updateScore(); save();
    });
  });

  bCheck.addEventListener('click', () => check());
  /* «Показать ответы» переключается; пока включено, ввод сохраняет подсказки на месте, а выбор варианта обновляет его строку ответа */
  function setKeysShown(on) {
    keysShown = on;
    bShow.textContent = on ? 'Скрыть ответы' : 'Показать ответы';
    bShow.setAttribute('aria-pressed', String(on));
  }
  function showKey(row) {
    if (ex.type === 'choice') {
      /* без строки текста: зеленым становится сам верный вариант */
      row.opts.querySelectorAll('.ex__opt').forEach(b => b.classList.toggle('ex__opt--key', b.textContent === row.it[1][0]));
    } else if (ex.type === 'translate') {
      const alts = row.it[1].split('|');
      row.key.textContent = 'Ответ: ' + alts[0] + (alts.length > 1 ? '  (или: ' + alts.slice(1, 3).join('; ') + ')' : '');
      row.key.hidden = false;
    } else if (ex.type === 'listen') {
      row.key.innerHTML = `Ответ: ${esc(row.it[0])}<span class="listen__ru">${esc(row.it[1])}</span>`;
      row.key.hidden = false;
    } else {
      row.li.querySelectorAll('.ex__inline-key').forEach(k => k.remove());
      row.inputs.forEach((inp, k) => {
        const a = answerOf(row, k);
        if (accepts(a, inp.value)) return;
        inp.after(el('span', 'ex__inline-key', firstAnswer(a)));
      });
    }
  }
  function hideKeys() {
    rows.forEach(row => {
      row.li.querySelectorAll('.ex__inline-key').forEach(k => k.remove());
      if (row.opts) row.opts.querySelectorAll('.ex__opt').forEach(b => b.classList.remove('ex__opt--key'));
      if (row.key) row.key.hidden = true;
    });
    setKeysShown(false);
  }
  bShow.addEventListener('click', () => {
    if (keysShown) { hideKeys(); return; }
    rows.forEach(showKey);
    setKeysShown(true);
  });
  bReset.addEventListener('click', () => {
    rows.forEach(row => {
      clearRow(row); row.credited = false;
      (row.inputs || []).forEach(inp => { inp.value = ''; fitTr(inp); inp.classList.remove(...FIELD_MARKS); });
      if (row.opts) {
        row.sel = undefined; row.blank.textContent = ' '; row.blank.classList.remove('ex__blank--miss');
        row.opts.querySelectorAll('.ex__opt').forEach(b => { b.setAttribute('aria-pressed', 'false'); b.classList.remove(...OPT_MARKS); });
      }
      if (row.line) { row.pick = []; row.line.classList.remove(...LINE_MARKS); row.draw(); }
      if (keysShown) showKey(row);
    });
    score.textContent = ''; score.className = 'ex__score';
    unlock();
    checked = false; marks = null; save();
    /* сброшенное упражнение больше не учитывается в прогрессе (и в «С ошибками»), пока его не проверят снова */
    if (progress[t.id] && progress[t.id][ei]) {
      delete progress[t.id][ei];
      if (!Object.keys(progress[t.id]).length) delete progress[t.id];
      store.set('gk2-progress', progress);
      renderToc(); renderOverall(); renderRedoBar(); syncExTabs();
      const pp = $('#pageProg'); if (pp) fillProgress(pp);
    }
  });

  /* открыто из «Работы над ошибками»: назад к списку, дальше к следующему упражнению; зеленеет, когда решено полностью */
  const redoBar = mistakeFocus && mistakeFocus.t === t.id && mistakeFocus.ei === ei ? el('nav', 'ex__redo') : null;
  if (redoBar) { redoBar.setAttribute('aria-label', 'Работа над ошибками'); box.append(redoBar); }
  function renderRedoBar() {
    if (!redoBar) return;
    const r = progress[t.id] && progress[t.id][ei];
    const fixed = !!r && r[0] === r[1];
    const next = nextMistake(t, ei);
    redoBar.classList.toggle('ex__redo--done', fixed);
    redoBar.innerHTML = '';
    if (fixed) redoBar.append(el('p', 'ex__redo-status', next ? '✓ Исправлено — упражнение убрано из «Работы над ошибками»' : '✓ Исправлено — это было последнее упражнение с ошибками'));
    /* список «Работы над ошибками» пуст (исправлено последнее упражнение или оно сброшено «Заново») — возвращаться
       незачем: остается только отметка «Исправлено», а без нее плашка скрывается целиком */
    const empty = !mistakeCount();
    redoBar.hidden = empty && !fixed;
    if (empty) return;
    const back = el('button', 'ex__redo-link'); back.type = 'button';
    back.innerHTML = `${arrowHtml('prev')} К работе над ошибками`;
    back.addEventListener('click', () => go('mistakes'));
    redoBar.append(back);
    if (next) {
      const b = el('button', 'ex__redo-link ex__redo-link--next'); b.type = 'button';
      /* следующее — другого уровня (на этом уровне ошибок больше нет или список не отфильтрован): кнопка его называет */
      const lvl = next.t.level !== t.level ? ` · уровень <span class="lvl-tag lvl-tag--sm" title="${LEVELS[next.t.level]}">${next.t.level}</span>` : '';
      b.innerHTML = `<span class="ex__redo-text">Следующее: ${esc(next.t.num)} · Упр. ${exNo(next.t, next.i)}${lvl}</span>${arrowHtml('next')}`;
      b.title = next.t.title;
      b.addEventListener('click', () => openExercise(next.t.id, next.i));
      redoBar.append(b);
    }
  }
  renderRedoBar();

  /* восстановить сохраненные ответы */
  const saved = answers[t.id] && answers[t.id][ei];
  if (saved && saved.v.length === rows.length) {
    rows.forEach((row, i) => {
      const val = saved.v[i];
      if (ex.type === 'choice') {
        const b = val != null && [...row.opts.querySelectorAll('.ex__opt')].find(x => x.textContent === val);
        if (b) { row.sel = val; row.blank.textContent = val; b.setAttribute('aria-pressed', 'true'); }
      } else if (ex.type === 'listen') {
        /* слова строки возвращаются на свои плитки; повторяющееся слово берет первую еще свободную */
        (val || []).forEach(w => { const b = row.tiles.find(x => x.textContent === w && !row.pick.includes(x)); if (b) row.pick.push(b); });
        row.draw();
      } else if (Array.isArray(val)) row.inputs.forEach((inp, k) => { inp.value = val[k] || ''; fitTr(inp); });
    });
    (saved.c || []).forEach(i => { if (rows[i]) rows[i].credited = true; });
    if (saved.k) {
      check(true);
      showScore();
    }
  }
  if (!checked) syncBlank();
  return box;
}

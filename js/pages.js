/* ---------- Страницы ---------- */
function crumbs(parts) {
  const c = el('div', 'crumbs');
  parts.forEach((p, i) => {
    if (i) { const s = el('span', 'crumbs__sep', '→'); s.setAttribute('aria-hidden', 'true'); c.append(s); }
    if (typeof p === 'string') c.append(el('span', null, p));
    else { const b = el('button', 'crumbs__link', p.label); b.type = 'button'; b.addEventListener('click', () => go(p.to)); c.append(b); }
  });
  return c;
}

/* что не так с упражнением: ошибки и пропуски из последней проверки */
function mistakeSummary(t, i, r) {
  const score = `<span class="mistakes__score">${r[0]} из ${r[1]}</span>`;
  const m = answers[t.id] && answers[t.id][i] && answers[t.id][i].m;
  if (!m) return score; /* проверено до того, как стали хранить номера пунктов */
  /* «ошибки в № 3, 5, 7», «не заполнены № 8–10»; в упражнении с текстом пункты — это пропуски */
  const gaps = t.ex[i].type === 'text';
  const [w, b] = m, parts = [];
  if (w.length) parts.push(`<span class="mistakes__score">${w.length > 1 ? 'ошибки' : 'ошибка'} в ${gaps ? (w.length > 1 ? 'пропусках ' : 'пропуске ') : '№ '}${numList(w)}</span>`);
  if (b.length) parts.push(`<span class="mistakes__note">${b.length > 1 ? 'не заполнены' : 'не заполнен'} ${gaps ? (b.length > 1 ? 'пропуски ' : 'пропуск ') : '№ '}${numList(b)}</span>`);
  return parts.join(' · ') || score;
}
/* 1, 2, 3, 5, 8, 9 → «1–3, 5, 8, 9»; подряд от трех и больше становятся диапазоном */
function numList(nums) {
  const out = [];
  for (let k = 0; k < nums.length;) {
    let e = k; while (e + 1 < nums.length && nums[e + 1] === nums[e] + 1) e++;
    if (e - k >= 2) out.push(`${nums[k]}–${nums[e]}`); else for (let j = k; j <= e; j++) out.push(nums[j]);
    k = e + 1;
  }
  return out.join(', ');
}

/* «Информация»: страница о тренажере, открывается кнопкой под названием, и ее собственные страницы, по одной теме на каждую
   (маршрут 'about-<id>'); body() — статичная разметка, цифры считаются по данным */
const ABOUT = [
  { id: 'numbers', title: 'Тренажер в цифрах', sub: 'Разделы, темы, уровни и упражнения', body() {
    const ex = TOPICS.flatMap(t => t.ex);
    const items = ex.reduce((n, e) => n + units(e), 0);
    const nLv = Object.keys(LEVELS).length;
    const byType = type => ex.filter(e => e.type === type).length;
    const nEx = n => `${n} ${plural(n, 'упражнение', 'упражнения', 'упражнений')}`;
    const [tests, extra] = CHAPTERS.slice(-2);
    const stat = (n, one, few, many) => `<li class="info__stat"><b>${n}</b><span>${plural(n, one, few, many)}</span></li>`;
    return `<ul class="info__stats">${stat(CHAPTERS.length, 'раздел', 'раздела', 'разделов')}${stat(TOPICS.length, 'тема', 'темы', 'тем')}${stat(nLv, 'уровень сложности', 'уровня сложности', 'уровней сложности')}${stat(ex.length, 'упражнение', 'упражнения', 'упражнений')}${stat(items, 'задание', 'задания', 'заданий')}</ul>
      <h3>Разделы</h3>
      <p>Первые ${CHAPTERS.length - 2} разделов выстроены в той же последовательности, что и в сборнике Ю. Б. Голицынского. В ${tests.n}-м разделе «${esc(tests.title)}» собраны задания, охватывающие сразу несколько тем. ${extra.n}-й раздел «${esc(extra.title)}» включает грамматические конструкции уровней B2–C2, которые в оригинальном сборнике отсутствуют.</p>
      <h3>Упражнения</h3>
      <p>В тренажере представлены пять типов упражнений:</p>
      <ul>
        <li>«Впишите пропущенное» (${nEx(byType('gap'))}) — нужно ввести с клавиатуры нужное слово или грамматическую форму.</li>
        <li>«Выберите вариант» (${nEx(byType('choice'))}) — требуется выбрать один правильный ответ из нескольких предложенных.</li>
        <li>«Текст с пропусками» (${nEx(byType('text'))}) — дается связный текст, в котором нужно заполнить несколько пропусков.</li>
        <li>«Перевод» (${nEx(byType('translate'))}) — необходимо полностью перевести предложение на английский язык.</li>
        <li>«На слух» (${nEx(byType('listen'))}) — нужно прослушать предложение и собрать его из слов в правильном порядке.</li>
      </ul>
      <p>Распределение тем по уровням сложности представлено на странице «Уровни сложности».</p>`;
  } },
  { id: 'menu', title: 'Меню', sub: 'Описание всех блоков бокового меню', body: () => `
      <p>Меню помогает быстро перейти к любому разделу или теме, а также следить за прогрессом. Ниже описаны все его блоки по порядку, сверху вниз.</p>
      <h3>«Инфо»</h3>
      <p>Открывает страницу «Информация» с описанием тренажера.</p>
      <h3>Тема и скрытие меню</h3>
      <ul>
        <li><b>Темная тема / Светлая тема</b> — переключает оформление интерфейса.</li>
        <li><b>Скрыть меню</b> — убирает боковую панель, странице становится больше места для контента. Чтобы вернуть меню, нажмите появившуюся кнопку «Показать меню».</li>
      </ul>
      <h3>Прогресс</h3>
      <p>На кнопке отображается общий процент прохождения тренажера, а рядом — красный значок с количеством упражнений, в которых были допущены ошибки. Если ошибок нет — значка не будет. По нажатию раскрывается блок:</p>
      <ul>
        <li><b>Правил изучено</b> — сколько правил отмечено как изученные.</li>
        <li><b>Выполнено упражнений</b> — показывает общее количество проверенных упражнений. Ниже они разделены на две категории: «Без ошибок» и «С ошибками».</li>
        <li><b>С ошибками</b> — ведет на страницу «Работа над ошибками».</li>
        <li><b>Прохождение тренажера</b> — полоса с общим процентом.</li>
        <li><b>Резервная копия</b> — кнопки «Сохранить», «Загрузить» и «Отправить ссылкой». Подробнее о работе с данными — на странице «Где хранятся данные».</li>
      </ul>
      <h3>Избранное</h3>
      <p>На кнопке отображается количество отмеченных тем, а при нажатии открывается их список. Подробнее на странице «Избранное и заметки».</p>
      <h3>Мои заметки</h3>
      <p>На кнопке отображается количество созданных заметок, а при нажатии открывается страница «Мои заметки». Подробнее на странице «Избранное и заметки».</p>
      <h3>Содержание и уровни сложности</h3>
      <ul>
        <li><b>Содержание тренажера</b> — список всех разделов с общим прогрессом.</li>
        <li><b>Уровни сложности</b> — кнопки «Все» и уровни A1–C2 позволяют отфильтровать список разделов. После выбора останутся только темы выбранного уровня сложности. Под кнопками отобразится строка «Уровень … пройден на …%». Подробнее на странице «Уровни сложности».</li>
      </ul>
      <h3>Поиск и список разделов</h3>
      <ul>
        <li><b>Поиск темы</b> — поиск по названию темы или раздела. Учитывает выбранный уровень сложности.</li>
        <li>
          <p><b>Разделы тренажера</b> — заголовок списка показывает количество разделов. Если выбран определенный уровень, заголовок меняется на «Разделы уровня …». При нажатии список сворачивается/разворачивается целиком.</p>
          <p>В каждом разделе отображаются: номер, название, количество тем, уровни их сложности, а также процент прохождения — как всего раздела, так и каждой отдельной темы. Внутри раздела вы найдете строку «Обзор всего раздела» и список тем.</p>
        </li>
      </ul>
      <h3>Поддержать автора</h3>
      <p>После нажатия открывается страница DonationAlerts в новой вкладке, где можно поддержать автора.</p>` },
  { id: 'data', title: 'Где хранятся данные', sub: 'Перенос прогресса', body: () => `
      <div class="note"><div>
        <p>Прогресс, ответы, «Избранное», заметки и другие данные сохраняются локально, то есть <b>только в этом браузере и только на этом устройстве</b>. У тренажера нет серверного хранения данных.</p>
        <p>Данные будут утеряны, если:</p>
        <ul>
          <li>очистить файлы cookie и данные сайтов;</li>
          <li>работать в режиме инкогнито — в этом случае все исчезнет после закрытия окна.</li>
        </ul>
      </div></div>
      <p>Время от времени следует делать резервную копию данных. Сделать это можно в блоке «Прогресс» → «Резервная копия»:</p>
      <ul>
        <li><b>Сохранить</b> — скачивает файл с прогрессом в папку загрузок.</li>
        <li><b>Загрузить</b> — восстанавливает прогресс из сохраненного файла. Перед загрузкой показывается сводка по файлу. Текущий прогресс при этом полностью перезаписывается, а не объединяется с загруженным.</li>
        <li><b>Отправить ссылкой</b> — создается ссылка с прогрессом. Отправьте ее себе любым способом и откройте на другом устройстве: тренажер предложит загрузить прогресс. В окне со ссылкой размещена кнопка «Копировать». Там, где это поддерживается браузером, дополнительно доступна кнопка «Поделиться» — она вызывает системное меню для отправки ссылки.</li>
      </ul>` },
  { id: 'sections', title: 'Разделы и темы', sub: 'Как устроены страницы разделов и тем', body: () => `
      <p>Тренажер разбит по разделам, а каждый раздел в свою очередь по темам. Внутри темы сначала приводится правило с примерами, а затем упражнения для закрепления этого правила.</p>
      <h3>Страница раздела</h3>
      <p>Перейти к разделам можно двумя способами:</p>
      <ul>
        <li>через пункт меню «Содержание тренажера» — так откроется список всех разделов тренажера;</li>
        <li>через строку «Обзор всего раздела» — она идет первой в раскрытом разделе меню, над его темами; так сразу откроется страница этого раздела.</li>
      </ul>
      <p>На самой странице видны карточки всех тем выбранного раздела: в них указаны уровень сложности, количество упражнений, процент прохождения и отметка «Правило изучено».</p>
      <h3>Страница темы</h3>
      <p>После того как вы прочитаете правило, нажмите кнопку «Отметить правило как изученное» — отметка сохранится в вашем прогрессе.</p>
      <p>Внизу страницы темы расположены кнопки для перехода к предыдущей или следующей теме в том порядке, который соответствует структуре тренажера. Если соседняя тема относится к другому уровню сложности, под кнопками появится блок «Идти только по темам уровня…». Он поможет оставаться в рамках выбранного уровня и не переключаться на более сложные или простые темы.</p>` },
  { id: 'levels', title: 'Уровни сложности', sub: 'Шкала уровней и фильтр в меню', body: () => `
      <ul class="info__levels">${Object.keys(LEVELS).map(l => { const n = TOPICS.filter(t => t.level === l).length;
        return `<li><span class="lvl-tag">${l}</span><span class="info__level-name">${LEVELS[l]}</span><span class="info__count">${n} ${plural(n, 'тема', 'темы', 'тем')}</span></li>`; }).join('')}</ul>
      <h3>Фильтр в меню</h3>
      <p>В блоке меню «Уровни сложности» выберите «Все» или конкретный уровень. После этого в списке разделов, а также при поиске останутся темы выбранного уровня. Процент прохождения раздела будет рассчитываться только по нему.</p>` },
  { id: 'exercises', title: 'Упражнения и проверка', sub: 'Как проверяются ответы', body: () => `
      <h3>Проверка</h3>
      <p>Кнопка «Проверить» активируется, как только вы введете хотя бы один ответ. После проверки она блокируется, пока вы не измените хотя бы один ответ. Неверные ответы выделяются красным цветом, а также незаполненные поля.</p>
      <ul>
        <li>Регистр букв и знаки препинания не учитываются.</li>
        <li>Сокращения засчитываются наравне с полными формами: <i>I'm</i> и <i>I am</i>, <i>don't</i> и <i>do not</i>, <i>it's</i> и <i>it is</i>.</li>
        <li>В заданиях на перевод сравнивается ваш ответ с эталонным и допустимыми вариантами. Поскольку мысль можно выразить по-разному, имеется кнопка «Мой вариант тоже верен» — нажмите ее, если уверены, что перевод правильный.</li>
      </ul>
      <h3>Ответы и повтор</h3>
      <ul>
        <li><b>Показать ответы</b> — выводит верные ответы или подсвечивает их. Для того чтобы скрыть ответы, нажмите кнопку «Скрыть ответы».</li>
        <li><b>Заново</b> — очищает упражнение и его результат, чтобы решить его с чистого листа.</li>
      </ul>
      <p>Ответы сохраняются в упражнениях. Если вы покинете тему и позже вернетесь к ней, ответы и результаты проверки останутся.</p>` },
  { id: 'mistakes', title: 'Работа над ошибками', sub: 'Как быстро вернуться к упражнениям с ошибками', body: () => `
      <p>Для перехода на страницу нажмите на текст <b>«С ошибками»</b> в блоке меню <b>«Прогресс»</b>.</p>
      <p>На странице собраны упражнения, в которых при последней проверке были выявлены ошибки или остались незаполненные упражнения. Если таких упражнений нет, на странице отобразится надпись: «Сейчас таких упражнений нет».</p>
      <h3>Список упражнений</h3>
      <p>Упражнения сгруппированы по темам и расположены в порядке уровней от A1 до C2, а внутри каждого уровня — по номерам тем. Для каждой темы указаны номер, название, уровень и раздел. Нажатие по названию открывает тему.</p>
      <p>Под названием темы приведен список ее упражнений с ошибками. Например: «Упр. 2 · ошибки в № 3, 5 · не заполнены № 8–10». Если нажать на такую запись, тема откроется сразу на нужном упражнении.</p>
      <h3>Кнопка «Начать по порядку»</h3>
      <p>Открывает первое упражнение из списка с учетом выбранного уровня. Под упражнением появляются дополнительные кнопки:</p>
      <ul>
        <li><b>К работе над ошибками</b> — возвращает к списку.</li>
        <li><b>Следующее</b> — открывает следующее упражнение с ошибками. Если оно относится к другому уровню, на кнопке будет указан соответствующий уровень.</li>
      </ul>
      <p>Если упражнение выполнено без ошибок, панель окрашивается в зеленый цвет и на ней появляется отметка «Исправлено».</p>
      <h3>Когда упражнение исчезает из списка</h3>
      <p>Упражнение пропадает из списка, если вы выполнили его без ошибок или нажали кнопку «Заново». Оно вновь отобразится в списке, если при следующей проверке в нем обнаружатся ошибки или незаполненные строки.</p>` },
  { id: 'bookmarks', title: 'Избранное и заметки', sub: 'Информация, к которой хочется вернуться', body: () => `
      <p>На странице каждой темы имеется кнопка «Добавить в избранное». После нажатия тема добавляется в блок «Избранное», а в самих разделах рядом с ней появляется иконка ленточки. Повторное нажатие кнопки удаляет тему из избранного.</p>
      <h3>Список в меню</h3>
      <ul>
        <li>Кнопка «Избранное» показывает количество тем и открывает их список. Темы отображаются в порядке нумерации, а не в порядке добавления.</li>
        <li>Если темы относятся к разным уровням сложности, то над списком появляется фильтр по уровню.</li>
      </ul>
      <h3>Мои заметки</h3>
      <p>Здесь можно делать любые личные записи: перефразировать правила, добавлять примеры, записывать слова, которые никак не удается запомнить и т.д. Все заметки собираются в один общий список и не привязываются к темам / разделам. На кнопке видно, сколько всего заметок, а при нажатии откроется страница «Мои заметки».</p>
      <ul>
        <li><b>Новая заметка</b> — при нажатии на кнопку в начало списка добавляется пустая заметка.</li>
        <li><b>Сохранение</b> — изменения сохраняются только после нажатия кнопки «Сохранить». Если покинуть страницу, не нажав кнопку, внесенные данные не сохранятся.</li>
        <li><b>Редактирование</b> — нажмите кнопку «Редактировать», чтобы открыть режим правки. Для сохранения изменений воспользуйтесь кнопкой «Сохранить». Под каждой заметкой указана дата ее последнего редактирования.</li>
        <li><b>Удаление</b> — под каждой заметкой имеется кнопка «Удалить». Чтобы избежать случайного удаления, потребуется дополнительное подтверждение — «Да, удалить». Если нажать «Отмена», заметка останется без изменений.</li>
        <li><b>Поиск</b> — отображается только после того, как появится хотя бы одна заметка. Поиск работает по содержимому заметок — находятся все записи, где встречается введенное сочетание символов. При этом регистр букв не учитывается.</li>
        <li><b>Пагинация</b> — на странице отображается только семь записей, остальные переносятся на другую страницу. Переключаться между страницами можно с помощью стрелок и номеров, расположенных под заметками.</li>
      </ul>
      <p>Заметки входят в резервную копию: сохраняются в файл и в ссылку вместе с прогрессом и восстанавливаются при загрузке.</p>` }
];
const aboutPage = id => ABOUT.find(p => 'about-' + p.id === id);
const isAbout = id => id === 'about' || !!aboutPage(id);

const ABOUT_FOLD = 347, FADE_WORDS = 3, aboutNarrow = matchMedia('(max-width: 998px)');
let aboutOpen = false; /* хранится только пока открыта страница */
aboutNarrow.addEventListener('change', () => { if (route === 'about') go('about', false, false); });
function renderAboutPage(wrap) {
  wrap.append(el('h1', 'sheet__title', 'Информация'));
  const mail = el('a', 'sheet__link', 'pegasusgamesru@gmail.com');
  mail.href = 'mailto:pegasusgamesru@gmail.com';
  const contact = el('p', 'sheet__intro sheet__intro--contact', 'Если у вас есть замечания или пожелания, можете направить их на почту: ');
  contact.append(mail);
  /* статичный текст с метками <b>, поэтому innerHTML здесь безопасен */
  const para = html => { const p = el('p', 'sheet__intro'); p.innerHTML = html; return p; };
  const paras = [
    '«Грамматика онлайн» — некоммерческий и независимый проект. Идея его создания появилась во время занятий по книге Ю. Б. Голицынского «Грамматика. Сборник упражнений».',
    'Работать с бумажным сборником не всегда удобно: ответы нужно сверять вручную, из-за чего легко пропустить ошибку, да и сам учебник не самый мобильный предмет. Хотелось сразу видеть, где допущена ошибка, и в любой момент быстро возвращаться к сложной/интересной теме. Поиски бесплатных тренажеров со схожим подходом не привели к удовлетворительному результату (возможно, я плохо искал), поэтому и возникла идея создать его самостоятельно.',
    'За основу взята <b>только структура сборника</b>: разделы и темы расположены в той же последовательности. При этом все правила, примеры и упражнения написаны заново и <b>не дублируют текст книги</b>, а также добавлен дополнительный раздел (№19). Тренажер не является электронной версией какого-либо издания книги — это самостоятельная разработка, созданная по ее мотивам.',
    'В тренажере нет регистрации, платных разделов или ограничений по функционалу — весь функционал доступен сразу, без каких-либо условий. Если тренажер вам понравился, вы можете выразить благодарность автору, нажав кнопку <b class="sheet__donate">«Поддержать автора»</b> внизу меню.'];
  /* уже 999px текст сворачивается после ABOUT_FOLD символов, как длинная заметка */
  const intro = el('div', 'info-intro');
  const fill = () => {
    const ps = paras.map(para);
    const more = el('button', 'overall__more-btn', aboutOpen ? 'Скрыть' : 'Показать еще'); more.type = 'button';
    more.setAttribute('aria-expanded', String(aboutOpen));
    more.addEventListener('click', () => { aboutOpen = !aboutOpen; fill(); $('.overall__more-btn', intro).focus({ preventScroll: aboutOpen }); });
    if (!aboutNarrow.matches) { intro.replaceChildren(...ps); return; }
    if (aboutOpen) { ps.at(-1).append(' ', more); intro.replaceChildren(...ps); return; }
    let left = ABOUT_FOLD;
    const shown = [];
    for (const p of ps) {
      shown.push(p);
      if (p.textContent.length < left) { left -= p.textContent.length; continue; }
      /* текст до предела с обрывом по слову; его последние FADE_WORDS слов угасают перед кнопкой («Хотелось сразу видеть,») */
      const full = p.textContent, head = full.slice(0, left).replace(/\s+\S*$/, '');
      const words = head.split(/(\s+)/), k = Math.max(0, words.length - 2 * FADE_WORDS + 1);
      const plain = words.slice(0, k).join(''), fade = words.slice(k).join('');
      fadeTokens = words.slice(k);
      restTokens = full.slice(head.length).split(/(\s+)/).filter(Boolean);
      const row = el('span', 'overall__fade-row');
      row.append(el('span', 'overall__fade', fade), ' ', more);
      p.replaceChildren(plain, row); break;
    }
    intro.replaceChildren(...shown);
    fitFade();
  };
  /* угасающие слова и скрытый текст после них, словами и пробелами */
  let fadeTokens = [], restTokens = [];
  /* угасают только слова на строке кнопки: те, что перенос оставил на строке выше, остаются обычным текстом;
     если на строке кнопки меньше FADE_WORDS слов, к ней добавляются следующие слова скрытого текста */
  const fitFade = () => {
    const fade = $('.overall__fade', intro);
    if (!fade || !intro.isConnected) return;
    const row = fade.parentNode, btn = $('.overall__more-btn', row);
    const tokens = fadeTokens.slice();
    let words, i, extra = 0;
    const lay = () => {
      while (row.firstChild !== btn) row.firstChild.remove(); /* кнопка остается на месте, поэтому сохраняет фокус */
      words = tokens.map(w => el('span', '', w));
      btn.before(...words, ' ');
      const r = btn.getBoundingClientRect(), y = (r.top + r.bottom) / 2;
      i = words.findIndex(w => { const q = w.getBoundingClientRect(); return q.top <= y && q.bottom >= y; });
      if (i < 0) i = words.length;
    };
    const onLine = () => words.slice(i).filter(w => /\S/.test(w.textContent)).length;
    lay();
    /* на узкой строке кнопка может снова и снова переноситься: добавляется не больше шести слов, и побеждает попытка с наибольшим числом слов у кнопки */
    let best = [onLine(), 0];
    while (best[0] < FADE_WORDS && extra < Math.min(restTokens.length, 12)) {
      tokens.push(...restTokens.slice(extra, extra + 2)); extra += 2; /* пробел и слово */
      lay();
      if (onLine() > best[0]) best = [onLine(), extra];
    }
    if (extra !== best[1]) { tokens.length = fadeTokens.length + best[1]; lay(); }
    const text = ws => ws.map(w => w.textContent).join('');
    words.forEach(w => w.remove());
    btn.previousSibling.before(text(words.slice(0, i)), el('span', 'overall__fade', text(words.slice(i))));
  };
  new ResizeObserver(fitFade).observe(intro);
  fill();
  wrap.append(intro, el('div', 'sheet__section sheet__section--about', 'Как устроен тренажер'));
  const ol = el('ol', 'contents contents--about');
  ABOUT.forEach((p, i) => {
    const li = el('li', 'contents__item'); const b = el('button', 'contents__row'); b.type = 'button';
    b.innerHTML = `<span class="contents__num">${i + 1}</span><span class="contents__title">${esc(p.title)}</span><span class="contents__meta">${esc(p.sub)}</span>`;
    b.addEventListener('click', () => go('about-' + p.id));
    li.append(b); ol.append(li);
  });
  wrap.append(ol, contact);
}

/* одна страница «Информации» с соседними внизу */
function renderAboutTopic(page, wrap) {
  wrap.append(crumbs([{ label: 'Информация', to: 'about' }, page.title]));
  wrap.append(el('h1', 'sheet__title', page.title));
  const body = el('div', 'rule info'); body.innerHTML = page.body(); wrap.append(body);
  const idx = ABOUT.indexOf(page);
  const nav = el('nav', 'pager'); nav.setAttribute('aria-label', 'Соседние страницы');
  const mk = (p, dir, label) => {
    const b = el('button', 'pager__btn pager__btn--' + dir); b.type = 'button';
    b.innerHTML = `<small class="pager__label"><span>${label}</span></small><span>${esc(p.title)}</span>`;
    b.addEventListener('click', () => go('about-' + p.id));
    nav.append(b);
  };
  if (idx > 0) mk(ABOUT[idx - 1], 'prev', `${arrowHtml('prev')} Предыдущая страница`);
  if (idx < ABOUT.length - 1) mk(ABOUT[idx + 1], 'next', `Следующая страница ${arrowHtml('next')}`);
  wrap.append(nav);
}

function renderMistakesPage(wrap) {
  /* без хлебных крошек: страница открывается из «Прогресса», а не из «Содержания» */
  wrap.append(el('h1', 'sheet__title', 'Работа над ошибками'));
  const all = mistakes();
  const level = mistakesFilter();
  const list = level ? all.filter(m => m.t.level === level) : all;
  const exCount = ms => ms.reduce((n, m) => n + m.exs.length, 0);
  const count = exCount(list);
  /* с ошибками: только примечание о том, как меняется список; без ошибок — что здесь появится */
  const p = count
    ? el('p', 'sheet__intro', 'Задание исчезнет из списка, если вы выполните его без ошибок либо нажмете кнопку «Заново». Оно снова появится, если при следующей проверке будут ошибки или незаполненные данные.')
    : el('p', 'sheet__intro', 'Здесь появятся упражнения, в которых при проверке были ошибки или незаполненные строки.');
  wrap.append(p);
  if (!count) { wrap.append(el('p', 'mistakes__empty', 'Сейчас таких упражнений нет.')); return; }
  const tools = el('div', 'mistakes__tools');
  /* фильтр уровня: только уровни с ошибками, у каждого число упражнений; при одном уровне не нужен */
  const levels = Object.keys(LEVELS).filter(l => all.some(m => m.t.level === l));
  if (levels.length > 1) {
    const bar = el('div', 'mistakes__levels'); bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', 'Уровень сложности');
    [['', 'Все', exCount(all)], ...levels.map(l => [l, l, exCount(all.filter(m => m.t.level === l))])].forEach(([v, label, n]) => {
      const b = el('button', 'mistakes__level'); b.type = 'button';
      b.innerHTML = `${label}<span class="mistakes__level-count">${n}</span>`;
      if (v) b.title = LEVELS[v];
      b.setAttribute('aria-pressed', String(v === level));
      b.addEventListener('click', () => { mistakesLevel = v; mistakesPage = 0; store.set('gk2-mistakes-level', v); go('mistakes', false); });
      bar.append(b);
    });
    tools.append(bar);
  }
  /* первое упражнение (отфильтрованного) списка; «Следующее» под каждым упражнением дальше ведет по остальным в пределах того же
     фильтра уровня, поэтому подпись его называет. При одном упражнении идти не по чему: кнопка выключена */
  const start = el('button', 'mistakes__start'); start.type = 'button';
  start.innerHTML = `Начать по порядку: ${level ? 'уровень ' + level : 'все уровни'} ${arrowHtml('next')}`;
  start.disabled = count < 2;
  start.addEventListener('click', () => openExercise(list[0].t.id, list[0].exs[0][0]));
  tools.append(start);
  wrap.append(tools);
  /* в столбик, когда кнопку выталкивает из ряда чипов: замер без класса, затем класс возвращается, если нужно */
  new ResizeObserver(() => {
    tools.classList.remove('mistakes__tools--stacked');
    tools.classList.toggle('mistakes__tools--stacked', !!tools.firstChild && start.offsetTop > tools.firstChild.offsetTop + 4);
  }).observe(tools);
  const ol = el('ol', 'mistakes');
  /* MISTAKES_PAGE тем на странице; страница хранится, пока сайт открыт, поэтому «К работе над ошибками» возвращает на нее */
  const pageCount = Math.ceil(list.length / MISTAKES_PAGE);
  mistakesPage = Math.min(mistakesPage, Math.max(0, pageCount - 1));
  list.slice(mistakesPage * MISTAKES_PAGE, (mistakesPage + 1) * MISTAKES_PAGE).forEach(({ t, exs }) => {
    const li = el('li', 'mistakes__item');
    const head = el('div', 'mistakes__head');
    const title = el('button', 'mistakes__title', t.title); title.type = 'button';
    title.insertAdjacentHTML('beforeend', `<span class="lvl-tag" title="${LEVELS[t.level]}">${t.level}</span>`);
    title.addEventListener('click', () => go(t.id));
    head.append(el('span', 'mistakes__num', t.num), title);
    head.insertAdjacentHTML('beforeend', `<span class="mistakes__chapter">Раздел ${t.ch.n} · ${esc(t.ch.title)}</span>`);
    const chips = el('div', 'mistakes__exs');
    exs.forEach(([i, r]) => {
      const b = el('button', 'mistakes__ex'); b.type = 'button';
      b.innerHTML = `Упр. ${exNo(t, i)} · ${mistakeSummary(t, i, r)}`;
      b.addEventListener('click', () => openExercise(t.id, i));
      chips.append(b);
    });
    li.append(head, chips); ol.append(li);
  });
  const pages = el('nav', 'paging'); pages.setAttribute('aria-label', 'Страницы списка');
  fillPaging(pages, mistakesPage, pageCount, k => { mistakesPage = k; go('mistakes', false); $('.mistakes__tools').scrollIntoView({ block: 'start' }); });
  wrap.append(ol, pages);
}

/* «Мои заметки»: все заметки, новые первыми. Заметка только для чтения до «Редактировать»; измененный текст сохраняется
   только ее кнопкой «Сохранить». «Удалить» переспрашивает перед удалением */
function renderNotesPage(wrap) {
  /* без хлебных крошек: страница открывается из меню, а не из «Содержания» */
  wrap.append(el('h1', 'sheet__title', 'Мои заметки'));
  wrap.append(el('p', 'sheet__intro', 'Записывайте сюда правила, примеры, слова — все, что хочется сохранить. Заметки входят в резервную копию прогресса.'));
  const tools = el('div', 'notes-tools');
  const add = el('button', 'mistakes__start notes-tools__add'); add.type = 'button';
  /* пока какая-то заметка открыта для редактирования (новая или «Редактировать», изменена или нет), начать другую новую нельзя:
     подсказка — в подписи самой кнопки (поиск лежит поверх ряда, поэтому смена ширины ничего не сдвигает) */
  add.innerHTML = `${notesIcon()}<span>Новая заметка</span>`;
  const addLabel = $('span', add);
  /* поиск по текстам заметок; виден, только пока заметки есть. Заметка, открытая для редактирования, всегда остается видна.
     Свернут в кнопку с лупой: по нажатию поле выезжает влево поверх ряда и не сдвигает список */
  const searchWrap = el('div', 'notes-search');
  const searchOpen = el('button', 'notes-search__open'); searchOpen.type = 'button';
  searchOpen.setAttribute('aria-label', 'Поиск по заметкам'); searchOpen.setAttribute('aria-expanded', 'false'); searchOpen.setAttribute('aria-controls', 'notesSearch');
  searchOpen.innerHTML = searchIcon();
  const searchBox = el('div', 'notes-search__box'); searchBox.id = 'notesSearch';
  const search = el('input', 'notes-tools__search'); search.type = 'search';
  search.placeholder = 'Поиск по заметкам'; search.setAttribute('aria-label', 'Поиск по заметкам'); search.autocomplete = 'off';
  const searchClose = el('button', 'notes-search__close'); searchClose.type = 'button'; searchClose.setAttribute('aria-label', 'Закрыть поиск');
  searchClose.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>';
  searchBox.append(search, searchClose);
  searchWrap.append(searchOpen, searchBox);
  tools.append(add, searchWrap);
  const ol = el('ol', 'notes-list');
  const none = el('p', 'notes-list__none', 'Ничего не нашлось. Попробуйте другое слово.');
  /* больше NOTES_PAGE заметок (при поиске — найденных) делятся на страницы */
  const pages = el('nav', 'paging'); pages.setAttribute('aria-label', 'Страницы заметок');
  wrap.append(tools, ol, none, pages);
  let page = 0;
  const filter = () => {
    const q = search.value.trim().toLowerCase();
    const shown = [...ol.children].filter(li => !q || li.classList.contains('notes-list__item--edit') || li.note.text.toLowerCase().includes(q));
    const count = Math.ceil(shown.length / NOTES_PAGE);
    page = Math.min(page, Math.max(0, count - 1));
    [...ol.children].forEach(li => { const i = shown.indexOf(li); li.hidden = i < 0 || Math.floor(i / NOTES_PAGE) !== page; });
    none.hidden = !q || shown.length > 0;
    fillPaging(pages, page, count, k => { page = k; filter(); tools.scrollIntoView({ block: 'start' }); });
  };
  search.addEventListener('input', () => { page = 0; filter(); });
  const setSearch = on => { searchWrap.classList.toggle('notes-search--open', on); searchOpen.setAttribute('aria-expanded', String(on)); };
  /* закрытие очищает запрос: свернутый поиск не должен незаметно прятать заметки */
  const closeSearch = focusBtn => {
    if (search.value) { search.value = ''; page = 0; filter(); }
    setSearch(false);
    if (focusBtn) searchOpen.focus();
  };
  searchOpen.addEventListener('click', () => { setSearch(true); search.focus(); });
  searchClose.addEventListener('click', () => closeSearch(true));
  search.addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); closeSearch(true); } });
  /* пустое поле сворачивается, когда фокус уходит за его пределы */
  searchBox.addEventListener('focusout', e => { if (!searchBox.contains(e.relatedTarget) && !search.value.trim()) closeSearch(false); });
  const syncAdd = () => {
    const blocked = !!$('.notes-list__item--edit', ol);
    add.disabled = blocked;
    addLabel.textContent = blocked ? 'Сохраните заметку' : 'Новая заметка';
    add.title = blocked ? 'Сохраните изменения в открытой заметке, чтобы создать новую.' : '';
    searchWrap.hidden = !notes.length;
    if (!notes.length) closeSearch(false);
  };
  const btn = (text, mod) => { const b = el('button', 'notes-list__btn' + (mod ? ' notes-list__btn--' + mod : ''), text); b.type = 'button'; return b; };
  function card(n, editing = false) {
    const li = el('li', 'notes-list__item'); li.note = n;
    const foot = el('div', 'notes-list__foot');
    const date = () => el('span', 'notes-list__date', notes.includes(n) ? 'Изменена ' + noteDate(n.at) : 'Новая заметка');
    let open = false; /* длинная заметка показывается свернутой до «Показать еще» */
    const fillText = p => {
      if (n.text.length <= NOTE_FOLD) { p.textContent = n.text; return; }
      const more = el('button', 'overall__more-btn', open ? 'Скрыть' : 'Показать еще'); more.type = 'button';
      more.setAttribute('aria-expanded', String(open));
      more.addEventListener('click', () => { open = !open; fillText(p); $('.overall__more-btn', p).focus(); });
      if (open) { p.replaceChildren(n.text, ' ', more); return; }
      /* свернута, как заметки в «Прогрессе»: текст до предела, его последние слова угасают, затем кнопка */
      const head = n.text.slice(0, NOTE_FOLD).replace(/\s+\S*$/, '');
      const words = head.split(/(\s+)/), k = Math.max(0, words.length - 5);
      const row = el('span', 'overall__fade-row');
      row.append(el('span', 'overall__fade', words.slice(k).join('')), ' ', more);
      p.replaceChildren(words.slice(0, k).join(''), row);
    };
    const view = () => {
      const text = el('p', 'notes-list__text'); fillText(text);
      const edit = btn('Редактировать'), del = btn('Удалить', 'del');
      edit.addEventListener('click', () => { render(true); $('textarea', li).focus(); });
      del.addEventListener('click', ask);
      foot.replaceChildren(date(), edit, del);
      li.replaceChildren(text, foot);
    };
    const editor = () => {
      const area = el('textarea', 'notes-list__field'); area.rows = 3;
      area.setAttribute('aria-label', 'Текст заметки');
      area.placeholder = 'Текст заметки…';
      area.value = n.text;
      const save = btn('Сохранить');
      save.addEventListener('click', () => {
        /* очищенная заметка сохраняет последний текст: заметка уходит только через «Удалить»; новая без текста не сохраняется */
        if (area.value.trim()) {
          n.text = area.value; n.at = Date.now();
          if (!notes.includes(n)) notes.unshift(n);
          saveNotes();
        }
        if (!notes.includes(n)) li.remove(); else render(false);
        syncAdd();
      });
      foot.replaceChildren(date(), save);
      li.replaceChildren(area, foot);
    };
    /* второй шаг «Удалить»: нижняя строка просит подтвердить, «Отмена» возвращает кнопки */
    function ask() {
      const yes = btn('Да, удалить', 'confirm'), no = btn('Отмена');
      yes.addEventListener('click', () => {
        const i = notes.indexOf(n);
        if (i >= 0) { notes.splice(i, 1); saveNotes(); }
        li.remove(); syncAdd(); filter();
      });
      no.addEventListener('click', () => { render(false); $('.notes-list__btn--del', li).focus(); });
      foot.replaceChildren(el('span', 'notes-list__ask', 'Удалить эту заметку?'), yes, no);
      no.focus();
    }
    const render = e => { li.classList.toggle('notes-list__item--edit', e); if (e) editor(); else view(); syncAdd(); };
    render(editing);
    return li;
  }
  add.addEventListener('click', () => {
    const li = card({ id: Date.now().toString(36), text: '', c: Date.now(), at: Date.now() }, true);
    ol.prepend(li); page = 0; syncAdd(); filter(); $('textarea', li).focus();
  });
  ol.append(...notes.map(n => card(n)));
  syncAdd(); filter();
}

function renderContents(wrap) {
  wrap.append(crumbs(['Тренажер грамматики · A1–C2']));
  wrap.append(el('h1', 'sheet__title', 'Содержание'));
  const p = el('p', 'sheet__intro');
  p.textContent = 'Внутри каждого раздела — правила и упражнения с проверкой. Выберите раздел или тему слева, а фильтром уровня можно оставить только темы нужной сложности.';
  wrap.append(p, progressBlock(null));
  const ol = el('ol', 'contents');
  CHAPTERS.forEach(ch => {
    const li = el('li', 'contents__item'); const b = el('button', 'contents__row'); b.type = 'button';
    const cs = chapterStats(ch);
    /* прогресс раздела (полоска + процент одним блоком) — второй строкой, под названием. span, а не div: внутри button допустимы только строчные элементы */
    b.innerHTML = `<span class="contents__num">${ch.n}</span><span class="contents__title">${esc(ch.title)}</span>
      ${cs.tried ? `<span class="contents__prog"><span class="bar bar--thin contents__bar">${barFill(cs.pct)}</span>${pctLabel(cs.pct, '', 'span')}</span>` : ''}
      <span class="contents__meta"><span>${ch.topics.length} ${plural(ch.topics.length, 'тема', 'темы', 'тем')} · ${ch.topics.reduce((n, t) => n + t.ex.length, 0)} упр.</span>
      <span class="contents__levels" aria-label="Уровни">${[...new Set(ch.topics.map(t => t.level))].map(l => `<span class="lvl-tag lvl-tag--sm" title="${LEVELS[l]}">${l}</span>`).join('')}</span></span>`;
    b.addEventListener('click', () => go('ch-' + ch.id));
    li.append(b); ol.append(li);
  });
  wrap.append(ol);
}

function renderChapter(ch, wrap) {
  wrap.append(crumbs([{ label: 'Содержание', to: 'contents' }, `Раздел ${ch.n}`]));
  wrap.append(el('h1', 'sheet__title', ch.title));
  if (ch.intro) { const p = el('p', 'sheet__intro'); p.innerHTML = ch.intro; wrap.append(p); }
  wrap.append(progressBlock(ch));
  const grid = el('div', 'topic-cards');
  ch.topics.forEach(t => {
    const b = el('button', 'topic-card'); b.type = 'button';
    const st = topicStats(t);
    b.innerHTML = `<span class="topic-card__num">${t.num} · <span class="lvl-tag">${t.level}</span>${bookmarks[t.id] ? bmIcon() : ''}</span><span class="topic-card__title">${esc(t.title)}</span><span class="topic-card__sub">${esc(t.sub)}</span>
      <span class="topic-card__foot"><span>${t.ex.length} упр.</span><span class="bar topic-card__bar">${barFill(st.tried ? st.pct : 0)}</span>${st.tried ? pctLabel(st.pct, '', 'span') : '<span>—</span>'}</span>
      ${studied[t.id] ? '<span class="topic-card__studied">Правило изучено</span>' : ''}`;
    b.addEventListener('click', () => go(t.id));
    grid.append(b);
  });
  wrap.append(grid);
  wrap.append(pager(CHAPTERS.indexOf(ch), CHAPTERS, c => 'ch-' + c.id, c => c.title, 'раздел'));
}

function renderTopic(t, wrap) {
  wrap.append(crumbs([{ label: 'Содержание', to: 'contents' }, { label: `${t.ch.n}. ${t.ch.title}`, to: 'ch-' + t.ch.id }]));
  const h = el('h1', 'sheet__title', t.title); wrap.append(h);
  const lead = el('p', 'sheet__lead'); lead.innerHTML = `${esc(t.sub)} &nbsp;<span class="lvl-tag" title="${LEVELS[t.level]}">${t.level}</span>`; wrap.append(lead);
  wrap.append(progressBlock(t.ch, t.level));
  wrap.append(el('div', 'sheet__section', 'Правило'));
  const rule = el('div', 'rule'); rule.innerHTML = t.rule; wrap.append(rule);
  const study = el('div', 'study');
  const sb = el('button', 'btn study__btn'); sb.type = 'button';
  const sbLabel = el('span');
  sb.append(sbLabel);
  /* animate = клик: барабан ✓ вращается; при отрисовке он просто стоит */
  const sync = animate => {
    const on = !!studied[t.id];
    sb.setAttribute('aria-pressed', String(on));
    if (on) {
      sbLabel.innerHTML = `Правило изучено <span class="slot" aria-hidden="true"><span class="slot__reel" style="--last:${SLOT_REEL.length - 1}">${SLOT_REEL.map(c => `<span>${c}</span>`).join('')}</span></span>`;
      if (animate) sbLabel.querySelector('.slot').classList.add('slot--spin');
    } else sbLabel.textContent = 'Отметить правило как изученное';
  };
  sb.addEventListener('click', () => {
    studied[t.id] = !studied[t.id]; if (!studied[t.id]) delete studied[t.id]; store.set('gk2-studied', studied);
    sync(true); renderToc(); renderOverall();
    /* правило учитывается в цифрах темы, раздела и уровня */
    const pp = $('#pageProg'); if (pp) fillProgress(pp);
  });
  sync(); study.append(sb);
  /* избранное: тема, к которой читатель хочет вернуться и повторить */
  const bb = el('button', 'btn study__btn study__btn--bookmark'); bb.type = 'button';
  /* animate = клик, добавляющий в избранное: ленточка качается, вокруг вспыхивают искры (см. .bm-pop) */
  const bmSync = animate => {
    const on = !!bookmarks[t.id];
    bb.setAttribute('aria-pressed', String(on));
    const icon = animate ? `<span class="bm-pop" aria-hidden="true">${bmIcon('study__icon')}${BM_SPARKS.map(([x, y, d, dot]) =>
      `<i class="bm-pop__spark${dot ? ' bm-pop__spark--dot' : ''}" style="--x:${x}px;--y:${y}px;--d:${d}s"></i>`).join('')}</span>` : bmIcon('study__icon');
    bb.innerHTML = on ? `${icon}<span>В избранном</span>` : '<span>Добавить в избранное</span>';
  };
  bb.addEventListener('click', () => {
    if (bookmarks[t.id]) delete bookmarks[t.id]; else bookmarks[t.id] = Date.now();
    store.set('gk2-bookmarks', bookmarks); bmSync(true); renderToc();
  });
  bmSync(); study.append(bb);
  wrap.append(study);
  wrap.append(el('div', 'sheet__section', `Упражнения · ${t.ex.length}`));
  exOrder(t).forEach(ei => wrap.append(renderEx(t, t.ex[ei], ei)));
  wrap.append(pager(TOPICS.indexOf(t), TOPICS, x => x.id, x => `${x.num} ${x.title}`, 'тема'));
}

function pager(idx, arr, idOf, titleOf, noun) {
  const nav = el('nav', 'pager'); nav.setAttribute('aria-label', 'Соседние страницы');
  const levelsOf = item => item.level ? [item.level] : [...new Set(item.topics.map(x => x.level))].sort();
  const curLv = levelsOf(arr[idx]);
  /* уровень, который есть у соседа и нет у текущей страницы, залит */
  const mk = (item, dir, label) => {
    const b = el('button', 'pager__btn pager__btn--' + dir); b.type = 'button';
    const tags = levelsOf(item).map(l => `<span class="lvl-tag lvl-tag--sm${curLv.includes(l) ? '' : ' lvl-tag--filled'}" title="${LEVELS[l]}">${l}</span>`).join('');
    /* уровни — с внешней стороны подписи: у «Предыдущей» справа, у «Следующей» слева, стрелки остаются по краям */
    const lbl = `<span>${label}</span>`, lv = `<span class="pager__levels">${tags}</span>`;
    b.innerHTML = `<small class="pager__label">${dir === 'next' ? lv + lbl : lbl + lv}</small><span>${esc(titleOf(item))}</span>`;
    b.addEventListener('click', () => go(idOf(item)));
    nav.append(b);
  };
  const prevLabel = `${arrowHtml('prev')} ${noun === 'тема' ? 'Предыдущая тема' : 'Предыдущий раздел'}`;
  const nextLabel = `${noun === 'тема' ? 'Следующая тема' : 'Следующий раздел'} ${arrowHtml('next')}`;
  if (idx > 0) mk(arr[idx - 1], 'prev', prevLabel);
  if (idx < arr.length - 1) mk(arr[idx + 1], 'next', nextLabel);
  const here = el('div', 'pager-current');
  const cur = arr[idx];
  here.innerHTML = `<span>${noun === 'тема' ? 'Текущая тема' : 'Текущий раздел'}</span>` +
    `<span class="pager-current__title">${esc(noun === 'тема' ? titleOf(cur) : `${cur.n}. ${cur.title}`)}</span>` +
    /* «· уровень» и метки — одним блоком: при переносе уходят на новую строку вместе */
    `<span class="pager-current__levels"><span>· ${noun === 'тема' ? 'уровень' : 'уровни'}</span>` +
    curLv.map(l => `<span class="lvl-tag" title="${LEVELS[l]}">${l}</span>`).join('') + '</span>';
  const frag = document.createDocumentFragment(); frag.append(here, nav);
  if (noun === 'тема') { const lv = levelPager(idx, arr, idOf, titleOf); if (lv) frag.append(lv); }
  return frag;
}

/* Компактный ряд под навигацией: ближайшие темы уровня открытой темы назад и вперед, показывается, только когда
   сосед по порядку книги другого уровня (и обычная навигация увела бы читателя с его уровня). */
function levelPager(idx, arr, idOf, titleOf) {
  const level = arr[idx].level;
  const before = arr.slice(0, idx).reverse().find(x => x.level === level);
  const after = arr.slice(idx + 1).find(x => x.level === level);
  const prev = before && before !== arr[idx - 1] ? before : null;
  const next = after && after !== arr[idx + 1] ? after : null;
  if (!prev && !next) return null;
  const box = el('nav', 'pager-level'); box.setAttribute('aria-label', `Темы уровня ${level}`);
  box.innerHTML = `<span class="pager-level__label">Идти только по темам уровня <span class="lvl-tag lvl-tag--sm" title="${LEVELS[level]}">${level}</span></span>`;
  const link = (item, dir) => {
    const b = el('button', 'pager-level__link pager-level__link--' + dir); b.type = 'button';
    b.innerHTML = `<small class="pager-level__dir">${dir === 'prev' ? arrowHtml('prev') + ' Предыдущая' : 'Следующая ' + arrowHtml('next')}</small><span>${esc(titleOf(item))}</span>`;
    b.addEventListener('click', () => go(idOf(item)));
    box.append(b);
  };
  if (prev) link(prev, 'prev');
  if (next) link(next, 'next');
  return box;
}

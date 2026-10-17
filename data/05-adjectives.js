BOOK.push({ n: 5, id: 'adjectives', title: 'Степени сравнения прилагательных',
intro: 'Как образуются сравнительная и превосходная степени, какие есть исключения и устойчивые конструкции сравнения. В конце — разница между прилагательным и наречием.',
topics: [

{ id: 'adj-degrees', level: 'A2', title: 'Образование степеней сравнения', sub: 'big – bigger – the biggest',
  rule: `
<p>Сравнительная степень сравнивает два предмета (с <i>than</i>), превосходная выделяет один из группы (с <i>the</i>).</p>
${T(["Тип прилагательного", "Сравнительная", "Превосходная"], [
  ["односложные", "<i>cold → cold<b>er</b></i>", "<i><b>the</b> cold<b>est</b></i>"],
  ["оканчиваются на <i>-e</i>", "<i>nice → nice<b>r</b></i>", "<i><b>the</b> nice<b>st</b></i>"],
  ["краткий гласный + согласная", "<i>big → big<b>ger</b>, hot → hot<b>ter</b></i>", "<i><b>the</b> big<b>gest</b></i>"],
  ["двусложные на <i>-y</i>", "<i>easy → eas<b>ier</b>, happy → happ<b>ier</b></i>", "<i><b>the</b> eas<b>iest</b></i>"],
  ["двусложные и длиннее", "<i><b>more</b> interesting, <b>more</b> famous</i>", "<i><b>the most</b> interesting</i>"],
  ["меньшая степень", "<i><b>less</b> expensive</i>", "<i><b>the least</b> expensive</i>"]
])}
<h3>Исключения</h3>
${T(["", "Сравнительная", "Превосходная"], [
  ["<i>good / well</i>", "<i>better</i>", "<i>the best</i>"],
  ["<i>bad / badly</i>", "<i>worse</i>", "<i>the worst</i>"],
  ["<i>far</i>", "<i>farther / further</i>", "<i>the farthest / furthest</i>"],
  ["<i>much / many</i>", "<i>more</i>", "<i>the most</i>"],
  ["<i>little</i>", "<i>less</i>", "<i>the least</i>"],
  ["<i>old</i>", "<i>older / elder</i>", "<i>the oldest / eldest</i>"]
])}
${N("Нельзя сочетать оба способа: <i>more bigger</i>, <i>the most best</i> — ошибка. <i>elder / eldest</i> используется только о членах семьи: <i>my <b>elder</b> brother</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте прилагательное в сравнительную степень.', items: [
      ["Moscow is ___ (big) than Tver.", "bigger"], ["Today is ___ (hot) than yesterday.", "hotter"],
      ["This task is ___ (easy) than the last one.", "easier"], ["My English is ___ (good) now than a year ago.", "better"],
      ["A plane is ___ (fast) than a train.", "faster"], ["This book is ___ (interesting) than that one.", "more interesting"],
      ["The weather is ___ (bad) today than yesterday.", "worse"], ["Your bag is ___ (heavy) than mine.", "heavier"],
      ["She is ___ (beautiful) than her sister.", "more beautiful"], ["Is Kazan ___ (far) from here than Samara?", "farther|further"],
      ["This hotel is ___ (cheap) than that one.", "cheaper"], ["He is ___ (happy) now.", "happier"]
    ]},
    { type: 'gap', task: 'Поставьте прилагательное в превосходную степень (с артиклем).', items: [
      ["It was ___ (bad) day of my life.", "the worst"], ["Everest is ___ (high) mountain in the world.", "the highest"],
      ["This is ___ (interesting) book I've ever read.", "the most interesting"], ["She is ___ (good) student in the class.", "the best"],
      ["July is ___ (hot) month of the year.", "the hottest"], ["Who is ___ (old) person in your family?", "the oldest|the eldest"],
      ["That was ___ (funny) film I've ever seen.", "the funniest"], ["This is ___ (expensive) restaurant in town.", "the most expensive"],
      ["Vatican City is ___ (small) country in the world.", "the smallest"], ["It's ___ (easy) exercise in the book.", "the easiest"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мой брат старше меня.", "My brother is older than me.|My brother is older than I am.|My brother is older than I."],
      ["Это самый лучший день в моей жизни.", "This is the best day of my life.|This is the best day in my life.|It's the best day of my life.|It is the best day of my life."],
      ["Сегодня холоднее, чем вчера.", "It is colder today than yesterday.|Today is colder than yesterday.|It's colder today than yesterday.|It's colder today than it was yesterday.|It is colder today than it was yesterday."],
      ["Эта задача труднее.", "This task is more difficult.|This task is harder.|This problem is more difficult.|This problem is harder."],
      ["Это самое дешевое кафе в городе.", "This is the cheapest cafe in town.|This is the cheapest café in town.|This is the cheapest cafe in the city.|It's the cheapest cafe in town."]
    ]}
  ]},

{ id: 'adj-constructions', level: 'B1', title: 'Сравнительные конструкции', sub: 'as … as, the more … the better',
  rule: `
<p>Кроме <i>than</i> есть несколько конструкций, которые часто встречаются в упражнениях и в речи.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>as + прил. + as</i>", "такой же, как", "<i>She is <b>as tall as</b> her mother.</i>"],
  ["<i>not as / not so + прил. + as</i>", "не такой, как", "<i>It is<b>n't as cold as</b> yesterday.</i>"],
  ["<i>the + сравн., the + сравн.</i>", "чем…, тем…", "<i><b>The more</b> you read, <b>the more</b> you know.</i>"],
  ["<i>сравн. + and + сравн.</i>", "все более и более", "<i>It's getting <b>colder and colder</b>.</i>"],
  ["<i>much / far / a lot + сравн.</i>", "гораздо, намного", "<i>This car is <b>much faster</b>.</i>"],
  ["<i>a bit / a little / slightly + сравн.</i>", "чуть-чуть", "<i>I feel <b>a bit better</b>.</i>"],
  ["<i>twice / three times as … as</i>", "в два / три раза", "<i>It's <b>twice as big as</b> mine.</i>"],
  ["<i>the same as / different from</i>", "такой же / другой", "<i>My bag is <b>the same as</b> yours.</i>"]
])}
${N("<i>very</i> не ставится перед сравнительной степенью: <i>much better</i>, а не <i>very better</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["This is ___ restaurant in town.", ["the best", "the better", "the most good"]], ["He runs ___ than me.", ["faster", "more fast", "fastest"]],
      ["The more you practise, ___ you get.", ["the better", "better", "the best"]], ["My room is not as ___ as yours.", ["big", "bigger", "biggest"]],
      ["Which river is ___, the Volga or the Thames?", ["longer", "the longer", "more long"]], ["This flat is ___ bigger than our old one.", ["much", "very", "more"]],
      ["It's getting ___.", ["darker and darker", "dark and darker", "more and more dark"]], ["His car is ___ mine.", ["the same as", "the same like", "same as"]],
      ["Your house is three times ___ mine.", ["as big as", "bigger as", "as bigger than"]], ["I feel ___ today.", ["a bit better", "very better", "a bit more good"]]
    ]},
    { type: 'gap', task: 'Закончите предложения.', items: [
      ["Tom is 180 cm, Mike is 180 cm. → Tom is as ___ as Mike.", "tall"],
      ["My sister is 20, I am 18. → I am not as ___ as my sister.", "old"],
      ["The faster you drive, the ___ (dangerous) it is.", "more dangerous"],
      ["Prices are going up. Life is getting more and ___ expensive.", "more"],
      ["This test is ___ easier than the last one. (намного)", "much|far|a lot"],
      ["My phone is different ___ yours.", "from|to|than"],
      ["The sooner we start, the ___ (soon) we'll finish.", "sooner"],
      ["The film was not as good ___ the book.", "as"]
    ]}
  ]},

{ id: 'adj-adverbs', level: 'B1', title: 'Прилагательное или наречие', sub: 'quick – quickly, hard – hardly',
  rule: `
<p>Прилагательное описывает существительное (<i>какой?</i>), наречие описывает действие (<i>как?</i>). Большинство наречий образуется с помощью <i>-ly</i>.</p>
${T(["Прилагательное", "Наречие", "Пример"], [
  ["<i>quick</i>", "<i>quick<b>ly</b></i>", "<i>He is a quick runner. He runs <b>quickly</b>.</i>"],
  ["<i>careful</i>", "<i>careful<b>ly</b></i>", "<i>Drive <b>carefully</b>!</i>"],
  ["<i>happy</i>", "<i>happ<b>ily</b></i>", "<i>They lived <b>happily</b>.</i>"],
  ["<i>good</i>", "<i><b>well</b></i>", "<i>She is a good singer. She sings <b>well</b>.</i>"],
  ["<i>fast, hard, late, early</i>", "те же: <i>fast, hard, late, early</i>", "<i>He works <b>hard</b>. Don't come <b>late</b>.</i>"]
])}
<h3>Ловушки</h3>
${E([
  ["He works <b>hard</b>. — He <b>hardly</b> works.", "Работает усердно. — Почти не работает."],
  ["I came <b>late</b>. — I haven't seen him <b>lately</b>.", "Пришел поздно. — Не видел его в последнее время."],
  ["She looks <b>happy</b>. The soup smells <b>good</b>.", "После look, feel, smell, taste, sound, seem, be — прилагательное."]
])}
${N("<i>friendly, lovely, lonely, silly</i> — прилагательные, хотя и на <i>-ly</i>. Наречие от них: <i>in a friendly way</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите прилагательное или наречие.', items: [
      ["Please drive ___. The road is wet.", ["carefully", "careful"]], ["She speaks English very ___.", ["well", "good"]],
      ["This soup tastes ___.", ["good", "well"]], ["He is a ___ driver.", ["careful", "carefully"]],
      ["I can ___ hear you. Speak louder!", ["hardly", "hard"]], ["They work very ___.", ["hard", "hardly"]],
      ["You look ___ today. What happened?", ["sad", "sadly"]], ["She smiled ___.", ["happily", "happy"]],
      ["The train arrived ___.", ["late", "lately"]], ["He answered the question ___.", ["correctly", "correct"]]
    ]},
    { type: 'gap', task: 'Образуйте наречие от прилагательного в скобках.', items: [
      ["She sings ___ (beautiful).", "beautifully"], ["He ran ___ (fast) to catch the bus.", "fast"],
      ["Please speak ___ (slow).", "slowly"], ["The children played ___ (quiet).", "quietly"],
      ["You did it very ___ (good)!", "well"], ["He opened the box ___ (careful).", "carefully"],
      ["I ___ (easy) found the house.", "easily"], ["We got up ___ (early) this morning.", "early"]
    ]}
  ]}
]});

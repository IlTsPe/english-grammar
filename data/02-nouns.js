BOOK.push({ n: 2, id: 'nouns', title: 'Существительное',
intro: 'Множественное число, притяжательный падеж и деление существительных на исчисляемые и неисчисляемые — от этого зависят и артикли, и выбор <i>much / many</i>.',
topics: [

{ id: 'noun-plural', level: 'A1', title: 'Множественное число', sub: 'boxes, babies, children',
  rule: `
<p>Обычно множественное число образуется окончанием <i>-s</i>: <i>book → books</i>. Остальные правила касаются написания и исключений.</p>
${T(["Правило", "Пример"], [
  ["после <i>s, ss, sh, ch, x, z</i> пишем <i>-es</i>", "<i>bus → bus<b>es</b>, watch → watch<b>es</b>, box → box<b>es</b></i>"],
  ["согласная + <i>o</i> → <i>-es</i> (есть исключения)", "<i>tomato → tomato<b>es</b>, hero → hero<b>es</b>; но photo<b>s</b>, piano<b>s</b>, radio<b>s</b></i>"],
  ["согласная + <i>y</i> → <i>-ies</i>", "<i>city → cit<b>ies</b>, baby → bab<b>ies</b></i>"],
  ["гласная + <i>y</i> → <i>-s</i>", "<i>boy → boy<b>s</b>, day → day<b>s</b></i>"],
  ["<i>f / fe</i> → <i>-ves</i>", "<i>knife → kni<b>ves</b>, leaf → lea<b>ves</b>, wife → wi<b>ves</b>; но roof<b>s</b>, chief<b>s</b></i>"]
])}
<h3>Исключения</h3>
${T(["Единственное", "Множественное"], [
  ["<i>man, woman</i>", "<i>men, women</i>"],
  ["<i>child</i>", "<i>children</i>"],
  ["<i>foot, tooth, goose</i>", "<i>feet, teeth, geese</i>"],
  ["<i>mouse</i>", "<i>mice</i>"],
  ["<i>ox</i>", "<i>oxen</i>"],
  ["<i>person</i>", "<i>people</i>"],
  ["<i>sheep, fish, deer, aircraft</i>", "не меняются"]
])}
${N("В сложных словах с <i>man / woman</i> меняется эта часть: <i>policeman → policemen</i>, <i>Englishwoman → Englishwomen</i>. У составных через дефис меняется главное слово: <i>passer-by → passers-by</i>.")}
<h3>Род существительных</h3>
<p>Грамматического рода у английских существительных нет. Но у некоторых названий людей и животных есть отдельное слово для женского рода — чаще всего с суффиксом <i>-ess</i>.</p>
${T(["Мужской род", "Женский род"], [
  ["<i>actor, waiter, host, prince, lion</i>", "<i>actr<b>ess</b>, waitr<b>ess</b>, host<b>ess</b>, princ<b>ess</b>, lion<b>ess</b></i>"],
  ["<i>hero, emperor, tiger</i>", "<i>hero<b>ine</b>, emp<b>ress</b>, tig<b>ress</b></i>"],
  ["<i>man, boy, father, brother, uncle, king, husband, nephew</i>", "<i>woman, girl, mother, sister, aunt, queen, wife, niece</i>"]
])}
${N("Сейчас многие профессии называют одним словом для мужчин и женщин: <i>a doctor, a teacher, a writer</i>. Вместо <i>poetess</i> и <i>authoress</i> обычно говорят <i>poet</i> и <i>author</i>, а <i>actor</i> все чаще говорят и о женщинах.")}`,
  ex: [
    { type: 'gap', task: 'Напишите форму множественного числа.', items: [
      ["box → ___", "boxes"], ["baby → ___", "babies"], ["day → ___", "days"], ["knife → ___", "knives"],
      ["child → ___", "children"], ["tomato → ___", "tomatoes"], ["photo → ___", "photos"], ["foot → ___", "feet"],
      ["sheep → ___", "sheep"], ["woman → ___", "women"], ["watch → ___", "watches"], ["person → ___", "people|persons"],
      ["mouse → ___", "mice"], ["leaf → ___", "leaves"], ["key → ___", "keys"], ["policeman → ___", "policemen"]
    ]},
    { type: 'gap', task: 'Поставьте существительное во множественное число.', items: [
      ["This child is clever. → These ___ are clever.", "children"],
      ["That man is a doctor. → Those ___ are doctors.", "men"],
      ["My tooth hurts. → My ___ hurt.", "teeth"],
      ["The leaf is yellow. → The ___ are yellow.", "leaves"],
      ["This city is old. → These ___ are old.", "cities"],
      ["The bus is late. → The ___ are late.", "buses"],
      ["A fish is swimming. → Many ___ are swimming.", "fish"],
      ["The goose is white. → The ___ are white.", "geese"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Эти дети — мои племянники.", "These children are my nephews.|These kids are my nephews."],
      ["У меня болят зубы.", "My teeth hurt.|My teeth ache.|I have toothache.|I have a toothache."],
      ["На столе три ножа.", "There are three knives on the table."],
      ["Эти женщины — учителя.", "These women are teachers."],
      ["На лугу много овец.", "There are many sheep in the field.|There are a lot of sheep in the field.|There are many sheep in the meadow.|There are a lot of sheep in the meadow."]
    ]},
    { type: 'gap', task: 'Напишите существительное женского рода.', items: [
      ["actor → ___", "actress"], ["waiter → ___", "waitress"], ["host → ___", "hostess"], ["prince → ___", "princess"],
      ["lion → ___", "lioness"], ["hero → ___", "heroine"], ["emperor → ___", "empress"], ["tiger → ___", "tigress"],
      ["king → ___", "queen"], ["husband → ___", "wife"], ["nephew → ___", "niece"], ["uncle → ___", "aunt"]
    ]}
  ]},

{ id: 'noun-possessive', level: 'A1', title: 'Притяжательный падеж', sub: "Kate's bag, my parents' house",
  rule: `
<p>Принадлежность человеку или животному обычно выражают окончанием <i>'s</i>. Принадлежность предмету — предлогом <i>of</i>.</p>
${T(["Случай", "Как образуется", "Пример"], [
  ["единственное число", "<i>+ 's</i>", "<i><b>Kate's</b> bag, my <b>brother's</b> car</i>"],
  ["множественное на <i>-s</i>", "только апостроф <i>'</i>", "<i>my <b>parents'</b> house, the <b>girls'</b> room</i>"],
  ["неправильное множественное", "<i>+ 's</i>", "<i>the <b>children's</b> toys, <b>women's</b> clothes</i>"],
  ["два владельца вместе", "<i>'s</i> у последнего", "<i><b>Tom and Ann's</b> flat</i> — общая квартира"],
  ["время и расстояние", "<i>+ 's</i>", "<i><b>today's</b> paper, a <b>week's</b> holiday, a <b>mile's</b> walk</i>"],
  ["предметы", "<i>of</i>", "<i>the roof <b>of the house</b>, the end <b>of the film</b></i>"]
])}
${E([
  ["I'm going to <b>the dentist's</b>.", "Я иду к зубному (в кабинет зубного)."],
  ["We had dinner at <b>my aunt's</b>.", "Мы ужинали у тети (дома у тети)."]
])}
${N("Не путайте: <i>the boy's toys</i> — игрушки одного мальчика, <i>the boys' toys</i> — игрушки нескольких мальчиков.")}`,
  ex: [
    { type: 'gap', task: 'Образуйте притяжательный падеж слова в скобках.', items: [
      ["This is ___ (Tom) bike.", "Tom's"], ["The ___ (girls) bedroom is upstairs.", "girls'"],
      ["Where are the ___ (children) coats?", "children's"], ["My ___ (sister) husband is a pilot.", "sister's"],
      ["Have you read ___ (today) newspaper?", "today's"], ["My ___ (parents) friends came to dinner.", "parents'"],
      ["This shop sells ___ (women) shoes.", "women's"], ["We stayed at my ___ (uncle) for a week.", "uncle's"],
      ["I need a ___ (week) rest.", "week's"], ["The ___ (students) answers were correct.", "students'"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Do you know ___?", ["the name of this street", "this street's name's", "the street name of"]], ["It's ___ birthday today.", ["my mother's", "my mothers", "of my mother"]],
      ["These are ___ toys. (у нескольких детей)", ["the kids'", "the kid's", "the kids's"]], ["We went to ___ yesterday.", ["the doctor's", "the doctors", "doctor's the"]],
      ["___ wedding was beautiful. (их общая свадьба)", ["Ann and Mike's", "Ann's and Mike's", "Ann and Mike"]], ["I liked ___.", ["the end of the film", "the film's end's", "the end film"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это машина моего брата.", "This is my brother's car.|It is my brother's car.|It's my brother's car."],
      ["Комната девочек наверху.", "The girls' room is upstairs."],
      ["Где игрушки детей?", "Where are the children's toys?"],
      ["Я был у врача.", "I was at the doctor's.|I have been to the doctor's.|I've been to the doctor's."],
      ["Мне нравится конец этой книги.", "I like the end of this book."]
    ]}
  ]},

{ id: 'noun-countable', level: 'A2', title: 'Исчисляемые и неисчисляемые', sub: 'an apple, some bread, a piece of advice',
  rule: `
<p><b>Исчисляемые</b> существительные можно посчитать: <i>an apple, two apples</i>. <b>Неисчисляемые</b> обозначают вещества, массы и абстрактные понятия: у них нет множественного числа и они не употребляются с <i>a / an</i>.</p>
${T(["Неисчисляемые", "Как посчитать"], [
  ["<i>water, milk, tea, juice</i>", "<i>a glass of water, a cup of tea, a bottle of milk</i>"],
  ["<i>bread, cheese, meat, butter</i>", "<i>a loaf of bread, a piece of cheese, a kilo of meat</i>"],
  ["<i>sugar, salt, rice</i>", "<i>a spoonful of sugar, a packet of rice</i>"],
  ["<i>advice, information, news, music, work</i>", "<i>a piece of advice, a piece of information, a piece of music</i>"],
  ["<i>money, furniture, luggage, homework</i>", "<i>a piece of furniture, two pieces of luggage</i>"],
  ["<i>weather, progress, fun, traffic</i>", "—"]
])}
<h3>Согласование с глаголом</h3>
${E([
  ["The news <b>is</b> good.", "Новости хорошие — глагол в единственном числе."],
  ["Your money <b>is</b> on the table.", "Деньги — неисчисляемое, is."],
  ["My trousers <b>are</b> new.", "Парные предметы — всегда множественное: trousers, jeans, glasses, scissors."]
])}
${N("Некоторые слова бывают и теми и другими с разным смыслом: <i>a glass</i> (стакан) — <i>glass</i> (стекло); <i>a paper</i> (газета) — <i>paper</i> (бумага); <i>a hair</i> (волосок) — <i>hair</i> (волосы).")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The news ___ very good today.", ["is", "are"]], ["Can you give me ___?", ["some advice", "an advice", "advices"]],
      ["My new jeans ___ too long.", ["are", "is"]], ["I need ___ about the course.", ["some information", "an information", "informations"]],
      ["Her hair ___ very long.", ["is", "are"]], ["We bought ___ for the new flat.", ["some furniture", "a furniture", "furnitures"]],
      ["I'd like ___, please.", ["a cup of tea", "a tea cup of", "a teas"]], ["How much ___ do you have?", ["luggage", "luggages", "a luggage"]],
      ["Where ___ my glasses?", ["are", "is"]], ["The weather ___ terrible yesterday.", ["was", "were"]]
    ]},
    { type: 'gap', task: 'Впишите слово-измеритель: glass, piece, loaf, cup, bar, bottle, kilo.', items: [
      ["a ___ of bread", "loaf|piece"], ["a ___ of chocolate", "bar|piece"], ["a ___ of advice", "piece"],
      ["a ___ of water", "glass|bottle|cup"], ["a ___ of coffee", "cup|kilo"], ["a ___ of wine", "bottle|glass"],
      ["a ___ of potatoes", "kilo"], ["a ___ of furniture", "piece"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это хорошая новость.", "This is good news.|It is good news.|It's good news.|That's good news.|That is good news."],
      ["Мои деньги в сумке.", "My money is in the bag.|My money is in my bag."],
      ["Дай мне совет.", "Give me some advice.|Give me a piece of advice.|Give me advice."],
      ["Где мои очки?", "Where are my glasses?"],
      ["Купи буханку хлеба, пожалуйста.", "Buy a loaf of bread, please.|Please buy a loaf of bread."]
    ]}
  ]}
]});

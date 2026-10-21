BOOK.push({ n: 1, id: 'articles', title: 'Артикль',
intro: 'Самый большой раздел сборника. Сначала разберите, когда нужен <b>a / an</b>, когда <b>the</b>, а когда артикль не ставится; затем — оборот <i>there is</i>, географические названия и устойчивые выражения.',
topics: [

{ id: 'art-a-an', level: 'A1', title: 'Неопределенный артикль a / an', sub: 'a book, an apple',
  rule: `
<p>Неопределенный артикль <i>a / an</i> произошел от числительного <i>one</i> и сохраняет значение «один, какой-то». Он ставится только перед <b>исчисляемым существительным в единственном числе</b>.</p>
${T(["Когда", "Пример", "Перевод"], [
  ["предмет упоминается впервые", "<i>I have <b>a</b> dog.</i>", "У меня есть собака."],
  ["один из многих, любой", "<i>Give me <b>a</b> pen, please.</i>", "Дай мне ручку (какую-нибудь)."],
  ["профессия, характеристика (кто это? что это?)", "<i>She is <b>a</b> doctor. It is <b>a</b> cat.</i>", "Она врач. Это кошка."],
  ["после <i>what</i> в восклицании", "<i>What <b>a</b> nice day!</i>", "Какой хороший день!"],
  ["в значении «один» или «в» (раз в неделю)", "<i>twice <b>a</b> week, <b>an</b> hour ago</i>", "дважды в неделю, час назад"]
])}
<h3>a или an</h3>
<p>Выбор зависит от первого <b>звука</b> следующего слова, а не от буквы.</p>
${E([
  ["<b>a</b> book, <b>a</b> university [ju:], <b>a</b> European", "перед согласным звуком"],
  ["<b>an</b> apple, <b>an</b> egg, <b>an</b> hour [aʊə], <b>an</b> honest man", "перед гласным звуком"],
  ["<b>a</b> big apple, <b>an</b> old house", "важен звук слова, которое идет сразу за артиклем"]
])}
${N("Если перед существительным стоит притяжательное или указательное местоимение (<i>my, his, this, that</i>) или <i>'s</i>, артикль не нужен: <i>my book</i>, <i>this cat</i>, <i>Tom's car</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a или an.', items: [
      ["This is ___ apple.", "an"], ["I have ___ brother.", "a"], ["It is ___ old house.", "an"],
      ["She is ___ engineer.", "an"], ["He is ___ good pupil.", "a"], ["I'll be back in ___ hour.", "an"],
      ["My sister studies at ___ university.", "a"], ["What ___ interesting film!", "an"],
      ["We go to the gym twice ___ week.", "a"], ["He is ___ honest man.", "an"], ["There is ___ umbrella in the hall.", "an"],
      ["It's ___ useful book.", "a"]
    ]},
    { type: 'choice', task: 'Нужен ли артикль a / an? Выберите вариант.', items: [
      ["This is ___ pen.", ["a", "an", "—"]], ["This is ___ pen. (моя ручка)", ["my", "a my", "the my"]],
      ["Kate is ___ teacher.", ["a", "an", "—"]], ["I like ___ milk.", ["—", "a", "an"]],
      ["They are ___ students.", ["—", "a", "an"]], ["Is that ___ orange?", ["an", "a", "—"]],
      ["Tom has ___ uncle in London.", ["an", "a", "—"]], ["What ___ beautiful dress!", ["a", "an", "—"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это яблоко.", "This is an apple.|It is an apple.|It's an apple."],
      ["Мой папа — инженер.", "My father is an engineer.|My dad is an engineer."],
      ["У меня есть кошка.", "I have a cat.|I have got a cat.|I've got a cat."],
      ["Какой интересный фильм!", "What an interesting film!|What an interesting movie!"],
      ["Она студентка.", "She is a student."],
      ["Я пью кофе три раза в день.", "I drink coffee three times a day."]
    ]},
    /* на слух: стоит в конце массива, чтобы не сдвигать сохраненный прогресс остальных упражнений; at — место на экране */
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов. Обратите внимание, где звучит <i>a</i>, а где <i>an</i>.', items: [
      ["She is a doctor, and he is an engineer.", "Она врач, а он инженер."],
      ["I eat an apple and a banana every day.", "Каждый день я съедаю яблоко и банан."],
      ["He is an honest man and a useful friend.", "Он честный человек и полезный друг."]
    ]}
  ]},

{ id: 'art-the', level: 'A1', title: 'Определенный артикль the', sub: 'the sun, the book on the table',
  rule: `
<p>Определенный артикль <i>the</i> произошел от указательного местоимения <i>that</i> и значит «тот самый, понятно какой». Он ставится перед существительными в единственном и множественном числе, а также перед неисчисляемыми.</p>
<p>Произношение зависит от первого звука следующего слова: [ðə] перед согласным звуком (<i><b>the</b> sun, <b>the</b> book</i>) и [ði] перед гласным (<i><b>the</b> apple, <b>the</b> evening</i>). Важен звук, а не буква: <i><b>the</b> university</i> [ðə], <i><b>the</b> hour</i> [ði].</p>
${T(["Когда", "Пример"], [
  ["предмет уже упоминался", "<i>I have a cat. <b>The</b> cat is black.</i>"],
  ["из ситуации ясно, о чем речь", "<i>Close <b>the</b> door, please. Where is <b>the</b> teacher?</i>"],
  ["есть уточняющее определение", "<i><b>The</b> book on the table is mine. <b>The</b> man who called…</i>"],
  ["единственный в своем роде", "<i><b>the</b> sun, <b>the</b> moon, <b>the</b> sky, <b>the</b> world</i>"],
  ["превосходная степень, порядковые числительные", "<i><b>the</b> best, <b>the</b> first, <b>the</b> last</i>"],
  ["<i>the same, the only, the next, the following</i>", "<i>We live in <b>the</b> same house.</i>"],
  ["музыкальные инструменты", "<i>play <b>the</b> piano, <b>the</b> guitar</i>"],
  ["вся семья по фамилии", "<i><b>the</b> Smiths</i> — Смиты, семья Смит"]
])}
${E([
  ["There is a book on the table. <b>The</b> book is new.", "На столе книга. Книга новая."],
  ["Pass me <b>the</b> salt, please.", "Передай соль, пожалуйста."],
  ["It's <b>the</b> best day of my life.", "Это лучший день в моей жизни."]
])}
${N("Сравните: <i>I want <b>an</b> apple</i> (любое) и <i>I want <b>the</b> apple</i> (вот это, о котором мы говорим). Русский перевод одинаковый — подсказку дает контекст.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a, an или the.', items: [
      ["I have a dog. ___ dog is very clever.", "the"], ["___ sun is very bright today.", "the"],
      ["She bought ___ new dress yesterday. ___ dress is red.", ["a", "the"]],
      ["Open ___ window, please. It's hot.", "the"], ["My brother plays ___ violin.", "the"],
      ["This is ___ best cake I've ever eaten.", "the"], ["Is there ___ post office near here?", "a"],
      ["___ book on the shelf is my father's.", "the"], ["Monday is ___ first day of the week.", "the"],
      ["We saw ___ film yesterday. ___ film was boring.", ["a", "the"]], ["Look at ___ moon!", "the"]
    ]},
    { type: 'choice', task: 'Выберите артикль.', items: [
      ["Can you pass me ___ sugar, please?", ["the", "a", "—"]], ["There is ___ girl at the door.", ["a", "the", "—"]],
      ["___ girl at the door is my cousin.", ["The", "A", "—"]], ["We live on ___ third floor.", ["the", "a", "—"]],
      ["Who is ___ tallest boy in your class?", ["the", "a", "—"]], ["They have ___ son and two daughters.", ["a", "the", "—"]],
      ["___ Petrovs have just moved here.", ["The", "A", "—"]], ["He is ___ only child in the family.", ["the", "an", "—"]]
    ]},
    { type: 'text', task: 'Впишите артикли a, an или the в текст.', text: "Yesterday I went to ___ shop to buy ___ present for my mother. ___ shop was very big. I saw ___ beautiful scarf and ___ umbrella. ___ scarf was blue and ___ umbrella was yellow. I bought ___ scarf because my mother loves blue. ___ shop assistant was very kind.",
      answers: ["a|the", "a", "the", "a", "an", "the", "the", "the", "the"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Солнце светит.", "The sun is shining.|The sun shines."],
      ["Закрой дверь, пожалуйста.", "Close the door, please.|Please close the door.|Shut the door, please."],
      ["Моя сестра играет на пианино.", "My sister plays the piano."],
      ["Это самая высокая гора в мире.", "This is the highest mountain in the world.|It is the highest mountain in the world.|It's the highest mountain in the world."],
      ["У меня есть книга. Книга интересная.", "I have a book. The book is interesting.|I have got a book. The book is interesting.|I've got a book. The book is interesting."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have an apple, and the apple is red.", "У меня есть яблоко, и это яблоко красное."],
      ["The sun is shining, and the sky is blue.", "Светит солнце, и небо голубое."],
      ["My brother plays the guitar in the evening.", "Мой брат играет на гитаре по вечерам."]
    ]}
  ]},

{ id: 'art-zero', level: 'A2', title: 'Нулевой артикль', sub: 'I like music. Cats are clever.',
  rule: `
<p>Артикль не ставится, когда существительное употреблено в <b>общем смысле</b> или когда его место уже занято другим определителем.</p>
${T(["Когда артикля нет", "Пример"], [
  ["множественное число в общем смысле", "<i><b>Cats</b> are clever. I like <b>apples</b>.</i>"],
  ["неисчисляемые в общем смысле", "<i><b>Water</b> is important. I love <b>music</b>.</i>"],
  ["имена и фамилии", "<i><b>Anna</b>, <b>Mr Smith</b></i>"],
  ["большинство стран, городов, улиц", "<i><b>Russia</b>, <b>Moscow</b>, <b>Oxford Street</b></i>"],
  ["приемы пищи", "<i>have <b>breakfast</b> / <b>lunch</b> / <b>dinner</b></i>"],
  ["языки, виды спорта, учебные предметы", "<i>speak <b>English</b>, play <b>football</b>, study <b>maths</b></i>"],
  ["дни недели, месяцы", "<i>on <b>Monday</b>, in <b>May</b></i>"],
  ["есть местоимение, <i>'s</i> или числительное", "<i>my book, this pen, Tom's bag, two cats, page 10</i>"]
])}
<h3>Общий смысл и конкретный</h3>
${E([
  ["I like <b>music</b>.", "Музыку вообще."],
  ["I like <b>the music</b> in this film.", "Конкретную музыку — нужен the."],
  ["<b>Dogs</b> are friendly.", "Собаки вообще."],
  ["<b>The dogs</b> next door bark all night.", "Конкретные собаки соседей."]
])}
${N("Перед неисчисляемым существительным обычно не ставится <i>a / an</i>: <i>some water</i>, <i>a glass of water</i>, но не <i>a water</i>. Исключение — разговорное «одна порция»: <i>Can I have <b>a</b> coffee?</i> (= <i>a cup of coffee</i>).")}`,
  ex: [
    { type: 'gap', task: 'Впишите артикль a, an, the или «-», если он не нужен.', items: [
      ["I like ___ tea with lemon.", "-|0"], ["___ tea in this cup is cold.", "the"],
      ["We have ___ lunch at one o'clock.", "-|0"], ["She speaks ___ French very well.", "-|0"],
      ["___ elephants are very big animals.", "-|0"], ["___ elephant at our zoo is twenty years old.", "the"],
      ["Do you like ___ football?", "-|0"], ["My friend lives in ___ London.", "-|0"],
      ["He drinks ___ milk every morning.", "-|0"], ["Pass me ___ milk, please.", "the"],
      ["I'll see you on ___ Friday.", "-|0"], ["Open your books at ___ page 25.", "-|0"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ is good for your health.", ["Sport", "A sport", "The sports"]], ["I need ___ to write my essay.", ["some paper", "a paper", "the papers"]],
      ["Where is ___ I gave you?", ["the money", "money", "a money"]], ["___ are my favourite flowers.", ["Roses", "The rose", "A roses"]],
      ["We study ___ at school.", ["history", "the history", "a history"]], ["He had ___ for breakfast.", ["eggs and toast", "an eggs and toast", "the eggs and a toast"]],
      ["Look! ___ is falling.", ["Snow", "A snow", "Snows"]], ["Can I have ___ water, please?", ["a glass of", "a", "an"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я люблю музыку.", "I love music.|I like music."],
      ["Собаки — умные животные.", "Dogs are clever animals.|Dogs are smart animals.|Dogs are intelligent animals."],
      ["Мы завтракаем в восемь.", "We have breakfast at eight.|We have breakfast at 8.|We have breakfast at eight o'clock."],
      ["Он говорит по-английски.", "He speaks English."],
      ["Вода в стакане холодная.", "The water in the glass is cold."],
      ["Анна живет в Москве.", "Anna lives in Moscow."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Cats like milk, but my cat drinks only water.", "Кошки любят молоко, но моя кошка пьет только воду."],
      ["We have lunch at one and play football after school.", "Мы обедаем в час и играем в футбол после уроков."],
      ["I love coffee, but the coffee in this cafe is bad.", "Я люблю кофе, но кофе в этом кафе невкусный."]
    ]}
  ]},

{ id: 'art-there-is', level: 'A1', title: 'Оборот there is / there are', sub: 'There is a book on the table',
  rule: `
<p>Оборот <i>there is / there are</i> сообщает, что что-то <b>есть, находится</b> где-то. Русское предложение удобно переводить с конца: «На столе (есть) книга» → <i>There is a book on the table</i>.</p>
${T(["", "Единственное / неисчисляемое", "Множественное"], [
  ["Утверждение", "<i>There <b>is</b> a cat.</i>", "<i>There <b>are</b> two cats.</i>"],
  ["Отрицание", "<i>There <b>isn't</b> a cat. / There is <b>no</b> milk.</i>", "<i>There <b>aren't any</b> cats. / There are <b>no</b> cats.</i>"],
  ["Вопрос", "<i><b>Is there</b> a bank near here?</i>", "<i><b>Are there any</b> eggs?</i>"],
  ["Прошедшее", "<i>There <b>was</b> a party.</i>", "<i>There <b>were</b> many guests.</i>"]
])}
<h3>there is или it is, where is</h3>
${E([
  ["<b>There is</b> a book on the table.", "Сообщаем, что книга есть. После there is обычно a / an."],
  ["<b>The book is</b> on the table.", "Книга уже известна, говорим, где она. Нужен the."],
  ["<b>Where is</b> the book? — <b>It is</b> on the table.", "Вопрос о месте известного предмета."]
])}
${N("При перечислении глагол согласуется с <b>первым</b> существительным: <i>There <b>is</b> a sofa and two armchairs.</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите is или are.', items: [
      ["There ___ a park near my house.", "is"], ["There ___ two windows in the room.", "are"],
      ["There ___ some milk in the fridge.", "is"], ["___ there any eggs?", "are"],
      ["There ___ a sofa and two armchairs in the living room.", "is"], ["___ there a bank near here?", "is"],
      ["There ___ many students in the class.", "are"], ["There ___ no bread left.", "is"],
      ["There ___ two chairs and a table in the kitchen.", "are"], ["How many people ___ there in your family?", "are"]
    ]},
    { type: 'choice', task: 'There is / there are / there was / there were или it is?', items: [
      ["___ a lot of snow last winter.", ["There was", "There were", "It was"]], ["___ any shops in your street?", ["Are there", "Is there", "Is it"]],
      ["Where is my bag? — ___ under the table.", ["It is", "There is", "There are"]], ["___ a famous museum in our town.", ["There is", "It is", "There are"]],
      ["___ a lot of people at the concert yesterday.", ["There were", "There was", "They were"]], ["___ no time to lose.", ["There is", "It is", "There are"]],
      ["Look! ___ a bird on the roof.", ["There is", "It is", "There are"]], ["The book? ___ on the shelf.", ["It is", "There is", "There are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["На столе книга.", "There is a book on the table."],
      ["В нашем городе много парков.", "There are many parks in our town.|There are a lot of parks in our town.|There are many parks in our city.|There are a lot of parks in our city.|Our town has many parks.|Our town has a lot of parks.|Our city has many parks.|Our city has a lot of parks."],
      ["В холодильнике нет молока.", "There is no milk in the fridge.|There isn't any milk in the fridge."],
      ["Здесь есть банкомат?", "Is there a cash machine here?|Is there an ATM here?|Is there a cash machine near here?|Is there an ATM near here?"],
      ["Вчера в парке было много людей.", "There were many people in the park yesterday.|There were a lot of people in the park yesterday.|Yesterday there were many people in the park.|Yesterday there were a lot of people in the park."],
      ["Где моя ручка? — Она на столе.", "Where is my pen? — It is on the table.|Where is my pen? — It is on the desk."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["There is a small park and two cafes near my house.", "Рядом с моим домом есть небольшой парк и два кафе."],
      ["There aren't any eggs, but there is some milk.", "Яиц нет, но есть немного молока."],
      ["There were a lot of people at the station yesterday.", "Вчера на вокзале было много людей."]
    ]}
  ]},

{ id: 'art-geo', level: 'B1', title: 'Артикль с географическими названиями', sub: 'the Volga, Russia, the Alps',
  rule: `
<p>С географическими названиями артикль подчиняется традиции, а не логике. Правила удобнее запомнить таблицей.</p>
${T(["С артиклем the", "Без артикля"], [
  ["реки: <i><b>the</b> Volga, <b>the</b> Thames</i>", "континенты: <i>Europe, Asia, Africa</i>"],
  ["моря и океаны: <i><b>the</b> Black Sea, <b>the</b> Pacific</i>", "большинство стран: <i>Russia, France, China</i>"],
  ["горные цепи: <i><b>the</b> Alps, <b>the</b> Urals</i>", "отдельные горы: <i>Elbrus, Everest</i>"],
  ["группы островов: <i><b>the</b> Canaries</i>", "отдельные острова: <i>Sicily, Cuba</i>"],
  ["пустыни: <i><b>the</b> Sahara</i>", "города: <i>Moscow, London</i>"],
  ["страны со словами state, kingdom, republic: <i><b>the</b> USA, <b>the</b> UK</i>", "озера со словом lake: <i>Lake Baikal</i>"],
  ["страны во множественном числе: <i><b>the</b> Netherlands</i>", "улицы, площади, парки: <i>Oxford Street, Red Square, Hyde Park</i>"],
  ["стороны света: <i>in <b>the</b> north</i>", "аэропорты, вокзалы: <i>Heathrow</i>"]
])}
<h3>Здания и организации</h3>
${E([
  ["<b>the</b> Hermitage, <b>the</b> Bolshoi Theatre, <b>the</b> Ritz", "музеи, театры, отели — с the"],
  ["<b>the</b> Times, <b>the</b> BBC", "газеты и многие организации — с the"]
])}
${N("Озеро без слова <i>lake</i> употребляется с <i>the</i>: <i>the Baikal</i>, но <i>Lake Baikal</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите the или «-».', items: [
      ["___ Volga is the longest river in Europe.", "the"], ["She lives in ___ France.", "-|0"],
      ["We flew over ___ Atlantic Ocean.", "the"], ["___ Elbrus is the highest mountain in Russia.", "-|0"],
      ["They went skiing in ___ Alps.", "the"], ["My uncle works in ___ USA.", "the"],
      ["___ Lake Baikal is very deep.", "-|0"], ["We visited ___ Hermitage in St Petersburg.", "the"],
      ["___ Africa is a huge continent.", "-|0"], ["They walked along ___ Oxford Street.", "-|0"],
      ["___ Sahara is the largest hot desert.", "the"], ["We spent a week in ___ Netherlands.", "the"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I'd like to see ___.", ["the Thames", "Thames", "a Thames"]], ["He was born in ___.", ["Canada", "the Canada", "a Canada"]],
      ["We swam in ___.", ["the Black Sea", "Black Sea", "a Black Sea"]], ["They climbed ___.", ["Everest", "the Everest", "an Everest"]],
      ["Have you been to ___?", ["the United Kingdom", "United Kingdom", "an United Kingdom"]], ["Moscow is in ___ of Europe.", ["the east", "east", "an east"]],
      ["Let's meet in ___.", ["Red Square", "the Red Square", "a Red Square"]], ["We are going to ___ tonight.", ["the Bolshoi Theatre", "Bolshoi Theatre", "a Bolshoi Theatre"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Волга впадает в Каспийское море.", "The Volga flows into the Caspian Sea."],
      ["Байкал — самое глубокое озеро в мире.", "Lake Baikal is the deepest lake in the world.|Baikal is the deepest lake in the world.|The Baikal is the deepest lake in the world."],
      ["Мой брат живет в США.", "My brother lives in the USA.|My brother lives in the US.|My brother lives in the United States."],
      ["Альпы — красивые горы.", "The Alps are beautiful mountains."],
      ["Эрмитаж находится в Санкт-Петербурге.", "The Hermitage is in St Petersburg.|The Hermitage is in Saint Petersburg.|The Hermitage is situated in St Petersburg.|The Hermitage is located in St Petersburg."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Last summer we travelled from London to the Netherlands.", "Прошлым летом мы ездили из Лондона в Нидерланды."],
      ["The Thames flows through London into the North Sea.", "Темза течет через Лондон в Северное море."],
      ["My parents live in Russia, near Lake Baikal.", "Мои родители живут в России, недалеко от озера Байкал."]
    ]}
  ]},

{ id: 'art-phrases', level: 'A2', title: 'Устойчивые выражения с артиклями', sub: 'at home, go to bed, in the morning',
  rule: `
<p>Многие частые выражения нужно просто запомнить: в одних артикля нет, в других он обязателен.</p>
${T(["Без артикля", "С артиклем"], [
  ["<i>at home, at work, at school</i>", "<i>in <b>the</b> morning / afternoon / evening</i>"],
  ["<i>go to school, go to work, go to bed</i>", "<i>go to <b>the</b> cinema / theatre / shop</i>"],
  ["<i>at night, at noon, at midnight</i>", "<i>in <b>the</b> country, in <b>the</b> street</i>"],
  ["<i>by bus, by car, by train, on foot</i>", "<i>on <b>the</b> left / right, in <b>the</b> middle</i>"],
  ["<i>have breakfast / lunch / dinner</i>", "<i>at <b>the</b> weekend</i> (брит.)"],
  ["<i>go to hospital / prison / church</i> (по назначению)", "<i>tell <b>the</b> truth, play <b>the</b> piano</i>"],
  ["<i>from morning till night, day and night</i>", "<i>What's <b>the</b> time?</i>"]
])}
${E([
  ["She goes to <b>school</b> by <b>bus</b>.", "Она ездит в школу на автобусе."],
  ["Her mother went to <b>the school</b> to talk to the teacher.", "Мама пошла в школу поговорить с учителем."]
])}
${N("<i>go to school / hospital / church</i> без артикля — когда идут туда по прямому назначению (учиться, лечиться, молиться). Если просто приходят в здание — с <i>the</i>.")}`,
  ex: [
    { type: 'text', task: 'Впишите the или «-», если артикль не нужен.', text: "I get up at seven in ___ morning. I have ___ breakfast and go to ___ school by ___ bus. After school I go ___ home on ___ foot. In ___ evening I do my homework, and at ten I go to ___ bed. On Saturdays we often go to ___ cinema, and in summer we go to ___ country.",
      answers: ["the", "-|0", "-|0", "-|0", "-|0", "-|0", "the", "-|0", "the", "the"] },
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My father is ___ now.", ["at work", "at the work", "at a work"]], ["We usually go there ___.", ["by car", "by the car", "by a car"]],
      ["The bank is ___.", ["on the left", "on left", "in left"]], ["He was taken to ___ after the accident.", ["hospital", "in hospital", "the hospitals"]],
      ["Let's go to ___ tonight.", ["the theatre", "theatre", "a theatres"]], ["I can't sleep ___.", ["at night", "at the night", "in night"]],
      ["Always tell ___.", ["the truth", "truth", "a truth"]], ["Excuse me, what's ___?", ["the time", "time", "a time"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хожу в школу пешком.", "I go to school on foot.|I walk to school."],
      ["Вечером мы ходим в кино.", "In the evening we go to the cinema.|We go to the cinema in the evening.|In the evening we go to the movies."],
      ["Мой папа сейчас на работе.", "My father is at work now.|My dad is at work now."],
      ["Я ложусь спать в одиннадцать.", "I go to bed at eleven.|I go to bed at 11.|I go to bed at eleven o'clock."],
      ["Она ездит на работу на автобусе.", "She goes to work by bus.|She takes the bus to work."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["In the morning I go to work by bus.", "Утром я езжу на работу на автобусе."],
      ["At the weekend we often go to the cinema.", "По выходным мы часто ходим в кино."],
      ["He usually stays at home and goes to bed at midnight.", "Обычно он сидит дома и ложится спать в полночь."]
    ]}
  ]}
]});

BOOK.push({ n: 6, id: 'prepositions', title: 'Предлоги', pages: [111, 127],
intro: 'Предлоги места, времени и направления, а также глаголы и прилагательные, после которых требуется определенный предлог.',
topics: [

{ id: 'prep-place', level: 'A1', title: 'Предлоги места', sub: 'in, on, at, under, between',
  rule: `
<p>Основные предлоги места отвечают на вопрос <i>где?</i></p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>in</i>", "в, внутри (объем, пространство)", "<i><b>in</b> the box, <b>in</b> the room, <b>in</b> Moscow</i>"],
  ["<i>on</i>", "на (поверхности)", "<i><b>on</b> the table, <b>on</b> the wall, <b>on</b> the floor</i>"],
  ["<i>at</i>", "у, в (точка, место события)", "<i><b>at</b> the door, <b>at</b> the bus stop, <b>at</b> school</i>"],
  ["<i>under</i>", "под", "<i><b>under</b> the bed</i>"],
  ["<i>above / over</i>", "над", "<i>a lamp <b>above</b> the table</i>"],
  ["<i>behind / in front of</i>", "за / перед", "<i><b>behind</b> the house, <b>in front of</b> the school</i>"],
  ["<i>next to / near / by</i>", "рядом, около", "<i><b>next to</b> the window</i>"],
  ["<i>between / among</i>", "между двумя / среди многих", "<i><b>between</b> Tom and Ann, <b>among</b> the trees</i>"],
  ["<i>opposite</i>", "напротив", "<i><b>opposite</b> the bank</i>"]
])}
${E([
  ["<b>in</b> the street / <b>on</b> the street", "на улице (оба варианта: брит. и амер.)"],
  ["<b>on</b> the first floor, <b>on</b> the bus, <b>on</b> the left", "на этаже, в автобусе, слева"],
  ["<b>in</b> the picture, <b>in</b> the sky, <b>in</b> a car", "на картине, в небе, в машине"],
  ["<b>at</b> home, <b>at</b> work, <b>at</b> the cinema, <b>at</b> a party", "дома, на работе, в кино, на вечеринке"]
])}
${N("Русское «на» не всегда <i>on</i>: «на картине» — <i>in the picture</i>, «на улице» — <i>in the street</i>, «на концерте» — <i>at the concert</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите in, on или at.', items: [
      ["The cat is ___ the box.", "in"], ["There is a picture ___ the wall.", "on"],
      ["Somebody is ___ the door.", "at"], ["My parents are ___ work now.", "at"],
      ["We live ___ the third floor.", "on"], ["Look at the birds ___ the sky!", "in"],
      ["I'll wait for you ___ the bus stop.", "at"], ["She lives ___ London.", "in"],
      ["Who is the man ___ the picture?", "in"], ["The keys are ___ the table.", "on"],
      ["We met ___ a party.", "at"], ["He is sitting ___ the bus.", "on"]
    ]},
    { type: 'choice', task: 'Выберите предлог.', items: [
      ["The ball is ___ the chair.", ["under", "between", "among"]], ["The bank is ___ the post office and the café.", ["between", "among", "opposite of"]],
      ["There's a garden ___ the house.", ["behind", "behind of", "back"]], ["Our school is ___ the park.", ["opposite", "opposite to of", "in front"]],
      ["The car is parked ___ the shop.", ["in front of", "in front", "before of"]], ["I found my letter ___ the old papers.", ["among", "between", "at"]],
      ["The lamp is hanging ___ the table.", ["above", "on", "at"]], ["Sit ___ me, please.", ["next to", "next", "near to of"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Книга на столе.", "The book is on the table."],
      ["Кошка под кроватью.", "The cat is under the bed."],
      ["Мы живем на втором этаже.", "We live on the second floor."],
      ["Он ждет тебя на остановке.", "He is waiting for you at the bus stop.|He's waiting for you at the bus stop."],
      ["Магазин находится напротив школы.", "The shop is opposite the school.|The shop is across from the school."]
    ]}
  ]},

{ id: 'prep-time', level: 'A2', title: 'Предлоги времени', sub: 'at 5, on Monday, in May, for, since',
  rule: `
<p>Три главных предлога времени: <i>at</i> — точный момент, <i>on</i> — день, <i>in</i> — более длинный период.</p>
${T(["Предлог", "С чем", "Пример"], [
  ["<i>at</i>", "время по часам, праздники, выражения", "<i><b>at</b> 5 o'clock, <b>at</b> noon, <b>at</b> night, <b>at</b> Christmas, <b>at</b> the weekend</i>"],
  ["<i>on</i>", "дни и даты", "<i><b>on</b> Monday, <b>on</b> 9 May, <b>on</b> my birthday, <b>on</b> Friday morning</i>"],
  ["<i>in</i>", "месяцы, годы, сезоны, части дня", "<i><b>in</b> May, <b>in</b> 2010, <b>in</b> winter, <b>in</b> the morning</i>"],
  ["<i>in</i>", "через (о будущем)", "<i>I'll be back <b>in</b> ten minutes.</i>"],
  ["<i>for</i>", "в течение (длительность)", "<i><b>for</b> two hours, <b>for</b> a week</i>"],
  ["<i>since</i>", "с (момента)", "<i><b>since</b> 2015, <b>since</b> Monday</i>"],
  ["<i>during</i>", "во время (события)", "<i><b>during</b> the lesson</i>"],
  ["<i>till / until, by</i>", "до (продолжается) / к (не позже)", "<i>wait <b>till</b> 6; finish <b>by</b> 6</i>"],
  ["<i>from … to</i>", "с … до", "<i><b>from</b> 9 <b>to</b> 5</i>"]
])}
${N("Перед <i>this, next, last, every</i> предлог не ставится: <i>next week, last Monday, every day</i>, а не <i>on next Monday</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите at, on или in. Если предлог не нужен, поставьте «-».', items: [
      ["The film starts ___ 7 o'clock.", "at"], ["I was born ___ 2005.", "in"],
      ["We have English ___ Monday.", "on"], ["It's very cold here ___ winter.", "in"],
      ["What do you do ___ the weekend?", "at|on"], ["My birthday is ___ 15 March.", "on"],
      ["I usually read ___ the evening.", "in"], ["I'll see you ___ next week.", "-|0"],
      ["The shops are closed ___ Christmas Day.", "on"], ["Owls hunt ___ night.", "at"],
      ["I'll be ready ___ five minutes.", "in"], ["We met ___ last Friday.", "-|0"]
    ]},
    { type: 'choice', task: 'Выберите предлог.', items: [
      ["I've lived here ___ 2015.", ["since", "for", "from"]], ["We waited ___ two hours.", ["for", "since", "during"]],
      ["Don't talk ___ the lesson.", ["during", "for", "while"]], ["Please finish the report ___ Friday.", ["by", "till", "since"]],
      ["The shop is open ___ 9 to 6.", ["from", "since", "at"]], ["He slept ___ midday.", ["until", "by", "since"]],
      ["I haven't seen her ___ a long time.", ["for", "since", "during"]], ["See you ___ Saturday morning!", ["on", "in", "at"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Урок начинается в девять часов.", "The lesson starts at nine o'clock.|The lesson begins at nine o'clock.|The lesson starts at nine.|The lesson begins at nine."],
      ["Я родился в мае.", "I was born in May."],
      ["Увидимся в понедельник.", "See you on Monday."],
      ["Я живу здесь с 2010 года.", "I have lived here since 2010.|I've lived here since 2010.|I have been living here since 2010.|I've been living here since 2010."],
      ["Я вернусь через час.", "I will be back in an hour.|I'll be back in an hour.|I will come back in an hour.|I'll come back in an hour."]
    ]}
  ]},

{ id: 'prep-movement', level: 'A2', title: 'Предлоги направления', sub: 'to, into, out of, across, through',
  rule: `
<p>Предлоги направления отвечают на вопрос <i>куда? откуда?</i> и обычно стоят после глаголов движения.</p>
${T(["Предлог", "Значение", "Пример"], [
  ["<i>to</i>", "к, в (направление)", "<i>go <b>to</b> school, come <b>to</b> me</i>"],
  ["<i>from</i>", "от, из", "<i>a letter <b>from</b> Ann, come <b>from</b> Spain</i>"],
  ["<i>into / out of</i>", "в (внутрь) / из (наружу)", "<i>go <b>into</b> the room, get <b>out of</b> the car</i>"],
  ["<i>onto / off</i>", "на (поверхность) / с", "<i>jump <b>onto</b> the table, fall <b>off</b> the bike</i>"],
  ["<i>across</i>", "через (поверхность, с одной стороны на другую)", "<i>swim <b>across</b> the river</i>"],
  ["<i>through</i>", "через, сквозь (внутри чего-то)", "<i>walk <b>through</b> the forest</i>"],
  ["<i>along</i>", "вдоль, по", "<i>walk <b>along</b> the street</i>"],
  ["<i>past</i>", "мимо", "<i>drive <b>past</b> the station</i>"],
  ["<i>up / down</i>", "вверх / вниз", "<i>climb <b>up</b> the hill</i>"],
  ["<i>round / around</i>", "вокруг", "<i>travel <b>around</b> the world</i>"]
])}
${N("С <i>home</i> предлог <i>to</i> не ставится: <i>go <b>home</b>, come home</i>. С <i>arrive</i> — <i>in</i> или <i>at</i>, а не <i>to</i>: <i>arrive <b>in</b> Moscow, arrive <b>at</b> the station</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите предлог: to, into, out of, across, through, along, past, off или from.', items: [
      ["She took a pen ___ her bag.", "out of"], ["We walked ___ the forest.", "through"],
      ["He fell ___ his bike and hurt his knee.", "off"], ["They swam ___ the river.", "across"],
      ["Let's go ___ the cinema tonight.", "to"], ["The cat jumped ___ the box.", "into"],
      ["We walked ___ the river bank.", "along"], ["I got a letter ___ my grandmother.", "from"],
      ["The bus drove ___ our house without stopping.", "past"], ["Come ___ the window and look!", "to"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["We arrived ___ London at midnight.", ["in", "to", "at"]], ["Let's go ___.", ["home", "to home", "at home"]],
      ["The thief climbed ___ the window.", ["through", "across", "along"]], ["Get ___ the bus at the next stop.", ["off", "out", "from"]],
      ["They travelled ___ the world.", ["around", "across of", "through of"]], ["He came ___ the room and sat down.", ["into", "in to", "onto"]]
    ]}
  ]},

{ id: 'prep-dependent', level: 'B1', title: 'Глаголы и прилагательные с предлогами', sub: 'depend on, afraid of, good at',
  rule: `
<p>После многих глаголов и прилагательных нужен определенный предлог. Часто он не совпадает с русским — такие сочетания учат вместе.</p>
${T(["Глагол + предлог", "Прилагательное + предлог"], [
  ["<i>depend <b>on</b></i> — зависеть от", "<i>afraid <b>of</b></i> — бояться"],
  ["<i>listen <b>to</b></i> — слушать", "<i>good / bad <b>at</b></i> — хорош / плох в"],
  ["<i>look <b>at</b></i> — смотреть на", "<i>interested <b>in</b></i> — интересоваться"],
  ["<i>look <b>for</b></i> — искать", "<i>proud <b>of</b></i> — гордиться"],
  ["<i>wait <b>for</b></i> — ждать", "<i>fond <b>of</b></i> — любить"],
  ["<i>think <b>of / about</b></i> — думать о", "<i>angry <b>with</b></i> кого-то / <i><b>about</b></i> что-то"],
  ["<i>agree <b>with</b></i> — соглашаться с", "<i>famous <b>for</b></i> — знаменитый чем"],
  ["<i>pay <b>for</b></i> — платить за", "<i>different <b>from</b></i> — отличный от"],
  ["<i>laugh <b>at</b></i> — смеяться над", "<i>tired <b>of</b></i> — уставший от"],
  ["<i>belong <b>to</b></i> — принадлежать", "<i>married <b>to</b></i> — женат на, замужем за"]
])}
${N("Некоторые глаголы в английском не требуют предлога, хотя в русском он есть: <i>enter the room</i> (войти <b>в</b> комнату), <i>answer the question</i> (ответить <b>на</b> вопрос), <i>discuss the plan</i> (обсудить план, без about!).")}`,
  ex: [
    { type: 'gap', task: 'Впишите предлог.', items: [
      ["It depends ___ the weather.", "on"], ["Listen ___ me carefully.", "to"],
      ["I'm looking ___ my keys. Have you seen them?", "for"], ["She is afraid ___ dogs.", "of"],
      ["He is very good ___ maths.", "at"], ["Are you interested ___ history?", "in"],
      ["We are proud ___ our son.", "of"], ["I agree ___ you.", "with"],
      ["Who will pay ___ the tickets?", "for"], ["This town is famous ___ its old churches.", "for"],
      ["Don't laugh ___ him!", "at"], ["She is married ___ a doctor.", "to"],
      ["Wait ___ me here.", "for"], ["I'm tired ___ this noise.", "of"]
    ]},
    { type: 'choice', task: 'Нужен ли предлог? Выберите вариант.', items: [
      ["Please answer ___ my question.", ["—", "on", "to"]], ["We discussed ___ the plan.", ["—", "about", "on"]],
      ["She entered ___ the room.", ["—", "into", "in"]], ["This bag belongs ___ Mary.", ["to", "—", "with"]],
      ["I'm angry ___ you.", ["with", "on", "to"]], ["Look ___ this picture!", ["at", "on", "—"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я ищу свой телефон.", "I am looking for my phone.|I'm looking for my phone."],
      ["Она боится темноты.", "She is afraid of the dark.|She's afraid of the dark.|She is afraid of darkness."],
      ["Все зависит от тебя.", "Everything depends on you.|It all depends on you."],
      ["Он хорошо играет в шахматы (хорош в шахматах).", "He is good at chess.|He's good at chess."],
      ["Ответь на вопрос.", "Answer the question."]
    ]}
  ]}
]});

BOOK.push({ n: 11, id: 'participle', title: 'Причастие',
intro: 'Причастие настоящего времени (<i>-ing</i>, Participle I) и прошедшего (<i>V3</i>, Participle II): как определение, в причастных оборотах и в паре <i>boring / bored</i>.',
topics: [

{ id: 'part-forms', level: 'B1', title: 'Participle I и Participle II', sub: 'a running boy · a broken cup',
  rule: `
<p>У английского глагола две основные формы причастия.</p>
${T(["Форма", "Значение", "Пример", "Перевод"], [
  ["Participle I: <i>V-ing</i>", "активное, процесс", "<i>a <b>sleeping</b> child, the man <b>standing</b> at the door</i>", "спящий ребенок, человек, стоящий у двери"],
  ["Participle II: <i>V3</i>", "пассивное, результат", "<i>a <b>broken</b> cup, a letter <b>written</b> in pencil</i>", "разбитая чашка, письмо, написанное карандашом"],
  ["Perfect Participle: <i>having V3</i>", "действие раньше другого", "<i><b>Having finished</b> the work, he left.</i>", "закончив работу"]
])}
<h3>-ing или -ed: чувства</h3>
${T(["-ing: что вызывает чувство", "-ed: что чувствует человек"], [
  ["<i>The film was <b>boring</b>.</i> — скучный", "<i>I was <b>bored</b>.</i> — мне было скучно"],
  ["<i>The news is <b>surprising</b>.</i>", "<i>We were <b>surprised</b>.</i>"],
  ["<i>an <b>interesting</b> book</i>", "<i>I'm <b>interested</b> in books.</i>"],
  ["<i>a <b>tiring</b> day</i>", "<i>a <b>tired</b> man</i>"]
])}
${N("Одиночное причастие обычно стоит перед существительным, а причастие с зависимыми словами — после: <i>a <b>crying</b> baby</i>, но <i>the baby <b>crying</b> in the next room</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите -ing или -ed.', items: [
      ["The film was very ___.", ["boring", "bored"]], ["I was ___ during the lecture.", ["bored", "boring"]],
      ["The news was ___. Nobody expected it.", ["surprising", "surprised"]], ["She is ___ in art.", ["interested", "interesting"]],
      ["What an ___ story!", ["exciting", "excited"]], ["The children were ___ about the trip.", ["excited", "exciting"]],
      ["It was a long, ___ journey.", ["tiring", "tired"]], ["I'm ___ — I need to sleep.", ["exhausted", "exhausting"]],
      ["He was ___ by the question.", ["confused", "confusing"]], ["The instructions are very ___.", ["confusing", "confused"]]
    ]},
    { type: 'gap', task: 'Образуйте Participle I или Participle II от глагола в скобках.', items: [
      ["Look at the ___ (dance) girls!", "dancing"], ["I found a ___ (break) cup in the kitchen.", "broken"],
      ["The man ___ (sit) by the window is my teacher.", "sitting"], ["The book ___ (write) by him became famous.", "written"],
      ["We saw a ___ (burn) house.", "burning"], ["She bought a ___ (use) car.", "used"],
      ["The language ___ (speak) in Brazil is Portuguese.", "spoken"], ["Who is the girl ___ (talk) to Tom?", "talking"],
      ["I don't like ___ (boil) eggs.", "boiled"], ["The ___ (fall) leaves covered the path.", "fallen|falling"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Фильм был скучный.", "The film was boring.|The movie was boring."],
      ["Мне было скучно.", "I was bored."],
      ["Мальчик, читающий книгу, — мой брат.", "The boy reading a book is my brother.|The boy reading the book is my brother."],
      ["У меня разбитый телефон.", "I have a broken phone.|My phone is broken.|I've got a broken phone."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Be careful, there is a broken glass on the floor.", "Осторожно, на полу разбитый стакан."],
      ["Who is the man standing at the window?", "Кто этот мужчина, который стоит у окна?"],
      ["The lecture was so boring that half of the students fell asleep.", "Лекция была такой скучной, что половина студентов уснула."]
    ]}
  ]},

{ id: 'part-clauses', level: 'C1', title: 'Причастные обороты', sub: 'Having finished… · Built in 1890…',
  rule: `
<p>Причастный оборот заменяет придаточное предложение и делает текст компактнее.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>V-ing</i>", "активное, одновременное действие", "<i><b>Walking</b> along the street, I met a friend.</i>"],
  ["<i>Having + V3</i>", "активное, предшествующее действие", "<i><b>Having finished</b> the work, they went home.</i>"],
  ["<i>V3</i>", "пассивное значение", "<i><b>Built</b> in 1890, the house is now a museum.</i>"],
  ["<i>Not + V-ing</i>", "отрицание", "<i><b>Not knowing</b> what to say, I kept silent.</i>"],
  ["<i>When / while + V-ing</i>", "уточнение времени", "<i><b>While crossing</b> the street, be careful.</i>"]
])}
<h3>Вместо относительного придаточного</h3>
${E([
  ["The children <b>playing</b> in the garden are my nephews.", "= who are playing"],
  ["Most goods <b>made</b> in this factory are exported.", "= which are made"]
])}
${N("У оборота и главного предложения должно быть <b>одно подлежащее</b>. <i>Walking home, the rain started</i> — ошибка: получается, что домой шел дождь. Правильно: <i>Walking home, <b>I</b> got caught in the rain.</i>")}
<h3>Независимый причастный оборот</h3>
<p>Иногда у оборота есть свое подлежащее — существительное или местоимение перед причастием. Такой оборот называют независимым. Он характерен для книжной и официальной речи и отделяется запятой. На русский его обычно переводят придаточным с «так как», «когда», «после того как» или деепричастием.</p>
${E([
  ["<b>The weather being</b> fine, we went for a walk.", "Так как погода была хорошая, мы пошли гулять."],
  ["<b>The work having been done</b>, they went home.", "Когда работа была сделана, они пошли домой."],
  ["<b>It being</b> Sunday, the shops were closed.", "Так как было воскресенье, магазины были закрыты."],
  ["She sat by the fire, <b>her eyes closed</b>.", "Она сидела у огня, закрыв глаза."],
  ["<b>Weather permitting</b>, we'll start tomorrow.", "Если погода позволит, мы отправимся завтра."]
])}
${N("Это не та ошибка, о которой сказано выше: в независимом обороте подлежащее названо прямо (<i><b>The weather</b> being fine</i>), поэтому у главного предложения может быть свое подлежащее.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильную форму причастия.', items: [
      ["___ the letter, she burst into tears.", ["Having read", "Read", "Being read"]], ["___ in 1890, the building is now a museum.", ["Built", "Building", "Having built"]],
      ["___ what to say, I kept silent.", ["Not knowing", "Not known", "Knowing not"]], ["___ along the street, I met an old friend.", ["Walking", "Walked", "Having been walked"]],
      ["The man ___ to the manager is my uncle.", ["talking", "talked", "having talk"]], ["___ by the news, he couldn't sleep.", ["Shocked", "Shocking", "Having shocking"]],
      ["___ all his money, he had to borrow from friends.", ["Having spent", "Spent", "Being spent"]], ["___ the door, she went out.", ["Having locked", "Locked", "Being locked"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму причастия.', items: [
      ["The children ___ (play) in the garden are my nephews.", "playing"], ["Most of the goods ___ (make) in this factory are exported.", "made"],
      ["___ (finish) the work, they went home.", "having finished"], ["Not ___ (want) to wake him, I left quietly.", "wanting"],
      ["___ (write) in simple English, the book is easy to read.", "written"], ["___ (live) in Spain for years, she speaks Spanish fluently.", "having lived"],
      ["While ___ (cross) the road, look both ways.", "crossing"], ["The people ___ (invite) to the party were all students.", "invited"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя причастный оборот.', items: [
      ["Закончив работу, они пошли домой.", "Having finished the work, they went home.|Having finished work, they went home.|Having finished their work, they went home."],
      ["Не зная, что сказать, я молчал.", "Not knowing what to say, I kept silent.|Not knowing what to say, I was silent.|Not knowing what to say, I said nothing."],
      ["Построенный в 1890 году, этот дом теперь музей.", "Built in 1890, the house is now a museum.|Built in 1890, this house is now a museum."],
      ["Дети, играющие в саду, — мои племянники.", "The children playing in the garden are my nephews."]
    ]},
    { type: 'gap', task: 'Замените придаточное независимым причастным оборотом (впишите причастие).', items: [
      ["As the weather was fine, we went out. → The weather ___ fine, we went out.", "being"],
      ["When the work had been done, they went home. → The work ___ done, they went home.", "having been"],
      ["As it was Sunday, the shops were closed. → It ___ Sunday, the shops were closed.", "being"],
      ["As there was no bus, we walked. → There ___ no bus, we walked.", "being"],
      ["When the sun had set, it got cold. → The sun ___, it got cold.", "having set"],
      ["If the weather permits, we'll start tomorrow. → Weather ___, we'll start tomorrow.", "permitting"],
      ["As the door was locked, I couldn't get in. → The door ___ locked, I couldn't get in.", "being"],
      ["After the guests had left, we washed up. → The guests ___, we washed up.", "having left"]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Having finished the report, she went home.", "Закончив отчет, она пошла домой."],
      ["Built in 1890, the bridge is still the longest in the city.", "Построенный в 1890 году, мост до сих пор самый длинный в городе."],
      ["Walking along the river, we saw a lot of fishermen.", "Гуляя вдоль реки, мы видели много рыбаков."]
    ]}
  ]}
]});

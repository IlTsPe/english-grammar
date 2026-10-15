BOOK.push({ n: 11, id: 'participle', title: 'Причастие', pages: [305, 324],
intro: 'Причастие настоящего времени (<i>-ing</i>, Participle I) и прошедшего (<i>V3</i>, Participle II): как определение, в причастных оборотах и в паре <i>boring / bored</i>.',
topics: [

{ id: 'part-forms', level: 'B1', title: 'Participle I и Participle II', sub: 'a running boy · a broken cup',
  rule: `
<p>У английского глагола две основные формы причастия.</p>
${T(["Форма", "Значение", "Пример", "Перевод"], [
  ["Participle I: <i>V-ing</i>", "активное, процесс", "<i>a <b>sleeping</b> child, the man <b>standing</b> at the door</i>", "спящий ребёнок, стоящий у двери"],
  ["Participle II: <i>V3</i>", "пассивное, результат", "<i>a <b>broken</b> cup, a letter <b>written</b> in pencil</i>", "разбитая чашка, написанное письмо"],
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
${N("У оборота и главного предложения должно быть <b>одно подлежащее</b>. <i>Walking home, the rain started</i> — ошибка: получается, что домой шёл дождь. Правильно: <i>Walking home, <b>I</b> got caught in the rain.</i>")}`,
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
    ]}
  ]}
]});

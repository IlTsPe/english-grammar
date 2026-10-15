BOOK.push({ n: 18, id: 'tests', title: 'Контрольные упражнения', pages: [451, 455],
intro: 'Смешанные задания на материал всех разделов. Делайте их после того, как пройдете основные темы: здесь нет подсказки, какое правило нужно.',
topics: [

{ id: 'test-1', level: 'A2', title: 'Контрольная 1: артикли, местоимения, количество', sub: 'разделы 1–6',
  rule: `
<p>Перед контрольной быстро повторите ключевые правила разделов 1–6.</p>
${T(["Тема", "Главное правило"], [
  ["Артикли", "<i>a / an</i> — один из многих, впервые; <i>the</i> — известный, единственный; без артикля — общий смысл, имена, приемы пищи"],
  ["Множественное число", "<i>-s / -es / -ies / -ves</i> и исключения: <i>men, children, feet, teeth, mice, people</i>"],
  ["some / any / no", "<i>some</i> — утверждение и просьба; <i>any</i> — вопрос и отрицание; <i>no</i> — без not"],
  ["much / many", "<i>many</i> — исчисляемые; <i>much</i> — неисчисляемые; <i>a few / a little</i> — немного (достаточно)"],
  ["Степени сравнения", "<i>-er / the -est</i> для коротких, <i>more / the most</i> для длинных; <i>good — better — the best</i>"],
  ["Предлоги", "<i>at</i> 5 o'clock, <i>on</i> Monday, <i>in</i> May; <i>in</i> the box, <i>on</i> the table, <i>at</i> the door"]
])}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["My sister is ___ actress.", ["an", "a", "the"]], ["___ Moon goes round the Earth.", ["The", "A", "—"]],
      ["There aren't ___ students in the classroom.", ["any", "some", "no"]], ["How ___ sugar do you take?", ["much", "many", "few"]],
      ["This is ___ day of the year.", ["the longest", "the most long", "longest"]], ["We'll meet ___ Friday at 6 pm.", ["on", "in", "at"]],
      ["Two ___ are playing in the yard.", ["children", "childs", "childrens"]], ["Is this umbrella ___?", ["yours", "your", "you"]],
      ["I have ___ friends here, so I'm not lonely.", ["a few", "few", "a little"]], ["Nobody ___ the answer.", ["knows", "know", "don't know"]]
    ]},
    { type: 'text', task: 'Впишите пропущенные слова: артикли (или «-»), предлоги, местоимения, слова количества и степени сравнения.', text: "Last summer my family went ___ the seaside. We stayed ___ a small hotel near ___ beach. Every morning we had ___ breakfast on the terrace. My brother is ___ good swimmer, much ___ than me. One day he swam ___ the bay and back! There were very ___ tourists, so the beach was quiet. I bought ___ souvenirs for my friends. It was ___ best holiday of my life.",
      answers: ["to", "in|at", "the", "-|0", "a", "better", "across", "few", "some", "the"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["В нашем городе есть большой парк.", "There is a big park in our town.|There is a big park in our city.|There's a big park in our town."],
      ["У меня мало времени.", "I have little time.|I don't have much time.|I haven't got much time."],
      ["Это самая интересная книга, которую я читал.", "This is the most interesting book I have read.|This is the most interesting book I have ever read.|It's the most interesting book I've ever read.|This is the most interesting book that I have ever read."],
      ["Кто-то оставил сумку на скамейке.", "Somebody has left a bag on the bench.|Someone has left a bag on the bench.|Somebody left a bag on the bench.|Someone left a bag on the bench."]
    ]}
  ]},

{ id: 'test-2', level: 'B1', title: 'Контрольная 2: времена и пассив', sub: 'разделы 7–8',
  rule: `
<p>Повторите сводную таблицу времен в теме 7.14 и пассив в разделе 8.</p>
${T(["Подсказка в предложении", "Время"], [
  ["<i>every day, usually, often, never</i>", "Present Simple"],
  ["<i>now, at the moment, Look!</i>", "Present Continuous"],
  ["<i>yesterday, ago, last…, in 2010</i>", "Past Simple"],
  ["<i>at 5 yesterday, when he came, while</i>", "Past Continuous"],
  ["<i>just, already, yet, ever, since, for</i>", "Present Perfect"],
  ["<i>by the time (в прошлом), before</i>", "Past Perfect"],
  ["<i>tomorrow, next…, I think, I promise</i>", "will / going to"],
  ["исполнитель неважен, «был сделан»", "пассив: be + V3"]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужное время и залог.', items: [
      ["My brother ___ (work) in a hospital.", "works"], ["Look! The children ___ (dance).", "are dancing"],
      ["We ___ (move) to this town in 2018.", "moved"], ["I ___ (just / finish) my homework.", "have just finished"],
      ["While I ___ (cook), the phone rang.", "was cooking"], ["By the time we came, the concert ___ (start).", "had started|had already started"],
      ["This bridge ___ (build) in 1950.", "was built"], ["English ___ (speak) in many countries.", "is spoken"],
      ["I ___ (call) you when I get home.", "will call"], ["The new school ___ (build) now.", "is being built"],
      ["She ___ (live) here since she was born.", "has lived|has been living"], ["The letter ___ (already / send).", "has already been sent"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в нужное время.', text: "Tom ___ (be) a student. He ___ (study) at Moscow University. Last year he ___ (go) to London for a month. While he ___ (live) there, he ___ (meet) many interesting people. He ___ (never / be) abroad before that trip. Now he ___ (write) a book about his experience. He ___ (already / write) three chapters. Next summer he ___ (go) to New York.",
      answers: ["is", "studies", "went", "was living", "met", "had never been", "is writing", "has already written", "is going|is going to go|will go"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я уже прочитал эту книгу.", "I have already read this book.|I've already read this book.|I have read this book already."],
      ["Когда я вошел, они смотрели телевизор.", "When I came in, they were watching TV.|When I entered, they were watching TV.|They were watching TV when I came in."],
      ["Этот дом построили в прошлом году.", "This house was built last year."],
      ["Завтра я буду работать весь день.", "Tomorrow I will be working all day.|I will be working all day tomorrow.|I'll be working all day tomorrow."]
    ]}
  ]},

{ id: 'test-3', level: 'B2', title: 'Контрольная 3: косвенная речь, неличные формы, условные', sub: 'разделы 9–17',
  rule: `
<p>Сложные темы второй половины сборника. Если ошибок больше трех в упражнении, вернитесь к разделу.</p>
${T(["Тема", "Проверьте себя"], [
  ["Косвенная речь", "сдвиг времен, прямой порядок слов в вопросе, <i>told me (not) to</i>"],
  ["Инфинитив / герундий", "<i>enjoy doing, decide to do, stop doing / to do</i>"],
  ["Complex Object", "<i>I want you to come; I saw him leave; made me laugh</i>"],
  ["Условные", "0/1: Present → will; 2: Past → would; 3: Past Perfect → would have V3"],
  ["Модальные", "<i>mustn't</i> — нельзя, <i>don't have to</i> — не обязательно; <i>must have done</i> — наверное, сделал"]
])}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She asked me where ___.", ["I worked", "did I work", "do I work"]], ["I want ___ me.", ["you to help", "that you help", "you help"]],
      ["If I ___ you, I'd take the job.", ["were", "am", "will be"]], ["I enjoy ___ to music.", ["listening", "to listen", "listen"]],
      ["If you had asked me, I ___ you.", ["would have helped", "would help", "helped"]], ["He ___ be at home — the lights are off.", ["can't", "mustn't", "needn't"]],
      ["I wish I ___ more free time.", ["had", "have", "will have"]], ["They made us ___ for an hour.", ["wait", "to wait", "waiting"]],
      ["He is said ___ a lot of money last year.", ["to have earned", "to earn", "earning"]], ["You ___ come if you don't want to.", ["don't have to", "mustn't", "can't"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["He said he ___ (be) busy the next day.", "would be"], ["I heard her ___ (sing) in the next room.", "singing|sing"],
      ["If it ___ (rain) tomorrow, we'll stay at home.", "rains"], ["I wish I ___ (not / eat) so much yesterday.", "had not eaten"],
      ["Stop ___ (talk), please!", "talking"], ["She seems ___ (know) the answer.", "to know"],
      ["You should ___ (tell) me earlier.", "have told"], ["___ (finish) his work, he went home.", "having finished"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он спросил, где я живу.", "He asked where I lived.|He asked me where I lived."],
      ["Я хочу, чтобы ты был счастлив.", "I want you to be happy."],
      ["Если бы я знал, я бы пришел.", "If I had known, I would have come.|If I'd known, I'd have come."],
      ["Жаль, что я не умею рисовать.", "I wish I could draw.|I wish I could paint."],
      ["Должно быть, он забыл.", "He must have forgotten."]
    ]}
  ]}
]});

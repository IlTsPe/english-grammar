BOOK.push({ n: 10, id: 'infinitive', title: 'Инфинитив', pages: [294, 304],
intro: 'Когда инфинитив употребляется с частицей <i>to</i>, а когда без неё; инфинитив цели и конструкции с <i>too / enough</i>; формы инфинитива.',
topics: [

{ id: 'inf-to', level: 'B1', title: 'Инфинитив с to и без to', sub: 'want to go · can go · make him go',
  rule: `
<p>Обычно инфинитив употребляется с частицей <i>to</i>. Без неё он стоит в нескольких строго определённых случаях.</p>
${T(["Без to", "Пример"], [
  ["после модальных глаголов (кроме ought to, have to, be to)", "<i>I can <b>swim</b>. You must <b>go</b>.</i>"],
  ["после <i>make</i> и <i>let</i> (заставить, позволить)", "<i>She made me <b>cry</b>. Let him <b>go</b>.</i>"],
  ["после <i>had better</i> и <i>would rather</i>", "<i>You'd better <b>stay</b>. I'd rather <b>walk</b>.</i>"],
  ["после <i>see, hear, watch, feel</i> + дополнение", "<i>I saw him <b>leave</b>.</i>"],
  ["после <i>help</i> — можно и так, и так", "<i>Help me (<b>to</b>) <b>carry</b> it.</i>"]
])}
${T(["С to (самые частые глаголы)", "Пример"], [
  ["<i>want, would like, decide, hope, plan, agree, refuse, promise, learn, manage, forget, try, offer, need</i>", "<i>She decided <b>to leave</b>.</i>"],
  ["после прилагательных", "<i>It's easy <b>to understand</b>. I'm glad <b>to see</b> you.</i>"],
  ["после вопросительных слов", "<i>I don't know what <b>to do</b>. Show me how <b>to use</b> it.</i>"],
  ["после <i>the first, the last, the only</i>", "<i>He was the first <b>to come</b>.</i>"]
])}
${N("В пассиве после <i>make</i> частица <i>to</i> возвращается: <i>They made him <b>work</b></i> → <i>He was made <b>to work</b></i>.")}`,
  ex: [
    { type: 'choice', task: 'Нужна ли частица to? Выберите вариант.', items: [
      ["I want ___ a doctor.", ["to become", "become"]], ["You must ___ harder.", ["work", "to work"]],
      ["My parents let me ___ late.", ["stay", "to stay"]], ["She decided ___ a new job.", ["to find", "find"]],
      ["You'd better ___ a coat.", ["take", "to take"]], ["The film made me ___.", ["laugh", "to laugh"]],
      ["I don't know what ___.", ["to say", "say"]], ["It's difficult ___ this text.", ["to translate", "translate"]],
      ["He was made ___ the room.", ["to leave", "leave"]], ["I'd rather ___ at home.", ["stay", "to stay"]]
    ]},
    { type: 'gap', task: 'Вставьте to там, где нужно. Если не нужно, поставьте «-».', items: [
      ["I'd like ___ visit London.", "to"], ["You should ___ see a doctor.", "-|0"],
      ["She promised ___ help me.", "to"], ["Let's ___ go to the park.", "-|0"],
      ["I'm glad ___ meet you.", "to"], ["He can't ___ swim.", "-|0"],
      ["They agreed ___ wait.", "to"], ["Don't make me ___ wait!", "-|0"],
      ["She was the last ___ arrive.", "to"], ["Tell me how ___ get to the station.", "to"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу стать врачом.", "I want to become a doctor.|I want to be a doctor."],
      ["Мама не разрешает мне смотреть телевизор поздно.", "Mum doesn't let me watch TV late.|My mother doesn't let me watch TV late.|My mum doesn't let me watch TV late."],
      ["Я не знаю, что делать.", "I don't know what to do.|I do not know what to do."],
      ["Тебе лучше остаться дома.", "You had better stay at home.|You'd better stay at home.|You'd better stay home."]
    ]}
  ]},

{ id: 'inf-purpose', level: 'B1', title: 'Инфинитив цели; too и enough', sub: 'to buy bread · too young to drive',
  rule: `
<p>Инфинитив часто выражает <b>цель</b> — «чтобы». И он же стоит после <i>too</i> и <i>enough</i>.</p>
${E([
  ["I went to the shop <b>to buy</b> bread.", "Я пошёл в магазин, чтобы купить хлеб."],
  ["She works hard <b>in order to</b> pass the exam.", "in order to — книжнее, «для того чтобы»."],
  ["He left early <b>so as not to</b> be late.", "Отрицательная цель: so as not to / in order not to."]
])}
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>too + прил. + to V</i>", "слишком …, чтобы", "<i>He is <b>too young to drive</b>.</i>"],
  ["<i>прил. + enough + to V</i>", "достаточно …, чтобы", "<i>She is <b>old enough to drive</b>.</i>"],
  ["<i>enough + сущ. + to V</i>", "достаточно чего-то", "<i>We have <b>enough money to buy</b> it.</i>"],
  ["<i>too … for someone to V</i>", "для кого-то", "<i>The box is <b>too heavy for me to carry</b>.</i>"]
])}
${N("<i>enough</i> стоит <b>после</b> прилагательного, но <b>перед</b> существительным: <i>big enough</i>, но <i>enough time</i>. Цель не переводится через <i>for + V</i>: <i>I came <b>to see</b> you</i>, а не <i>for see you</i>.")}`,
  ex: [
    { type: 'gap', task: 'Закончите предложение инфинитивом цели (глагол в скобках).', items: [
      ["I went to the shop ___ (buy) some bread.", "to buy"], ["She came ___ (help) us.", "to help"],
      ["He saves money ___ (buy) a car.", "to buy"], ["We got up early ___ (catch) the first train.", "to catch"],
      ["I called him ___ (ask) about the homework.", "to ask"], ["She left early so as ___ (not / be) late.", "not to be"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He is ___ to drive a car.", ["too young", "enough young", "young enough not"]], ["She is ___ to go to school alone.", ["old enough", "enough old", "too old"]],
      ["We don't have ___ to finish today.", ["enough time", "time enough", "too time"]], ["The tea is ___ to drink.", ["too hot", "hot enough not", "enough hot"]],
      ["The box is too heavy ___ to carry.", ["for me", "to me", "me"]], ["I came here ___ you.", ["to see", "for see", "for seeing"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я пришёл, чтобы помочь тебе.", "I came to help you.|I have come to help you.|I've come to help you."],
      ["Он слишком устал, чтобы работать.", "He is too tired to work.|He's too tired to work.|He was too tired to work."],
      ["Она достаточно взрослая, чтобы понять это.", "She is old enough to understand it.|She's old enough to understand it.|She is old enough to understand this.|She's old enough to understand this."],
      ["У нас достаточно денег, чтобы купить машину.", "We have enough money to buy a car.|We've got enough money to buy a car."]
    ]}
  ]},

{ id: 'inf-forms', level: 'B2', title: 'Формы инфинитива', sub: 'to do, to be done, to have done',
  rule: `
<p>У инфинитива есть формы времени и залога. Они показывают, происходит ли действие одновременно, раньше, и выполняет ли его подлежащее.</p>
${T(["Форма", "Актив", "Пассив"], [
  ["Simple — одновременно / позже", "<i>to <b>write</b></i>", "<i>to <b>be written</b></i>"],
  ["Continuous — в процессе", "<i>to <b>be writing</b></i>", "—"],
  ["Perfect — раньше", "<i>to <b>have written</b></i>", "<i>to <b>have been written</b></i>"],
  ["Perfect Continuous — длилось до", "<i>to <b>have been writing</b></i>", "—"]
])}
${E([
  ["I'm glad <b>to see</b> you.", "Рад видеть (сейчас)."],
  ["I'm glad <b>to have seen</b> you.", "Рад, что повидал (уже)."],
  ["This letter must <b>be answered</b> today.", "На письмо нужно ответить (пассив)."],
  ["She seems <b>to be sleeping</b>.", "Кажется, она спит (сейчас, процесс)."],
  ["He seems <b>to have forgotten</b> about it.", "Кажется, он забыл (раньше)."]
])}
${N("Перфектный инфинитив после модальных глаголов выражает предположение о прошлом или упрёк: <i>He must <b>have left</b></i> — «он, должно быть, ушёл»; <i>You should <b>have told</b> me</i> — «тебе следовало сказать».")}`,
  ex: [
    { type: 'choice', task: 'Выберите нужную форму инфинитива.', items: [
      ["I'm glad ___ you now.", ["to see", "to have seen", "to be seen"]], ["I'm sorry ___ you yesterday.", ["to have disturbed", "to disturb", "to be disturbed"]],
      ["The work must ___ by Friday.", ["be done", "do", "have done"]], ["She seems ___ at the moment.", ["to be working", "to have worked", "to work at"]],
      ["He doesn't like ___ what to do.", ["to be told", "to tell", "to have told"]], ["The thief is believed ___ the country last week.", ["to have left", "to leave", "to be leaving"]],
      ["The children seem ___ for hours. They look tired.", ["to have been playing", "to play", "to be played"]], ["This house appears ___ a hundred years ago.", ["to have been built", "to be built", "to build"]]
    ]},
    { type: 'gap', task: 'Поставьте инфинитив в нужную форму.', items: [
      ["I want ___ (invite) to the party.", "to be invited"], ["She is happy ___ (pass) the exam yesterday.", "to have passed"],
      ["He pretended ___ (read) when I came in.", "to be reading"], ["This problem must ___ (solve) today.", "be solved"],
      ["They seem ___ (know) each other for years.", "to have known"], ["The letter is supposed ___ (send) last week.", "to have been sent"]
    ]}
  ]}
]});

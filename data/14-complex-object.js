BOOK.push({ n: 14, id: 'complex-object', title: 'Сложное дополнение (Complex Object)', pages: [352, 373],
intro: 'Конструкция «дополнение + инфинитив»: <i>I want <b>you to come</b></i>. В русском её обычно переводят придаточным со словами «чтобы», «как», «что».',
topics: [

{ id: 'co-want', level: 'B1', title: 'Want / expect + кто-то + to V', sub: 'I want you to help me',
  rule: `
<p>После глаголов желания, ожидания и мнения английский не строит придаточное «чтобы…», а ставит дополнение и инфинитив с <i>to</i>.</p>
${F("want / would like / expect / ask / tell + <b>me / him / Tom</b> + <b>to V</b>")}
${T(["Русский", "Английский"], [
  ["Я хочу, <b>чтобы ты помог</b> мне.", "<i>I want <b>you to help</b> me.</i>"],
  ["Мама хочет, <b>чтобы я стал</b> врачом.", "<i>Mum wants <b>me to become</b> a doctor.</i>"],
  ["Я не ожидал, <b>что он придёт</b>.", "<i>I didn't expect <b>him to come</b>.</i>"],
  ["Учитель попросил нас <b>не шуметь</b>.", "<i>The teacher asked <b>us not to make</b> noise.</i>"],
  ["Хотелось бы, <b>чтобы вы пришли</b>.", "<i>I'd like <b>you to come</b>.</i>"]
])}
${M("Глаголы:", ["want", "would like", "expect", "ask", "tell", "advise", "allow", "order", "consider", "believe"])}
${N("После <i>want</i> нельзя ставить <i>that</i>: <i>I want <b>that you help</b> me</i> — ошибка. Местоимение стоит в объектной форме: <i>me, him, her, us, them</i>.")}`,
  ex: [
    { type: 'gap', task: 'Закончите предложение, используя Complex Object (местоимение + инфинитив).', items: [
      ["Help me, please. → I want you ___ me.", "to help"], ["“Come at six,” he said to us. → He wanted ___ at six.", "us to come"],
      ["My mother says: “Be a doctor!” → My mother wants ___ a doctor.", "me to be|me to become"],
      ["I didn't think he would come. → I didn't expect ___.", "him to come"], ["“Don't be late,” the teacher said to them. → The teacher told ___ late.", "them not to be"],
      ["Please call me tomorrow. → I'd like ___ me tomorrow.", "you to call"], ["She wants (Tom / buy) bread. → She wants ___ bread.", "Tom to buy"],
      ["The doctor said I should rest. → The doctor advised ___.", "me to rest"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I want ___ the truth.", ["you to tell me", "that you tell me", "you tell me"]], ["She would like ___ her.", ["him to visit", "he visits", "he to visit"]],
      ["Mum told ___ the table.", ["me to lay", "me lay", "I to lay"]], ["We expect ___ the match.", ["them to win", "they win", "they to win"]],
      ["He asked ___ the window.", ["her not to open", "her don't open", "her to not opening"]], ["Do you want ___ with you?", ["me to go", "that I go", "I go"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я хочу, чтобы ты пришёл.", "I want you to come."],
      ["Мама хочет, чтобы я стал врачом.", "Mum wants me to become a doctor.|My mother wants me to become a doctor.|My mum wants me to become a doctor.|Mother wants me to become a doctor.|My mother wants me to be a doctor."],
      ["Я не ожидал, что он позвонит.", "I didn't expect him to call.|I did not expect him to call.|I didn't expect him to phone.|I didn't expect him to ring."],
      ["Учитель попросил нас закрыть окна.", "The teacher asked us to close the windows."],
      ["Я бы хотел, чтобы вы мне помогли.", "I would like you to help me.|I'd like you to help me."]
    ]}
  ]},

{ id: 'co-see', level: 'B1', title: 'See / hear / watch + кто-то + V / V-ing', sub: 'I saw him cross · I saw him crossing',
  rule: `
<p>После глаголов восприятия инфинитив стоит <b>без to</b>. Можно также использовать причастие <i>-ing</i> — смысл немного меняется.</p>
${F("see / hear / watch / feel / notice + <b>кто-то</b> + <b>V</b> или <b>V-ing</b>")}
${T(["Форма", "Значение", "Пример"], [
  ["<i>+ V</i>", "видел действие целиком, от начала до конца", "<i>I saw him <b>cross</b> the street.</i> — Я видел, как он перешёл улицу."],
  ["<i>+ V-ing</i>", "видел часть процесса", "<i>I saw him <b>crossing</b> the street.</i> — Я видел, как он переходил улицу."]
])}
${E([
  ["We heard her <b>sing</b>.", "Мы слышали, как она спела (песню целиком)."],
  ["I felt something <b>touching</b> my leg.", "Я почувствовал, как что-то касается моей ноги."],
  ["Nobody noticed him <b>leave</b>.", "Никто не заметил, как он ушёл."]
])}
${N("В пассиве частица <i>to</i> появляется: <i>He was seen <b>to enter</b> the house.</i> Глаголы <i>see, hear</i> в значении «понимать, узнавать» с этой конструкцией не употребляются.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I saw him ___ the house.", ["leave", "to leave", "left"]], ["We heard the baby ___ in the next room.", ["crying", "to cry", "cried"]],
      ["Did you notice her ___ in?", ["come", "to come", "came"]], ["I felt the ground ___ under my feet.", ["shaking", "to shake", "shaken"]],
      ["She watched the children ___ in the park.", ["playing", "to play", "played"]], ["He was seen ___ the bank.", ["to enter", "enter", "entered"]]
    ]},
    { type: 'gap', task: 'Закончите предложение, используя Complex Object с глаголом восприятия.', items: [
      ["He crossed the street. I saw it. → I saw him ___ the street.", "cross|crossing"],
      ["She was singing. I heard it. → I heard her ___.", "singing|sing"],
      ["The door opened. We heard it. → We heard the door ___.", "open"],
      ["They were playing football. We watched them. → We watched them ___ football.", "playing|play"],
      ["Somebody touched my arm. I felt it. → I felt somebody ___ my arm.", "touch|touching"],
      ["The car stopped. Did you see it? → Did you see the car ___?", "stop"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я видел, как он вошёл в дом.", "I saw him enter the house.|I saw him come into the house.|I saw him go into the house."],
      ["Мы слышали, как она поёт.", "We heard her singing.|We heard her sing."],
      ["Я почувствовал, как кто-то коснулся моей руки.", "I felt somebody touch my hand.|I felt someone touch my hand.|I felt somebody touch my arm.|I felt someone touch my arm."]
    ]}
  ]},

{ id: 'co-make-let', level: 'B1', title: 'Make / let / have + кто-то + V', sub: 'She made me laugh · Let me go',
  rule: `
<p>После <i>make</i> (заставлять), <i>let</i> (позволять) и <i>have</i> (поручать) инфинитив стоит <b>без to</b>.</p>
${T(["Глагол", "Значение", "Пример"], [
  ["<i>make + кто-то + V</i>", "заставить", "<i>She <b>made</b> me <b>laugh</b>. The teacher made us <b>rewrite</b> it.</i>"],
  ["<i>let + кто-то + V</i>", "позволить, разрешить", "<i>My parents <b>let</b> me <b>go</b> to the party.</i>"],
  ["<i>have + кто-то + V</i>", "поручить", "<i>I'll <b>have</b> the porter <b>bring</b> your bags.</i>"],
  ["<i>get + кто-то + to V</i>", "уговорить (с to!)", "<i>I <b>got</b> him <b>to help</b> me.</i>"],
  ["<i>allow / force + кто-то + to V</i>", "разрешить / вынудить (с to!)", "<i>They <b>allowed</b> us <b>to stay</b>.</i>"]
])}
${N("<i>let</i> в пассиве не употребляется — вместо него <i>be allowed to</i>: <i>I <b>was allowed to</b> go</i>. После пассивного <i>make</i> появляется <i>to</i>: <i>I <b>was made to</b> wait</i>.")}`,
  ex: [
    { type: 'gap', task: 'Вставьте глагол в нужной форме (с to или без to).', items: [
      ["The film made me ___ (cry).", "cry"], ["My parents let me ___ (stay) up late.", "stay"],
      ["They allowed us ___ (use) the pool.", "to use"], ["I got my brother ___ (help) me.", "to help"],
      ["Don't make me ___ (laugh)!", "laugh"], ["Let me ___ (introduce) myself.", "introduce"],
      ["We were made ___ (wait) for an hour.", "to wait"], ["I'll have my secretary ___ (send) you the documents.", "send"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мама заставила меня убрать комнату.", "Mum made me clean the room.|My mother made me clean the room.|My mum made me clean my room.|Mother made me clean my room.|Mum made me tidy my room.|My mother made me tidy the room."],
      ["Позволь мне помочь тебе.", "Let me help you."],
      ["Родители не разрешают мне гулять поздно.", "My parents don't let me go out late.|My parents do not let me go out late.|My parents don't let me walk late."],
      ["Этот фильм заставил меня задуматься.", "This film made me think.|This movie made me think.|The film made me think."]
    ]}
  ]}
]});

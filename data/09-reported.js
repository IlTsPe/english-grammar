BOOK.push({ n: 9, id: 'reported', title: 'Согласование времен. Косвенная речь',
intro: 'Если главное предложение стоит в прошедшем времени, время придаточного сдвигается «на шаг назад». На этом правиле строится вся косвенная речь: утверждения, вопросы, просьбы и приказы.',
topics: [

{ id: 'rep-sequence', level: 'B1', title: 'Согласование времен', sub: 'I knew that he was ill',
  rule: `
<p>В русском языке время в придаточном предложении не зависит от главного: «Я знал, что он болен». В английском, если глагол главного предложения в прошедшем времени, глагол придаточного тоже уходит в прошлое.</p>
${T(["Действие придаточного", "Форма", "Пример"], [
  ["одновременно", "Past Simple / Past Continuous", "<i>I knew that he <b>was</b> ill. I thought she <b>was sleeping</b>.</i>"],
  ["раньше", "Past Perfect", "<i>I knew that he <b>had been</b> ill.</i>"],
  ["позже", "would + V (будущее в прошедшем)", "<i>I knew that he <b>would come</b>.</i>"]
])}
${E([
  ["He says he <b>is</b> busy. → He said he <b>was</b> busy.", "Главное в настоящем — сдвига нет; в прошедшем — сдвиг."],
  ["She hoped she <b>would pass</b> the exam.", "Будущее в прошедшем."]
])}
${N("Согласование не нужно, если в придаточном общеизвестный факт: <i>The teacher said that the Earth <b>goes</b> round the Sun.</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в скобках в нужную форму по правилу согласования времен.', items: [
      ["I knew that he ___ (be) ill.", "was"], ["She said that she ___ (live) in Kazan.", "lived"],
      ["We didn't know that they ___ (already / leave).", "had already left"], ["He hoped that he ___ (win) the race.", "would win"],
      ["I thought you ___ (sleep). Why are you up?", "were sleeping"], ["She told me that she ___ (lose) her key the day before.", "had lost"],
      ["They were sure that it ___ (rain) in the evening.", "would rain"], ["He said that he ___ (not / like) coffee.", "did not like"],
      ["I was afraid that I ___ (miss) the train.", "would miss"], ["Our teacher said that water ___ (boil) at 100 °C.", "boils"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I knew she ___ in Moscow.", ["lived", "lives", "will live"]], ["He said he ___ me the next day.", ["would call", "will call", "calls"]],
      ["She didn't know where I ___.", ["had been", "have been", "am"]], ["I thought you ___ coming.", ["weren't", "aren't", "won't"]],
      ["He told us the Moon ___ round the Earth.", ["goes", "went", "had gone"]], ["We were sure they ___ the match.", ["would win", "will win", "win"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я знал, что он болен.", "I knew that he was ill.|I knew he was ill.|I knew that he was sick.|I knew he was sick."],
      ["Я думал, что ты спишь.", "I thought that you were sleeping.|I thought you were sleeping.|I thought you were asleep."],
      ["Она надеялась, что сдаст экзамен.", "She hoped that she would pass the exam.|She hoped she would pass the exam."],
      ["Мы не знали, что они уже уехали.", "We didn't know that they had already left.|We didn't know they had already left."]
    ]}
  ]},

{ id: 'rep-statements', level: 'B1', title: 'Утверждения в косвенной речи', sub: 'He said that he was tired',
  rule: `
<p>При переводе в косвенную речь меняются три вещи: время глагола, местоимения и слова времени и места.</p>
${T(["Прямая речь", "Косвенная речь"], [
  ["<i>Present Simple: “I <b>am</b> tired”</i>", "<i>Past Simple: she said she <b>was</b> tired</i>"],
  ["<i>Present Continuous: “I <b>am working</b>”</i>", "<i>Past Continuous: he said he <b>was working</b></i>"],
  ["<i>Present Perfect: “I <b>have lost</b> it”</i>", "<i>Past Perfect: he said he <b>had lost</b> it</i>"],
  ["<i>Past Simple: “I <b>saw</b> him”</i>", "<i>Past Perfect: she said she <b>had seen</b> him</i>"],
  ["<i>will / can / may / must</i>", "<i>would / could / might / had to</i>"]
])}
<h3>Слова времени и места</h3>
${T(["Было", "Стало"], [
  ["<i>now, today, tonight</i>", "<i>then, that day, that night</i>"],
  ["<i>tomorrow</i>", "<i>the next day / the following day</i>"],
  ["<i>yesterday</i>", "<i>the day before / the previous day</i>"],
  ["<i>next week, last week</i>", "<i>the following week, the week before</i>"],
  ["<i>ago, here, this, these</i>", "<i>before, there, that, those</i>"]
])}
${N("<i>tell</i> требует дополнения (кому?): <i>He <b>told me</b> that…</i>; <i>say</i> — без него или с <i>to</i>: <i>He <b>said</b> (to me) that…</i>")}`,
  ex: [
    { type: 'gap', task: 'Передайте слова в косвенной речи.', items: [
      ["“I am tired,” she said. → She said that she ___ tired.", "was"],
      ["“We will help you,” they said. → They said they ___ help us.", "would"],
      ["“I have lost my phone,” he said. → He said he ___ his phone.", "had lost"],
      ["“I can swim,” Tom said. → Tom said he ___ swim.", "could"],
      ["“I saw her yesterday,” he said. → He said he had seen her ___.", "the day before|the previous day"],
      ["“I'm reading,” Kate said. → Kate said she ___.", "was reading"],
      ["“We live here,” they said. → They said they lived ___.", "there"],
      ["“I must go,” Ann said. → Ann said she ___ go.", "had to|must"],
      ["“I'll come tomorrow,” he said. → He said he would come ___.", "the next day|the following day"],
      ["“I bought this book,” she said. → She said she had bought ___ book.", "that"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Tom ___ me he was busy.", ["told", "said", "asked"]], ["She ___ that she was hungry.", ["said", "told", "asked"]],
      ["He said he ___ the next day.", ["would come", "will come", "comes"]], ["She said she had visited Paris two years ___.", ["before", "ago", "last"]],
      ["They told us they ___ moving.", ["were", "are", "will be"]], ["He said, “I ___ it.” → He said he had done it.", ["did", "had", "would do"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Она сказала, что устала.", "She said that she was tired.|She said she was tired."],
      ["Он сказал мне, что живет в Москве.", "He told me that he lived in Moscow.|He told me he lived in Moscow."],
      ["Они сказали, что придут завтра. (Пересказываете через несколько дней.)", "They said that they would come the next day.|They said they would come the next day.|They said they would come the following day."],
      ["Я знал, что она потеряла ключи.", "I knew that she had lost her keys.|I knew she had lost her keys."]
    ]}
  ]},

{ id: 'rep-questions', level: 'B1', title: 'Вопросы в косвенной речи', sub: 'She asked me where I lived',
  rule: `
<p>Косвенный вопрос — это уже не вопрос, а утверждение. Порядок слов прямой (подлежащее перед сказуемым), вспомогательный <i>do / does / did</i> исчезает, вопросительного знака нет.</p>
${T(["Тип", "Прямая речь", "Косвенная речь"], [
  ["специальный", "<i>“Where <b>do you live</b>?”</i>", "<i>She asked me where <b>I lived</b>.</i>"],
  ["специальный", "<i>“What <b>are you doing</b>?”</i>", "<i>He asked what <b>I was doing</b>.</i>"],
  ["общий", "<i>“<b>Are</b> you hungry?”</i>", "<i>He asked <b>if / whether</b> I was hungry.</i>"],
  ["общий", "<i>“<b>Did</b> you see the film?”</i>", "<i>She asked <b>if</b> I had seen the film.</i>"]
])}
${N("Типичная ошибка: <i>She asked me where <s>did I live</s></i>. Правильно: <i>where <b>I lived</b></i>. То же в вежливых вопросах: <i>Do you know where the station <b>is</b>?</i>")}`,
  ex: [
    { type: 'gap', task: 'Закончите косвенный вопрос.', items: [
      ["“Where do you live?” she asked. → She asked me where I ___.", "lived"],
      ["“Are you hungry?” he asked. → He asked me ___ I was hungry.", "if|whether"],
      ["“What time is it?” Tom asked. → Tom asked what time ___.", "it was"],
      ["“Did you like the film?” she asked. → She asked if I ___ the film.", "had liked|liked"],
      ["“Can you swim?” he asked. → He asked if I ___ swim.", "could"],
      ["“Why are you crying?” Mum asked. → Mum asked why I ___.", "was crying"],
      ["“Where is the station?” → Do you know where the station ___?", "is"],
      ["“How old are you?” she asked. → She asked how old I ___.", "was"],
      ["“Have you finished?” the teacher asked. → The teacher asked if we ___.", "had finished"],
      ["“Will you come?” he asked. → He asked ___ I would come.", "if|whether"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She asked me where ___.", ["I lived", "did I live", "do I live"]], ["She asked me ___ I liked jazz.", ["if", "that", "do"]],
      ["Can you tell me what time ___?", ["the train leaves", "does the train leave", "leaves the train"]], ["He asked me why ___ late.", ["I was", "was I", "I am"]],
      ["I wonder ___ she will come.", ["whether", "that", "what"]], ["They asked us how long ___ there.", ["we had been", "had we been", "we have been"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он спросил, где я живу.", "He asked where I lived.|He asked me where I lived."],
      ["Она спросила, люблю ли я кофе.", "She asked if I liked coffee.|She asked me if I liked coffee.|She asked whether I liked coffee.|She asked me whether I liked coffee."],
      ["Она спросила меня, сколько мне лет.", "She asked me how old I was.|She asked how old I was."],
      ["Учитель спросил, закончили ли мы.", "The teacher asked if we had finished.|The teacher asked whether we had finished.|The teacher asked us if we had finished.|The teacher asked us whether we had finished."]
    ]}
  ]},

{ id: 'rep-commands', level: 'B1', title: 'Просьбы и приказы', sub: 'She told us not to be late',
  rule: `
<p>Повелительное предложение передается инфинитивом. Вводящий глагол выбирается по смыслу.</p>
${F("told / asked / ordered / advised + <b>кого-то</b> + <b>(not) to V</b>")}
${T(["Прямая речь", "Косвенная речь"], [
  ["<i>“Close the window, please.”</i>", "<i>She <b>asked</b> me <b>to close</b> the window.</i>"],
  ["<i>“Don't be late!”</i>", "<i>She <b>told</b> us <b>not to be</b> late.</i>"],
  ["<i>“Sit down!”</i>", "<i>The teacher <b>told</b> him <b>to sit</b> down.</i>"],
  ["<i>“You should rest.”</i>", "<i>The doctor <b>advised</b> me <b>to rest</b>.</i>"],
  ["<i>“Let's go to the cinema.”</i>", "<i>He <b>suggested going</b> to the cinema.</i>"]
])}
${N("Отрицание ставится перед <i>to</i>: <i>told us <b>not to</b> be late</i>, а не <i>told us to not be</i>. После <i>suggest</i> — герундий или <i>that</i>-предложение, но не инфинитив.")}`,
  ex: [
    { type: 'gap', task: 'Передайте просьбу или приказ в косвенной речи.', items: [
      ["“Don't be late!” the teacher said. → The teacher told us ___ late.", "not to be"],
      ["“Close the door, please,” Mum said. → Mum asked me ___ the door.", "to close"],
      ["“Don't touch it!” he said. → He told me ___ it.", "not to touch"],
      ["“Open your books,” the teacher said. → The teacher told us ___ our books.", "to open"],
      ["“Please help me,” she said. → She asked me ___ her.", "to help"],
      ["“Don't worry,” he said. → He told me ___.", "not to worry"],
      ["“Stay in bed,” the doctor said. → The doctor advised me ___ in bed.", "to stay"],
      ["“Let's go home,” Tom said. → Tom suggested ___ home.", "going"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Mum told me ___ the window.", ["to close", "close", "closing"]], ["She asked us ___ noise.", ["not to make", "to not make", "don't make"]],
      ["He suggested ___ a taxi.", ["taking", "to take", "take"]], ["The doctor ___ me to stop smoking.", ["advised", "said", "suggested"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Учитель велел нам открыть книги.", "The teacher told us to open our books.|The teacher told us to open the books."],
      ["Мама попросила меня не опаздывать.", "Mum asked me not to be late.|Mother asked me not to be late.|My mother asked me not to be late.|My mum asked me not to be late."],
      ["Врач посоветовал мне остаться в постели.", "The doctor advised me to stay in bed."],
      ["Он велел мне не трогать его вещи.", "He told me not to touch his things."]
    ]}
  ]},

{ id: 'rep-future-past', level: 'B2', title: 'Будущее в прошедшем', sub: 'was going to · would · was about to',
  rule: `
<p>Когда о будущем говорят с точки зрения прошлого момента, используются особые формы.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>would + V</i>", "будущее относительно прошлого", "<i>I knew you <b>would</b> like it.</i>"],
  ["<i>was / were going to + V</i>", "намерение, часто не осуществленное", "<i>I <b>was going to</b> call you, but I forgot.</i>"],
  ["<i>was / were about to + V</i>", "вот-вот, собирался в ту минуту", "<i>We <b>were about to</b> leave when the phone rang.</i>"],
  ["<i>was on the point of + -ing</i>", "был на грани того, чтобы", "<i>He <b>was on the point of giving</b> up.</i>"],
  ["<i>was / were to + V</i>", "судьба, то, что произошло потом", "<i>They <b>were</b> never <b>to</b> meet again.</i>"],
  ["<i>Past Continuous</i>", "договоренность в прошлом", "<i>They <b>were leaving</b> the next morning.</i>"]
])}
${N("В косвенной речи будущее после прошедшего глагола переходит в <i>would</i>: <i>She said she <b>would</b> come later</i>, а не <i>will come</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ call you, but I forgot.", ["was going to", "will", "am going to"]], ["She said she ___ come later.", ["would", "will", "is going to"]],
      ["We were just ___ leave when the phone rang.", ["about to", "going", "on the point to"]], ["He was on the point of ___ up when he found the answer.", ["giving", "give", "to give"]],
      ["Little did they know that they ___ never meet again.", ["were to", "are to", "will"]], ["I knew you ___ like this film.", ["would", "will", "are going to"]],
      ["They ___ leaving the next morning, so they packed in the evening.", ["were", "would", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я собирался тебе позвонить, но забыл.", "I was going to call you, but I forgot.|I was going to phone you, but I forgot."],
      ["Мы уже собирались уходить, когда зазвонил телефон.", "We were about to leave when the phone rang.|We were going to leave when the phone rang."],
      ["Я знал, что тебе понравится.", "I knew you would like it.|I knew that you would like it."],
      ["Она сказала, что придет позже.", "She said she would come later.|She said that she would come later."]
    ]}
  ]}
]});

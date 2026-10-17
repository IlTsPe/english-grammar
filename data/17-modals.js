BOOK.push({ n: 17, id: 'modals', title: 'Модальные глаголы',
intro: 'Умение, разрешение, необходимость, совет и предположение. После модальных глаголов инфинитив стоит без <i>to</i> (кроме <i>ought to, have to, be to</i>), а сами они не меняются по лицам.',
topics: [

{ id: 'mod-can', level: 'A2', title: 'Can, could, be able to', sub: 'I can swim · I could read at four',
  rule: `
<p><i>can</i> выражает физическую или умственную способность, возможность и разрешение. У него всего две формы, поэтому в других временах используется <i>be able to</i>.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>can / can't</i>", "умею, могу (сейчас)", "<i>I <b>can</b> swim. She <b>can't</b> come today.</i>"],
  ["<i>can</i>", "разрешение (разговорное)", "<i><b>Can</b> I open the window?</i>"],
  ["<i>could</i>", "умел в прошлом (вообще)", "<i>I <b>could</b> read when I was four.</i>"],
  ["<i>could</i>", "вежливая просьба", "<i><b>Could</b> you help me, please?</i>"],
  ["<i>was / were able to</i>", "смог (в конкретной ситуации)", "<i>The fire spread fast, but everyone <b>was able to</b> escape.</i>"],
  ["<i>will be able to</i>", "смогу (в будущем)", "<i>I'<b>ll be able to</b> help you tomorrow.</i>"],
  ["<i>have been able to</i>", "смог (Present Perfect)", "<i>I <b>haven't been able to</b> sleep lately.</i>"]
])}
${N("<i>can</i> не бывает в будущем и перфекте: не <i>will can</i>, а <i>will be able to</i>. Отрицание пишется слитно: <i>cannot</i> или <i>can't</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите can, can\'t, could, couldn\'t или нужную форму be able to.', items: [
      ["I ___ swim when I was five.", "could"], ["___ you help me with this box, please?", "could|can"],
      ["She ___ speak three languages.", "can"], ["I'm sorry, I ___ come to your party tomorrow.", "cannot|will not be able to"],
      ["Next year I ___ drive a car. (смогу)", "will be able to"], ["The test was difficult, but I ___ answer all the questions. (сумел)", "was able to"],
      ["My grandfather ___ walk without a stick now.", "cannot"], ["I haven't ___ to call you this week. Sorry!", "been able"],
      ["___ I use your phone?", "can|could|may"], ["When I was young I ___ run very fast.", "could"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She can ___ three languages.", ["speak", "to speak", "speaks"]], ["___ you swim when you were five?", ["Could", "Can", "Must"]],
      ["I'll ___ to come tomorrow.", ["be able", "can", "could"]], ["Everybody ___ to escape from the fire.", ["was able", "could", "can"]],
      ["___ you tell me the way to the station?", ["Could", "Must", "Should"]], ["I ___ find my keys anywhere!", ["can't", "mustn't", "needn't"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я умею плавать.", "I can swim."],
      ["Вы не могли бы мне помочь?", "Could you help me?|Could you help me, please?|Can you help me?"],
      ["В детстве я умел рисовать.", "When I was a child I could draw.|I could draw when I was a child.|As a child I could draw."],
      ["Завтра я смогу прийти.", "I will be able to come tomorrow.|I'll be able to come tomorrow.|Tomorrow I will be able to come."]
    ]}
  ]},

{ id: 'mod-may', level: 'A2', title: 'May и might', sub: 'May I come in? · It might rain',
  rule: `
<p><i>may</i> выражает разрешение (вежливо, формально) и предположение. <i>might</i> — более неуверенное предположение.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>May I…?</i>", "вежливая просьба о разрешении", "<i><b>May</b> I come in?</i> — Можно войти?"],
  ["<i>You may…</i>", "разрешение", "<i>You <b>may</b> go now.</i>"],
  ["<i>may not</i>", "запрет (мягкий, формальный)", "<i>You <b>may not</b> use phones during the exam.</i>"],
  ["<i>may / might</i>", "возможно (предположение)", "<i>It <b>may</b> rain. She <b>might</b> be at home.</i>"],
  ["<i>be allowed to</i>", "разрешение в других временах", "<i>We <b>were allowed to</b> stay up late.</i>"]
])}
${E([
  ["— <b>May</b> I take your pen? — Yes, you <b>may</b>. / Yes, of course.", "Ответ на просьбу."],
  ["I <b>might</b> go to the party, but I'm not sure.", "Может быть, пойду (не уверен)."]
])}
${N("В вопросах с <i>might</i> о предположении обычно не спрашивают: <i>Is it likely that…?</i> или <i>Do you think…?</i> — естественнее, чем <i>Might it rain?</i>")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ I come in?", ["May", "Must", "Should"]], ["Take an umbrella. It ___ rain later.", ["might", "must", "can't"]],
      ["You ___ use your phones during the exam.", ["may not", "needn't", "don't have to"]], ["I'm not sure. I ___ go to the cinema tonight.", ["might", "must", "should"]],
      ["Children ___ to swim here without an adult.", ["are not allowed", "may not", "can not"]], ["She ___ be at home — her light is on.", ["may", "can't", "mustn't"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Можно мне взять твою ручку?", "May I take your pen?|Can I take your pen?|Could I take your pen?|May I borrow your pen?|Can I borrow your pen?"],
      ["Может быть, вечером пойдет снег.", "It may snow in the evening.|It might snow in the evening.|It may snow tonight.|It might snow tonight."],
      ["Вы можете идти.", "You may go.|You can go.|You may go now.|You can go now."],
      ["Нам разрешили остаться.", "We were allowed to stay."]
    ]}
  ]},

{ id: 'mod-must', level: 'A2', title: 'Must, have to, mustn\'t, don\'t have to', sub: 'I must go · You don\'t have to come',
  rule: `
<p>И <i>must</i>, и <i>have to</i> выражают необходимость, но с разным оттенком. А их отрицания имеют совсем разный смысл.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>must</i>", "необходимость по личному убеждению, сильный совет", "<i>I <b>must</b> call mum. You <b>must</b> see this film!</i>"],
  ["<i>have to</i>", "необходимость из-за правил, обстоятельств", "<i>I <b>have to</b> wear a uniform at school.</i>"],
  ["<i>had to / will have to</i>", "прошедшее и будущее (у must их нет)", "<i>I <b>had to</b> wait an hour.</i>"],
  ["<i>mustn't</i>", "<b>нельзя</b>, запрет", "<i>You <b>mustn't</b> smoke here.</i>"],
  ["<i>don't have to</i>", "<b>не обязательно</b>, нет необходимости", "<i>You <b>don't have to</b> come if you're busy.</i>"],
  ["<i>be to</i>", "необходимость по плану, договоренности", "<i>We <b>are to</b> meet at six.</i>"]
])}
${N("<i>mustn't</i> ≠ <i>don't have to</i>. «Тебе нельзя идти» — <i>You mustn't go</i>. «Тебе не обязательно идти» — <i>You don't have to go</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["You ___ smoke here. It's forbidden.", ["mustn't", "don't have to"]], ["Tomorrow is Saturday, so I ___ get up early.", ["don't have to", "mustn't"]],
      ["In Britain people ___ drive on the left.", ["have to", "can", "mustn't"]], ["I ___ remember to call mum, it's her birthday!", ["must", "can", "could"]],
      ["Yesterday I ___ stay at work till nine.", ["had to", "must", "have to"]], ["You ___ tell anybody. It's a secret!", ["mustn't", "don't have to", "needn't to"]],
      ["Does she ___ wear glasses?", ["have to", "must", "has to"]], ["We ___ meet at the station at 5 — that was the plan.", ["were to", "must", "should"]]
    ]},
    { type: 'gap', task: 'Впишите must, mustn\'t, have to, has to, had to или don\'t / doesn\'t have to.', items: [
      ["Pupils ___ wear a uniform at our school. It's the rule.", "have to|must"], ["You ___ eat in the library.", "must not"],
      ["It's a holiday tomorrow. We ___ go to school.", "do not have to"], ["I missed the bus, so I ___ walk home.", "had to"],
      ["She ___ get up at six every day because she starts work at seven.", "has to"], ["He's rich. He ___ work.", "does not have to"],
      ["You ___ touch the stove — it's hot!", "must not"], ["I ___ go now, or I'll be late.", "must|have to"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Здесь нельзя курить.", "You mustn't smoke here.|You must not smoke here.|Smoking is not allowed here."],
      ["Тебе не обязательно приходить.", "You don't have to come.|You do not have to come.|You needn't come."],
      ["Вчера мне пришлось работать до вечера.", "Yesterday I had to work till evening.|I had to work until the evening yesterday.|I had to work till the evening yesterday.|Yesterday I had to work until the evening."],
      ["Я должен идти.", "I must go.|I have to go.|I've got to go."]
    ]}
  ]},

{ id: 'mod-should', level: 'B1', title: 'Should, ought to, need', sub: 'You should see a doctor · You needn\'t worry',
  rule: `
<p><i>should</i> и <i>ought to</i> выражают совет и моральный долг. <i>need</i> бывает модальным (в отрицании и вопросе) и обычным глаголом.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>should / shouldn't</i>", "совет, следует", "<i>You <b>should</b> see a doctor. You <b>shouldn't</b> eat so much.</i>"],
  ["<i>ought to</i>", "следует (долг, чуть сильнее)", "<i>You <b>ought to</b> respect your parents.</i>"],
  ["<i>needn't + V</i>", "нет необходимости (модальный)", "<i>You <b>needn't</b> worry.</i>"],
  ["<i>don't need to + V</i>", "нет необходимости (обычный глагол)", "<i>You <b>don't need to</b> worry.</i>"],
  ["<i>need to + V</i>", "нужно (утверждение)", "<i>I <b>need to</b> buy some bread.</i>"],
  ["<i>had better</i>", "лучше (а то хуже будет)", "<i>You'<b>d better</b> hurry.</i>"]
])}
${N("После <i>ought</i> всегда <i>to</i>: <i>You ought <b>to</b> go</i>. После модального <i>needn't</i> — без <i>to</i>: <i>You needn't <b>go</b></i>. Нельзя: <i>You needn't to go</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["You look tired. You ___ go to bed.", ["should", "can", "have"]], ["You ___ eat so many sweets. It's bad for your teeth.", ["shouldn't", "needn't", "don't have"]],
      ["You ___ worry. Everything is fine.", ["needn't", "mustn't", "shouldn't to"]], ["You ought ___ be more careful.", ["to", "—", "for"]],
      ["I ___ to buy some milk.", ["need", "needn't", "must"]], ["You'd ___ take an umbrella.", ["better", "rather", "should"]]
    ]},
    { type: 'gap', task: 'Впишите should, shouldn\'t, ought, needn\'t или need.', items: [
      ["You ___ see a dentist about that tooth.", "should|ought to"], ["You ___ come if you don't want to.", "need not|do not need to|do not have to"],
      ["Children ___ watch too much TV.", "should not|ought not to"], ["We ___ to leave now, it's getting late.", "need|ought"],
      ["You ___ hurry. We have plenty of time.", "need not"], ["___ I take a coat? — Yes, it's cold.", "should"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе следует больше читать.", "You should read more.|You ought to read more."],
      ["Не нужно беспокоиться.", "You needn't worry.|You don't need to worry.|There is no need to worry.|No need to worry."],
      ["Мне нужно купить хлеба.", "I need to buy some bread.|I need to buy bread."],
      ["Тебе не следует так много работать.", "You shouldn't work so much.|You should not work so much.|You shouldn't work so hard."]
    ]}
  ]},

{ id: 'mod-deduction', level: 'B2', title: 'Модальные с перфектным инфинитивом', sub: 'must have done · can\'t have done · should have done',
  rule: `
<p>Модальные глаголы показывают, насколько говорящий уверен в своем выводе. С перфектным инфинитивом — вывод о прошлом.</p>
${T(["Уверенность", "О настоящем", "О прошлом"], [
  ["точно да (≈ 95%)", "<i>He <b>must be</b> tired.</i>", "<i>He <b>must have been</b> tired.</i>"],
  ["возможно (≈ 50%)", "<i>She <b>might / may / could be</b> at home.</i>", "<i>She <b>might have forgotten</b>.</i>"],
  ["точно нет (≈ 95%)", "<i>That <b>can't be</b> Anna.</i>", "<i>He <b>can't / couldn't have stolen</b> it.</i>"]
])}
<h3>Упрек и сожаление</h3>
${E([
  ["You <b>should have told</b> me earlier!", "Тебе следовало сказать раньше (но ты не сказал)."],
  ["You <b>shouldn't have shouted</b> at him.", "Не стоило на него кричать (но ты кричал)."],
  ["You <b>could have helped</b> me!", "Мог бы и помочь!"]
])}
${N("Противоположность <i>must</i> в значении вывода — <i>can't</i>, а не <i>mustn't</i>: «Не может быть, чтобы он это сделал» — <i>He <b>can't have</b> done it</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He's been working all day. He ___ be tired.", ["must", "can't", "mustn't"]], ["That ___ be Anna — she's in Paris this week.", ["can't", "must", "should"]],
      ["The ground is wet. It ___ rained last night.", ["must have", "can't have", "should have"]], ["I'm not sure where Kate is. She ___ be at the library.", ["might", "must", "can't"]],
      ["He ___ stolen the money — he was with me all evening.", ["can't have", "must have", "should have"]], ["You ___ told me earlier! Now it's too late.", ["should have", "must have", "can't have"]],
      ["She didn't answer the phone. She ___ been asleep.", ["might have", "should have", "can have"]], ["I ___ left my bag on the bus. It's not here.", ["must have", "can't have", "should have"]]
    ]},
    { type: 'gap', task: 'Закончите предложение: must have, can\'t have, might have или should have + V3.', items: [
      ["The windows are broken. Somebody ___ (break) them.", "must have broken"],
      ["She ___ (see) me — she didn't say hello. (возможно, не видела)", "might not have seen|may not have seen"],
      ["He ___ (write) this letter — he can't write!", "cannot have written|could not have written"],
      ["You failed the test. You ___ (study) more.", "should have studied"],
      ["They're very late. They ___ (miss) the train.", "must have missed|might have missed|may have missed"],
      ["You ___ (not / eat) so much cake — now you feel sick.", "should not have eaten"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Должно быть, он уже ушел.", "He must have left already.|He must have already left.|He must have gone already."],
      ["Не может быть, чтобы она это сказала.", "She can't have said that.|She cannot have said that.|She couldn't have said that.|She can't have said it."],
      ["Тебе следовало позвонить мне.", "You should have called me.|You should have phoned me.|You ought to have called me."],
      ["Возможно, он забыл о встрече.", "He may have forgotten about the meeting.|He might have forgotten about the meeting."]
    ]}
  ]},

{ id: 'mod-nuances', level: 'C2', title: 'Тонкости модальных глаголов', sub: "needn't have · was to · won't",
  rule: `
<p>Несколько пар и оборотов, в которых легко ошибиться даже на продвинутом уровне.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>needn't have + V3</i>", "сделал, но это было не нужно", "<i>I <b>needn't have cooked</b> so much.</i>"],
  ["<i>didn't need to + V</i>", "не было нужно (обычно и не делал)", "<i>We <b>didn't need to</b> take a taxi.</i>"],
  ["<i>was / were to + V</i>", "было суждено; было запланировано", "<i>He <b>was to</b> become famous.</i>"],
  ["<i>was to have + V3</i>", "планировалось, но не состоялось", "<i>The meeting <b>was to have taken</b> place on Monday.</i>"],
  ["<i>won't / wouldn't</i>", "отказ, упрямство (в том числе о вещах)", "<i>The car <b>won't</b> start. He <b>wouldn't</b> listen.</i>"],
  ["<i>be bound to</i>", "непременно, наверняка", "<i>It's <b>bound to</b> rain.</i>"],
  ["<i>might as well</i>", "можно с тем же успехом, почему бы и нет", "<i>We <b>might as well</b> walk.</i>"]
])}
${N("<i>You <b>needn't have</b> bought me a present</i> — вежливое «не стоило», подарок уже куплен.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ cooked so much food — only three guests came.", ["needn't have", "didn't need to", "mustn't have"]], ["Tom gave us a lift, so we ___ take a taxi.", ["didn't need to", "needn't have"]],
      ["The meeting ___ taken place on Monday, but it was cancelled.", ["was to have", "must have", "should"]], ["He left home at seventeen. Twenty years later he ___ become a famous painter.", ["was to", "should", "must"]],
      ["I've asked him twice, but he ___ listen!", ["won't", "mustn't", "shan't"]], ["There's nothing good on TV. We ___ go to bed early.", ["might as well", "are bound", "would rather to"]],
      ["Take an umbrella. It's ___ to rain.", ["bound", "must", "certain of"]], ["You ___ have bought me a present, but thank you!", ["needn't", "mustn't", "can't"]]
    ]}
  ]}
]});

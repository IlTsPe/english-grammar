BOOK.push({ n: 12, id: 'gerund', title: 'Герундий', pages: [325, 345],
intro: 'Герундий — форма на <i>-ing</i>, которая работает как существительное. Сначала разберите, после каких глаголов и предлогов он нужен, затем — чем он отличается от инфинитива.',
topics: [

{ id: 'ger-use', level: 'B1', title: 'Герундий после глаголов и предлогов', sub: 'enjoy reading, good at drawing',
  rule: `
<p>Герундий называет действие как предмет: <i><b>Swimming</b> is good for health</i> — «Плавание полезно». В русском его переводят существительным, инфинитивом или деепричастием.</p>
${T(["Где", "Слова", "Пример"], [
  ["после глаголов", "<i>enjoy, finish, mind, avoid, suggest, keep, miss, practise, deny, imagine, consider, give up, put off, can't stand, can't help</i>", "<i>I enjoy <b>walking</b>. Would you mind <b>opening</b> the window?</i>"],
  ["после предлогов", "<i>in, at, of, for, about, without, before, after, instead of, by</i>", "<i>Thank you for <b>coming</b>. He left without <b>saying</b> goodbye.</i>"],
  ["после прилагательное + предлог", "<i>good at, interested in, afraid of, fond of, tired of, proud of</i>", "<i>She is good at <b>drawing</b>.</i>"],
  ["после выражений", "<i>it's no use, it's worth, there's no point in, look forward to, be used to</i>", "<i>It's worth <b>seeing</b>. I look forward to <b>hearing</b> from you.</i>"],
  ["как подлежащее", "—", "<i><b>Smoking</b> is bad for you.</i>"]
])}
${N("В <i>look forward to</i>, <i>be used to</i>, <i>object to</i> слово <i>to</i> — предлог, поэтому дальше идёт <i>-ing</i>: <i>I look forward to <b>seeing</b> you</i>, а не <i>to see</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в форму герундия.', items: [
      ["I enjoy ___ (read) detective stories.", "reading"], ["Would you mind ___ (close) the door?", "closing"],
      ["She is good at ___ (draw).", "drawing"], ["Thank you for ___ (help) me.", "helping"],
      ["He left without ___ (say) goodbye.", "saying"], ["I'm looking forward to ___ (see) you.", "seeing"],
      ["Have you finished ___ (write) the essay?", "writing"], ["___ (swim) is my favourite sport.", "swimming"],
      ["She gave up ___ (smoke) last year.", "smoking"], ["It's no use ___ (cry).", "crying"],
      ["This film is worth ___ (watch).", "watching"], ["I'm tired of ___ (wait).", "waiting"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["He suggested ___ to the cinema.", ["going", "to go", "go"]], ["I can't stand ___ in queues.", ["waiting", "to wait", "wait"]],
      ["She is afraid of ___ alone.", ["being", "to be", "be"]], ["After ___ dinner, we went for a walk.", ["having", "to have", "have"]],
      ["Keep ___! You're doing well.", ["trying", "to try", "try"]], ["Instead of ___, help me!", ["complaining", "to complain", "complain"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я люблю (наслаждаюсь) читать.", "I enjoy reading."],
      ["Спасибо, что пришли.", "Thank you for coming.|Thanks for coming."],
      ["Он ушёл, не сказав ни слова.", "He left without saying a word.|He went away without saying a word."],
      ["Этот музей стоит посетить.", "This museum is worth visiting.|The museum is worth visiting."],
      ["Я с нетерпением жду встречи с тобой.", "I am looking forward to seeing you.|I'm looking forward to seeing you.|I look forward to seeing you."]
    ]}
  ]},

{ id: 'ger-vs-inf', level: 'B2', title: 'Герундий или инфинитив', sub: 'stop smoking / stop to smoke',
  rule: `
<p>После одних глаголов нужен герундий, после других — инфинитив, после третьих возможны оба, иногда с разным смыслом.</p>
${T(["Только -ing", "Только to V", "Оба, смысл тот же"], [
  ["<i>enjoy, finish, mind, avoid, suggest, keep, miss, practise</i>", "<i>want, decide, hope, plan, agree, refuse, promise, manage, afford</i>", "<i>begin, start, continue, like, love, hate, prefer</i>"]
])}
<h3>Меняется смысл</h3>
${T(["Глагол", "+ -ing", "+ to V"], [
  ["<i>stop</i>", "<i>stop <b>smoking</b></i> — бросить курить", "<i>stop <b>to smoke</b></i> — остановиться, чтобы покурить"],
  ["<i>remember</i>", "<i>remember <b>locking</b></i> — помнить, что запер", "<i>remember <b>to lock</b></i> — не забыть запереть"],
  ["<i>forget</i>", "<i>forget <b>meeting</b> her</i> — забыть, что встречал", "<i>forget <b>to meet</b> her</i> — забыть встретить"],
  ["<i>try</i>", "<i>try <b>opening</b> the window</i> — попробовать (как способ)", "<i>try <b>to open</b> it</i> — пытаться (с усилием)"],
  ["<i>regret</i>", "<i>regret <b>saying</b></i> — жалеть, что сказал", "<i>regret <b>to tell</b> you</i> — с сожалением сообщить"]
])}
${N("После <i>would like / would love / would prefer</i> — только инфинитив: <i>I'd like <b>to go</b></i>. После <i>like</i> без would — оба варианта.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильную форму.', items: [
      ["I enjoy ___ in the rain.", ["walking", "to walk"]], ["She decided ___ a new job.", ["to find", "finding"]],
      ["Would you mind ___ the window?", ["opening", "to open"]], ["He promised ___ me.", ["to help", "helping"]],
      ["He stopped ___ last year, and now he feels much better.", ["smoking", "to smoke"]], ["Don't forget ___ the door when you leave.", ["to lock", "locking"]],
      ["I remember ___ him at a party years ago.", ["meeting", "to meet"]], ["I'd like ___ to Italy.", ["to go", "going"]],
      ["We stopped ___ some photos of the lake.", ["to take", "taking"]], ["I regret ___ you that your application was rejected.", ["to tell", "telling"]],
      ["They can't afford ___ a new car.", ["to buy", "buying"]], ["She avoided ___ at me.", ["looking", "to look"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в форму герундия или инфинитива.', items: [
      ["I hope ___ (see) you soon.", "to see"], ["He keeps ___ (ask) the same question.", "asking"],
      ["She refused ___ (answer).", "to answer"], ["We finished ___ (eat) and went out.", "eating"],
      ["They agreed ___ (meet) at six.", "to meet"], ["I suggest ___ (take) a taxi.", "taking"],
      ["Please remember ___ (buy) some milk.", "to buy"], ["I'll never forget ___ (see) the ocean for the first time.", "seeing"],
      ["He managed ___ (open) the box.", "to open"], ["I regret ___ (shout) at you yesterday.", "shouting"]
    ]}
  ]}
]});

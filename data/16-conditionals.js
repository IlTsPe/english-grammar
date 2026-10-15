BOOK.push({ n: 16, id: 'conditionals', title: 'Условные предложения. Сослагательное наклонение после I wish', pages: [382, 398],
intro: 'Четыре типа условных предложений — от реальных фактов до сожалений о прошлом — и конструкция <i>I wish</i>, которая строится по тем же правилам.',
topics: [

{ id: 'cond-01', level: 'B1', title: 'Условные 0 и 1 типа', sub: 'If you heat ice, it melts · If it rains, we will stay',
  rule: `
<p>Реальные условия: то, что бывает всегда, и то, что вполне может произойти в будущем.</p>
${T(["Тип", "Условие (if)", "Результат", "Пример"], [
  ["0 — всегда так", "<i>Present Simple</i>", "<i>Present Simple</i>", "<i>If you <b>heat</b> ice, it <b>melts</b>.</i>"],
  ["1 — реальное будущее", "<i>Present Simple</i>", "<i>will + V</i>", "<i>If it <b>rains</b>, we <b>will stay</b> at home.</i>"],
  ["1 — с модальным / приказом", "<i>Present Simple</i>", "<i>can / may / must; повелит.</i>", "<i>If you <b>are</b> tired, <b>go</b> to bed.</i>"]
])}
${E([
  ["<b>Unless</b> you hurry, you'll miss the train.", "Если не поторопишься… (unless = if not)"],
  ["I'll call you <b>when</b> I <b>get</b> home.", "when, as soon as, before, after, until — тоже Present Simple."],
  ["We'll go out <b>if</b> it stops raining.", "Если придаточное стоит вторым, запятая не нужна."]
])}
${N("В части с <i>if</i> будущее время не ставится: <i>If it <b>rains</b></i>, а не <i>If it will rain</i>. Это самая частая ошибка русскоговорящих.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you heat ice, it ___ (melt).", "melts"], ["If it ___ (rain) tomorrow, we will stay at home.", "rains"],
      ["She will be angry if you ___ (be) late.", "are"], ["Unless you hurry, you ___ (miss) the train.", "will miss"],
      ["If you ___ (mix) red and blue, you get purple.", "mix"], ["I ___ (buy) some bread if I go to the shop.", "will buy"],
      ["If he ___ (not / come), we'll start without him.", "does not come"], ["If you ___ (see) Tom, tell him to call me.", "see"],
      ["I'll phone you as soon as I ___ (arrive).", "arrive"], ["We ___ (not / go) to the beach if it's cold.", "will not go"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["If you ___ water to 100 °C, it boils.", ["heat", "will heat", "would heat"]], ["I'll call you if I ___ time.", ["have", "will have", "would have"]],
      ["We ___ the match unless we train more.", ["won't win", "don't win", "wouldn't won"]], ["If you're hungry, ___ a sandwich.", ["have", "will have", "had"]],
      ["Wait here until I ___ back.", ["come", "will come", "came"]], ["If she ___ the bus, she'll be late.", ["misses", "will miss", "missed"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если завтра будет дождь, мы останемся дома.", "If it rains tomorrow, we will stay at home.|If it rains tomorrow, we'll stay at home.|If it rains tomorrow, we will stay home.|We will stay at home if it rains tomorrow."],
      ["Если ты устал, иди спать.", "If you are tired, go to bed.|If you're tired, go to bed."],
      ["Я позвоню тебе, когда приеду.", "I will call you when I arrive.|I'll call you when I arrive.|I'll call you when I get there.|I'll phone you when I arrive."],
      ["Если не поторопишься, опоздаешь.", "If you don't hurry, you will be late.|If you don't hurry, you'll be late.|Unless you hurry, you will be late.|Unless you hurry, you'll be late."]
    ]}
  ]},

{ id: 'cond-2', level: 'B1', title: 'Условные 2 типа', sub: 'If I had money, I would buy…',
  rule: `
<p>Второй тип описывает <b>нереальное</b> или маловероятное условие в настоящем или будущем. В русском — «если бы…, то…».</p>
${F("If + <b>Past Simple</b>, would + <b>V</b>")}
${E([
  ["If I <b>had</b> money, I <b>would buy</b> a house.", "Если бы у меня были деньги, я бы купил дом (но их нет)."],
  ["If I <b>were</b> you, I <b>wouldn't do</b> that.", "На твоем месте я бы этого не делал."],
  ["What <b>would</b> you <b>do</b> if you <b>won</b> the lottery?", "Что бы ты сделал, если бы выиграл?"],
  ["If he <b>knew</b> her number, he <b>could call</b> her.", "could / might вместо would."]
])}
<h3>1 тип или 2 тип</h3>
${T(["1 тип: реально", "2 тип: нереально"], [
  ["<i>If I <b>have</b> time, I'<b>ll help</b> you.</i> (возможно, будет время)", "<i>If I <b>had</b> time, I'<b>d help</b> you.</i> (времени нет)"]
])}
${N("Для всех лиц можно использовать <i>were</i>: <i>If I <b>were</b>…, If she <b>were</b>…</i> — это нормы письменной речи. В части с <i>if</i> <i>would</i> не ставится.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If I ___ (have) more money, I would buy a house.", "had"], ["If I were you, I ___ (not / do) that.", "would not do|'d not do"],
      ["If he ___ (know) her number, he would call her.", "knew"], ["What would you do if you ___ (win) the lottery?", "won"],
      ["If she ___ (be) taller, she could be a model.", "were|was"], ["We ___ (go) to the sea if we had a car.", "would go"],
      ["If I ___ (can) fly, I would visit every country.", "could"], ["I ___ (help) you if I had time.", "would help"],
      ["If they ___ (live) closer, we would see them more often.", "lived"], ["If it ___ (not / be) so cold, we would go out.", "were not|was not"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["If I ___ you, I'd apologise.", ["were", "am", "will be"]], ["If she ___ harder, she would get better marks.", ["worked", "works", "will work"]],
      ["I would buy that car if it ___ cheaper.", ["were", "is", "will be"]], ["If I knew the answer, I ___ you.", ["would tell", "will tell", "told"]],
      ["Where ___ you live if you could live anywhere?", ["would", "will", "did"]], ["If I ___ a million dollars, I'd travel the world.", ["had", "have", "would have"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если бы у меня было время, я бы тебе помог.", "If I had time, I would help you.|If I had time, I'd help you."],
      ["На твоем месте я бы не стал этого делать.", "If I were you, I wouldn't do that.|If I were you, I would not do that.|If I were you, I wouldn't do it.|If I was you, I wouldn't do that."],
      ["Что бы ты сделал, если бы был президентом?", "What would you do if you were president?|What would you do if you were the president?"],
      ["Если бы он знал английский, он бы нашел работу.", "If he knew English, he would find a job.|If he knew English, he'd find a job.|If he spoke English, he would find a job."]
    ]}
  ]},

{ id: 'cond-3', level: 'B2', title: 'Условные 3 типа и смешанные', sub: 'If I had known, I would have come',
  rule: `
<p>Третий тип описывает нереальное условие в <b>прошлом</b>: событие уже произошло или не произошло, изменить его нельзя.</p>
${F("If + <b>Past Perfect</b>, would have + <b>V3</b>")}
${E([
  ["If you <b>had studied</b>, you <b>would have passed</b>.", "Если бы ты занимался, ты бы сдал (но не сдал)."],
  ["If we <b>hadn't missed</b> the bus, we <b>wouldn't have been</b> late.", "Если бы мы не опоздали на автобус…"],
  ["She <b>could have won</b> if she <b>had tried</b>.", "could / might have вместо would have."]
])}
<h3>Смешанный тип</h3>
${T(["Условие", "Результат", "Пример"], [
  ["прошлое (Past Perfect)", "настоящее (would + V)", "<i>If I <b>had taken</b> that job, I <b>would live</b> in London now.</i>"],
  ["настоящее (Past Simple)", "прошлое (would have + V3)", "<i>If I <b>were</b> braver, I <b>would have said</b> no.</i>"]
])}
${N("В русском все три нереальных типа переводятся одинаково — «если бы…». Определите время по смыслу: речь о сейчас (2 тип) или о прошлом (3 тип)?")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["If you ___ (study) harder, you would have passed the exam.", "had studied|'d studied"], ["If we had left earlier, we ___ (not / miss) the train.", "would not have missed"],
      ["If I had taken the job, I ___ (live) in London now.", "would live|would be living|'d live|'d be living"], ["She would have come if you ___ (invite) her.", "had invited|'d invited"],
      ["If it ___ (not / rain), we would have gone to the beach.", "had not rained"], ["If I had known about the party, I ___ (come).", "would have come"],
      ["He ___ (not / have) the accident if he had driven more carefully.", "would not have had"], ["If you ___ (tell) me, I would have helped you.", "had told|'d told"]
    ]},
    { type: 'choice', task: '2 тип, 3 тип или смешанный? Выберите правильный вариант.', items: [
      ["If I ___ the answer yesterday, I would have told you.", ["had known", "knew", "would know"]], ["If I ___ the answer now, I would tell you.", ["knew", "had known", "know"]],
      ["If she hadn't missed the plane, she ___ here now.", ["would be", "would have been", "will be"]], ["We ___ lost if we had taken a map.", ["wouldn't have got", "wouldn't get", "didn't get"]],
      ["If he had saved money, he ___ a car now.", ["would have", "would have had", "has"]], ["I ___ you if I had seen you.", ["would have called", "would call", "called"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Если бы ты пришел вчера, ты бы увидел его.", "If you had come yesterday, you would have seen him.|If you'd come yesterday, you'd have seen him."],
      ["Если бы я знал, я бы тебе сказал (тогда).", "If I had known, I would have told you.|If I'd known, I'd have told you."],
      ["Если бы мы не опоздали на поезд, мы бы уже были дома.", "If we hadn't missed the train, we would be at home now.|If we had not missed the train, we would be home now.|If we hadn't missed the train, we'd be home now.|If we hadn't missed the train, we would already be at home."]
    ]}
  ]},

{ id: 'cond-wish', level: 'B2', title: 'I wish и If only', sub: 'I wish I knew · I wish I had known',
  rule: `
<p>Конструкция <i>I wish</i> выражает сожаление — «жаль, что…», «хотел бы я…». Время после <i>wish</i> строится как в нереальных условных.</p>
${T(["Сожаление о…", "Форма", "Пример", "Перевод"], [
  ["настоящем", "<i>wish + Past Simple</i>", "<i>I wish I <b>knew</b> the answer.</i>", "Жаль, что я не знаю."],
  ["настоящем (быть)", "<i>wish + were</i>", "<i>I wish I <b>were</b> taller.</i>", "Хотел бы я быть выше."],
  ["прошлом", "<i>wish + Past Perfect</i>", "<i>I wish I <b>hadn't said</b> that.</i>", "Жаль, что я это сказал."],
  ["возможностях", "<i>wish + could</i>", "<i>I wish I <b>could</b> swim.</i>", "Жаль, что я не умею плавать."],
  ["чужом поведении", "<i>wish + would</i>", "<i>I wish you <b>would stop</b> talking.</i>", "Хоть бы ты перестал болтать."]
])}
${N("Утвердительное английское предложение после <i>wish</i> переводится отрицательным русским, и наоборот: <i>I wish I <b>had</b> a car</i> — «Жаль, что у меня <b>нет</b> машины». <i>If only…</i> — то же, но эмоциональнее: <i>If only I had more time!</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму после wish / if only.', items: [
      ["I wish I ___ (know) the answer. (сейчас)", "knew"], ["I wish I ___ (not / say) that yesterday.", "had not said"],
      ["I wish you ___ (stop) interrupting me!", "would stop"], ["I wish I ___ (be) taller.", "were|was"],
      ["If only I ___ (have) more time now!", "had"], ["I wish I ___ (can) play the guitar.", "could"],
      ["She wishes she ___ (go) to the party last night.", "had gone"], ["I wish it ___ (stop) raining.", "would stop"],
      ["I wish we ___ (live) by the sea.", "lived"], ["He wishes he ___ (not / buy) that old car.", "had not bought"]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя I wish.', items: [
      ["Жаль, что у меня нет собаки.", "I wish I had a dog."],
      ["Жаль, что я не знаю английский.", "I wish I knew English.|I wish I spoke English.|I wish I could speak English."],
      ["Жаль, что я не пошел с тобой.", "I wish I had gone with you.|I wish I'd gone with you."],
      ["Жаль, что сейчас не лето.", "I wish it were summer now.|I wish it was summer now.|I wish it were summer.|I wish it was summer."],
      ["Хоть бы он перестал кричать!", "I wish he would stop shouting!|If only he would stop shouting!|I wish he would stop screaming!"]
    ]}
  ]}
]});

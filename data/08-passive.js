BOOK.push({ n: 8, id: 'passive', title: 'Passive Voice', pages: [234, 255],
intro: 'Страдательный залог: когда важен не исполнитель, а действие или его объект. Сначала простые времена, затем все остальные и модальные глаголы, в конце — каузатив.',
topics: [

{ id: 'pas-simple', level: 'B1', title: 'Пассив в Simple', sub: 'is made, was built, will be done',
  rule: `
<p>Пассив нужен, когда важно действие или его объект, а не исполнитель: исполнитель неизвестен, очевиден или неважен. Исполнителя, если нужно, вводят через <i>by</i>, инструмент — через <i>with</i>.</p>
${F("<b>be</b> в нужном времени + <b>V3</b>")}
${T(["Время", "Актив", "Пассив"], [
  ["Present Simple", "<i>They <b>clean</b> the room every day.</i>", "<i>The room <b>is cleaned</b> every day.</i>"],
  ["Past Simple", "<i>They <b>built</b> the house in 1905.</i>", "<i>The house <b>was built</b> in 1905.</i>"],
  ["Future Simple", "<i>They <b>will announce</b> the results.</i>", "<i>The results <b>will be announced</b>.</i>"]
])}
${E([
  ["'Hamlet' <b>was written</b> by Shakespeare.", "«Гамлет» был написан Шекспиром."],
  ["Paper <b>is made</b> from wood.", "Бумагу делают из дерева."],
  ["The letter <b>was written</b> with a pencil.", "Инструмент — with."],
  ["<b>Was</b> the window <b>broken</b> by the children? — It <b>wasn't broken</b>.", "Вопрос и отрицание — с помощью be."]
])}
${N("Русские неопределенно-личные предложения часто переводятся пассивом: «Здесь говорят по-английски» — <i>English <b>is spoken</b> here</i>; «Мне подарили книгу» — <i>I <b>was given</b> a book</i>.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present, Past или Future Simple Passive.', items: [
      ["English ___ (speak) all over the world.", "is spoken"], ["This house ___ (build) in 1905.", "was built"],
      ["The letters ___ (deliver) every morning.", "are delivered"], ["The results ___ (announce) tomorrow.", "will be announced"],
      ["'Hamlet' ___ (write) by Shakespeare.", "was written"], ["Bread ___ (bake) here every day.", "is baked"],
      ["The thief ___ (catch) last night.", "was caught"], ["The new bridge ___ (open) next year.", "will be opened"],
      ["I ___ (invite) to the party yesterday.", "was invited"], ["These cars ___ (make) in Japan.", "are made"],
      ["The museum ___ (not / visit) by many tourists.", "is not visited"], ["When ___ America discovered?", "was"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["The window ___ by the children yesterday.", ["was broken", "broke", "has broken"]], ["Paper ___ from wood.", ["is made", "makes", "is making"]],
      ["The meeting ___ next Monday.", ["will be held", "will hold", "holds"]], ["The cake was cut ___ a knife.", ["with", "by", "from"]],
      ["The picture was painted ___ a famous artist.", ["by", "with", "of"]], ["Where ___ these shoes made?", ["were", "did", "was"]]
    ]},
    { type: 'translate', task: 'Переведите на английский, используя пассив.', items: [
      ["Этот дом был построен в 1990 году.", "This house was built in 1990."],
      ["Здесь говорят по-английски.", "English is spoken here."],
      ["Письмо будет отправлено завтра.", "The letter will be sent tomorrow."],
      ["Меня пригласили на день рождения.", "I was invited to a birthday party.|I was invited to the birthday party."],
      ["Эту книгу написал Пушкин.", "This book was written by Pushkin."]
    ]}
  ]},

{ id: 'pas-all', level: 'B1', title: 'Пассив во всех временах и с модальными', sub: 'is being repaired, has been done, must be done',
  rule: `
<p>В пассиве меняется только форма глагола <i>be</i>; третья форма смыслового глагола остается неизменной.</p>
${T(["Время", "Пассив", "Пример"], [
  ["Present Simple", "<i>am / is / are + V3</i>", "<i>The room <b>is cleaned</b>.</i>"],
  ["Present Continuous", "<i>am / is / are being + V3</i>", "<i>The room <b>is being cleaned</b>.</i>"],
  ["Past Simple", "<i>was / were + V3</i>", "<i>The room <b>was cleaned</b>.</i>"],
  ["Past Continuous", "<i>was / were being + V3</i>", "<i>The room <b>was being cleaned</b>.</i>"],
  ["Present Perfect", "<i>have / has been + V3</i>", "<i>The room <b>has been cleaned</b>.</i>"],
  ["Past Perfect", "<i>had been + V3</i>", "<i>The room <b>had been cleaned</b>.</i>"],
  ["Future Simple", "<i>will be + V3</i>", "<i>The room <b>will be cleaned</b>.</i>"],
  ["Модальные", "<i>can / must / should be + V3</i>", "<i>The room <b>must be cleaned</b>.</i>"]
])}
${N("Future Continuous и Perfect Continuous в пассиве практически не используются. Вместо них — другая конструкция или активный залог.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму пассива.', items: [
      ["The thief ___ (just / arrest).", "has just been arrested"], ["My car ___ (repair) at the moment.", "is being repaired"],
      ["This work must ___ (do) by Friday.", "be done"], ["When I came, the room ___ (clean).", "was being cleaned"],
      ["The letter ___ (already / send).", "has already been sent"], ["By the time we arrived, all the tickets ___ (sell).", "had been sold"],
      ["This problem can ___ (solve) easily.", "be solved"], ["A new school ___ (build) in our street now.", "is being built"],
      ["The children should ___ (tell) the truth.", "be told"], ["Two hundred people ___ (invite) to the wedding so far.", "have been invited"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["A new school ___ in our town at the moment.", ["is being built", "is building", "has built"]], ["The parcel ___ yet.", ["hasn't been delivered", "didn't deliver", "wasn't delivering"]],
      ["The documents must ___ today.", ["be signed", "sign", "been signed"]], ["The house ___ before we bought it.", ["had been painted", "has been painted", "was painting"]],
      ["Our flat ___ now, so we're living with my parents.", ["is being decorated", "is decorated", "has decorated"]], ["Can this word ___ in two ways?", ["be translated", "translated", "be translate"]]
    ]},
    { type: 'gap', task: 'Перепишите предложение в пассиве (впишите сказуемое).', items: [
      ["They are painting the fence. → The fence ___.", "is being painted"],
      ["Somebody has stolen my bike. → My bike ___.", "has been stolen"],
      ["They will finish the work tomorrow. → The work ___ tomorrow.", "will be finished"],
      ["We must wash the car. → The car ___.", "must be washed"],
      ["They had sold the house. → The house ___.", "had been sold"],
      ["People grow rice in China. → Rice ___ in China.", "is grown"]
    ]}
  ]},

{ id: 'pas-causative', level: 'B2', title: 'Каузатив: have something done', sub: 'I had my hair cut',
  rule: `
<p>Каузатив показывает, что действие выполняет <b>кто-то другой</b> для нас (обычно за плату), или что с нами что-то случилось.</p>
${F("have / get + <b>объект</b> + <b>V3</b>")}
${E([
  ["I <b>had my hair cut</b> yesterday.", "Я подстриглась (меня подстригли в салоне)."],
  ["We're <b>having our flat painted</b>.", "Нам красят квартиру."],
  ["She <b>got her car repaired</b>.", "Ей починили машину (get — разговорнее)."],
  ["He <b>had his wallet stolen</b>.", "У него украли кошелек (неприятное событие)."]
])}
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>have + кто-то + V</i>", "поручить", "<i>I'll <b>have</b> the porter <b>bring</b> your bags.</i>"],
  ["<i>get + кто-то + to V</i>", "уговорить", "<i>I'll <b>get</b> my brother <b>to help</b> me.</i>"],
  ["<i>make + кто-то + V</i>", "заставить", "<i>The teacher <b>made</b> us <b>rewrite</b> it.</i>"]
])}
${N("<i>I cut my hair</i> — «я сам себя подстриг». Если стриг парикмахер — <i>I <b>had</b> my hair <b>cut</b></i>.")}`,
  ex: [
    { type: 'gap', task: 'Составьте каузатив из слов в скобках.', items: [
      ["I ___ (have / my hair / cut) yesterday.", "had my hair cut"], ["We are ___ (have / our flat / paint) next week.", "having our flat painted"],
      ["She ___ (get / her car / repair) last month.", "got her car repaired"], ["He ___ (have / his wallet / steal) on the train.", "had his wallet stolen"],
      ["You should ___ (have / your eyes / test).", "have your eyes tested"], ["I'll get my brother ___ (help) me.", "to help"],
      ["The teacher made us ___ (rewrite) the essay.", "rewrite"], ["I'll have the porter ___ (bring) your bags.", "bring"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я постриглась вчера (в парикмахерской).", "I had my hair cut yesterday.|I got my hair cut yesterday."],
      ["Нам починили телевизор.", "We had our TV repaired.|We had our TV set repaired.|We got our TV repaired.|We had the TV repaired."],
      ["Тебе нужно проверить зрение.", "You need to have your eyes tested.|You should have your eyes tested.|You need to have your eyes checked.|You should have your eyes checked."],
      ["У него украли телефон.", "He had his phone stolen.|His phone was stolen."]
    ]}
  ]}
]});

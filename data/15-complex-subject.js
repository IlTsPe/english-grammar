BOOK.push({ n: 15, id: 'complex-subject', title: 'Сложное подлежащее (Complex Subject)',
intro: 'Конструкция «подлежащее + глагол + инфинитив»: <i>He <b>seems to know</b></i>, <i>She <b>is said to be</b> rich</i>. В русском она переводится вводными словами «кажется», «говорят», «вероятно».',
topics: [

{ id: 'cs-seem', level: 'B2', title: 'Seem, appear, happen, be likely to', sub: 'He seems to know · She is likely to come',
  rule: `
<p>Русские вводные слова «кажется», «оказывается», «случайно», «вероятно» в английском передаются глаголом-сказуемым и инфинитивом.</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>seem to V</i>", "кажется", "<i>He <b>seems to know</b> everything.</i> — Он, кажется, все знает."],
  ["<i>appear to V</i>", "по-видимому, оказывается", "<i>She <b>appears to be</b> ill.</i>"],
  ["<i>happen to V</i>", "случайно", "<i>I <b>happened to meet</b> him.</i> — Я случайно встретил его."],
  ["<i>turn out to V</i>", "оказаться", "<i>The film <b>turned out to be</b> boring.</i>"],
  ["<i>be likely to V</i>", "вероятно", "<i>It <b>is likely to rain</b>.</i> — Вероятно, пойдет дождь."],
  ["<i>be sure / certain to V</i>", "обязательно, наверняка", "<i>He <b>is sure to come</b>.</i> — Он обязательно придет."],
  ["<i>be unlikely to V</i>", "вряд ли", "<i>She <b>is unlikely to win</b>.</i>"]
])}
${E([
  ["He seems <b>to be reading</b>.", "Кажется, он читает (сейчас)."],
  ["He seems <b>to have read</b> it.", "Кажется, он это прочитал (уже)."]
])}
${N("Форма инфинитива показывает время: Simple — сейчас или в будущем, Continuous — процесс, Perfect — раньше. Повторите тему 10.3.")}`,
  ex: [
    { type: 'gap', task: 'Перепишите предложение с Complex Subject (впишите недостающую часть).', items: [
      ["It seems that he knows the answer. → He seems ___ the answer.", "to know"],
      ["It seems that she is sleeping. → She seems ___.", "to be sleeping"],
      ["It seems that they have forgotten. → They seem ___.", "to have forgotten"],
      ["Probably it will rain. → It is likely ___.", "to rain"],
      ["By chance I met him. → I happened ___ him.", "to meet"],
      ["Certainly he will come. → He is sure ___.", "to come"],
      ["It turned out that the test was easy. → The test turned out ___ easy.", "to be"],
      ["It is unlikely that she will win. → She is unlikely ___.", "to win"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Он, кажется, болен.", "He seems to be ill.|He seems to be sick."],
      ["Она, кажется, забыла о встрече.", "She seems to have forgotten about the meeting."],
      ["Я случайно увидел его вчера.", "I happened to see him yesterday."],
      ["Он обязательно придет.", "He is sure to come.|He's sure to come.|He is certain to come."],
      ["Вероятно, пойдет снег.", "It is likely to snow.|It's likely to snow."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Your brother seems to know a lot about cars.", "Твой брат, кажется, много знает о машинах."],
      ["It is likely to rain later in the afternoon.", "Скорее всего, ближе к вечеру пойдет дождь."],
      ["I happened to meet our old teacher at the station.", "Я случайно встретил нашего старого учителя на вокзале."]
    ]}
  ]},

{ id: 'cs-said', level: 'C1', title: 'Безличный пассив: is said to', sub: 'It is said that… · He is said to be…',
  rule: `
<p>В новостях и официальном стиле мнения передают без указания источника: «говорят», «считается», «сообщается».</p>
${T(["Конструкция", "Пример"], [
  ["<i>It is said / believed / reported / thought that + предложение</i>", "<i><b>It is thought that</b> the painting is a fake.</i>"],
  ["<i>Подлежащее + is said + to V</i> (одновременно)", "<i>He <b>is said to be</b> a genius.</i>"],
  ["<i>… + to be V-ing</i> (происходит сейчас)", "<i>He <b>is said to be working</b> on a new novel.</i>"],
  ["<i>… + to have V3</i> (было раньше)", "<i>The thief <b>is believed to have left</b> the city.</i>"]
])}
${E([
  ["People believe the ship sank in 1912. → The ship <b>is believed to have sunk</b> in 1912.", "Считается, что корабль затонул в 1912 году."],
  ["<b>It is expected that</b> prices will rise.", "Ожидается, что цены вырастут."]
])}
${M("Глаголы:", ["say", "believe", "think", "know", "report", "expect", "consider", "suppose"])}
${N("Если сообщение о прошлом, а говорят о нем сейчас, нужен перфектный инфинитив: <i>is said <b>to have done</b></i>.")}`,
  ex: [
    { type: 'gap', task: 'Закончите предложение, используя безличный пассив.', items: [
      ["People say he is a genius. → He is said ___ a genius.", "to be"],
      ["People believe the thief left the city. → The thief is believed ___ the city.", "to have left"],
      ["They report that the president is visiting China. → The president is reported ___ China.", "to be visiting"],
      ["It ___ (think) that the painting is a fake.", "is thought"],
      ["The ship is believed ___ (sink) in 1912.", "to have sunk"],
      ["She is known ___ (be) very generous.", "to be"],
      ["It ___ (expect) that prices will rise.", "is expected"],
      ["He is said ___ (work) on a new novel at the moment.", "to be working"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Говорят, он очень богат.", "He is said to be very rich.|It is said that he is very rich."],
      ["Считается, что этот дом построили в XVIII веке.", "This house is believed to have been built in the 18th century.|This house is thought to have been built in the 18th century.|It is believed that this house was built in the 18th century."],
      ["Сообщают, что поезд опаздывает.", "The train is reported to be late.|It is reported that the train is late.|The train is reported to be running late.|It is reported that the train is running late."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["This restaurant is said to be the best in the city.", "Говорят, этот ресторан лучший в городе."],
      ["The thieves are believed to have left the country.", "Считается, что воры уже уехали из страны."],
      ["It is reported that several people were injured in the accident.", "Сообщается, что в аварии пострадали несколько человек."]
    ]}
  ]}
]});

BOOK.push({ n: 13, id: 'ing-forms', title: 'Причастие, герундий и отглагольное существительное', pages: [346, 351],
intro: 'Три формы на <i>-ing</i> выглядят одинаково, но играют в предложении разные роли. Этот раздел учит их различать.',
topics: [

{ id: 'ing-distinguish', level: 'B2', title: 'Как различать формы на -ing', sub: 'a sleeping child · sleeping is important · the sleeping of…',
  rule: `
<p>По форме <i>reading</i> может быть причастием, герундием или отглагольным существительным. Различает их функция в предложении.</p>
${T(["Форма", "Роль", "Признаки", "Пример"], [
  ["Причастие (Participle I)", "определение или обстоятельство", "отвечает на «какой?», «делая что?»", "<i>a <b>reading</b> boy; <b>Reading</b> the book, he laughed.</i>"],
  ["Герундий", "существительное-действие", "может иметь прямое дополнение, определяется наречием, без артикля", "<i><b>Reading</b> books is useful. I like <b>reading</b> quickly.</i>"],
  ["Отглагольное существительное", "обычное существительное", "есть артикль, предлог <i>of</i>, прилагательное, множественное число", "<i><b>The reading of</b> the letter took long. <b>Readings</b> of the poem.</i>"]
])}
${E([
  ["I saw a man <b>crossing</b> the street.", "Причастие: какого человека? переходящего."],
  ["<b>Crossing</b> the street here is dangerous.", "Герундий: что опасно? переходить."],
  ["<b>The crossing of</b> the river took two days.", "Существительное: артикль + of."]
])}
${N("Быстрая проверка: если перед словом на <i>-ing</i> стоит артикль, а после — <i>of</i>, это отглагольное существительное. Если слово можно заменить на «это» (подлежащее, дополнение) — герундий. Если оно описывает существительное — причастие.")}`,
  ex: [
    { type: 'choice', task: 'Определите, чем является выделенное слово на -ing (оно стоит вместо пропуска).', items: [
      ["___ is my hobby. (Swimming)", ["герундий", "причастие", "отглагольное существительное"]],
      ["Look at the ___ children. (swimming)", ["причастие", "герундий", "отглагольное существительное"]],
      ["___ of the new bridge took three years. (The building)", ["отглагольное существительное", "герундий", "причастие"]],
      ["She left without ___ goodbye. (saying)", ["герундий", "причастие", "отглагольное существительное"]],
      ["___ home, I met an old friend. (Walking)", ["причастие", "герундий", "отглагольное существительное"]],
      ["I like ___ books in the evening. (reading)", ["герундий", "причастие", "отглагольное существительное"]],
      ["The man ___ to Ann is her father. (talking)", ["причастие", "герундий", "отглагольное существительное"]],
      ["He has three ___ a week. (meetings)", ["отглагольное существительное", "герундий", "причастие"]]
    ]},
    { type: 'gap', task: 'Впишите the или of, если они нужны (иначе «-»), чтобы получилось правильное предложение.', items: [
      ["___ reading of this poem was beautiful.", "the"], ["The singing ___ birds woke me up.", "of"],
      ["___ smoking is bad for your health.", "-|0"], ["I enjoy ___ cooking.", "-|0"],
      ["The opening ___ the new school was on Monday.", "of"], ["___ swimming in cold water is healthy.", "-|0"]
    ]}
  ]}
]});

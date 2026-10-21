BOOK.push({ n: 19, id: 'extra', title: 'Дополнительно: темы сверх сборника',
intro: 'Этих тем нет в сборнике Голицынского: он рассчитан на школьников. Здесь собраны конструкции уровней B2–C2, которые встречаются в экзаменах и книжной речи.',
topics: [

{ id: 'x-relative', level: 'B2', title: 'Относительные придаточные', sub: 'who, which, that, whose, where',
  rule: `
<p>Относительное придаточное уточняет существительное. Местоимение выбирается по тому, о чем идет речь.</p>
${T(["Слово", "О чем", "Пример"], [
  ["<i>who</i>", "люди", "<i>The woman <b>who</b> lives next door…</i>"],
  ["<i>which</i>", "предметы, животные", "<i>The book <b>which</b> I bought…</i>"],
  ["<i>that</i>", "люди и предметы (только в определительных)", "<i>The car <b>that</b> he drives…</i>"],
  ["<i>whose</i>", "чей", "<i>The man <b>whose</b> car was stolen…</i>"],
  ["<i>where</i>", "место", "<i>The town <b>where</b> I was born…</i>"],
  ["<i>when</i>", "время", "<i>The day <b>when</b> we met…</i>"]
])}
${E([
  ["The man <b>who called</b> you is my boss.", "Определительное: без него непонятно, о ком речь. Без запятых."],
  ["My brother, <b>who lives in Kazan</b>, is a teacher.", "Описательное: дополнительная информация. С запятыми, that нельзя."],
  ["The book (<b>that</b>) you gave me was great.", "Если местоимение — дополнение, его можно опустить."]
])}
${N("В описательных придаточных (с запятыми) <i>that</i> не используется: <i>Moscow, <b>which</b> is the capital…</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите who, which, that, whose, where или when. Если слово можно опустить, допустим и «-».', items: [
      ["The woman ___ lives next door is a doctor.", "who|that"], ["This is the house ___ I was born.", "where"],
      ["The book ___ you gave me was great.", "which|that|-|0"], ["That's the man ___ car was stolen.", "whose"],
      ["Moscow, ___ is the capital of Russia, is huge.", "which"], ["I remember the day ___ we first met.", "when|that|-|0"],
      ["My brother, ___ lives in Kazan, is a teacher.", "who"], ["The film ___ we saw yesterday was boring.", "which|that|-|0"],
      ["Is this the shop ___ you bought your coat?", "where"], ["The girl ___ mother is a singer is in my class.", "whose"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Женщина, которая живет по соседству, — врач.", "The woman who lives next door is a doctor.|The woman that lives next door is a doctor."],
      ["Это дом, где я родился.", "This is the house where I was born.|This is the house in which I was born."],
      ["Это человек, у которого украли машину.", "This is the man whose car was stolen.|That is the man whose car was stolen."],
      ["Книга, которую ты мне дал, очень интересная.", "The book you gave me is very interesting.|The book that you gave me is very interesting.|The book which you gave me is very interesting."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["The woman who lives next door is a famous singer.", "Женщина, которая живет по соседству, известная певица."],
      ["This is the town where my grandparents were born.", "Это город, где родились мои бабушка и дедушка."],
      ["I have a friend whose father works at the zoo.", "У меня есть друг, чей отец работает в зоопарке."]
    ]}
  ]},

{ id: 'x-inversion', level: 'C1', title: 'Инверсия', sub: 'Never have I seen…',
  rule: `
<p>Если предложение начинается с отрицательного или ограничительного наречия, порядок слов меняется как в вопросе: <b>вспомогательный глагол + подлежащее</b>. Это книжный, эмфатический стиль.</p>
${T(["Начало", "Пример", "Перевод"], [
  ["<i>Never / Rarely / Seldom</i>", "<i>Never <b>have I</b> seen such a sunset.</i>", "Никогда я не видел…"],
  ["<i>Hardly / Scarcely … when</i>", "<i>Hardly <b>had she</b> sat down when the phone rang.</i>", "Едва она села, как…"],
  ["<i>No sooner … than</i>", "<i>No sooner <b>had we</b> arrived than it started to rain.</i>", "Не успели мы приехать, как…"],
  ["<i>Not only … but also</i>", "<i>Not only <b>was he</b> late, but he also forgot the tickets.</i>", "Мало того что опоздал…"],
  ["<i>Only when / Only after / Only then</i>", "<i>Only when I got home <b>did I</b> realise…</i>", "Только дома я понял…"],
  ["<i>Not until</i>", "<i>Not until morning <b>did he</b> learn the truth.</i>", "Лишь утром он узнал…"],
  ["<i>Little</i>", "<i>Little <b>did they</b> know…</i>", "Они и не подозревали…"],
  ["<i>Under no circumstances</i>", "<i>Under no circumstances <b>should you</b> open it.</i>", "Ни в коем случае…"]
])}
${N("Если глагол в Present или Past Simple, появляется <i>do / does / did</i>: <i>Rarely <b>do</b> we go out.</i> В конструкциях <i>Only when…, Not until…</i> инверсия ставится в <b>главной</b> части.")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["Never ___ I seen such a beautiful sunset.", "have"], ["No sooner had we arrived ___ it started to rain.", "than"],
      ["Hardly had she sat down ___ the phone rang.", "when"], ["Not only ___ he late, but he also forgot the tickets.", "was"],
      ["Only when I got home ___ I realise I had lost my keys.", "did"], ["Little ___ they know what was waiting for them.", "did"],
      ["Under no circumstances ___ you open this door.", "should|must"], ["Rarely ___ we go out these days.", "do"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Not until the next morning ___ the truth.", ["did he learn", "he learned", "he did learn"]], ["Seldom ___ such talent in one so young.", ["have I seen", "I have seen", "I saw"]],
      ["Scarcely ___ the house when it began to snow.", ["had we left", "we had left", "did we leave"]], ["Only after the meeting ___ how serious the problem was.", ["did they understand", "they understood", "understood they"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Never have I seen such a beautiful sunset.", "Никогда я не видел такого красивого заката."],
      ["Not only did he forget my birthday, but he was also late.", "Он не только забыл о моем дне рождения, но еще и опоздал."],
      ["Hardly had we sat down when the phone rang.", "Едва мы сели, как зазвонил телефон."]
    ]}
  ]},

{ id: 'x-unreal-past', level: 'C1', title: 'Нереальное прошедшее', sub: "it's time · would rather · as if",
  rule: `
<p>После ряда выражений прошедшее время обозначает не прошлое, а <b>нереальность</b> или желаемое положение дел в настоящем.</p>
${T(["Выражение", "Форма", "Пример"], [
  ["<i>It's (high) time</i>", "<i>+ Past Simple</i>", "<i>It's high time you <b>found</b> a job.</i>"],
  ["<i>would rather</i> (о себе)", "<i>+ V</i>", "<i>I'd rather <b>stay</b> at home.</i>"],
  ["<i>would rather</i> (о другом)", "<i>+ Past Simple</i>", "<i>I'd rather you <b>didn't smoke</b> here.</i>"],
  ["<i>would rather</i> (о прошлом)", "<i>+ Past Perfect</i>", "<i>I'd rather you <b>had told</b> me.</i>"],
  ["<i>as if / as though</i>", "<i>+ Past (нереально)</i>", "<i>He talks as if he <b>knew</b> everything.</i>"]
])}
<h3>Сослагательное после глаголов требования</h3>
<p>После <i>suggest, insist, recommend, demand</i> и выражений <i>it is essential / vital that</i> используется глагол в начальной форме без <i>-s</i> (в британском варианте также <i>should + V</i>).</p>
${E([
  ["The doctor insisted that he <b>stay</b> in bed.", "Врач настоял, чтобы он лежал."],
  ["It is essential that every student <b>attend</b>.", "Важно, чтобы присутствовал каждый."]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужную форму.', items: [
      ["It's high time you ___ (find) a job.", "found"], ["I'd rather you ___ (not / smoke) in here.", "did not smoke"],
      ["I'd rather ___ (stay) at home tonight.", "stay"], ["He talks as if he ___ (know) everything.", "knew"],
      ["I'd rather you ___ (tell) me the truth yesterday.", "had told|'d told"], ["The doctor insisted that he ___ (stay) in bed.", "stay|should stay"],
      ["It is essential that every student ___ (attend) the meeting.", "attend|should attend"], ["It's time we ___ (go) home.", "went"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Тебе давно пора найти работу.", "It is high time you found a job.|It is time you found a job."],
      ["Я бы предпочел, чтобы ты здесь не курил.", "I would rather you didn't smoke here.|I would rather you did not smoke here."],
      ["Он говорит так, будто все знает.", "He talks as if he knew everything.|He speaks as if he knew everything.|He talks as though he knew everything.|He speaks as though he knew everything."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It's time we went home, it's getting dark.", "Нам пора домой: темнеет."],
      ["I'd rather you didn't tell anyone about it.", "Я бы предпочел, чтобы ты никому об этом не рассказывал."],
      ["He talks as if he knew everything about everything.", "Он говорит так, будто знает обо всем на свете."]
    ]}
  ]},

{ id: 'x-cleft', level: 'C1', title: 'Расщепленные предложения', sub: 'It was Tom who… · What I need is…',
  rule: `
<p>Чтобы выделить часть предложения, его «расщепляют» на две части. В русском для этого хватает интонации или слова «именно».</p>
${T(["Конструкция", "Пример", "Что выделяем"], [
  ["<i>It is / was … that / who …</i>", "<i><b>It was Tom who</b> broke the window.</i>", "именно Том"],
  ["", "<i><b>It was in 2010 that</b> we met.</i>", "именно в 2010-м"],
  ["<i>What … is / was …</i>", "<i><b>What I need is</b> a holiday.</i>", "то, что мне нужно"],
  ["<i>What … did was (to) V</i>", "<i><b>What he did was</b> (to) call the police.</i>", "его действие"],
  ["<i>All … is …</i>", "<i><b>All I want is</b> a cup of tea.</i>", "единственное, что"]
])}
${N("Глагол после <i>What…</i> обычно в единственном числе: <i>What we need <b>is</b> more people.</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["It was Tom ___ broke the window, not me.", "who|that"], ["___ I need is a long holiday.", "what"],
      ["It was in 2010 ___ we first met.", "that"], ["All I want ___ a cup of tea.", "is"],
      ["What he did ___ to call the police.", "was"], ["The reason ___ I called is to apologise.", "why|that"],
      ["It ___ not until midnight that she came home.", "was"], ["What surprised me ___ his reaction.", "was"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Именно Том разбил окно.", "It was Tom who broke the window.|It was Tom that broke the window."],
      ["Что мне нужно, так это отпуск.", "What I need is a holiday.|What I need is a vacation."],
      ["Все, чего я хочу, — это чашка чая.", "All I want is a cup of tea."],
      ["Мы познакомились именно в 2010 году.", "It was in 2010 that we met.|It was in 2010 that we first met."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["It was my brother who broke the window, not me.", "Это мой брат разбил окно, а не я."],
      ["What I need now is a cup of hot tea.", "Что мне сейчас нужно, так это чашка горячего чая."],
      ["It was in Rome that they first met.", "Именно в Риме они впервые встретились."]
    ]}
  ]},

{ id: 'x-inverted-conditionals', level: 'C2', title: 'Условия без if', sub: 'Had I known… · Should you need…',
  rule: `
<p>В формальной речи <i>if</i> опускают и ставят вспомогательный глагол в начало. Кроме того, условие можно выразить другими союзами.</p>
${T(["Обычная форма", "С инверсией"], [
  ["<i>If I had known…</i>", "<i><b>Had I known</b>, I would have helped.</i>"],
  ["<i>If you should need help…</i>", "<i><b>Should you need</b> any help, call me.</i>"],
  ["<i>If the government were to raise taxes…</i>", "<i><b>Were the government to</b> raise taxes, there would be protests.</i>"],
  ["<i>If it were not for…</i>", "<i><b>Were it not for</b> the rain, we could play outside.</i>"],
  ["<i>If it had not been for…</i>", "<i><b>Had it not been for</b> your support, I would have given up.</i>"]
])}
${E([
  ["<b>But for</b> his help, we would have failed.", "Если бы не его помощь…"],
  ["You can borrow it <b>as long as</b> / <b>provided</b> you're careful.", "При условии, что…"],
  ["<b>Supposing</b> you won, what would you do?", "Предположим, ты выиграл…"]
])}
${N("При инверсии отрицание не сокращается: <i>Had it <b>not</b> been for…</i>, а не <i>Hadn't it been for…</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите пропущенное слово.', items: [
      ["___ I known about the problem, I would have helped.", "had"], ["___ you need any help, call me.", "should"],
      ["___ it not been for your support, I would have given up.", "had"], ["___ it not for the rain, we could play outside.", "were"],
      ["___ the government to raise taxes, there would be protests.", "were"], ["But ___ his help, we would have failed.", "for"],
      ["Had she ___ (study) harder, she would have passed.", "studied"], ["You can borrow my car as ___ as you drive carefully.", "long"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ you change your mind, let me know.", ["Should", "Would", "Had"]], ["Had I ___ earlier, I would have caught the train.", ["left", "leave", "been left"]],
      ["___ for the storm, the plane would have landed on time.", ["Had it not been", "Were it not", "Should it not"]], ["I'll lend you the money ___ you pay it back next month.", ["provided", "unless", "otherwise"]]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Had I known about the traffic, I would have left earlier.", "Знай я о пробках, выехал бы раньше."],
      ["Should you need any help, just call me.", "Если вам понадобится помощь, просто позвоните мне."],
      ["Were I in your place, I would accept the offer.", "Будь я на вашем месте, я бы принял предложение."]
    ]}
  ]},

{ id: 'x-ellipsis', level: 'C2', title: 'Эллипсис и замещение', sub: 'I hope not · so can I · the red one',
  rule: `
<p>В живой речи англичане избегают повторов: слова заменяют короткими заместителями или опускают.</p>
${T(["Заместитель", "Пример", "Значение"], [
  ["<i>so / not</i>", "<i>I think <b>so</b>. I hope <b>not</b>. I'm afraid <b>not</b>.</i>", "заменяет целое предложение"],
  ["<i>one / ones</i>", "<i>Can I see the red <b>one</b>? Bigger <b>ones</b>?</i>", "заменяет исчисляемое существительное"],
  ["вспомогательный глагол", "<i>She said she'd call, but she <b>didn't</b>.</i>", "заменяет глагольную группу"],
  ["<i>so / neither + aux + подлежащее</i>", "<i>He can swim, and <b>so can I</b>. — I'm not tired. — <b>Neither am I</b>.</i>", "«я тоже», «я тоже не»"],
  ["<i>to</i>", "<i>You don't have to if you don't want <b>to</b>.</i>", "заменяет инфинитив"]
])}
${N("После <i>hope, think, expect, suppose</i> отрицательный ответ строится по-разному: <i>I hope <b>not</b></i>, но <i>I <b>don't think so</b></i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите одно слово.', items: [
      ["— Will it rain tomorrow? — I hope ___.", "not"], ["— Is she coming? — I think ___.", "so"],
      ["I don't like this dress. Can I see the red ___?", "one"], ["He can play the piano, and so ___ his sister.", "can"],
      ["— I'm not hungry. — Neither ___ I.", "am"], ["You don't have to come if you don't want ___.", "to"],
      ["These shoes are too small. Have you got any bigger ___?", "ones"], ["— Did you lock the door? — I'm afraid ___. Sorry!", "not"],
      ["She promised to call, but she ___ (не позвонила).", "did not"], ["— I love jazz. — So ___ I.", "do"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Надеюсь, что нет.", "I hope not."],
      ["— Я устал. — Я тоже.", "I am tired. — So am I."],
      ["Мне не нравится эта сумка. Покажите красную.", "I don't like this bag. Show me the red one.|I don't like this bag. Can I see the red one?"],
      ["Она обещала позвонить, но не позвонила.", "She promised to call, but she didn't.|She promised to phone, but she didn't."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Is the shop still open? I'm afraid not.", "Магазин еще открыт? Боюсь, что нет."],
      ["She can swim very fast, and so can her brother.", "Она умеет очень быстро плавать, и ее брат тоже."],
      ["I don't like the red dress, but I like the blue one.", "Мне не нравится красное платье, а синее нравится."]
    ]}
  ]}
]});

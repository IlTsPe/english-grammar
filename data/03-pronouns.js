BOOK.push({ n: 3, id: 'pronouns', title: 'Местоимения some, any, no, every и их производные',
intro: 'В сборнике раздел посвящен неопределенным местоимениям. Сюда же добавлена опорная тема о личных, притяжательных и возвратных местоимениях — без нее упражнения раздела даются тяжелее.',
topics: [

{ id: 'pron-personal', level: 'A1', title: 'Личные, притяжательные и возвратные', sub: 'I – me – my – mine – myself',
  rule: `
<p>У английских местоимений несколько форм. Форма зависит от того, какую роль слово играет в предложении.</p>
${T(["Подлежащее", "Дополнение", "Перед сущ.", "Без сущ.", "Возвратное"], [
  ["<i>I</i>", "<i>me</i>", "<i>my</i>", "<i>mine</i>", "<i>myself</i>"],
  ["<i>you</i>", "<i>you</i>", "<i>your</i>", "<i>yours</i>", "<i>yourself / yourselves</i>"],
  ["<i>he</i>", "<i>him</i>", "<i>his</i>", "<i>his</i>", "<i>himself</i>"],
  ["<i>she</i>", "<i>her</i>", "<i>her</i>", "<i>hers</i>", "<i>herself</i>"],
  ["<i>it</i>", "<i>it</i>", "<i>its</i>", "—", "<i>itself</i>"],
  ["<i>we</i>", "<i>us</i>", "<i>our</i>", "<i>ours</i>", "<i>ourselves</i>"],
  ["<i>they</i>", "<i>them</i>", "<i>their</i>", "<i>theirs</i>", "<i>themselves</i>"]
])}
${E([
  ["<b>She</b> loves <b>him</b>, and <b>he</b> loves <b>her</b>.", "Подлежащее и дополнение."],
  ["This is <b>my</b> bag. The bag is <b>mine</b>.", "Перед существительным и без него."],
  ["He cut <b>himself</b>. Help <b>yourself</b>!", "Возвратное — действие на себя."],
  ["I did it <b>myself</b>.", "Усилительное — «сам»: я сделал это сам."]
])}
${N("Русское «свой» переводится по лицу: «Я взял свою книгу» — <i>I took <b>my</b> book</i>, «Она взяла свою» — <i>She took <b>her</b> book</i>. После <i>than, as</i> и в коротких ответах в разговорной речи используется объектная форма: <i>He is taller than <b>me</b>. — Who's there? — <b>Me</b>.</i>")}`,
  ex: [
    { type: 'gap', task: 'Замените слово в скобках нужной формой местоимения.', items: [
      ["Can you help ___ (I)?", "me"], ["This is Anna. ___ (she) brother is a pilot.", "her"],
      ["We love ___ (we) new flat.", "our"], ["The dog is wagging ___ (it) tail.", "its"],
      ["This bag isn't mine, it's ___ (she).", "hers"], ["Is this pen ___ (you)?", "yours"],
      ["I don't know ___ (they).", "them"], ["He hurt ___ (he) while playing football.", "himself"],
      ["We painted the room ___ (we).", "ourselves"], ["Tell ___ (he) to call me.", "him"],
      ["The house is ___ (they), not ___ (we).", ["theirs", "ours"]]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Mary and ___ are friends.", ["I", "me", "my"]], ["Give the book to ___.", ["her", "she", "hers"]],
      ["Is this umbrella ___?", ["yours", "your", "you"]], ["The children enjoyed ___ at the party.", ["themselves", "themself", "them"]],
      ["Look at that bird! ___ wings are blue.", ["Its", "It's", "Their"]], ["He is older than ___.", ["me", "my", "mine"]],
      ["Our car is old, but ___ is new.", ["theirs", "their", "them"]], ["Please help ___ to some cake!", ["yourself", "you", "yours"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Это ее сумка, а не моя.", "This is her bag, not mine.|It is her bag, not mine.|It's her bag, not mine."],
      ["Позвони мне завтра.", "Call me tomorrow.|Phone me tomorrow.|Ring me tomorrow."],
      ["Я сделал это сам.", "I did it myself."],
      ["Они взяли свои книги.", "They took their books."],
      ["Мы их не знаем.", "We don't know them.|We do not know them."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["She told me that the red bag was hers.", "Она сказала мне, что красная сумка ее."],
      ["We painted our kitchen ourselves last summer.", "Прошлым летом мы сами покрасили свою кухню."],
      ["Is this your umbrella or is it mine?", "Это твой зонт или мой?"]
    ]}
  ]},

{ id: 'pron-some-any', level: 'A2', title: 'Some, any, no', sub: 'some milk, any questions, no time',
  rule: `
<p><i>some</i>, <i>any</i> и <i>no</i> указывают на неопределенное количество. Употребляются с неисчисляемыми и с исчисляемыми во множественном числе.</p>
${T(["Слово", "Где", "Пример"], [
  ["<i>some</i>", "утвердительные предложения", "<i>There is <b>some</b> milk. I have <b>some</b> friends.</i>"],
  ["<i>some</i>", "вопросы-просьбы и предложения", "<i>Would you like <b>some</b> tea? Can I have <b>some</b> water?</i>"],
  ["<i>any</i>", "вопросы", "<i>Have you got <b>any</b> brothers?</i>"],
  ["<i>any</i>", "отрицания (с not)", "<i>I haven't got <b>any</b> money.</i>"],
  ["<i>any</i>", "утверждение: «любой»", "<i>Take <b>any</b> book you like.</i>"],
  ["<i>no</i>", "отрицание без not", "<i>I have <b>no</b> money. = I haven't got any money.</i>"]
])}
${N("В английском предложении только одно отрицание. Если есть <i>no</i>, частица <i>not</i> не нужна: <i>I have <b>no</b> time</i>, а не <i>I don't have no time</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите some, any или no.', items: [
      ["There is ___ bread on the table.", "some"], ["Are there ___ apples in the fridge?", "any"],
      ["I haven't got ___ money.", "any"], ["Would you like ___ coffee?", "some"],
      ["There are ___ chairs in the room, so we have to stand.", "no"], ["Have you got ___ questions?", "any"],
      ["She bought ___ flowers for her mother.", "some"], ["I'm sorry, there is ___ milk left.", "no"],
      ["Can I have ___ water, please?", "some"], ["We didn't see ___ animals in the forest.", "any"],
      ["You can take ___ seat you like.", "any"], ["He has ___ friends in this town; he is very lonely.", "no"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I don't have ___ brothers.", ["any", "some", "no"]], ["There are ___ letters for you.", ["some", "any", "no any"]],
      ["Is there ___ sugar in my tea?", ["any", "some", "no"]], ["We have ___ bread. Let's buy some.", ["no", "any", "some"]],
      ["Could you give me ___ help?", ["some", "any", "no"]], ["Come and see me ___ time.", ["any", "some", "no"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["В холодильнике есть немного сыра.", "There is some cheese in the fridge."],
      ["У тебя есть вопросы?", "Have you got any questions?|Do you have any questions?"],
      ["У меня нет времени.", "I have no time.|I don't have any time.|I haven't got any time.|I've got no time."],
      ["Хотите чаю?", "Would you like some tea?|Do you want some tea?|Would you like tea?|Do you want tea?|Would you like a cup of tea?"],
      ["Возьми любую книгу.", "Take any book.|Take any book you like.|Take any book you want."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Would you like some milk in your coffee?", "Хотите молока в кофе?"],
      ["There's no bread, but there are some biscuits in the cupboard.", "Хлеба нет, но в шкафу есть печенье."],
      ["You can phone me at any time.", "Можешь звонить мне в любое время."]
    ]}
  ]},

{ id: 'pron-compounds', level: 'A2', title: 'Производные: somebody, anything, nowhere', sub: 'someone, nothing, everywhere',
  rule: `
<p>От <i>some, any, no, every</i> образуются производные местоимения и наречия. Правила выбора те же, что и у <i>some / any / no</i>.</p>
${T(["", "+ body / one (люди)", "+ thing (вещи)", "+ where (место)"], [
  ["<i>some</i>", "<i>somebody / someone</i> — кто-то", "<i>something</i> — что-то", "<i>somewhere</i> — где-то"],
  ["<i>any</i>", "<i>anybody / anyone</i> — кто-нибудь; любой", "<i>anything</i> — что-нибудь; что угодно", "<i>anywhere</i> — где-нибудь; где угодно"],
  ["<i>no</i>", "<i>nobody / no one</i> — никто", "<i>nothing</i> — ничего", "<i>nowhere</i> — нигде, никуда"],
  ["<i>every</i>", "<i>everybody / everyone</i> — все", "<i>everything</i> — все", "<i>everywhere</i> — везде"]
])}
${E([
  ["<b>Somebody</b> is knocking at the door.", "Кто-то стучит."],
  ["Is there <b>anybody</b> at home?", "Дома кто-нибудь есть?"],
  ["I didn't see <b>anything</b>. = I saw <b>nothing</b>.", "Я ничего не видел."],
  ["<b>Everybody</b> <b>is</b> here.", "Все здесь."]
])}
${N("Производные от <i>every-</i> и <i>no-</i> согласуются с глаголом в единственном числе: <i>Everyone <b>knows</b>. Nobody <b>was</b> there.</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите somebody, anybody, nobody, everybody, something, anything, nothing, everything, somewhere, anywhere, nowhere или everywhere.', items: [
      ["There is ___ in the box. Open it!", "something"], ["Is there ___ in the classroom?", "anybody|anyone"],
      ["I'm hungry. I haven't eaten ___ today.", "anything"], ["___ knows the answer, it's too difficult.", "nobody|no one"],
      ["I've lost my keys. I've looked ___ but can't find them.", "everywhere"], ["Let's go ___ warm this summer.", "somewhere"],
      ["___ in our class likes the new teacher.", "everybody|everyone"], ["He said ___ and left the room in silence.", "nothing"],
      ["I can't find my glasses ___.", "anywhere"], ["___ has taken my pen!", "somebody|someone"],
      ["There is ___ to go — all the cafés are closed.", "nowhere"], ["Tell me ___ about your trip.", "everything"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Everybody ___ to the party.", ["came", "come", "were coming"]], ["I didn't say ___.", ["anything", "nothing", "something"]],
      ["Did you go ___ last weekend?", ["anywhere", "nowhere", "everywhere"]], ["___ is perfect.", ["Nobody", "Anybody", "Somebody"]],
      ["Would you like ___ to drink?", ["something", "anything", "nothing"]], ["Everything ___ fine.", ["is", "are"]],
      ["You can ask ___ — they all know the way.", ["anyone", "no one", "someone"]], ["There was ___ in the street. It was empty.", ["nobody", "anybody", "somebody"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Кто-то звонит в дверь.", "Somebody is ringing the doorbell.|Someone is ringing the doorbell.|Somebody is ringing at the door.|Someone is ringing at the door."],
      ["Я ничего не знаю.", "I know nothing.|I don't know anything.|I do not know anything."],
      ["Все знают об этом.", "Everybody knows about it.|Everyone knows about it.|Everybody knows about this.|Everyone knows about this."],
      ["Дома кто-нибудь есть?", "Is there anybody at home?|Is anybody at home?|Is anyone at home?|Is there anyone at home?|Is anybody home?|Is anyone home?"],
      ["Я нигде не могу найти ключи.", "I can't find my keys anywhere.|I cannot find my keys anywhere.|I can't find the keys anywhere.|I cannot find the keys anywhere."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Somebody left a message, but nobody knows who.", "Кто-то оставил сообщение, но никто не знает кто."],
      ["Is there anything interesting on TV tonight?", "Сегодня вечером по телевизору есть что-нибудь интересное?"],
      ["I looked everywhere, but I couldn't find my keys anywhere.", "Я искал везде, но нигде не мог найти ключи."]
    ]}
  ]},

{ id: 'pron-every-each', level: 'B1', title: 'Every, each, all, both, either, neither', sub: 'each of them, both of us',
  rule: `
<p>Эти слова говорят о целой группе или о каждом ее члене.</p>
${T(["Слово", "Значение", "Пример"], [
  ["<i>every</i>", "каждый (все вместе, 3 и больше), + ед. ч.", "<i><b>Every</b> student has a book.</i>"],
  ["<i>each</i>", "каждый в отдельности, в том числе из двух", "<i>She had a bag in <b>each</b> hand. <b>Each</b> student got a mark.</i>"],
  ["<i>all</i>", "все, весь, + мн. ч. или неисчисляемое", "<i><b>All</b> students, <b>all</b> the money, <b>all</b> day</i>"],
  ["<i>both</i>", "оба (из двух)", "<i><b>Both</b> my parents are doctors.</i>"],
  ["<i>either</i>", "любой из двух; в отрицании — ни один", "<i>You can take <b>either</b> road.</i>"],
  ["<i>neither</i>", "ни тот, ни другой", "<i><b>Neither</b> answer is correct.</i>"]
])}
${E([
  ["<b>Both</b> Tom <b>and</b> Ann came.", "И Том, и Анна пришли."],
  ["<b>Either</b> Tom <b>or</b> Ann will help you.", "Тебе поможет или Том, или Анна."],
  ["<b>Neither</b> Tom <b>nor</b> Ann came.", "Ни Том, ни Анна не пришли."],
  ["<b>Each of</b> them has a car. <b>All of</b> us agree.", "С of нужен артикль или местоимение: each of the / of them."]
])}
${N("<i>every</i> не употребляется с <i>of</i>: <i><b>each</b> of the students</i>, но не <i>every of</i>. После <i>neither</i> глагол утвердительный: <i>Neither of them <b>knows</b></i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ of the twins has a red bicycle.", ["Each", "Every", "All"]], ["I've read ___ his books.", ["all", "every", "every of"]],
      ["___ my sisters are married.", ["Both", "Either", "Each"]], ["___ of the two answers is correct. Try again.", ["Neither", "Either", "Both"]],
      ["We go to the sea ___ summer.", ["every", "all", "both"]], ["You can come on Monday or Tuesday — ___ day is fine.", ["either", "neither", "both"]],
      ["___ the money was spent.", ["All", "Every", "Each"]], ["Neither of them ___ English.", ["speaks", "speak", "don't speak"]],
      ["She works hard ___ day.", ["every", "each of", "all of"]], ["___ Kate and her husband are teachers.", ["Both", "Either", "Neither"]]
    ]},
    { type: 'gap', task: 'Впишите every, each, all, both, either или neither.', items: [
      ["I have two brothers. ___ of them live in Moscow.", "both"], ["___ child in the class got a present.", "every|each"],
      ["She gave ___ of the four children an apple.", "each"], ["___ the shops are closed on Sunday.", "all"],
      ["___ of my parents smokes. They both hate cigarettes.", "neither"], ["There are trees on ___ side of the street.", "either|each"],
      ["He spent ___ his money on books.", "all"], ["We can meet ___ today or tomorrow.", "either"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Оба моих брата — врачи.", "Both my brothers are doctors.|Both of my brothers are doctors.|My brothers are both doctors."],
      ["Каждый ученик получил книгу.", "Every student got a book.|Each student got a book.|Every pupil got a book.|Each pupil got a book.|Every student received a book.|Each student received a book."],
      ["Ни один из двух ответов не верен.", "Neither answer is correct.|Neither of the answers is correct.|Neither answer is right.|Neither of the answers is right."],
      ["Ты можешь сесть на любой из двух автобусов.", "You can take either bus.|You can take either of the buses.|You can take either of the two buses."],
      ["Он работал весь день.", "He worked all day.|He worked all day long.|He was working all day.|He worked the whole day."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["Both of my brothers live in London.", "Оба моих брата живут в Лондоне."],
      ["Each student got a book, and all of them were happy.", "Каждый ученик получил книгу, и все они были довольны."],
      ["Neither of the answers was correct.", "Ни один из ответов не был верным."]
    ]}
  ]}
]});

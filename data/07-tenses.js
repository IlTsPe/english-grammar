BOOK.push({ n: 7, id: 'tenses', title: 'Употребление времен', pages: [128, 233],
intro: 'Самый большой после артикля раздел сборника. Темы идут от глагола <i>to be</i> и Present Simple к перфектным и длительным временам; в конце — смешанное повторение.',
topics: [

{ id: 't-to-be', level: 'A1', title: 'Глагол to be', sub: 'am / is / are, was / were',
  rule: `
<p>Глагол <i>to be</i> значит «быть, находиться, являться». В русском языке в настоящем времени эту связку мы опускаем: «Я студент», «Она дома». В английском без нее предложение не строится: <i>I <b>am</b> a student</i>.</p>
${T(["Лицо", "Настоящее", "Прошедшее", "Будущее"], [
  ["<i>I</i>", "<i><b>am</b></i> (I'm)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>he / she / it</i>", "<i><b>is</b></i> (he's)", "<i><b>was</b></i>", "<i><b>will be</b></i>"],
  ["<i>we / you / they</i>", "<i><b>are</b></i> (we're)", "<i><b>were</b></i>", "<i><b>will be</b></i>"]
])}
<h3>Отрицание и вопрос</h3>
${E([
  ["I <b>am not</b> tired. She <b>isn't</b> here. They <b>weren't</b> at home.", "not ставится после глагола"],
  ["<b>Are</b> you ready? — Yes, I <b>am</b>. / No, I'm not.", "в вопросе глагол перед подлежащим"],
  ["<b>Was</b> it cold yesterday? — Yes, it <b>was</b>.", "краткий ответ без сокращения в утверждении"],
  ["Where <b>were</b> you last night?", "специальный вопрос"]
])}
${N("Возраст, погода, время и цена выражаются через <i>to be</i>: <i>I <b>am</b> twelve. It <b>is</b> cold. It <b>is</b> five o'clock. How much <b>is</b> it?</i> Краткий ответ <i>Yes, he's</i> невозможен — только <i>Yes, he is</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите am, is или are.', items: [
      ["My brother ___ a doctor.", "is"], ["I ___ from Kazan.", "am"], ["They ___ at home now.", "are"],
      ["The weather ___ cold today.", "is"], ["You and Tom ___ late again!", "are"], ["___ your sister married?", "is"],
      ["We ___ not hungry.", "are"], ["It ___ ten o'clock.", "is"], ["How old ___ you?", "are"], ["Where ___ my glasses?", "are"]
    ]},
    { type: 'gap', task: 'Впишите was или were.', items: [
      ["I ___ at school yesterday.", "was"], ["They ___ in Paris last summer.", "were"],
      ["___ you at the party on Saturday?", "were"], ["It ___ very hot last week.", "was"],
      ["My parents ___ not at home.", "were"], ["Where ___ she yesterday?", "was"],
      ["The test ___ easy.", "was"], ["We ___ tired after the trip.", "were"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["___ you ready?", ["Are", "Is", "Am"]], ["She ___ at school today. She is ill.", ["isn't", "aren't", "am not"]],
      ["— Is he your friend? — Yes, he ___.", ["is", "does", "'s"]], ["I ___ twelve years old.", ["am", "have", "is"]],
      ["Tomorrow it ___ sunny.", ["will be", "is be", "will"]], ["There ___ many people in the shop yesterday.", ["were", "was", "are"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Мой брат — врач.", "My brother is a doctor."], ["Где ты был вчера?", "Where were you yesterday?"],
      ["Мне двенадцать лет.", "I am twelve.|I am twelve years old.|I'm twelve.|I'm twelve years old."],
      ["Сегодня холодно.", "It is cold today.|It's cold today.|Today it is cold."],
      ["Они не были дома.", "They were not at home.|They weren't at home.|They were not home.|They weren't home."],
      ["Завтра я буду в школе.", "I will be at school tomorrow.|I'll be at school tomorrow.|Tomorrow I will be at school.|Tomorrow I'll be at school."]
    ]}
  ]},

{ id: 't-present-simple', level: 'A1', title: 'Present Simple', sub: 'I work, she works, do you work?',
  rule: `
<p>Present Simple описывает то, что происходит регулярно, постоянно или всегда верно: привычки, факты, расписания, состояния.</p>
${F("I / you / we / they + <b>V</b> &nbsp;·&nbsp; he / she / it + <b>V-s</b>")}
${T(["", "I / you / we / they", "he / she / it"], [
  ["Утверждение", "<i>I <b>work</b>.</i>", "<i>She <b>works</b>.</i>"],
  ["Отрицание", "<i>I <b>don't</b> work.</i>", "<i>She <b>doesn't</b> work.</i>"],
  ["Вопрос", "<i><b>Do</b> you work?</i>", "<i><b>Does</b> she work?</i>"],
  ["Краткий ответ", "<i>Yes, I <b>do</b>. / No, I <b>don't</b>.</i>", "<i>Yes, she <b>does</b>. / No, she <b>doesn't</b>.</i>"]
])}
${M("Маркеры:", ["always", "usually", "often", "sometimes", "seldom", "never", "every day", "on Mondays", "once a week"])}
<h3>Написание окончания -s</h3>
${E([
  ["go → go<b>es</b>, watch → watch<b>es</b>, wash → wash<b>es</b>", "после o, s, sh, ch, x"],
  ["study → stud<b>ies</b>; но play → play<b>s</b>", "согласная + y"],
  ["have → <b>has</b>", "исключение"]
])}
${N("Наречия частотности стоят <b>перед</b> смысловым глаголом, но <b>после</b> <i>to be</i>: <i>She <b>often</b> reads</i>, но <i>She is <b>often</b> late</i>. После <i>does / doesn't</i> окончание <i>-s</i> не нужно.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Simple.', items: [
      ["She ___ (work) in a bank.", "works"], ["My parents ___ (live) in Samara.", "live"],
      ["He ___ (watch) TV every evening.", "watches"], ["The train ___ (leave) at 7:15.", "leaves"],
      ["Water ___ (boil) at 100 °C.", "boils"], ["My son ___ (study) French.", "studies"],
      ["Tom ___ (not / like) fish.", "does not like"], ["Where ___ your brother live?", "does"],
      ["We ___ (not / go) to school on Sundays.", "do not go"], ["My cat ___ (sleep) a lot.", "sleeps"],
      ["She ___ (have) two sisters.", "has"], ["___ you speak English?", "do"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["We ___ to the gym on Mondays.", ["go", "goes", "are go"]], ["She ___ coffee.", ["doesn't drink", "don't drink", "doesn't drinks"]],
      ["___ he have a car?", ["Does", "Do", "Is"]], ["What time ___ the shop open?", ["does", "do", "is"]],
      ["They ___ meat.", ["don't eat", "doesn't eat", "not eat"]], ["He ___ late.", ["is never", "never is", "never does"]],
      ["— Do you like jazz? — Yes, I ___.", ["do", "like", "am"]], ["My mum ___ dinner every day.", ["cooks", "cook", "is cook"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Present Simple.', text: "My friend Kate ___ (live) in a small town. She ___ (get) up at seven every morning and ___ (go) to school by bike. Her mother ___ (work) at a hospital and her father ___ (teach) history. Kate ___ (not / like) maths, but she ___ (love) English. In the evening she ___ (do) her homework and ___ (watch) TV.",
      answers: ["lives", "gets", "goes", "works", "teaches", "does not like", "loves", "does", "watches"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я обычно встаю в семь.", "I usually get up at seven.|I usually get up at 7.|I usually get up at seven o'clock."],
      ["Моя сестра не любит молоко.", "My sister doesn't like milk.|My sister does not like milk."],
      ["Ты говоришь по-английски?", "Do you speak English?"],
      ["Где работает твой папа?", "Where does your father work?|Where does your dad work?"],
      ["Он никогда не опаздывает.", "He is never late.|He's never late."],
      ["Солнце встает на востоке.", "The sun rises in the east."]
    ]}
  ]},

{ id: 't-present-continuous', level: 'A2', title: 'Present Continuous', sub: 'I am working now',
  rule: `
<p>Present Continuous описывает действие, которое происходит <b>прямо сейчас</b> или в текущий период, а также запланированное на ближайшее будущее.</p>
${F("am / is / are + <b>V-ing</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>She <b>is reading</b>. They<b>'re playing</b>.</i>"],
  ["Отрицание", "<i>I<b>'m not</b> sleeping. He <b>isn't</b> working.</i>"],
  ["Вопрос", "<i><b>Are</b> you listening? What <b>is</b> she doing?</i>"]
])}
${M("Маркеры:", ["now", "right now", "at the moment", "today", "these days", "Look!", "Listen!"])}
<h3>Написание -ing</h3>
${E([
  ["make → mak<b>ing</b>, write → writ<b>ing</b>", "немое -e отпадает"],
  ["swim → swim<b>ming</b>, sit → sit<b>ting</b>, run → run<b>ning</b>", "краткий ударный слог: согласная удваивается"],
  ["lie → l<b>ying</b>, die → d<b>ying</b>", "ie → y"]
])}
${E([
  ["We <b>are meeting</b> Sarah tomorrow.", "Договоренность на будущее."],
  ["He <b>is always losing</b> his keys!", "always + Continuous — раздражение."]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Continuous.', items: [
      ["Look! It ___ (rain).", "is raining|'s raining"], ["I ___ (read) a great book these days.", "am reading"],
      ["Be quiet! The baby ___ (sleep).", "is sleeping|'s sleeping"], ["They ___ (not / work) today.", "are not working"],
      ["We ___ (meet) Sarah tomorrow evening.", "are meeting"], ["What ___ you doing?", "are"],
      ["The children ___ (swim) in the river.", "are swimming"], ["She ___ (write) a letter now.", "is writing|'s writing"],
      ["Listen! Somebody ___ (sing).", "is singing|'s singing"], ["I ___ (not / watch) TV, you can turn it off.", "am not watching"],
      ["Why ___ you laughing?", "are"], ["He ___ (lie) on the sofa.", "is lying|'s lying"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["Where's Tom? — He ___ a shower.", ["is having", "has", "have"]], ["Look! The bus ___.", ["is coming", "comes", "come"]],
      ["___ she working today?", ["Is", "Does", "Are"]], ["I ___ to the radio at the moment.", ["am not listening", "don't listen", "not listening"]],
      ["They ___ a new house this year.", ["are building", "build", "builds"]], ["Why ___ you wearing a coat? It's hot!", ["are", "do", "is"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Смотри! Идет снег.", "Look! It is snowing.|Look! It's snowing."],
      ["Что ты сейчас делаешь?", "What are you doing now?"],
      ["Дети играют в саду.", "The children are playing in the garden."],
      ["Я сейчас не работаю.", "I am not working now.|I'm not working now.|I am not working at the moment.|I'm not working at the moment."],
      ["Завтра мы встречаемся с друзьями.", "We are meeting our friends tomorrow.|We're meeting our friends tomorrow.|We are meeting friends tomorrow.|We're meeting friends tomorrow.|Tomorrow we are meeting our friends."]
    ]}
  ]},

{ id: 't-simple-vs-continuous', level: 'A2', title: 'Present Simple или Continuous', sub: 'I work / I am working',
  rule: `
<p>Главный вопрос: действие происходит <b>обычно</b> или <b>сейчас</b>?</p>
${T(["Present Simple", "Present Continuous"], [
  ["регулярно, всегда: <i>I <b>walk</b> to work.</i>", "сейчас, в данный момент: <i>Today I<b>'m taking</b> the bus.</i>"],
  ["постоянно: <i>She <b>lives</b> in Paris.</i>", "временно: <i>She<b>'s living</b> with friends this month.</i>"],
  ["факты: <i>Water <b>boils</b> at 100°.</i>", "меняющаяся ситуация: <i>It<b>'s getting</b> colder.</i>"],
  ["расписание: <i>The train <b>leaves</b> at 6.</i>", "личная договоренность: <i>I<b>'m leaving</b> at 6.</i>"]
])}
<h3>Глаголы состояния</h3>
<p>Глаголы, которые обозначают состояние, а не действие, в Continuous обычно не употребляются:</p>
${M("Не бывают в Continuous:", ["know", "understand", "believe", "remember", "like", "love", "hate", "want", "need", "prefer", "belong", "own", "seem", "mean", "cost"])}
${E([
  ["I <b>think</b> you're right. — I'<b>m thinking</b> about the trip.", "думаю (мнение) — обдумываю (процесс)"],
  ["He <b>has</b> a car. — He <b>is having</b> lunch.", "владеет — обедает"],
  ["This soup <b>tastes</b> good. — She <b>is tasting</b> the soup.", "на вкус — пробует"]
])}`,
  ex: [
    { type: 'choice', task: 'Present Simple или Present Continuous?', items: [
      ["I ___ what you mean.", ["understand", "am understanding"]], ["She usually walks to work, but today she ___ the bus.", ["is taking", "takes", "was taking"]],
      ["Water ___ at 0 °C.", ["freezes", "is freezing"]], ["Listen! Someone ___ at the door.", ["is knocking", "knocks"]],
      ["He ___ a new car. He bought it last week.", ["has", "is having"]], ["Hurry up! Everybody ___ for you.", ["is waiting", "waits"]],
      ["I ___ this song. It's my favourite.", ["love", "am loving"]], ["My sister ___ in London this month.", ["is staying", "stays"]],
      ["How often ___ you go swimming?", ["do", "are"]], ["The train ___ at 6:40 every morning.", ["leaves", "is leaving"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в Present Simple или Present Continuous.', items: [
      ["Kate usually ___ (wear) jeans, but today she ___ (wear) a dress.", ["wears", "is wearing|'s wearing"]],
      ["I ___ (not / know) his phone number.", "do not know"],
      ["Look, the children ___ (play) football.", "are playing"],
      ["We ___ (go) to the seaside every summer.", "go"],
      ["What ___ you ___ (do)? — I'm reading.", ["are", "doing"]],
      ["This bag ___ (belong) to my mother.", "belongs"],
      ["It ___ (get) dark. Let's go home.", "is getting|'s getting"],
      ["He ___ (need) help right now.", "needs"],
      ["My father ___ (drive) to work every day.", "drives"],
      ["Don't disturb me. I ___ (think).", "am thinking"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Present Simple или Present Continuous.', text: "Hi Mum! I ___ (write) to you from the hotel. We ___ (have) a great time here. Every morning we ___ (go) to the beach, and in the afternoon we ___ (visit) museums. Right now Dad ___ (sleep) and Anna ___ (read) a book. The food here ___ (taste) wonderful. I ___ (want) to stay here forever!",
      answers: ["am writing", "are having", "go", "visit", "is sleeping|'s sleeping", "is reading|'s reading", "tastes", "want"] }
  ]},

{ id: 't-past-simple', level: 'A2', title: 'Past Simple', sub: 'I worked, I went, did you go?',
  rule: `
<p>Past Simple описывает завершенное действие в прошлом, обычно с указанием, <b>когда</b> оно произошло. Также — цепочку последовательных действий в рассказе.</p>
${F("правильные глаголы: <b>V-ed</b> &nbsp;·&nbsp; неправильные: <b>2-я форма</b>")}
${T(["", "Пример"], [
  ["Утверждение", "<i>She <b>visited</b> Rome. They <b>went</b> home.</i>"],
  ["Отрицание", "<i>She <b>didn't visit</b> Rome.</i>"],
  ["Вопрос", "<i><b>Did</b> she <b>visit</b> Rome? Where <b>did</b> they <b>go</b>?</i>"]
])}
${M("Маркеры:", ["yesterday", "last week", "two days ago", "in 2019", "when I was a child", "the other day"])}
<h3>Написание -ed</h3>
${E([
  ["live → live<b>d</b>", "после -e добавляем только -d"],
  ["stop → sto<b>pped</b>, plan → pla<b>nned</b>", "удвоение согласной"],
  ["study → stud<b>ied</b>; но play → play<b>ed</b>", "согласная + y → ied"]
])}
<h3>Частые неправильные глаголы</h3>
${T(["Глагол", "Past", "Глагол", "Past", "Глагол", "Past"], [
  ["<i>be</i>", "<i>was / were</i>", "<i>go</i>", "<i>went</i>", "<i>see</i>", "<i>saw</i>"],
  ["<i>buy</i>", "<i>bought</i>", "<i>take</i>", "<i>took</i>", "<i>write</i>", "<i>wrote</i>"],
  ["<i>have</i>", "<i>had</i>", "<i>make</i>", "<i>made</i>", "<i>come</i>", "<i>came</i>"],
  ["<i>eat</i>", "<i>ate</i>", "<i>know</i>", "<i>knew</i>", "<i>lose</i>", "<i>lost</i>"],
  ["<i>get</i>", "<i>got</i>", "<i>give</i>", "<i>gave</i>", "<i>find</i>", "<i>found</i>"],
  ["<i>speak</i>", "<i>spoke</i>", "<i>tell</i>", "<i>told</i>", "<i>think</i>", "<i>thought</i>"],
  ["<i>begin</i>", "<i>began</i>", "<i>leave</i>", "<i>left</i>", "<i>meet</i>", "<i>met</i>"]
])}
${N("После <i>did / didn't</i> глагол стоит в начальной форме: <i>Did you <b>see</b>…?</i>, а не <i>Did you saw…?</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Simple.', items: [
      ["We ___ (visit) our grandparents last weekend.", "visited"], ["She ___ (buy) a new dress yesterday.", "bought"],
      ["I ___ (see) him two days ago.", "saw"], ["The film ___ (start) at eight.", "started"],
      ["They ___ (stop) to have a rest.", "stopped"], ["He ___ (not / go) to work on Monday.", "did not go"],
      ["Where ___ you go on holiday?", "did"], ["It ___ (be) very cold last winter.", "was"],
      ["I ___ (write) a letter to my friend.", "wrote"], ["We ___ (study) for the test all evening.", "studied"],
      ["She ___ (lose) her keys on the way home.", "lost"], ["My parents ___ (meet) in 1998.", "met"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ at home yesterday.", ["was", "were", "did"]], ["Did she ___ the letter?", ["write", "wrote", "writes"]],
      ["We ___ the museum.", ["didn't visit", "didn't visited", "not visited"]], ["They ___ in Rome in 2019.", ["were", "was", "are"]],
      ["He ___ his keys this morning.", ["lost", "losed", "lose"]], ["When ___ you arrive?", ["did", "were", "was"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в Past Simple.', text: "Last Sunday I ___ (get) up late. I ___ (have) breakfast and ___ (call) my friend Mike. We ___ (decide) to go to the park. It ___ (be) a sunny day. We ___ (play) football and ___ (eat) ice cream. In the evening I ___ (come) home tired but happy. I ___ (not / do) my homework!",
      answers: ["got", "had", "called", "decided", "was", "played", "ate", "came", "did not do"] },
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера я видел Тома.", "I saw Tom yesterday.|Yesterday I saw Tom."],
      ["Где ты купил эту книгу?", "Where did you buy this book?"],
      ["Мы не ходили в кино.", "We didn't go to the cinema.|We did not go to the cinema.|We didn't go to the movies."],
      ["Она приехала два дня назад.", "She arrived two days ago.|She came two days ago."],
      ["Тебе понравился фильм?", "Did you like the film?|Did you like the movie?|Did you enjoy the film?"]
    ]}
  ]},

{ id: 't-past-continuous', level: 'B1', title: 'Past Continuous', sub: 'I was reading when…',
  rule: `
<p>Past Continuous описывает действие, которое было <b>в процессе</b> в определенный момент в прошлом.</p>
${F("was / were + <b>V-ing</b>")}
${T(["Значение", "Пример"], [
  ["процесс в момент прошлого", "<i>At 8 pm I <b>was having</b> dinner.</i>"],
  ["длительное действие прервано коротким", "<i>I <b>was cooking</b> when the phone <b>rang</b>.</i>"],
  ["два параллельных процесса (while)", "<i>While I <b>was reading</b>, he <b>was watching</b> TV.</i>"],
  ["фон в рассказе", "<i>The sun <b>was shining</b> and birds <b>were singing</b>.</i>"],
  ["весь период (all day, from 5 to 7)", "<i>She <b>was working</b> all day yesterday.</i>"]
])}
${N("Короткое законченное действие передается Past Simple, длительный фон — Past Continuous. Цепочка последовательных действий — целиком Past Simple: <i>He came in, took off his coat and sat down.</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Continuous.', items: [
      ["At 8 pm yesterday I ___ (have) dinner.", "was having"], ["While we ___ (walk) in the park, it started to rain.", "were walking"],
      ["She ___ (cook) when the phone rang.", "was cooking"], ["When I arrived, they ___ (not / watch) TV.", "were not watching"],
      ["The sun ___ (shine) and the birds were singing.", "was shining"], ["What ___ you doing at midnight?", "were"],
      ["He ___ (sleep) from two to four.", "was sleeping"], ["We ___ (wait) for the bus when it began to snow.", "were waiting"],
      ["___ it raining when you left home?", "was"], ["The children ___ (play) all afternoon.", "were playing"]
    ]},
    { type: 'choice', task: 'Past Simple или Past Continuous?', items: [
      ["I ___ a bath when the lights went out.", ["was having", "had", "have had"]], ["When he saw the police, he ___ away.", ["ran", "was running"]],
      ["While she was reading, her husband ___ the dishes.", ["was washing", "has washed"]], ["He ___ in, took off his coat and sat down.", ["came", "was coming"]],
      ["What were you doing when I ___ you?", ["called", "was calling"]], ["It ___ hard all night.", ["was raining", "is raining"]],
      ["I ___ my leg when I was skiing.", ["broke", "was breaking"]], ["While I ___ home, I met an old friend.", ["was walking", "am walking"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Вчера в пять часов я делал уроки.", "I was doing my homework at five o'clock yesterday.|Yesterday at five o'clock I was doing my homework.|I was doing my homework at five yesterday.|At five o'clock yesterday I was doing my homework."],
      ["Когда я пришел, она спала.", "When I came, she was sleeping.|When I arrived, she was sleeping.|She was sleeping when I came.|She was sleeping when I arrived."],
      ["Что ты делал, когда я позвонил?", "What were you doing when I called?|What were you doing when I phoned?|What were you doing when I rang?"],
      ["Шел дождь, и мы остались дома.", "It was raining and we stayed at home.|It was raining, so we stayed at home.|It was raining and we stayed home."]
    ]}
  ]},

{ id: 't-future', level: 'A2', title: 'Будущее: will и going to', sub: "I'll help · I'm going to buy",
  rule: `
<p>В английском нет одного «будущего времени». Форма зависит от того, решено ли действие заранее и на чем основан прогноз.</p>
${T(["Форма", "Когда", "Пример"], [
  ["<i>will + V</i>", "решение в момент речи", "<i>The phone's ringing. — I'<b>ll</b> answer it.</i>"],
  ["<i>will + V</i>", "обещание, предложение, просьба", "<i>I <b>will</b> call you tonight, I promise.</i>"],
  ["<i>will + V</i>", "прогноз-мнение (I think, probably)", "<i>I think it <b>will</b> be a good film.</i>"],
  ["<i>will + V</i>", "факт о будущем", "<i>I <b>will</b> be 15 next year.</i>"],
  ["<i>be going to + V</i>", "намерение, решено заранее", "<i>We <b>are going to</b> buy a car.</i>"],
  ["<i>be going to + V</i>", "прогноз по видимым признакам", "<i>Look at the clouds! It <b>is going to</b> rain.</i>"],
  ["<i>Present Continuous</i>", "договоренность на определенное время", "<i>I'<b>m meeting</b> Ann at six.</i>"],
  ["<i>Present Simple</i>", "расписание", "<i>The train <b>leaves</b> at 9.</i>"]
])}
${N("После <i>if, when, before, after, until, as soon as</i> в придаточном времени и условия будущее выражается Present Simple: <i>I'll call you when I <b>get</b> home</i>, а не <i>when I will get</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите will, going to или Present Continuous.', items: [
      ["— The phone is ringing. — OK, I ___ answer it.", ["will", "am going to"]], ["Look at those black clouds! It ___ rain.", ["is going to", "will"]],
      ["We've already decided: we ___ buy a new car next month.", ["are going to", "will"]], ["I promise I ___ call you tonight.", ["will", "am going to"]],
      ["— I'm cold. — Wait, I ___ close the window.", ["will", "am going to"]], ["She is pregnant. She ___ have a baby in May.", ["is going to", "will"]],
      ["— Tea or coffee? — I ___ have tea, please.", ["will", "am going to"]], ["We ___ our friends on Saturday — we arranged it yesterday.", ["are meeting", "will meet", "meet"]]
    ]},
    { type: 'gap', task: 'Поставьте глагол в правильную форму. Помните о придаточных времени и условия.', items: [
      ["I'll phone you when I ___ (get) home.", "get"], ["If it ___ (rain), we'll stay at home.", "rains"],
      ["Wait here until I ___ (come) back.", "come"], ["She ___ (be) sixteen next month.", "will be"],
      ["As soon as he ___ (arrive), we'll start.", "arrives"], ["I think you ___ (like) this film.", "will like"],
      ["The train ___ (leave) at 8:30 tomorrow morning.", "leaves"], ["Before you ___ (go) out, close the windows.", "go"]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я помогу тебе.", "I will help you.|I'll help you."],
      ["Мы собираемся поехать в Сочи летом.", "We are going to go to Sochi in summer.|We're going to go to Sochi in summer.|We are going to Sochi in summer.|We're going to Sochi in summer.|We are going to go to Sochi in the summer.|We're going to go to Sochi this summer."],
      ["Смотри, сейчас пойдет дождь.", "Look, it is going to rain.|Look, it's going to rain."],
      ["Я позвоню тебе, когда приду домой.", "I will call you when I come home.|I'll call you when I get home.|I'll call you when I come home.|I will call you when I get home.|I'll phone you when I get home."],
      ["Думаю, она не придет.", "I don't think she will come.|I don't think she'll come.|I think she won't come.|I think she will not come."]
    ]}
  ]},

{ id: 't-present-perfect', level: 'B1', title: 'Present Perfect', sub: 'I have done, just, already, yet',
  rule: `
<p>Present Perfect связывает прошлое с настоящим. Важно не <b>когда</b> произошло действие, а его результат, опыт или то, что период еще не закончился.</p>
${F("have / has + <b>V3</b> (третья форма)")}
${T(["Значение", "Пример"], [
  ["результат сейчас", "<i>I <b>have lost</b> my keys. (Сейчас ключей нет.)</i>"],
  ["опыт в жизни", "<i>She <b>has never been</b> to Japan. <b>Have</b> you ever <b>eaten</b> sushi?</i>"],
  ["незаконченный период", "<i>I <b>have drunk</b> three coffees today.</i>"],
  ["длится до сих пор (for, since)", "<i>We <b>have lived</b> here since 2015 / for ten years.</i>"],
  ["только что (just)", "<i>He <b>has just come</b>.</i>"]
])}
${M("Маркеры:", ["just", "already", "yet", "ever", "never", "for", "since", "today", "this week", "so far", "recently"])}
<h3>Где ставить just, already, yet</h3>
${E([
  ["I have <b>just</b> / <b>already</b> finished.", "just и already — между have и V3"],
  ["Have you finished <b>yet</b>? I haven't finished <b>yet</b>.", "yet — в конце вопроса и отрицания"]
])}
<h3>Третья форма неправильных глаголов</h3>
${T(["V", "V3", "V", "V3", "V", "V3"], [
  ["<i>be</i>", "<i>been</i>", "<i>go</i>", "<i>gone</i>", "<i>see</i>", "<i>seen</i>"],
  ["<i>do</i>", "<i>done</i>", "<i>eat</i>", "<i>eaten</i>", "<i>write</i>", "<i>written</i>"],
  ["<i>take</i>", "<i>taken</i>", "<i>break</i>", "<i>broken</i>", "<i>know</i>", "<i>known</i>"],
  ["<i>buy</i>", "<i>bought</i>", "<i>lose</i>", "<i>lost</i>", "<i>find</i>", "<i>found</i>"]
])}
${N("<i>has been to</i> значит «был и вернулся», <i>has gone to</i> — «уехал и сейчас там».")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Present Perfect.', items: [
      ["I ___ (lose) my keys. I can't open the door.", "have lost"], ["She ___ (never / be) to Japan.", "has never been|'s never been"],
      ["We ___ (live) here since 2015.", "have lived"], ["Have you ever ___ (eat) sushi?", "eaten"],
      ["They ___ (just / arrive).", "have just arrived"], ["She hasn't called me ___. (еще)", "yet"],
      ["He ___ (already / do) his homework.", "has already done|'s already done"], ["I ___ (not / see) this film.", "have not seen"],
      ["___ you finished your work yet?", "have"], ["My brother ___ (break) his arm.", "has broken|'s broken"],
      ["We ___ (know) each other for ten years.", "have known"], ["How many books ___ you read this year?", "have"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ him since we were children.", ["have known", "knew", "know"]], ["— Where's Tom? — He ___ to the shop. He'll be back soon.", ["has gone", "has been", "went yesterday"]],
      ["I ___ to Paris three times.", ["have been", "have gone", "was going"]], ["___ you finished your homework yet?", ["Have", "Did", "Are"]],
      ["She has lived here ___ 2010.", ["since", "for", "from"]], ["He has worked here ___ five years.", ["for", "since", "during"]],
      ["I haven't seen him ___.", ["yet", "already", "just"]], ["They have ___ left.", ["just", "yet", "ever"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я уже сделал уроки.", "I have already done my homework.|I've already done my homework.|I have done my homework already.|I've done my homework already."],
      ["Ты когда-нибудь был в Лондоне?", "Have you ever been to London?"],
      ["Она только что ушла.", "She has just left.|She's just left.|She has just gone.|She's just gone."],
      ["Я знаю его десять лет.", "I have known him for ten years.|I've known him for ten years."],
      ["Мы еще не обедали.", "We haven't had lunch yet.|We have not had lunch yet.|We haven't had dinner yet."]
    ]}
  ]},

{ id: 't-perfect-vs-past', level: 'B1', title: 'Present Perfect или Past Simple', sub: 'I have seen / I saw',
  rule: `
<p>Обе формы говорят о прошлом. Разница в том, привязано ли действие к конкретному прошедшему моменту.</p>
${T(["Present Perfect", "Past Simple"], [
  ["время не указано, важен результат: <i>I<b>'ve lost</b> my pen.</i>", "время указано: <i>I <b>lost</b> my pen <b>yesterday</b>.</i>"],
  ["период не закончен: <i>I<b>'ve been</b> busy <b>today</b>.</i>", "период закончен: <i>I <b>was</b> busy <b>yesterday</b>.</i>"],
  ["опыт: <i><b>Have</b> you ever <b>seen</b> a whale?</i>", "подробности: <i>Where <b>did</b> you <b>see</b> it?</i>"],
  ["человек жив, опыт продолжается: <i>He <b>has written</b> 3 books.</i>", "человека нет / период закрыт: <i>Pushkin <b>wrote</b> many poems.</i>"]
])}
${M("Только Past Simple:", ["yesterday", "ago", "last…", "in 2010", "when…?", "what time…?"])}
${E([
  ["— <b>Have</b> you <b>been</b> to Italy? — Yes, I <b>have</b>. I <b>went</b> there in 2019.", "Сначала новость (Perfect), потом подробности (Past)."]
])}
${N("Вопрос <i>When…?</i> всегда требует Past Simple: <i>When <b>did</b> you <b>arrive</b>?</i>, а не <i>When have you arrived?</i>")}`,
  ex: [
    { type: 'gap', task: 'Present Perfect или Past Simple? Поставьте глагол в нужную форму.', items: [
      ["I ___ (lose) my keys. I can't open the door.", "have lost"], ["He ___ (finish) school in 2018.", "finished"],
      ["I ___ (see) this film last week.", "saw"], ["She ___ (be) to London twice.", "has been|'s been"],
      ["When ___ you ___ (buy) this car?", ["did", "buy"]], ["We ___ (not / have) a holiday this year.", "have not had"],
      ["Tolstoy ___ (write) 'War and Peace'.", "wrote"], ["I ___ (just / meet) your brother.", "have just met"],
      ["They ___ (move) to Moscow two years ago.", "moved"], ["___ you ever ___ (try) Chinese food?", ["have", "tried"]]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["When ___ the accident happen?", ["did", "has", "have"]], ["Shakespeare ___ many plays.", ["wrote", "has written"]],
      ["I ___ my homework. Can I go out now?", ["have done", "did"]], ["I ___ my homework yesterday.", ["did", "have done"]],
      ["We ___ three tests this week.", ["have had", "had"]], ["My grandfather ___ in a factory all his life. He retired in 2010.", ["worked", "has worked"]]
    ]},
    { type: 'text', task: 'Поставьте глаголы в Present Perfect или Past Simple.', text: "— ___ (you / ever / be) to Spain? — Yes, I ___ (go) there last summer. — Really? What ___ (you / see)? — I ___ (visit) Madrid and Barcelona. — I ___ (never / be) abroad. — Oh, you should go! I ___ (already / book) a trip for next year.",
      answers: ["have you ever been", "went", "did you see", "visited", "have never been|'ve never been", "have already booked|'ve already booked"] }
  ]},

{ id: 't-present-perfect-continuous', level: 'B2', title: 'Present Perfect Continuous', sub: "I've been waiting for an hour",
  rule: `
<p>Present Perfect Continuous подчеркивает <b>длительность</b> действия, которое началось в прошлом и продолжается до сих пор или только что закончилось и оставило видимый след.</p>
${F("have / has been + <b>V-ing</b>")}
${E([
  ["I <b>have been waiting</b> for you for an hour!", "Я жду тебя уже час (и все еще жду)."],
  ["She <b>has been learning</b> Spanish since September.", "Учит с сентября и продолжает."],
  ["I'm out of breath — I<b>'ve been running</b>.", "Только что закончил, виден результат."]
])}
<h3>Continuous или Simple</h3>
${T(["Perfect Continuous: процесс", "Perfect Simple: результат"], [
  ["<i>I<b>'ve been painting</b> the kitchen.</i> (могу еще не закончить)", "<i>I<b>'ve painted</b> the kitchen.</i> (готово)"],
  ["<i>How long <b>have</b> you <b>been reading</b>?</i>", "<i>How many pages <b>have</b> you <b>read</b>?</i>"],
  ["<i>It<b>'s been raining</b> all day.</i>", "<i>I<b>'ve written</b> three emails today.</i> (есть количество)"]
])}
${M("Маркеры:", ["for", "since", "how long", "all day", "lately", "recently"])}
${N("Глаголы состояния в Continuous не ставятся: <i>I<b>'ve known</b> her for years</i>, а не <i>I've been knowing</i>.")}`,
  ex: [
    { type: 'gap', task: 'Present Perfect Continuous или Present Perfect Simple?', items: [
      ["I ___ (wait) for you for an hour!", "have been waiting"], ["She ___ (learn) Spanish since September.", "has been learning|'s been learning"],
      ["How long ___ you been working here?", "have"], ["Your eyes are red. ___ you been crying?", "have"],
      ["They ___ (know) each other for ten years.", "have known"], ["I ___ (write) three emails this morning.", "have written"],
      ["It ___ (rain) all day.", "has been raining|'s been raining"], ["He ___ (play) computer games since breakfast.", "has been playing|'s been playing"],
      ["We ___ (live) in this flat for five years.", "have been living|have lived"], ["She ___ (read) four books this month.", "has read|'s read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I'm out of breath because I ___.", ["have been running", "have run", "run"]], ["She ___ four cups of coffee today.", ["has drunk", "has been drinking"]],
      ["I ___ this book for a week, but I haven't finished it yet.", ["have been reading", "have read"]], ["We ___ the kitchen. Do you like it?", ["have painted", "have been painting"]],
      ["I ___ her since we were at school.", ["have known", "have been knowing"]], ["How long ___ for the bus?", ["have you been waiting", "are you waiting", "do you wait"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Я жду тебя уже полчаса.", "I have been waiting for you for half an hour.|I've been waiting for you for half an hour."],
      ["Как долго ты учишь английский?", "How long have you been learning English?|How long have you been studying English?"],
      ["Весь день идет снег.", "It has been snowing all day.|It's been snowing all day."],
      ["Она работает здесь с 2019 года.", "She has been working here since 2019.|She's been working here since 2019.|She has worked here since 2019.|She's worked here since 2019."]
    ]}
  ]},

{ id: 't-past-perfect', level: 'B2', title: 'Past Perfect', sub: 'The train had already left',
  rule: `
<p>Past Perfect показывает, что действие завершилось <b>раньше</b> другого действия или момента в прошлом. Это «прошлое в прошлом».</p>
${F("had + <b>V3</b>")}
${E([
  ["When we arrived, the train <b>had</b> already <b>left</b>.", "Поезд ушел до нашего прихода."],
  ["When we arrived, the train <b>left</b>.", "Поезд ушел в момент нашего прихода."],
  ["She <b>had never seen</b> the sea before she moved to Sochi.", "Опыт до момента в прошлом."],
  ["By 6 o'clock I <b>had finished</b> the work.", "К определенному моменту в прошлом."]
])}
<h3>Past Perfect Continuous</h3>
${F("had been + <b>V-ing</b>")}
${E([
  ["He was tired because he <b>had been working</b> all day.", "Длительное действие до момента в прошлом."],
  ["They <b>had been waiting</b> for an hour when the bus came.", "Ждали час до того, как пришел автобус."]
])}
${M("Маркеры:", ["by the time", "before", "after", "already", "just", "never… before", "by 2010"])}
${N("Если порядок действий ясен из <i>before / after</i>, часто достаточно Past Simple: <i>After he finished, he went home.</i> Past Perfect подчеркивает, что действие было раньше.")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Past Perfect.', items: [
      ["When we arrived at the station, the train ___ (already / leave).", "had already left|had left already|'d already left"],
      ["She ___ (never / see) the sea before she moved to Sochi.", "had never seen|'d never seen"],
      ["After he ___ (finish) his work, he went home.", "had finished"], ["I didn't recognise him because he ___ (change) so much.", "had changed"],
      ["By the time the police came, the thieves ___ (escape).", "had escaped"], ["They ___ (not / eat) anything all day, so they were starving.", "had not eaten"],
      ["I was sure I ___ (see) her before.", "had seen"], ["By 2010 he ___ (write) five books.", "had written"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["When I got home, I found that someone ___ into the house.", ["had broken", "broke", "has broken"]], ["I ___ the book before I saw the film.", ["had read", "have read", "was reading"]],
      ["She told me she ___ him the day before.", ["had met", "has met", "meets"]], ["His hands were dirty because he ___ the car.", ["had been repairing", "has repaired", "repairs"]],
      ["We ___ for two hours when the rain stopped.", ["had been walking", "have walked", "walk"]], ["By the time I woke up, everybody ___.", ["had left", "has left", "leaves"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Когда я пришел, урок уже начался.", "When I came, the lesson had already started.|When I arrived, the lesson had already started.|When I came, the lesson had already begun.|When I arrived, the lesson had already begun."],
      ["Он сказал, что потерял ключи.", "He said that he had lost his keys.|He said he had lost his keys.|He said he'd lost his keys."],
      ["К семи часам мы закончили работу.", "By seven o'clock we had finished the work.|By seven we had finished the work.|We had finished the work by seven o'clock.|We had finished work by seven."],
      ["Я никогда раньше не видел такого красивого города.", "I had never seen such a beautiful city before.|I'd never seen such a beautiful city before."]
    ]}
  ]},

{ id: 't-future-perfect', level: 'B2', title: 'Future Continuous и Future Perfect', sub: 'will be doing · will have done',
  rule: `
<p>Обе формы смотрят на определенный <b>момент в будущем</b>: Future Continuous — что будет происходить в этот момент, Future Perfect — что к нему уже будет сделано.</p>
${T(["Форма", "Значение", "Пример"], [
  ["<i>will be + V-ing</i>", "процесс в момент будущего", "<i>This time tomorrow I<b>'ll be lying</b> on the beach.</i>"],
  ["<i>will be + V-ing</i>", "вежливый вопрос о планах", "<i><b>Will</b> you <b>be using</b> the car tonight?</i>"],
  ["<i>will have + V3</i>", "завершится к моменту", "<i>By 2030 they <b>will have built</b> the bridge.</i>"],
  ["<i>will have been + V-ing</i>", "длительность к моменту", "<i>By June she <b>will have been working</b> here for ten years.</i>"]
])}
${M("Маркеры:", ["this time tomorrow", "at 8 pm tomorrow", "by Friday", "by the time", "by then"])}
${N("После <i>by the time</i> в придаточном стоит Present Simple: <i>By the time you <b>arrive</b>, I'll have finished.</i>")}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в Future Continuous, Future Perfect или Future Perfect Continuous.', items: [
      ["This time tomorrow I ___ (lie) on the beach.", "will be lying"], ["By 2030 they ___ (build) the new bridge.", "will have built"],
      ["Don't call at eight — we ___ (have) dinner.", "will be having"], ["By the time you arrive, I ___ (finish) the report.", "will have finished"],
      ["By June she ___ (work) here for ten years.", "will have been working"], ["___ you be using the car tonight?", "will"],
      ["At noon tomorrow we ___ (fly) over the Alps.", "will be flying"], ["By the end of the year I ___ (read) twenty books.", "will have read"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["By next week I ___ the book.", ["will have read", "will be reading", "am reading"]], ["At 10 am tomorrow I ___ an exam, so I can't answer the phone.", ["will be taking", "will have taken", "take"]],
      ["Hurry up! The film ___ by the time we get there.", ["will have started", "will be starting", "starts"]], ["By the time she ___, we'll have eaten everything.", ["arrives", "will arrive", "will have arrived"]]
    ]}
  ]},

{ id: 't-used-to', level: 'B2', title: 'Used to, be used to, would', sub: 'I used to · I am used to',
  rule: `
<p>Похожие конструкции с разным смыслом: «раньше бывало» и «привык».</p>
${T(["Конструкция", "Значение", "Пример"], [
  ["<i>used to + V</i>", "привычка или состояние в прошлом, которых больше нет", "<i>I <b>used to live</b> in Omsk.</i>"],
  ["<i>would + V</i>", "повторяющиеся действия в прошлом (не состояния)", "<i>As kids we <b>would play</b> outside all day.</i>"],
  ["<i>be used to + -ing / сущ.</i>", "привык, уже привычно", "<i>She <b>is used to getting</b> up early.</i>"],
  ["<i>get used to + -ing / сущ.</i>", "привыкать, процесс", "<i>I can't <b>get used to driving</b> on the left.</i>"]
])}
${E([
  ["<b>Did</b> you <b>use to</b> smoke?", "Ты раньше курил?"],
  ["I <b>didn't use to</b> like coffee.", "Раньше я не любил кофе."]
])}
${N("В вопросе и отрицании пишется <i>use to</i> без <i>-d</i>. С глаголами состояния <i>would</i> не используется: <i>He <b>used to</b> have long hair</i>.")}`,
  ex: [
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ live in Omsk, but now I live in Moscow.", ["used to", "am used to", "get used to"]], ["She ___ getting up early — she has done it for years.", ["is used to", "used to", "uses to"]],
      ["When we were kids, we ___ play in the yard every evening.", ["would", "are used to", "get used to"]], ["It took me a month to ___ driving on the left.", ["get used to", "used to", "be use to"]],
      ["___ you use to smoke?", ["Did", "Do", "Were"]], ["I didn't ___ like coffee, but now I love it.", ["use to", "used to", "using to"]],
      ["He ___ have long hair when he was a student.", ["used to", "would"]], ["I'm not used to ___ so much.", ["working", "work", "worked"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Раньше я жил в деревне.", "I used to live in a village.|I used to live in the country."],
      ["Я привык рано вставать.", "I am used to getting up early.|I'm used to getting up early."],
      ["Раньше он не любил рыбу.", "He didn't use to like fish.|He did not use to like fish.|He used not to like fish."],
      ["Ты скоро привыкнешь к новой школе.", "You will soon get used to the new school.|You'll soon get used to the new school.|You will get used to the new school soon.|You'll get used to your new school soon."]
    ]}
  ]},

{ id: 't-review', level: 'B2', title: 'Повторение: все времена', sub: 'Simple, Continuous, Perfect',
  rule: `
<p>Сводная таблица активного залога. Используйте ее как шпаргалку к упражнениям на смешанные времена.</p>
${T(["", "Simple", "Continuous", "Perfect", "Perfect Continuous"], [
  ["Present", "<i>I <b>work</b></i>", "<i>I <b>am working</b></i>", "<i>I <b>have worked</b></i>", "<i>I <b>have been working</b></i>"],
  ["Past", "<i>I <b>worked</b></i>", "<i>I <b>was working</b></i>", "<i>I <b>had worked</b></i>", "<i>I <b>had been working</b></i>"],
  ["Future", "<i>I <b>will work</b></i>", "<i>I <b>will be working</b></i>", "<i>I <b>will have worked</b></i>", "<i>I <b>will have been working</b></i>"]
])}
<h3>Как выбирать</h3>
${T(["Вопрос к себе", "Время"], [
  ["Бывает регулярно, всегда?", "Simple"],
  ["Идет в определенный момент?", "Continuous"],
  ["Завершилось к моменту, важен результат?", "Perfect"],
  ["Длилось какое-то время до момента?", "Perfect Continuous"]
])}`,
  ex: [
    { type: 'gap', task: 'Поставьте глагол в нужное время.', items: [
      ["Water ___ (boil) at 100 °C.", "boils"], ["Be quiet! The baby ___ (sleep).", "is sleeping|'s sleeping"],
      ["I ___ (see) him yesterday.", "saw"], ["She ___ (never / be) to Paris.", "has never been|'s never been"],
      ["When I came in, they ___ (have) dinner.", "were having"], ["By the time we arrived, the film ___ (start).", "had started"],
      ["I ___ (wait) for you for twenty minutes already!", "have been waiting"], ["I ___ (call) you as soon as I get home.", "will call"],
      ["This time next week we ___ (lie) on the beach.", "will be lying"], ["He ___ (work) here since 2015.", "has worked|has been working"],
      ["Look! The bus ___ (come).", "is coming"], ["We ___ (go) to the seaside every summer when I was a child.", "went|used to go|would go"]
    ]},
    { type: 'text', task: 'Поставьте глаголы из скобок в нужное время.', text: "Dear Ann, I ___ (write) to you from London. I ___ (arrive) here three days ago. I ___ (already / visit) the British Museum and the Tower. Yesterday, while I ___ (walk) along the Thames, I ___ (meet) an old school friend. He ___ (live) in London since 2020. Tomorrow we ___ (go) to the theatre — he ___ (already / buy) the tickets. I ___ (write) again soon.",
      answers: ["am writing|'m writing", "arrived", "have already visited|'ve already visited", "was walking", "met", "has lived|has been living|'s lived|'s been living", "are going|are going to go|will go", "has already bought|'s already bought", "will write|'ll write"] },
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["I ___ English for five years.", ["have been learning", "am learning", "learn"]], ["She ___ when I came in.", ["was cooking", "cooked", "has cooked"]],
      ["They ___ married in 2015.", ["got", "have got", "had got"]], ["I ___ my keys. Can you help me look for them?", ["have lost", "lost", "had lost"]],
      ["By next summer he ___ school.", ["will have finished", "will finish", "finishes"]], ["He said he ___ the film before.", ["had seen", "has seen", "saw"]]
    ]}
  ]}
]});

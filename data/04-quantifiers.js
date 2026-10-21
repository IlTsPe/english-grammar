BOOK.push({ n: 4, id: 'quantifiers', title: 'Much, many, (a) little, (a) few',
intro: 'Слова количества выбираются по тому, исчисляемое ли существительное. Повторите тему 2.3, если сомневаетесь, к какой группе относится слово.',
topics: [

{ id: 'q-much-many', level: 'A2', title: 'Much, many, a lot of', sub: 'How much money? How many people?',
  rule: `
<p><i>many</i> и <i>much</i> значат «много». <i>many</i> — с исчисляемыми во множественном числе, <i>much</i> — с неисчисляемыми.</p>
${T(["Слово", "С чем", "Где чаще", "Пример"], [
  ["<i>many</i>", "исчисляемые", "вопросы, отрицания", "<i>How <b>many</b> books? I don't have <b>many</b> friends.</i>"],
  ["<i>much</i>", "неисчисляемые", "вопросы, отрицания", "<i>How <b>much</b> money? There isn't <b>much</b> time.</i>"],
  ["<i>a lot of / lots of</i>", "любые", "утверждения", "<i>She has <b>a lot of</b> friends. We have <b>lots of</b> time.</i>"],
  ["<i>too many / too much</i> — слишком много", "<i>many</i> — исчисляемые, <i>much</i> — неисчисляемые", "любые предложения", "<i>There are <b>too many</b> people. You eat <b>too much</b> sugar.</i>"],
  ["<i>so many / so much</i> — так много", "<i>many</i> — исчисляемые, <i>much</i> — неисчисляемые", "любые предложения", "<i>I've never seen <b>so many</b> stars.</i>"]
])}
${E([
  ["<b>How many</b> apples do you need?", "Сколько яблок? (штук)"],
  ["<b>How much</b> is this bag?", "Сколько стоит эта сумка?"],
  ["Thank you very <b>much</b>! I like it very <b>much</b>.", "much как наречие: «очень»"]
])}
${N("В утвердительных предложениях <i>much</i> звучит книжно. Вместо <i>I have much time</i> естественнее <i>I have <b>a lot of</b> time</i>. Без существительного — <i>a lot</i>: <i>She reads <b>a lot</b>.</i>")}`,
  ex: [
    { type: 'gap', task: 'Впишите much или many.', items: [
      ["How ___ money have you got?", "much"], ["How ___ people live in this city?", "many"],
      ["There isn't ___ milk in the bottle.", "much"], ["I don't have ___ friends here.", "many"],
      ["Did you buy ___ apples?", "many"], ["We haven't got ___ time.", "much"],
      ["There are too ___ cars in the street.", "many"], ["Don't put so ___ salt in the soup.", "much"],
      ["How ___ is this dress?", "much"], ["Thank you very ___!", "much"],
      ["How ___ times have you been to London?", "many"], ["She doesn't drink ___ coffee.", "much"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["She has ___ friends.", ["a lot of", "much", "a lot"]], ["How ___ homework did you get?", ["much", "many"]],
      ["There were too ___ people at the party.", ["many", "much"]], ["I don't eat ___ meat.", ["much", "many"]],
      ["How ___ languages do you speak?", ["many", "much"]], ["We had ___ fun yesterday.", ["a lot of", "many", "a lot"]],
      ["How ___ are these shoes?", ["much", "many"]], ["He hasn't got ___ experience.", ["much", "many"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["Сколько у тебя книг?", "How many books have you got?|How many books do you have?"],
      ["Сколько стоит этот телефон?", "How much is this phone?|How much does this phone cost?"],
      ["У нас не так много времени.", "We don't have much time.|We haven't got much time.|We do not have much time."],
      ["У нее много друзей.", "She has a lot of friends.|She has many friends.|She has got a lot of friends.|She has lots of friends."],
      ["Ты ешь слишком много сахара.", "You eat too much sugar."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["How many people came to the party last night?", "Сколько человек пришло на вечеринку вчера?"],
      ["We haven't got much time, so let's hurry.", "У нас мало времени, так что давай поторопимся."],
      ["She has a lot of friends in this town.", "У нее много друзей в этом городе."]
    ]}
  ]},

{ id: 'q-few-little', level: 'A2', title: 'A few, few, a little, little', sub: 'a few friends, little time',
  rule: `
<p>Эти слова значат «немного» или «мало». Выбор зависит от двух вещей: исчисляемое ли существительное и достаточно ли этого количества.</p>
${T(["", "Исчисляемые", "Неисчисляемые"], [
  ["немного, несколько (достаточно)", "<i><b>a few</b> friends</i>", "<i><b>a little</b> money</i>"],
  ["мало (недостаточно)", "<i><b>few</b> friends</i>", "<i><b>little</b> money</i>"]
])}
${E([
  ["I have <b>a few</b> friends here, so I'm not lonely.", "Есть несколько друзей — хорошо."],
  ["I have <b>few</b> friends here, and I feel lonely.", "Мало друзей — плохо."],
  ["There's <b>a little</b> time left. Let's have coffee.", "Немного времени есть."],
  ["There's <b>little</b> time left. Hurry up!", "Времени мало."]
])}
${M("Удобно запомнить:", ["very few", "very little", "quite a few (довольно много)", "only a few", "only a little"])}
${N("<i>little</i> как прилагательное значит «маленький»: <i>a little girl</i>. Отличайте его от <i>a little</i> «немного»: <i>a little sugar</i>.")}`,
  ex: [
    { type: 'gap', task: 'Впишите a few, few, a little или little.', items: [
      ["I've got ___ apples. Would you like one?", "a few"], ["Hurry up! We have very ___ time.", "little"],
      ["Add ___ salt to the soup, it's not enough.", "a little"], ["He is not popular, he has ___ friends.", "few"],
      ["Can you lend me ___ money?", "a little"], ["There were ___ people at the concert; the hall was almost empty.", "few"],
      ["I speak ___ French — enough to order food.", "a little"], ["Wait ___ minutes, please.", "a few"],
      ["She drinks very ___ water. It's bad for her.", "little"], ["Only ___ students passed the exam. Most failed.", "a few"],
      ["Let's rest ___. We've been walking for hours.", "a little"], ["I have ___ questions to ask you.", "a few"]
    ]},
    { type: 'choice', task: 'Выберите правильный вариант.', items: [
      ["There is ___ milk left, enough for one cup.", ["a little", "a few", "few"]], ["The town has ___ hotels, so book early.", ["few", "little", "a little"]],
      ["I need ___ eggs for the cake.", ["a few", "a little", "little"]], ["He made very ___ mistakes. Well done!", ["few", "little", "a little"]],
      ["We have ___ hope of winning. It's almost impossible.", ["little", "a little", "few"]], ["Quite ___ people came — almost a hundred!", ["a few", "few", "a little"]]
    ]},
    { type: 'translate', task: 'Переведите на английский.', items: [
      ["У меня есть немного денег.", "I have a little money.|I have got a little money.|I've got a little money."],
      ["У него мало друзей.", "He has few friends.|He has very few friends.|He has got few friends."],
      ["Подожди несколько минут.", "Wait a few minutes.|Wait for a few minutes."],
      ["У нас мало времени.", "We have little time.|We have very little time."],
      ["Я немного говорю по-немецки.", "I speak a little German.|I speak German a little."]
    ]},
    { type: 'listen', at: 2, task: 'Прослушайте предложение и соберите его из слов.', items: [
      ["I have a few friends who can help us.", "У меня есть несколько друзей, которые могут нам помочь."],
      ["There is very little time left before the train.", "До поезда осталось совсем мало времени."],
      ["Few people know about this little shop.", "Мало кто знает об этом маленьком магазине."]
    ]}
  ]}
]});

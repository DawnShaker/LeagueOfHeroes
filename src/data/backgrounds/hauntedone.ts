import type { Background } from '../../types/background';

export const hauntedone: Background = {
  id: 'hauntedone',
  name: 'Преследуемый',
  nameEn: 'Haunted One',
  sourceBook: 'VRGR14',
  lore: 'Вас преследует нечто столь ужасное, что вы не отваживаетесь даже говорить об этом. Вы пытались похоронить это и сбежать от него, но все попытки были тщетны. Чем бы оно ни было, то, что преследует вас нельзя убить мечом или изгнать заклятиями. Оно может являться к вам в виде тени на стене, кровавым кошмаром, воспоминанием, которое отказывается умирать или дьявольским шёпотом во тьме.\nНоша берёт своё, изолируя вас от большинства людей и заставляя сомневаться в здравии вашего рассудка. Вы должны найти способ, победить это прежде, чем оно уничтожит вас.',
  proficiencies: {
    abilityScores: {
      description: 'Либо значение одной характеристики по вашему выбору увеличивается на 2, а другой — на 1, либо значение трёх различных характеристик по вашему выбору увеличивается на 1'
    },
    feat: 'Любая черта происхождения',
    skills: {
      count: 2,
      description: '2 любых навыка'
    },
    tools: {
      description: '1 владение: ремесленный/неремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
  },
  variants: {
    title: 'Переломное событие',
    table: [
      { roll: 1, result: 'Монстр, убивший дюжины невинных людей сохранил вам жизнь и вы не знаете почему.'},
      { roll: 2, result: 'Вы были рождены под тёмной звездой. Вы чувствуете, как она наблюдает за вами, холодно и отстранённо. Иногда она взывает к вам в чернейшие ночи.'},
      { roll: 3, result: 'Призрак, преследовавший вашу семью поколениями теперь преследует вас. Вы не знаете, чего он хочет, но знаете, что он не оставит вас в покое.'},
      { roll: 4, result: 'В вашей семейной истории есть практиковавшие тёмное искусство. Однажды, играя вы почувствовали хватку чего-то ужасного на вашей душе, после чего вы сбежали.'},
      { roll: 5, result: 'Они [oni] забрал вашего родного брата или сестру одной холодной, тёмной ночью и вы были не в силах ему помешать.'},
      { roll: 6, result: 'Вы были прокляты ликантропией, но позже исцелились. Теперь вас преследуют невинные, убитые вами.'},
      { roll: 7, result: 'Карга похитила и вырастила вас. Вы сбежали, но карга всё ещё магически связана с вами и наполняет ваш разум злыми мыслями.'},
      { roll: 8, result: 'Вы открыли мистический том и увидели вещи, не укладывающиеся в здравый рассудок. Вы сожгли ту книгу, но слова и картинки из неё навсегда въелись в вашу психику.'},
      { roll: 9, result: 'Демон овладел вами в детстве. Вас держали под замком, но вы сбежали. Демон всё ещё внутри вас, но вы пытаетесь держать его взаперти.'},
      { roll: 10, result: 'Вы творили ужасные вещи, чтобы отомстить за убийство возлюбленного. Вы стали монстром и это преследует вас в кошмарах.'}
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я не бегу от зла. Зло бежит от меня.'},
      { roll: 2, trait: 'Я люблю цитировать и учить поэзию. Она успокаивает меня и приносит мимолётные моменты радости.'},
      { roll: 3, trait: 'Я трачу деньги свободно и живу полнейшей жизнью, зная, что завтра я могу умереть.'},
      { roll: 4, trait: 'Я живу ради азарта охоты.'},
      { roll: 5, trait: 'Я не говорю о том, что терзает меня. Предпочитаю не взваливать на других своё проклятие.'},
      { roll: 6, trait: 'Я ожидаю опасности за каждым углом.'},
      { roll: 7, trait: 'Я отказываюсь становиться жертвой и не позволю другим ими становиться.'},
      { roll: 8, trait: 'Я не верю в высшие силы.'}
    ],
    ideals: [
      { roll: 1, ideal: 'Я пытаюсь помогать другим нуждающимся, не взирая на личную цену. (Добро)'},
      { roll: 2, ideal: 'Я остановлю духов, что преследуют меня или погибну в попытках сделать это. (Любое)'},
      { roll: 3, ideal: 'Я убиваю монстров, чтобы сделать мир более безопасным и чтобы изгнать моих собственных демонов. (Добро)'},
      { roll: 4, ideal: 'У меня есть тёмное призвание, которое ставит меня выше закона. (Хаос)'},
      { roll: 5, ideal: 'Я люблю узнать возможности и слабости своего врага прежде, чем бросаться в бой. (Закон)'},
      { roll: 6, ideal: 'Я монстр уничтожающий других монстров и всё, что становится у меня на пути. (Зло)'}
    ],
    bonds: [
      { roll: 1, bond: 'Я записываю свои мысли и открытия в дневник. Мой дневник – моё наследие.'},
      { roll: 2, bond: 'Я пожертвую своей жизнью и душой, чтобы защитить невинного.'},
      { roll: 3, bond: 'Мои мучения лишили меня любимого человека. Я жажду вернуть утраченную любовь.'},
      { roll: 4, bond: 'Ужасная вина гложет меня. Я надеюсь, что смогу отыскать искупление своими действиями.'},
      { roll: 5, bond: 'Во мне зло и я чувствую его. Оно никогда не должно вырваться наружу.'},
      { roll: 6, bond: 'У меня есть ребёнок, которого необходимо защищать. Я должен сделать мир более безопасным местом для него (неё).'}
    ],
    flaws: [
      { roll: 1, flaw: 'У меня есть определённый ритуал, который я должен выполнять каждый день. Я никогда не должен его нарушать.'},
      { roll: 2, flaw: 'Я предполагаю о людях наихудшее.'},
      { roll: 3, flaw: 'Я не испытываю сострадания к мёртвым. Им-то повезло.'},
      { roll: 4, flaw: 'У меня зависимость.'},
      { roll: 5, flaw: 'Я торговец роком и унынием, живущий в мире без надежды.'},
      { roll: 6, flaw: 'Я говорю с духами, которых никто больше не может видеть.'}
    ]
  }
};
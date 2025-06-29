import type { Background } from '../../types/background';

export const houseagent: Background = {
  id: 'house Agent',
  name: 'Агент Дома',
  nameEn: 'House Agent',
  sourceBook: 'ERLW14',
  lore: 'Вы поклялись в верности Дому Отмеченному Драконом. Если вы имеете Метку Дракона то вы, вероятно, член одной из влиятельных семей Дома; в противном случае вы аутсайдер, который надеется создать себе Имя с помощью Дома. Ваша основная задача состоит в том, чтобы быть глазами вашего Дома, но так же, вы можете быть вызваны в любое время, чтобы действовать как его рука. Такие миссии могут быть опасными, но прибыльными.',
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
    title: 'Задачи',
    description: 'Вы всегда собираете информацию для своего Дома, но когда барон даёт вам конкретную миссию, какую работу вы выполняете? Таблица задач агента дома предлагает несколько вариантов.',
    table: [
      { roll: 1, result: 'Сбор информации'},
      { roll: 2, result: 'Расследование'},
      { roll: 3, result: 'Научные исследования и разработки'},
      { roll: 4, result: 'Охрана'},
      { roll: 5, result: 'Запугивание'},
      { roll: 6, result: 'Разведка'},
      { roll: 7, result: 'Ведение переговоров'},
      { roll: 8, result: 'Тайные операции'},
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я всегда стремлюсь повысить эффективность своей работы.'},
      { roll: 2, trait: 'Я люблю делиться пустяками о делах моего дома.'},
      { roll: 3, trait: 'Я никогда не забуду оскорбление, нанесенное мне или моему дому.'},
      { roll: 4, trait: 'Я в восторге от всего, чем занимается мой дом.'},
      { roll: 5, trait: 'Я представляю свой дом и горжусь этим.'},
      { roll: 6, trait: 'Я критически отношусь к монархии и ограничениям домов.'},
    ],
    ideals: [
      { roll: 1, ideal: 'Общее благо. Мой дом выполняет жизненно важную функцию, и его процветание поможет всем. (Добрый)'},
      { roll: 2, ideal: 'Традиции. Я поддерживаю традиции своего дома и уважаю свою семью. (Законный)'},
      { roll: 3, ideal: 'Инновации. Откажитесь от старых традиций и найдите лучшие способы сделать что то. (Хаотичный)'},
      { roll: 4, ideal: 'Власть. Я хочу обеспечить процветание своего дома и сам управлять его мощью. (Злой)'},
      { roll: 5, ideal: 'Открытия. Я хочу узнать все, что смогу, как для своего дома, так и для собственного любопытства. (Любой)'},
      { roll: 6, ideal: 'Комфорт. Я хочу убедиться, что мне и моим близким достается все самое лучшее в жизни. (Любой)'}
    ],
    bonds: [
      { roll: 1, bond: 'Мой дом - это моя семья. Я сделаю для них все, что угодно.'},
      { roll: 2, bond: 'Я влюблен в кого-то из другого дома, но подобные отношения под запретом.'},
      { roll: 3, bond: 'Тот, кого я любил, был убит соперничающей группировкой в моем доме, и я отомщу.'},
      { roll: 4, bond: 'В целом, меня не волнует Дом, но я сделаю все для моего старого наставника.'},
      { roll: 5, bond: 'Мой дом должен измениться, и я возглавлю его развитие.'},
      { roll: 6, bond: 'Я полон решимости произвести впечатление на лидеров моего дома и самому стать лидером.'}
    ],
    flaws: [
      { roll: 1, flaw: 'Я зациклен на следовании официальным протоколам.'},
      { roll: 2, flaw: 'Я одержим теориями заговора и волнуюсь из-за тайных обществ и замаскированных демонов.'},
      { roll: 3, flaw: 'Мой дом и родословная делают меня лучшим!'},
      { roll: 4, flaw: 'Мой секрет может привести к моему изгнанию из дома, если о нем узнают.'},
      { roll: 5, flaw: 'Мои религиозные убеждения не распространены в моем доме.'},
      { roll: 6, flaw: 'Я работаю на тайную группировку в моем доме, которая даёт мне секретные задания.'}
    ]
  }
};
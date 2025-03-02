import type { Background } from '../../types/background';

export const athlete: Background = {
  id: 'athlete',
  name: 'Атлет',
  nameEn: 'Athlete',
  sourceBook: 'MOT14',
  lore: 'Вы стремитесь совершенствоваться физически и во всем, что делаете. Острые ощущения от соревнований зажигают огонь в вашей крови, а рев толпы толкает вас вперед. Рассказы о ваших подвигах предшествуют вам и могут открыть двери или развязать языки. Будь то в одном из полисов, между ними или среди нечеловеческих народов Тероса, физические состязания и те, кто их преследует, вызывают уважение, граничащее с почтением. Атлеты происходят из всех слоев общества и из всех культур и довольно часто пересекаются друг с другом.',
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
      description: '1 владение: ремесленный инструмент, набор, транспорт, музыкальный инструмент, игровой набор'
    },
    equipment: '50 зм'
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Я чувствую себя наиболее спокойно во время физических нагрузок, будь то упражнения или битвы.' },
      { roll: 2, trait: 'Я не люблю сидеть сложа руки.' },
      { roll: 3, trait: 'У меня есть распорядок дня, который я отказываюсь нарушать.' },
      { roll: 4, trait: 'Существуют препятствия, которые необходимо преодолеть.' },
      { roll: 5, trait: 'Когда я вижу, как другие борются, я предлагаю помощь.' },
      { roll: 6, trait: 'Я люблю обмениваться шутками и насмешками.' },
      { roll: 7, trait: 'Все, что стоит делать, стоит делать лучше всех.' },
      { roll: 8, trait: 'Меня раздражает, если люди хвалят кого-то другого, а не меня.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Соревнования. Я стремлюсь проверять себя во всем. (Хаотичный)' },
      { roll: 2, ideal: 'Триумф. Лучшая часть победы - это то, что мои соперники терпят поражение. (Злой)' },
      { roll: 3, ideal: 'Товарищество. Самые прочные узы выковываются в борьбе. (Добрый)' },
      { roll: 4, ideal: 'Люди. Я стремлюсь вдохновить своих зрителей. (Нейтральный)' },
      { roll: 5, ideal: 'Традиция. В каждой игре есть правила, и игровое поле должно быть на уровне. (Законно)' },
      { roll: 6, ideal: 'Рост. Уроки кроются в победе и поражении. (Любой)' }
    ],
    bonds: [
      { roll: 1, bond: 'Мои товарищи по команде - моя семья.' },
      { roll: 2, bond: 'Я одолею соперника и покажу своё превосходство.' },
      { roll: 3, bond: 'Моя ошибка причинила боль кому-то. Я больше никогда не совершу эту ошибку.' },
      { roll: 4, bond: 'Я буду лучшим для чести и славы моего дома.' },
      { roll: 5, bond: 'Человек, который тренировал меня - самый важный человек в моем мире.' },
      { roll: 6, bond: 'Я стремлюсь соответствовать примеру конкретного героя.' }
    ],
    flaws: [
      { roll: 1, flaw: 'У меня есть привычка, которая угрожает моей репутации или здоровью.' },
      { roll: 2, flaw: 'Я сделаю все, чтобы победить.' },
      { roll: 3, flaw: 'Я игнорирую всех, кто не участвует в соревнованиях, и всех, кто мне проигрывает.' },
      { roll: 4, flaw: 'У меня затяжная боль из-за старых травм.' },
      { roll: 5, flaw: 'Любое поражение или неудача с моей стороны происходит из-за жульничества оппонента.' },
      { roll: 6, flaw: 'Я должен быть капитаном любой группы, к которой присоединяюсь.' }
    ]
  }
};
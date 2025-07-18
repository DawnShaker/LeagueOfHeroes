import type { Background } from '../../types/background';

export const wayfarer: Background = {
  id: 'wayfarer',
  name: 'Странник',
  nameEn: 'Wayfarer',
  sourceBook: 'PHB24',
  lore: 'Вы выросли на улицах, в окружении таких же отбросов на обочине жизни, некоторые из которых были друзьями, другие - соперниками. Вы спали, где могли, и выполняли случайную работу за еду. Временами, когда голод становился невыносимым, вы прибегали к воровству. Тем не менее, вы никогда не теряли своей гордости и никогда не оставляли надежды. Судьба ещё не закончила с вами.',
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
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: '-'},
    ],
    ideals: [
      { roll: 1, trait: '-'},
    ],
    bonds: [
      { roll: 1, trait: '-'},
    ],
    flaws: [
      { roll: 1, trait: '-'},
    ],
  }
};
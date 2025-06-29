import type { Background } from '../../types/background';

export const mageofhighsorcery: Background = {
  id: 'mage of high sorcery',
  name: 'Маг Высшего Волшебства',
  nameEn: 'Mage of High Sorcery',
  sourceBook: 'DSOTDQ14',
  lore: 'Ваш талант к магии не обошел внимания Магов Высшего Волшебства — организации заклинателей, которая изучает магию и предотвращает ее неправильное использование. Вы обучались среди Магов, однако впереди вас ждут тяжелые и опасные испытания, после которых вы сможете стать полноценным членом этой группы. Ваша страсть к изучению магии наверняка сама определила, в каком направлении вы пойдете: доброжелательный Орден Белых одежд, преследующий баланс Орден Красных одежд и безрассудный Орден Черных одежд.\nВ мире Кринн многие говорят о Магах Высшего волшебства как о Волшебниках Высшего волшебства. Организация принимает не только волшебников, поэтому в их рядах можно увидеть бардов, чародеев, колдунов и других заклинателей.',
  proficiencies: {
    abilityScores: {
      description: 'Либо значение одной характеристики по вашему выбору увеличивается на 2, а другой — на 1, либо значение трёх различных характеристик по вашему выбору увеличивается на 1'
    },
    feat: 'Любая черта происхождения или черта Посвящённый в Высшее волшебство',
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
    title: 'Безделушки Мага Высшего Волшебства',
    table: [
      { roll: 1, result: 'Запечатанное письмо от вашего первого учителя.'},
      { roll: 2, result: 'Сломанная волшебная палочка, сделанная из чёрного, красного или белого дерева.'},
      { roll: 3, result: 'Свиток с непонятной формулой.'},
      { roll: 4, result: 'Бесполезное устройство, покрытое цветными камнями, которые могут складываться в различные загадочные формы.'},
      { roll: 5, result: 'Мешочек или книга заклинаний, украшенная символом тройной луны Магов Высшего волшебства.'},
      { roll: 6, result: 'Линза, через которую вы можете увидеть невидимую луну Кринна — Нуитари.'}
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: '-'}
    ],
    ideals: [
      { roll: 1, ideal: '-'}
    ],
    bonds: [
      { roll: 1, bond: '-'}
    ],
    flaws: [
      { roll: 1, flaw: '-'}
    ]
  }
};
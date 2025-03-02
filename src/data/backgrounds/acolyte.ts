import type { Background } from '../../types/background';

export const acolyte: Background = {
  id: 'acolyte',
  name: 'Послушник',
  nameEn: 'Acolyte',
  sourceBook: 'PHB24',
  lore: 'Вы посвятили себя служению в городском храме или в уединённой священной роще. Там вы совершали священные обряды в честь бога или пантеона. Вы служили у священника и изучали религию. Благодаря наставлениям вашего священника и вашей собственной преданности вы также научились направлять толику божественной силы на служение вашему месту поклонения и людям, которые там молились.',
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
      { roll: 1, trait: 'Я идеализирую конкретного героя своей веры и постоянно ссылаюсь на его поступки и свершения.' },
      { roll: 2, trait: 'Я могу найти общую позицию даже у самых яростных врагов, сопереживая им, и всегда стремясь к примирению.' },
      { roll: 3, trait: 'Я вижу знамения в каждом событии и поступке. Боги пытаются говорить с нами, нужно лишь прислушаться.' },
      { roll: 4, trait: 'Ничто не может поколебать мой оптимизм.' },
      { roll: 5, trait: 'При любой оказии я цитирую (или перевираю) священные тексты и притчи.' },
      { roll: 6, trait: 'Я терпим (или нетерпим) к другим верованиям, и уважаю (или порицаю) поклонение другим богам.' },
      { roll: 7, trait: 'Я люблю хорошую еду, выпивку и высокое общество представителей своего храма. Жизнь вдали от этого меня раздражает.' },
      { roll: 8, trait: 'Я пробыл в храме слишком долго, и мне недостаёт опыта взаимодействия с людьми за его пределами.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Традиции. Мы должны сохранить и защитить древние традиции богослужения и совершения священных таинств. (Законный)' },
      { roll: 2, ideal: 'Милосердие. Несмотря на затраченные усилия, я всегда пытаюсь помочь тем, кто в нужде. (Добрый)' },
      { roll: 3, ideal: 'Перемены. Мы должны помогать привносить в мир перемены, которых наши божества постоянно жаждут. (Хаотичный)' },
      { roll: 4, ideal: 'Власть. Я надеюсь однажды подняться на самую вершину своей религиозной иерархии. (Законный)' },
      { roll: 5, ideal: 'Вера. Я верю, что моё божество направляет меня. И что усердная работа всегда будет вознаграждена. (Законный)' },
      { roll: 6, ideal: 'Стремление. Я ищу шанс доказать, что я достоин благословления своего божества, совершая деяния в соответствии с его учениями. (Любой)' }
    ],
    bonds: [
      { roll: 1, bond: 'Я не пощажу живота своего, лишь бы найти древнюю реликвию своей веры, что была потеряна давным давно.' },
      { roll: 2, bond: 'Однажды я отомщу развращённым представителям верховной иерархии своего храма, что объявили меня еретиком.' },
      { roll: 3, bond: 'Я обязан своей жизнью священнику, который позаботился обо мне, когда умерли родители.' },
      { roll: 4, bond: 'Всё, что я делаю — для простых людей.' },
      { roll: 5, bond: 'Я пойду на всё что угодно, дабы защитить свой храм.' },
      { roll: 6, bond: 'Я пытаюсь сохранить священные тексты, которые мои враги считают еретическими и пытаются уничтожить.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Я не проявляю снисходительности к другим, но к себе я еще более суров.' },
      { roll: 2, flaw: 'Я слишком доверяю тем, кто обладает властью в моей церковной иерархии.' },
      { roll: 3, flaw: 'Моя набожность зачастую приводит к тому, что я слепо верю всем, кто исповедует мою религию.' },
      { roll: 4, flaw: 'Я непреклонен в своих убеждениях.' },
      { roll: 5, flaw: 'Я настороженно отношусь к незнакомцам и всегда жду от них худшего.' },
      { roll: 6, flaw: 'Однажды выбрав цель, я становлюсь одержимым ею в ущерб всему прочему в своей жизни.' }
    ]
  }
};
import type { Background } from '../../types/background';

export const outlander: Background = {
  id: 'outlander',
  name: 'Чужеземец',
  nameEn: 'Outlander',
  sourceBook: 'PHB24',
  lore: 'Вы выросли в глуши, вдали от цивилизации и её благ. Вы видели миграцию стад, чей размер был больше леса, выживали при температуре, которую горожанам и не представить, и наслаждались таким уединением, что на многие мили вокруг вы были единственным мыслящим существом. Дикая природа в вашей крови, будь вы кочевником, исследователем, затворником, охотником-собирателем или даже мародёром. Даже в неизвестном месте вы найдёте что-то, что вам понятно.',
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
  variants: {
    title: 'Занятие',
    description: 'Вы были в необычных местах и видели такое, что другие не могут даже вообразить. Подумайте, какие далёкие земли вы посетили, и как они на вас повлияли. Можете совершить бросок по прилагающейся таблице, чтобы определить, чем вы занимались в глуши, а можете сделать выбор самостоятельно.',
    table: [
      { roll: 1, result: 'Лесник' },
      { roll: 2, result: 'Траппер' },
      { roll: 3, result: 'Поселенец' },
      { roll: 4, result: 'Проводник' },
      { roll: 5, result: 'Изгнанник' },
      { roll: 6, result: 'Охотник за головами' },
      { roll: 7, result: 'Пилигрим' },
      { roll: 8, result: 'Кочевник' },
      { roll: 9, result: 'Охотник-собиратель' },
      { roll: 10, result: 'Мародер' },
    ]
  },
  characteristics: {
    personalityTraits: [
      { roll: 1, trait: 'Мной руководит жажда приключений, которая и увела меня из дома.' },
      { roll: 2, trait: 'Я слежу за друзьями, как если бы они были слепыми котятами.' },
      { roll: 3, trait: 'Однажды я пробежал 40 километров без остановки, чтобы предупредить свой клан о приближающейся орде орков. Если понадобится, я повторю это.' },
      { roll: 4, trait: 'Для любой ситуации у меня есть уроки, извлечённые из наблюдений за природой.' },
      { roll: 5, trait: 'Я не понимаю богатых и воспитанных. Деньги и хорошие манеры не спасут тебя от голодного волка.' },
      { roll: 6, trait: 'Я всё время что-то беру в руки, рассеянно кручу и иногда ломаю.' },
      { roll: 7, trait: 'Я гораздо комфортнее чувствую себя среди зверей, чем среди людей.' },
      { roll: 8, trait: 'Меня действительно вырастили волки.' }
    ],
    ideals: [
      { roll: 1, ideal: 'Перемены. Жизнь как времена года, постоянно меняется, и мы должны меняться вместе с ней. (Хаотичный)' },
      { roll: 2, ideal: 'Процветание. Каждый должен поступать так, чтобы всё племя было счастливо. (Добрый)' },
      { roll: 3, ideal: 'Честь. Если я обесчещу себя, я обесчещу весь свой клан. (Законный)' },
      { roll: 4, ideal: 'Мощь. Самый сильный имеет право приказывать. (Злой)' },
      { roll: 5, ideal: 'Природа. Мир природы гораздо важнее построек цивилизации. (Нейтральный)' },
      { roll: 6, ideal: 'Слава. Я должен завоёвывать славу в сражениях, для себя и своего клана. (Любой)' }
    ],
    bonds: [
      { roll: 1, bond: 'Моя семья, клан или племя — самые важные вещи в моей жизни, даже когда они далеко от меня.' },
      { roll: 2, bond: 'Осквернение дикой местности на моей родине я считаю личным оскорблением.' },
      { roll: 3, bond: 'Я вымещу свой чудовищный гнев на злодеях, уничтоживших мои земли.' },
      { roll: 4, bond: 'Я последний из своего племени, и должен сделать так, чтобы наши имена вошли в легенды.' },
      { roll: 5, bond: 'Мне являются жуткие видения грядущей катастрофы, и я сделаю всё, чтобы её предотвратить.' },
      { roll: 6, bond: 'Я должен создавать новых детей, которые будут поддерживать моё племя.' }
    ],
    flaws: [
      { roll: 1, flaw: 'Я слишком пристрастен к элю, вину и прочим спиртным напиткам.' },
      { roll: 2, flaw: 'В жизни на полную катушку нет места осторожности.' },
      { roll: 3, flaw: 'Я помню все полученные оскорбления и таю злобу на всех обидчиков.' },
      { roll: 4, flaw: 'Я с трудом доверяю представителям других рас, племён и сообществ.' },
      { roll: 5, flaw: 'Я тайно считаю, что было бы хорошо стать тираном, правящим землями.На любые неурядицы я почти всегда отвечаю насилием.' },
      { roll: 6, flaw: 'Не думайте, что я буду спасать тех, кто не может сам о себе позаботиться. Сильные должны процветать, а слабые погибают, и это нормально.' }
    ]
  }
};
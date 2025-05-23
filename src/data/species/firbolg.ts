import type { Species } from '../../types/species';

export const firbolg: Species = {
  id: 'firbolg',
  name: 'Фирболг',
  nameEn: 'Firbolg',
  sourceBook: 'MPMM14',
  lore: 'Дальние родственники великанов, первые фирболги бродили по первобытным лесам мультивселенной, и магия этих лесов вплелась в души фирболгов. Столетия спустя эта магия все еще находится внутри фирболга, даже того, кто никогда не жил под ветвями великого леса. \nМагия фирболгов в основным скрытная, позволяющая их предкам проходить через лес, не тревожа его. Связь между фирболгом и дикой природой мира столь глубока, что они могут общаться с флорой и фауной.',
  portrait: '/images/species/firbolg.jpg',
  type: 'Гуманоид',
  size: 'Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Как у гуманоидов, родственных с феями, у фирболгов большая продолжительность жизни. Фирболги достигают зрелости приблизительно к 30 годам, самые старейшие из них доживали до 500 лет.'
    },
    {
      title: 'Магия фирболгов',
      description: 'Вы можете накладывать заклинания обнаружение магии [detect magic] и маскировка [disguise self] с помощью этой особенности. Когда вы накладываете эту версию заклинания маскировка [disguise self], вы можете казаться на 3 фута ниже или выше, чем обычно. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом. Вы также можете накладывать эти заклинания, используя ячейки заклинаний подходящего уровня. \nИнтеллект, Мудрость или Харизма является вашей базовой характеристикой для этих заклинаний (выберите одну из них при выборе этой расы).'
    },
    {
      title: 'Незримая поступь',
      description: 'Бонусным действием вы можете магически стать невидимым до начала вашего следующего хода или пока вы не атакуете, не бросите кость урона или не заставите кого-то совершить спасбросок. Вы можете использовать эту особенность количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования по окончании продолжительного отдыха.'
    },
    {
      title: 'Мощное телосложение',
      description: 'Вы считаетесь на один размер больше, когда определяются ваши грузоподъемность и вес, который вы можете толкать, тянуть или поднимать.'
    },
    {
      title: 'Язык зверей и листвы',
      description: 'У вас есть способность к ограниченному общению с животными и растениями. Они могут понимать значение ваших слов, хотя у вас нет никакой специальной способности понять их в ответ. Вы совершаете с преимуществом проверки Харизмы, чтобы на них повлиять.'
    }
  ]
};
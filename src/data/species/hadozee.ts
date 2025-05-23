import type { Species } from '../../types/species';

export const hadozee: Species = {
  id: 'hadozee',
  name: 'Хадози',
  nameEn: 'Hadozee',
  sourceBook: 'SAS14',
  lore: 'Первые хадози были робкими млекопитающими не крупнее домашних кошек. Преследуемые более крупными естественными хищниками, хадози забрались на деревья и развили крылья, которые позволили им скользить с ветки на ветку.\nСегодня хадози - это разумные двуногие существа, стремящиеся оставить позади страшных хищников своего родного мира и исследовать другие миры.\nВ дополнение к тому, что они прирожденные альпинисты, у хадози есть ноги, которые так же ловки, как и их руки, даже до такой степени, что у них есть противопоставленные большие пальцы. Мембраны кожи свободно свисают с их рук и ног. При тугом растяжении эти мембраны позволяют хадози скользить. Хадози оборачивают себя этими крыльями, чтобы согреться.',
  portrait: '/images/species/hadozee.jpg',
  type: 'гуманоид',
  size: 'Маленький или Средний',
  speed: 30,
  abilities: [
    {
      title: 'Возраст',
      description: 'Хадози взрослеют примерно с той же скоростью, что и люди, и достигают зрелости в конце подросткового возраста. Живут они несколько дольше, чем люди, - до 90 лет.'
    },
    {
      title: 'Скорость',
      description: 'Ваша базовая скорость ходьбы — 30 футов. Кроме того, вы имеете скорость лазания, равную скорости ходьбы.'
    },
    {
      title: 'Ловкие ступни',
      description: 'Вы можете бонусным действием использовать свои ноги, чтобы манипулировать предметами, открывать или закрывать двери или контейнеры, а также поднимать или класть Крошечные предметы.'
    },
    {
      title: 'Планирование',
      description: 'Когда вы падаете с высоты не менее 10 футов над землей, вы можете реакцией расправить свои кожаные мембраны, чтобы горизонтально спланировать на количество футов, равное вашей скорости ходьбы, и вы получаете 0 урона от падения. Вы определяете направление планирования.'
    },
    {
      title: 'Вёрткость хадози',
      description: 'Магия, которая течёт в ваших венах, усиливает вашу естественную защиту. Когда вы получаете урон, вы можете реакцией бросить к6. Добавьте свой бонус мастерства к выпавшему числу и уменьшите получаемый вами урон на величину, равную этой сумме (минимум 0 урона).\nВы можете использовать эту особенность количество раз, равное вашему бонусу мастерства. Вы восстанавливаете все потраченные использования, когда заканчиваете продолжительный отдых.'
    }
  ]
};
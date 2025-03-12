interface Item {
    id: string;
    name: string;
    nameEn: string;
    type: string;
    cost: string;
    weight: string;
    sourceBook: string;
    description: string;
  }
  
  export const items: Item[] = [
    {
      id: 'alchemists-fire',
      name: 'Алхимический огонь',
      nameEn: 'Alchemist\'s Fire',
      type: 'Снаряжение приключенца',
      cost: '50 зм',
      weight: '1 фнт.',
      sourceBook: 'PHB\'24',
      description: 'Когда вы совершаете действие атака, то вы можете заменить 1 из ваших атак на бросок фляги с алхимическим огнём. Выберите 1 существо или объект, который вы видите в пределах 20 футов от себя. Цель должна преуспеть в спасброске Ловкости (Сл. 8 + ваш модификатор Ловкости + ваш бонус мастерства), иначе она получит 1к4 урона огнём и начнёт гореть (см. глоссарий правил).'
    },
    {
      id: 'string',
      name: 'Бечёвка',
      nameEn: 'String',
      type: 'Снаряжение приключенца',
      cost: '1 см',
      weight: '0 фнт.',
      sourceBook: 'PHB\'24',
      description: 'Бечёвка длиной 10 футов. Вы можете завязать узел на ней, используя действие использование.'
    },
    {
      id: 'block-and-tackle',
      name: 'Блок и лебёдка',
      nameEn: 'Block and Tackle',
      type: 'Снаряжение приключенца',
      cost: '1 зм',
      weight: '5 фнт.',
      sourceBook: 'PHB\'24',
      description: 'Блок и лебёдка позволяют поднимать груз, в 4 раза превышающий ваш обычный лимит.'
    }
  ];
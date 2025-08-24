interface ClassFeature {
  name: string;
  level: number;
  description: string;
  collapsible?: {
    title: string;
    description: string;
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

interface Subclass {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  features: ClassFeature[];
}

interface ClassLevel {
  level: number;
  profBonus: string;
  features: string[];
  cantrips?: number;
  preparedSpells?: number;
  spellSlots?: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
  };
}

interface Equipment {
  choice: string;
  items: string[];
}

export interface Class {
  id: string;
  name: string;
  nameEn: string;
  sourceBook: string;
  portrait: string;
  description: string;
  primaryAbility: string;
  hitDice: number;
  subclasses: Subclass[];
  hitPoints: {
    level1: string;
    higherLevels: string;
  };
  proficiencies: {
    armor: string[];
    weapons: string[];
    savingThrows: string[];
    skills: {
      count: number;
      list: string[];
    };
  };
  equipment: {
    default: Equipment[];
  };
  levels: ClassLevel[];
  features: ClassFeature[];
}
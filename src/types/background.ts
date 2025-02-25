export interface CharacteristicEntry {
  roll: number;
  trait?: string;
  ideal?: string;
  bond?: string;
  flaw?: string;
}

export interface Background {
  id: string;
  name: string;
  nameEn: string;
  sourceBook: string;
  lore: string;
  proficiencies: {
    abilityScores: {
      description: string;
    };
    feat: string;
    skills: {
      count: number;
      description: string;
    };
    tools: {
      description: string;
    };
    equipment: string;
  };
  variants?: {
    title: string;
    description: string;
    table: {
      roll: number;
      result: string;
    }[];
  };
  characteristics: {
    personalityTraits: CharacteristicEntry[];
    ideals: CharacteristicEntry[];
    bonds: CharacteristicEntry[];
    flaws: CharacteristicEntry[];
  };
}
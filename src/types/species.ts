export interface SpeciesVariant {
  name: string;
  nameEn: string;
  sourceBook: string;
  abilities?: {
    title: string;
    description: string;
  }[];
  replacesAbilities?: string[];
  tableData?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  lore?: string;
}

export interface Species {
  id: string;
  name: string;
  nameEn: string;
  sourceBook: string;
  lore: string;
  portrait: string;
  variants?: SpeciesVariant[];
  traits: {
    creatureType: string;
    size: {
      category: 'Small' | 'Medium';
      heightRange: string;
      weightRange: string;
    };
    speed: number;
    abilities: string[];
  };
}
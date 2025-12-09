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
  type: string;
  size: string;
  speed: number;
  variants?: SpeciesVariant[];
  traits: {
    abilities: string[];
  };
}
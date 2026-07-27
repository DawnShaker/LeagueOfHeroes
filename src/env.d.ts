/// <reference path="../.astro/types.d.ts" />

interface Window {
  speciesVariants?: Record<string, import('./types/species').SpeciesVariant>;
  ItemTooltip?: {
    new (): {
      init(element: HTMLElement, items?: unknown[]): void;
    };
  };
}

import type { Spell } from '../types/spell';

export interface TooltipConfig {
  offsetX?: number;
  offsetY?: number;
  fadeInDelay?: number;
  fadeOutDelay?: number;
}

export class SpellTooltip {
  private tooltip: HTMLElement | null = null;
  private currentLink: HTMLElement | null = null;
  private hideTimeout: number | null = null;
  private showTimeout: number | null = null;
  private config: Required<TooltipConfig>;

  constructor(config: TooltipConfig = {}) {
    this.config = {
      offsetX: config.offsetX ?? 0,
      offsetY: config.offsetY ?? 8,
      fadeInDelay: config.fadeInDelay ?? 200,
      fadeOutDelay: config.fadeOutDelay ?? 100
    };
  }

  init(tooltipElement: HTMLElement, spells: Spell[]) {
    this.tooltip = tooltipElement;
    const links = document.querySelectorAll('a[data-spell-id]');

    links.forEach(link => {
      const htmlLink = link as HTMLElement;

      htmlLink.addEventListener('mouseenter', (event) => this.handleMouseEnter(event, spells));
      htmlLink.addEventListener('mouseleave', () => this.handleMouseLeave());
      htmlLink.addEventListener('mousemove', (event) => this.handleMouseMove(event));
    });
  }

  private handleMouseEnter(event: Event, spells: Spell[]) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }

    const target = event.target as HTMLElement;
    this.currentLink = target;
    const spellId = target.dataset.spellId;

    if (!spellId || !this.tooltip) return;

    const spell = spells.find(s => s.id === spellId);
    if (!spell) return;

    this.showTimeout = window.setTimeout(() => {
      this.showTooltip(spell, event as MouseEvent);
    }, this.config.fadeInDelay);
  }

  private handleMouseLeave() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }

    this.hideTimeout = window.setTimeout(() => {
      this.hideTooltip();
    }, this.config.fadeOutDelay);
  }

  private handleMouseMove(event: Event) {
    if (!this.tooltip || this.tooltip.classList.contains('hidden')) return;
    this.positionTooltip(event as MouseEvent);
  }

  private showTooltip(spell: Spell, event: MouseEvent) {
    if (!this.tooltip) return;

    this.tooltip.innerHTML = this.renderTooltipContent(spell);
    this.tooltip.classList.remove('hidden');
    this.positionTooltip(event);
  }

  private hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip.classList.add('hidden');
    this.currentLink = null;
  }

  private positionTooltip(event: MouseEvent) {
    if (!this.tooltip) return;

    const tooltipRect = this.tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = event.pageX + this.config.offsetX;
    let top = event.pageY + this.config.offsetY;

    if (left + tooltipRect.width > viewportWidth + window.scrollX) {
      left = event.pageX - tooltipRect.width - this.config.offsetX;
    }

    if (top + tooltipRect.height > viewportHeight + window.scrollY) {
      top = event.pageY - tooltipRect.height - this.config.offsetY;
    }

    if (left < window.scrollX) {
      left = window.scrollX + 10;
    }

    if (top < window.scrollY) {
      top = window.scrollY + 10;
    }

    this.tooltip.style.left = `${left}px`;
    this.tooltip.style.top = `${top}px`;
  }

  private renderTooltipContent(spell: Spell): string {
    const levelText = spell.level === 'cantrip' ? 'Заговор' : `${spell.level} уровень`;
    const components = this.formatComponents(spell.components);

    return `
      <div class="spell-tooltip-header">
        <h3 class="spell-tooltip-name">${spell.name}</h3>
        <span class="spell-tooltip-name-en">${spell.nameEn}</span>
      </div>
      <div class="spell-tooltip-meta">
        <span class="spell-level">${levelText}</span>
        <span class="spell-school">${spell.school}</span>
      </div>
      <div class="spell-tooltip-stats">
        <div class="spell-stat">
          <span class="spell-stat-label">Время накладывания:</span>
          <span class="spell-stat-value">${spell.castingTime}</span>
        </div>
        <div class="spell-stat">
          <span class="spell-stat-label">Дистанция:</span>
          <span class="spell-stat-value">${spell.range}</span>
        </div>
        <div class="spell-stat">
          <span class="spell-stat-label">Компоненты:</span>
          <span class="spell-stat-value">${components}</span>
        </div>
        <div class="spell-stat">
          <span class="spell-stat-label">Длительность:</span>
          <span class="spell-stat-value">${spell.duration}</span>
        </div>
      </div>
      <div class="spell-tooltip-description">
        ${spell.description}
      </div>
      <div class="spell-tooltip-footer">
        <span class="spell-source">${spell.source.book}, стр. ${spell.source.page}</span>
      </div>
    `;
  }

  private formatComponents(components: { verbal: boolean; somatic: boolean; material?: string }): string {
    const parts: string[] = [];

    if (components.verbal) parts.push('В');
    if (components.somatic) parts.push('С');
    if (components.material) {
      parts.push(`М (${components.material})`);
    }

    return parts.join(', ');
  }

  destroy() {
    if (this.showTimeout) clearTimeout(this.showTimeout);
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
  }
}
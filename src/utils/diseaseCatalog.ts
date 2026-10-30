import type { DiseaseEntry, MaterialKind, ProgressionMode } from '../types/disease';
export const materialLabels: Record<MaterialKind, string> = {
    disease: 'Болезнь', curse: 'Проклятие', parasite: 'Паразит', affliction: 'Недуг',
    generator: 'Генератор', track: 'Система треков', event: 'Событие', template: 'Заготовка',
};
export const progressionLabels: Record<ProgressionMode, string> = {
    manual: 'Ручное ведение', stages: 'Стадии 0–3', successes: 'Успехи подряд',
    failures: 'Накопление провалов', scale: 'Числовая шкала', timer: 'Сюжетный таймер',
};
export const normalizeDiseaseText = (value: string) => value.normalize('NFKC').toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
export function escapeDiseaseHtml(value: unknown): string {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);
}
export function diseaseInline(value: string): string {
    return escapeDiseaseHtml(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/\n/g, '<br>');
}
export function diseaseSearchText(e: DiseaseEntry): string {
    return normalizeDiseaseText([e.name, e.nameRu, ...e.aliases, e.sourceGroup, e.infection, e.incubation,
        e.effects, e.progression, e.treatment, e.status, materialLabels[e.kind], ...e.transmissionTags,
        ...e.impactTags, ...e.progressionTags, ...e.treatmentTags].join(' '));
}
export function canTrackDisease(e: DiseaseEntry): boolean {
    return !['generator', 'track', 'event', 'template'].includes(e.kind);
}
export function formatGameTime(minute: number): string {
    const days = Math.floor(minute / 1440);
    const hours = Math.floor(minute % 1440 / 60);
    return `День ${days + 1} · ${String(hours).padStart(2, '0')}:${String(minute % 60).padStart(2, '0')}`;
}
export function formatDuration(minutes: number): string {
    if (minutes === 0)
        return 'сейчас';
    const value = Math.abs(minutes);
    const parts = [Math.floor(value / 1440) ? `${Math.floor(value / 1440)} д.` : '',
        Math.floor(value % 1440 / 60) ? `${Math.floor(value % 1440 / 60)} ч.` : '', value % 60 ? `${value % 60} мин.` : ''].filter(Boolean);
    return (minutes < 0 ? 'просрочено на ' : 'через ') + parts.join(' ');
}

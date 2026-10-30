import sourceCatalog from '../data/diseaseSources.json' with { type: 'json' };
import type { DiseaseEntry, DiseaseSourceBook, DiseaseSourceIndex, DiseaseSourceReference, DiseaseSourceStatus } from '../types/disease';

export const diseaseSourceBooks = sourceCatalog.books as DiseaseSourceBook[];
export const diseaseSourceIndexes = sourceCatalog.entries as Record<string, DiseaseSourceIndex>;
const booksById = new Map(diseaseSourceBooks.map(book => [book.id, book]));
export const sourceStatusLabels: Record<DiseaseSourceStatus, string> = {
    confirmed: 'Найдено в тексте источника',
    bibliography: 'По библиографическому указателю',
    candidate: 'Предположительный источник',
    unresolved: 'Источник не установлен',
};
export const sourceKindLabels: Record<DiseaseSourceBook['kind'], string> = {
    book: 'Книга', magazine: 'Журнал', article: 'Статья / приложение', novel: 'Роман', game: 'Видеоигра',
};
export const sourceScopeLabels: Record<DiseaseSourceReference['scope'], string> = {
    name: 'Название болезни', lore: 'Лор / упоминание', creature: 'Существо / способность', spell: 'Заклинание', rules: 'Правила / термин',
};
/** Preserve existing core abbreviations. Other words contribute one initial;
 * articles, conjunctions and prepositions (as in "of") use lowercase initials.
 * Edition is a separate field. Ampersand means "and"; issue numbers stay separate. */
export function diseaseBookCode(title: string): string {
    const handbook = /^Player['’]s Handbook(?: (\d+))?$/.exec(title);
    if (handbook) return 'PHB' + (handbook[1] || '');
    const small = new Set(['a','an','the','and','or','nor','but','for','so','yet','as','at','by','from','in','into','of','on','onto','over','to','with','without','versus','vs']);
    const words: string[] = title.replaceAll('&', ' and ').match(/[\p{L}]+(?:['’][\p{L}]+)*|\d+/gu) || [];
    return words.map(word => /^\d+$|^[IVX]+$/.test(word) ? word : small.has(word.toLowerCase()) ? word[0].toLowerCase() : word[0].toUpperCase()).join('');
}
export function diseaseSourceBook(id: string): DiseaseSourceBook | undefined { return booksById.get(id); }
export function diseaseSourceBookLabel(book: DiseaseSourceBook): string {
    return `${book.code}${book.issue ? ` №${book.issue}` : ''} · ${book.edition} — ${book.title}`;
}
export function diseaseSourcesSearchText(entry: DiseaseEntry): string {
    return entry.sourceIndex.references.map(ref => {
        const book = booksById.get(ref.bookId);
        return book ? `${book.title} ${book.code} ${book.code}${book.issue || ''} ${book.edition} ${ref.locator || ''} ${sourceScopeLabels[ref.scope]}` : '';
    }).join(' ');
}
export function diseaseSourceSummary(entry: DiseaseEntry): string {
    const labels = entry.sourceIndex.references.map(ref => {
        const book = booksById.get(ref.bookId);
        return book ? `${book.code}${book.issue ? ` ${book.issue}` : ''}${ref.status === 'candidate' ? '?' : ''} · ${book.edition}` : '';
    }).filter(Boolean);
    return [...new Set(labels)].slice(0, 2).join(' / ') || sourceStatusLabels.unresolved;
}
/** Book, edition and confidence must describe the same reference. */
export function matchesDiseaseSource(entry: DiseaseEntry, filters: { book: string; edition: string; status: string }): boolean {
    const refs = entry.sourceIndex.references;
    if (!refs.length)
        return filters.book === 'all' && filters.edition === 'all' && (filters.status === 'all' || filters.status === 'unresolved');
    return refs.some(ref => (filters.book === 'all' || ref.bookId === filters.book) &&
        (filters.edition === 'all' || diseaseSourceBook(ref.bookId)?.edition === filters.edition) &&
        (filters.status === 'all' || ref.status === filters.status));
}

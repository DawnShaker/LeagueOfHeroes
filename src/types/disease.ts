export type MaterialKind = 'disease' | 'curse' | 'parasite' | 'affliction' | 'generator' | 'track' | 'event' | 'template';
export type ProgressionMode = 'manual' | 'stages' | 'successes' | 'failures' | 'scale' | 'timer';
export type CheckTrigger = 'manual' | 'interval' | 'rest';
export interface DiseaseMechanics {
    mode: ProgressionMode;
    trigger: CheckTrigger;
    intervalMinutes: number | null;
    dc: number | null;
    target: number;
    failureHpDice: string | null;
    effectIntervalMinutes: number | null;
    effectDice: string | null;
    effectLabel: string;
}
export interface DiseaseEntry {
    id: string;
    index: number;
    name: string;
    nameRu: string;
    aliases: string[];
    family: string;
    sourceGroup: string;
    infection: string;
    incubation: string;
    effects: string;
    progression: string;
    treatment: string;
    status: string;
    kind: MaterialKind;
    transmissionTags: string[];
    impactTags: string[];
    progressionTags: string[];
    treatmentTags: string[];
    pace: string;
    infectionDc: number | null;
    relatedIds: string[];
    readiness: 'prepared' | 'review';
    questions: string[];
    mechanics: DiseaseMechanics;
    sourceIndex: DiseaseSourceIndex;
}
export type DiseaseSourceStatus = 'confirmed' | 'bibliography' | 'candidate' | 'unresolved';
export interface DiseaseSourceBook {
    id: string;
    title: string;
    code: string;
    edition: string;
    kind: 'book' | 'magazine' | 'article' | 'novel' | 'game';
    issue?: string;
}
export interface DiseaseSourceReference {
    bookId: string;
    status: Exclude<DiseaseSourceStatus, 'unresolved'>;
    scope: 'name' | 'lore' | 'creature' | 'spell' | 'rules';
    locator: string | null;
    evidenceUrl: string;
    note: string;
}
export interface DiseaseSourceIndex {
    status: DiseaseSourceStatus;
    references: DiseaseSourceReference[];
    note: string;
    checkedOn: string;
}
export interface LocalDiseaseCharacter {
    id: string;
    name: string;
    notes: string;
}
export type CasePhase = 'incubation' | 'active' | 'recovered' | 'closed' | 'exposure';
export interface CaseState {
    mechanics: DiseaseMechanics;
    onsetAt: number;
    phase: CasePhase;
    stage: number;
    successes: number;
    failures: number;
    scale: number;
    damage: number;
    hpLoss: number;
    exhaustion: number;
    nextCheckAt: number | null;
    nextEffectAt: number | null;
    lastRestAt: number | null;
    pendingRestAt: number | null;
}
export interface DiseaseCaseEvent {
    id: string;
    at: number;
    kind: string;
    text: string;
    before: CaseState | null;
}
export interface LocalDiseaseCase extends CaseState {
    id: string;
    characterId: string;
    diseaseId: string;
    snapshot: {
        name: string;
        nameEn: string;
        infection: string;
        effects: string;
        progression: string;
        treatment: string;
        version: string;
    };
    exposedAt: number;
    visibility: 'hidden' | 'symptoms' | 'diagnosis';
    contagious: 'unknown' | 'yes' | 'no';
    notes: string;
    events: DiseaseCaseEvent[];
}
export interface DiseaseWorkspaceStore {
    schemaVersion: 1;
    revision: number;
    title: string;
    minute: number;
    characters: LocalDiseaseCharacter[];
    cases: LocalDiseaseCase[];
    favorites: string[];
}
export interface DueDiseaseEvent {
    caseId: string;
    kind: 'onset' | 'check' | 'effect' | 'timer' | 'rest';
    at: number;
    label: string;
}

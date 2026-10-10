import type { TableEntry } from './equipment';

export interface PirateClass {
	id: number;
	name: string;
	page: number;
	forbidsRituals?: boolean;
	modifiers: Partial<Record<string, number>>;
	hpDie: number;
	devilLuck: string;
	weapon?: string;
	weaponTable?: TableEntry[];
	specialityTable?: TableEntry[];
	hasMusket?: boolean;
	abilityTable?: TableEntry[];
	styleTable?: TableEntry[];
	prayerTable?: TableEntry[];
	spellTable?: TableEntry[];
	tormentTable?: TableEntry[];
	tallTaleTable?: TableEntry[];
}

export const classes: PirateClass[] = [
	{
		id: 1, name: 'Bruto', page: 30, forbidsRituals: true,
		modifiers: { FORZA: 1, VIGORE: 1, PRESENZA: -1, SPIRITO: -1 },
		hpDie: 12, devilLuck: 'd2',
		weaponTable: [
			{ min: 1, max: 1, result: "Ancora d'Ottone, d8" },
			{ min: 2, max: 2, result: 'Arpione da Baleniere, d8' },
			{ min: 3, max: 3, result: 'Mannaia, d4' },
			{ min: 4, max: 4, result: 'Pezzo di Albero Maestro, d8' },
			{ min: 5, max: 5, result: 'Machete Runico, d6' },
			{ min: 6, max: 6, result: 'Rete da Carico Marcia' },
		],
	},
	{
		id: 2, name: 'Filibustiere', page: 32,
		modifiers: { AGILITÀ: 2, FORZA: -1, VIGORE: -1 },
		hpDie: 8, devilLuck: 'd2',
		specialityTable: [
			{ min: 1, max: 1, result: 'Doppiogiochista' },
			{ min: 2, max: 2, result: 'Ladruncolo' },
			{ min: 3, max: 3, result: 'Saltimbanco' },
			{ min: 4, max: 4, result: 'Viscido Bastardo' },
			{ min: 5, max: 5, result: 'Culo del Diavolo' },
			{ min: 6, max: 6, result: 'Distillatore' },
		],
	},
	{
		id: 3, name: 'Bucaniere', page: 34,
		modifiers: { PRESENZA: 2, AGILITÀ: -1, SPIRITO: -1 },
		hpDie: 8, devilLuck: 'd2', hasMusket: true,
		abilityTable: [
			{ min: 1, max: 1, result: 'Cacciatore di Tesori' },
			{ min: 2, max: 2, result: 'Tiratore Scelto' },
			{ min: 3, max: 3, result: 'Baionette!' },
			{ min: 4, max: 4, result: 'Mira Precisa' },
			{ min: 5, max: 5, result: 'Cuoco Bucaniere' },
			{ min: 6, max: 6, result: 'Survivalista' },
		],
	},
	{
		id: 4, name: 'Spaccone', page: 36,
		modifiers: { FORZA: 1, AGILITÀ: 1, PRESENZA: -1, SPIRITO: -1 },
		hpDie: 10, devilLuck: 'd2',
		styleTable: [
			{ min: 1, max: 1, result: 'Schermidore Esibizionista' },
			{ min: 2, max: 2, result: 'Grilletto Facile' },
			{ min: 3, max: 3, result: 'Vile Marrano' },
			{ min: 4, max: 4, result: 'Condottiero' },
			{ min: 5, max: 5, result: 'Chirurgo dei Coltelli' },
			{ min: 6, max: 6, result: 'Poeta della Polvere Nera' },
		],
	},
	{
		id: 5, name: 'Zelota', page: 38,
		modifiers: { SPIRITO: 2, AGILITÀ: -1, VIGORE: -1 },
		hpDie: 8, devilLuck: 'd4',
		prayerTable: [
			{ min: 1, max: 1, result: 'Guarigione' },
			{ min: 2, max: 2, result: 'Maledizione' },
			{ min: 3, max: 3, result: 'Scacciamorte' },
			{ min: 4, max: 4, result: 'Controllare Clima' },
			{ min: 5, max: 5, result: 'Guida Benedetta' },
			{ min: 6, max: 6, result: 'Sacra Protezione' },
			{ min: 7, max: 7, result: 'Luce Divina' },
			{ min: 8, max: 8, result: 'Silenzio' },
			{ min: 9, max: 9, result: 'Santuario' },
			{ min: 10, max: 10, result: 'Comunione' },
		],
	},
	{
		id: 6, name: 'Stregone', page: 40,
		modifiers: { SPIRITO: 2, FORZA: -1, VIGORE: -1 },
		hpDie: 8, devilLuck: 'd4',
		weapon: 'Coltello di legno d4 o caviglia d4',
		spellTable: [
			{ min: 1, max: 1, result: 'Testa di Morto' },
			{ min: 2, max: 2, result: 'Possessione Spirituale' },
			{ min: 3, max: 3, result: 'Protezione' },
			{ min: 4, max: 4, result: 'Chiaroveggenza' },
			{ min: 5, max: 5, result: 'Necro-Sonno' },
			{ min: 6, max: 6, result: 'Risvegliare i Morti' },
		],
	},
	{
		id: 7, name: 'Anima Tormentata', page: 42,
		modifiers: {}, hpDie: 8, devilLuck: 'd4',
		tormentTable: [
			{ min: 1, max: 1, result: 'Fantasma — Apparizione: spirito vd14, d12' },
			{ min: 2, max: 2, result: 'Medium — Ricevi un Rituale a caso ogni mattina' },
			{ min: 3, max: 3, result: 'Mente Abissale — Puoi cedere al panico in battaglia' },
			{ min: 4, max: 4, result: 'Zombi — Devi divorare carne ogni giorno. Cervello = buono.' },
			{ min: 5, max: 5, result: 'Vampiro — Devi bere sangue per curarti.' },
			{ min: 6, max: 6, result: 'Scheletro — Puoi ricomporti quando vieni ucciso.' },
		],
	},
	{
		id: 8, name: 'Frottola da Marinaio', page: 44,
		modifiers: {}, hpDie: 8, devilLuck: 'd6',
		tallTaleTable: [
			{
				min: 1, max: 2,
				result: 'Tritone — Branchie; -4VD sott\'acqua; devi immergerti in acqua di mare.',
				subTable: 'classi_aggiuntive',
			},
			{ min: 3, max: 4, result: 'Mutante Acquatico', subTable: 'mutanti_acquatici' },
			{
				min: 5, max: 5,
				result: 'Perfido Pollo — FORZA -2, AGILITÀ -2, PRESENZA -2, VIGORE -2, SPIRITO +3, PF d4, Becco d2, Fortuna d4'
			},
			{ min: 6, max: 6, result: 'Animale Senziente' },
		],
	},
];

/** Classi di base: le prime 6. Le successive sono opzionali. */
const BASE_CLASS_COUNT = 6;

/** Tabella delle classi tirate: 6 di base, oppure tutte se le opzionali sono incluse. */
export function buildClassTable(includeOptional: boolean): TableEntry[] {
	const list = includeOptional ? classes : classes.slice(0, BASE_CLASS_COUNT);
	return list.map((c, i) => ({ min: i + 1, max: i + 1, result: c.name }));
}

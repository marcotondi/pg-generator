import { roll, rollOnEntries, rollDiceExpression, rollStats, type StatRoll } from './roll';
import { registerAllTables } from './tables';
import { classes, buildClassTable, type PirateClass } from '../data/classes';
import { backgroundTable, type BackgroundEntry } from '../data/background';

export type { StatRoll };

export interface ClassTrait {
	label: string;
	value: string;
}

export interface PirateBackground {
	profession: string;
	silver: string;
	tie: string;
	distinctiveFlaw: string;
	physicalPeculiarity: string;
	idiosyncrasy: string;
	misfortunes: string;
	preciousThings: string;
}

export interface PirateCharacter {
	name: string;
	container: string;
	economicItem: string;
	luxuryItem: string;
	weapons: string[];
	clothes: string;
	hat: string;
	attributes: StatRoll[];
	classId: number | null;
	classData: PirateClass | null;
	classTrait?: ClassTrait;
	hp: number;
	hpMax: number;
	devilLuck: number;
	devilLuckMax: number;
	background: PirateBackground;
}

export interface GenerateOptions {
	optionalClasses?: boolean;
}

let registered = false;
function ensureTables(): void {
	if (!registered) {
		registerAllTables();
		registered = true;
	}
}

function rollDie(sides: number): number {
	return Math.floor(Math.random() * sides) + 1;
}

function formatRoll(tableId: string): string {
	const r = roll(tableId);
	return r.subrolls.length ? `${r.result}: ${r.subrolls.map((x) => x.result).join(', ')}` : r.result;
}

/** Il Background è una sola riga d100: professione, dadi argento e oggetto. */
function rollBackground(): BackgroundEntry {
	const value = Math.floor(Math.random() * 100) + 1;
	return (
		backgroundTable.find((e) => value >= e.min && value <= e.max) ?? backgroundTable[0]
	);
}

type TraitKey =
	| 'specialityTable'
	| 'abilityTable'
	| 'styleTable'
	| 'prayerTable'
	| 'spellTable'
	| 'tormentTable'
	| 'tallTaleTable';

const TRAIT_TABLES: { key: TraitKey; label: string }[] = [
	{ key: 'specialityTable', label: 'Specialità' },
	{ key: 'abilityTable', label: 'Abilità' },
	{ key: 'styleTable', label: 'Stile' },
	{ key: 'prayerTable', label: 'Preghiera' },
	{ key: 'spellTable', label: 'Incantesimo' },
	{ key: 'tormentTable', label: 'Tormento' },
	{ key: 'tallTaleTable', label: 'Frottola' }
];

function describe(result: { result: string; subrolls: { result: string }[] }): string {
	return result.subrolls.length
		? `${result.result}: ${result.subrolls.map((s) => s.result).join(', ')}`
		: result.result;
}

/** Tratto di classe: la prima tabella di tratto presente sulla classe. */
function rollClassTrait(cls: PirateClass): ClassTrait | undefined {
	for (const { key, label } of TRAIT_TABLES) {
		const table = cls[key];
		if (Array.isArray(table) && table.length > 0) {
			return { label, value: describe(rollOnEntries(table)) };
		}
	}
	return undefined;
}

/** Arma a cascata: tabella di classe → arma fissa → tabella armi. */
function rollWeapons(cls: PirateClass | null): string[] {
	const weapons: string[] = [];
	if (cls?.weaponTable?.length) {
		weapons.push(describe(rollOnEntries(cls.weaponTable)));
	} else if (cls?.weapon) {
		weapons.push(cls.weapon);
	} else {
		weapons.push(formatRoll('weapons'));
	}
	if (cls?.hasMusket) {
		weapons.push('Moschetto (2d6, ricarica 2 azioni, gittata 45m)');
	}
	return weapons;
}

export function generatePirate(options: GenerateOptions = {}): PirateCharacter {
	ensureTables();
	const includeOptional = options.optionalClasses ?? false;

	// 1. Abilità: 3d6 → solo modificatore.
	const attributes = rollStats();

	// 2. Classe: 6 di base, oppure 8 con le opzionali.
	const classRoll = rollOnEntries(buildClassTable(includeOptional));
	const idx = classes.findIndex((c) => c.name === classRoll.result);
	const cls: PirateClass | null = idx >= 0 ? classes[idx] : null;

	// 3. I modificatori di classe si sommano dopo il tiro.
	if (cls) {
		for (const attr of attributes) {
			attr.mod += cls.modifiers[attr.name] ?? 0;
		}
	}

	// 4. Derivati: PF e Fortuna del Diavolo.
	let hp = 0;
	let hpMax = 0;
	let devilLuck = 0;
	let devilLuckMax = 0;
	if (cls) {
		const vigoreMod = attributes.find((a) => a.name === 'VIGORE')?.mod ?? 0;
		hpMax = Math.max(1, rollDie(cls.hpDie) + vigoreMod);
		hp = hpMax;
		const dlMatch = cls.devilLuck.match(/d(\d+)/);
		const dlDie = dlMatch ? parseInt(dlMatch[1]) : 2;
		devilLuckMax = rollDie(dlDie);
		devilLuck = devilLuckMax;
	}

	// 5. Background e dettagli.
	const bg = rollBackground();
	const silver = rollDiceExpression(bg.silver);
	const background: PirateBackground = {
		profession: bg.profession,
		silver: `${silver} monete d'argento (${bg.silver})`,
		tie: bg.item,
		distinctiveFlaw: formatRoll('distinctiveFlaw'),
		physicalPeculiarity: formatRoll('physicalPeculiarity'),
		idiosyncrasy: formatRoll('idiosyncrasy'),
		misfortunes: formatRoll('misfortunes'),
		preciousThings: formatRoll('preciousThings')
	};

	return {
		name: formatRoll('names'),
		container: formatRoll('container'),
		economicItem: formatRoll('commonItems'),
		luxuryItem: formatRoll('luxuryItems'),
		weapons: rollWeapons(cls),
		clothes: formatRoll('clothes'),
		hat: formatRoll('hats'),
		attributes,
		classId: idx >= 0 ? idx : null,
		classData: cls,
		classTrait: cls ? rollClassTrait(cls) : undefined,
		hp,
		hpMax,
		devilLuck,
		devilLuckMax,
		background
	};
}

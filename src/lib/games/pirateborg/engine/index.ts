import { roll, rollStats, type StatRoll } from './roll';
import { registerAllTables } from './tables';
import { classes, type PirateClass } from '../data/classes';

export type { StatRoll };

export interface PirateCharacter {
	name: string;
	container: string;
	commonItems: string[];
	luxuryItems: string[];
	attributes: StatRoll[];
	classId: number | null;
	classData: PirateClass | null;
	weapon: string;
	clothes: string;
	hat: string;
	background: string;
	piecesOfEight: string;
	distinctiveFlaw: string;
	physicalPeculiarity: string;
	idiosyncrasy: string;
	misfortunes: string;
	preciousThings: string;
	hp: number;
	hpMax: number;
	devilLuck: number;
	devilLuckMax: number;
}

const NAMES = [
	'Jack "Squalo" Blood', 'Anne Bonny', 'Calico Jack', 'Blackbeard',
	'Long John Silver', "Grace O'Malley", 'Henry Morgan', 'Barbanera Jr.',
	'Molly Reef', "Davy Jones' Heir", 'Capitano Uncino', 'Flint',
	'Silverhand', 'Redbeard', 'One-Eyed Willie',
];

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
	return r.subrolls.length
		? `${r.result}: ${r.subrolls.map((x) => x.result).join(', ')}`
		: r.result;
}

export function generatePirate(): PirateCharacter {
	ensureTables();

	const name = NAMES[Math.floor(Math.random() * NAMES.length)];
	const container = formatRoll('container');
	const commonItems: string[] = [];
	for (let i = 0; i < 2; i++) commonItems.push(formatRoll('commonItems'));
	const luxuryItems = [formatRoll('luxuryItems')];
	const attributes = rollStats();

	const cr = roll('classi');
	const idx = classes.findIndex((c) => c.name === cr.result);
	let classId: number | null = null;
	let classData: PirateClass | null = null;
	let hp = 0;
	let hpMax = 0;
	let devilLuck = 0;
	let devilLuckMax = 0;

	if (idx >= 0) {
		const cls = classes[idx];
		classId = idx;
		classData = cls;
		const vigoreMod = attributes.find((a) => a.name === 'VIGORE')?.mod ?? 0;
		hpMax = Math.max(1, rollDie(cls.hpDie)) + vigoreMod;
		hp = hpMax;
		const dlMatch = cls.devilLuck.match(/d(\d+)/);
		const dlDie = dlMatch ? parseInt(dlMatch[1]) : 2;
		devilLuckMax = rollDie(dlDie);
		devilLuck = devilLuckMax;
	}

	return {
		name,
		container,
		commonItems,
		luxuryItems,
		attributes,
		classId,
		classData,
		weapon: formatRoll('weapons'),
		clothes: formatRoll('clothes'),
		hat: formatRoll('hats'),
		background: formatRoll('background'),
		piecesOfEight: formatRoll('piecesOfEight'),
		distinctiveFlaw: formatRoll('distinctiveFlaw'),
		physicalPeculiarity: formatRoll('physicalPeculiarity'),
		idiosyncrasy: formatRoll('idiosyncrasy'),
		misfortunes: formatRoll('misfortunes'),
		preciousThings: formatRoll('preciousThings'),
		hp,
		hpMax,
		devilLuck,
		devilLuckMax
	};
}

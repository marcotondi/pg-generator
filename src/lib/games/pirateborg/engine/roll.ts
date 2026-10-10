import type { TableEntry } from '$lib/games/pirateborg/data/equipment';

export interface RollResult {
	value: number;
	result: string;
	subrolls: RollResult[];
}

export interface StatRoll {
	name: string;
	mod: number;
}

export const attributeNames = ['FORZA', 'AGILITÀ', 'PRESENZA', 'VIGORE', 'SPIRITO'];

export const modMap: Record<number, number> = {
	3: -3, 4: -3,
	5: -2, 6: -2,
	7: -1, 8: -1,
	9: 0, 10: 0, 11: 0, 12: 0,
	13: 1, 14: 1,
	15: 2, 16: 2,
	17: 3, 18: 3
};

const tables = new Map<string, TableEntry[]>();

export function registerTable(id: string, entries: TableEntry[]): void {
	tables.set(id, entries);
}

function rollDie(sides: number): number {
	return Math.floor(Math.random() * sides) + 1;
}

function findEntry(entries: TableEntry[], value: number): TableEntry | undefined {
	return entries.find((e) => value >= e.min && value <= e.max);
}

/** Il dado di una tabella è il massimo `max` tra le voci, non il primo. */
function tableSides(entries: TableEntry[]): number {
	return entries.reduce((max, e) => Math.max(max, e.max), 0);
}

/** Tira su una lista di voci (usata anche per le tabelle inline delle classi). */
export function rollOnEntries(entries: TableEntry[]): RollResult {
	if (entries.length === 0) return { value: 0, result: '—', subrolls: [] };

	const dieSides = tableSides(entries) || entries.length;
	const value = rollDie(dieSides);
	const entry = findEntry(entries, value);

	if (!entry) {
		return { value, result: '—', subrolls: [] };
	}

	const result: RollResult = { value, result: entry.result, subrolls: [] };
	if (entry.subTable) {
		result.subrolls = [roll(entry.subTable)];
	}
	return result;
}

export function roll(tableId: string): RollResult {
	const entries = tables.get(tableId);
	if (!entries) throw new Error(`Tabella non trovata: ${tableId}`);
	return rollOnEntries(entries);
}

export function rollMultiple(tableId: string, count: number): RollResult[] {
	const results: RollResult[] = [];
	for (let i = 0; i < count; i++) results.push(roll(tableId));
	return results;
}

/** Risolve un'espressione tipo "2d6 × 10", "3d4", "1d12 × 10". */
export function rollDiceExpression(expr: string): number {
	const match = expr.match(/(\d+)\s*d\s*(\d+)\s*(?:[x×*]\s*(\d+))?/i);
	if (!match) return 0;
	const count = parseInt(match[1]);
	const sides = parseInt(match[2]);
	const multiplier = match[3] ? parseInt(match[3]) : 1;
	let total = 0;
	for (let i = 0; i < count; i++) total += rollDie(sides);
	return total * multiplier;
}

/** Solo il modificatore: 3d6 secco → tabella, nessuno scarto di dadi. */
export function rollStats(): StatRoll[] {
	return attributeNames.map((name) => {
		const total = rollDie(6) + rollDie(6) + rollDie(6);
		return { name, mod: modMap[total] ?? 0 };
	});
}

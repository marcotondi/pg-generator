import type { TableEntry } from '$lib/games/pirateborg/data/equipment';

export interface RollResult {
	value: number;
	result: string;
	subrolls: RollResult[];
}

export interface StatRoll {
	name: string;
	value: number;
	raw3d6: number;
	mod: number;
}

const tables = new Map<string, TableEntry[]>();

export function registerTable(id: string, entries: TableEntry[]): void {
	tables.set(id, entries);
}

function rollDie(sides: number): number {
	return Math.floor(Math.random() * sides) + 1;
}

function findEntry(entries: TableEntry[], value: number): TableEntry | undefined {
	return entries.find(e => value >= e.min && value <= e.max);
}

export function roll(tableId: string): RollResult {
	const entries = tables.get(tableId);
	if (!entries) throw new Error(`Tabella non trovata: ${tableId}`);

	const dieSides = entries[0]?.max || entries.length;
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

export function rollMultiple(tableId: string, count: number): RollResult[] {
	const results: RollResult[] = [];
	for (let i = 0; i < count; i++) {
		results.push(roll(tableId));
	}
	return results;
}

export function rollStats(): StatRoll[] {
	const attrs = ['FORZA', 'AGILITÀ', 'PRESENZA', 'VIGORE', 'SPIRITO'];
	const modMap: Record<number, number> = {
		3: -3, 4: -3, 5: -2, 6: -2, 7: -1, 8: -1,
		9: 0, 10: 0, 11: 0, 12: 0,
		13: 1, 14: 1, 15: 2, 16: 2, 17: 3, 18: 3,
	};

	return attrs.map(name => {
		const rolls = [rollDie(6), rollDie(6), rollDie(6)];
		rolls.sort((a, b) => a - b);
		rolls.shift();
		const total = rolls[0] + rolls[1];
		const raw3d6 = rolls[0] + rolls[1] + rollDie(6);
		const mod = modMap[raw3d6] ?? 0;
		return { name, value: total, raw3d6, mod };
	});
}

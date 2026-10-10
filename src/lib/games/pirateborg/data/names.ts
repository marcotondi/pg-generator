import type { TableEntry } from './equipment';

/** Tabella dei nomi: segnaposto, da popolare con i nomi pirata definitivi. */
export const names: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	names.push({ min: i, max: i, result: `Nome #${i}` });
}

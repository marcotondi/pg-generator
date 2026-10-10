import type { TableEntry } from './equipment';

/**
 * Sotto-tabelle delle classi opzionali (Frottola da Marinaio).
 * Segnaposto: da popolare con i contenuti definitivi.
 */
export const classiAggiuntive: TableEntry[] = [];
for (let i = 1; i <= 6; i++) {
	classiAggiuntive.push({ min: i, max: i, result: `Classe aggiuntiva #${i}` });
}

export const mutantiAcquatici: TableEntry[] = [];
for (let i = 1; i <= 6; i++) {
	mutantiAcquatici.push({ min: i, max: i, result: `Mutazione acquatica #${i}` });
}

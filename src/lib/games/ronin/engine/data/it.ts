import itJson from './it.json';

const dict = itJson as unknown as Record<string, unknown>;

/**
 * Risolve una chiave del dizionario italiano. I dati sorgente di Rōnin erano
 * a chiavi: non c'è più i18n né lingua, solo questo dizionario.
 */
export function it(key: string): string {
	if (!key) return '';
	const value = key.split('.').reduce<unknown>((acc, k) => {
		if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[k];
		return undefined;
	}, dict);
	return typeof value === 'string' ? value : key;
}

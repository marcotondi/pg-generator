import type { TableEntry } from './equipment';

/**
 * Classi aggiuntive della classe opzionale "Frottola da Marinaio" (Tall Tale).
 * Tritone e Mutante ottengono anche una classe normale aggiuntiva (regola, non tabella).
 */
export const classiAggiuntive: TableEntry[] = [
	{
		min: 1,
		max: 2,
		result:
			'Tritone/Sirena — branchie e parte inferiore da pesce; -4 a tutte le RD sott\u2019acqua; tira una classe normale aggiuntiva'
	},
	{ min: 3, max: 4, result: 'Mutante Acquatico', subTable: 'mutanti_acquatici' },
	{ min: 5, max: 6, result: 'Animale Senziente', subTable: 'animali_senzienti' }
];

export const mutantiAcquatici: TableEntry[] = [
	{ min: 1, max: 1, result: 'Rana Pescatrice — vede al buio; morso d4' },
	{ min: 2, max: 2, result: 'Granchio — chela d6' },
	{ min: 3, max: 3, result: 'Medusa — tentacolo d2 + stordimento 1 round (portata 3 m)' },
	{ min: 4, max: 4, result: 'Polpo — tentacoli 2d4' },
	{ min: 5, max: 5, result: 'Tartaruga Marina — protezione armatura extra -d2' },
	{ min: 6, max: 6, result: 'Anguilla Elettrica — +1 Agilità; pelle elettrica d6' },
	{ min: 7, max: 7, result: 'Squalo — morso d8' },
	{ min: 8, max: 8, result: 'Il Grande Antico — impara 1 Rituale Arcano casuale' }
];

export const animaliSenzienti: TableEntry[] = [
	{ min: 1, max: 1, result: 'Gallina Maledetta' },
	{ min: 2, max: 2, result: 'Giaguaro' },
	{ min: 3, max: 3, result: 'Coccodrillo' },
	{ min: 4, max: 4, result: 'Topo di Sentina' },
	{ min: 5, max: 5, result: 'Pappagallo Fortunato' },
	{ min: 6, max: 6, result: 'Scimmia Astuta' }
];

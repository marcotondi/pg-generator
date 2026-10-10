export interface TableEntry {
	min: number;
	max: number;
	result: string;
	subTable?: string;
}

export const container: TableEntry[] = [
	{ min: 1, max: 1, result: 'Secchio (4 oggetti)' },
	{ min: 2, max: 2, result: 'Bandoliera (6 oggetti piccoli)' },
	{ min: 3, max: 3, result: 'Bisaccia (8 oggetti)' },
	{ min: 4, max: 4, result: 'Zaino (10 oggetti)' },
	{ min: 5, max: 5, result: 'Baule da marinaio (20 oggetti)' },
	{ min: 6, max: 6, result: 'Scialuppa (pag. 80)' },
];

export const commonItems: TableEntry[] = [
	{ min: 1, max: 1, result: "Lanterna (d6 ore di olio)" },
	{ min: 2, max: 2, result: "d4 candele (1 ora l'una)" },
	{ min: 3, max: 3, result: '9m di corda' },
	{ min: 4, max: 4, result: 'Pala' },
	{ min: 5, max: 5, result: 'Kit medico' },
	{ min: 6, max: 6, result: 'Dado truccato' },
	{ min: 7, max: 7, result: 'Esca e acciarino' },
	{ min: 8, max: 8, result: 'Chiodi e martello' },
	{ min: 9, max: 9, result: 'Gavetta' },
	{ min: 10, max: 10, result: 'Pipa e borsa di tabacco' },
	{ min: 11, max: 11, result: "d6 torce (1 ora l'una)" },
	{ min: 12, max: 12, result: 'Animale', subTable: 'animali' },
];

export const luxuryItems: TableEntry[] = [
	{ min: 1, max: 1, result: 'Bussola' },
	{ min: 2, max: 2, result: 'Cannocchiale' },
	{ min: 3, max: 3, result: 'Canna da pesca' },
	{ min: 4, max: 4, result: 'Antico cimelio a caso (pag. 62)' },
	{ min: 5, max: 5, result: 'Bottiglia di ottimo rum' },
	{ min: 6, max: 6, result: 'Vecchio orologio da tasca' },
	{ min: 7, max: 7, result: 'Coperta e cuscino' },
	{ min: 8, max: 8, result: 'Penna, inchiostro, pergamena' },
	{ min: 9, max: 9, result: 'Libro malconcio' },
	{ min: 10, max: 10, result: 'Tenda' },
	{ min: 11, max: 11, result: 'Cote' },
	{ min: 12, max: 12, result: 'Strumento musicale', subTable: 'strumenti' },
];

export const animals: TableEntry[] = [
	{ min: 1, max: 1, result: 'Serpente' },
	{ min: 2, max: 2, result: 'Ratto' },
	{ min: 3, max: 3, result: 'Lucertola' },
	{ min: 4, max: 4, result: 'Scimmia' },
	{ min: 5, max: 5, result: 'Pappagallo' },
	{ min: 6, max: 6, result: 'Gatto' },
	{ min: 7, max: 7, result: 'Cane' },
	{ min: 8, max: 8, result: 'Falco' },
	{ min: 9, max: 9, result: 'Paguro' },
	{ min: 10, max: 10, result: 'Pesce in un barattolo' },
];

export const musicalInstruments: TableEntry[] = [
	{ min: 1, max: 1, result: 'Concertina' },
	{ min: 2, max: 2, result: 'Tamburo' },
	{ min: 3, max: 3, result: 'Flauto' },
	{ min: 4, max: 4, result: 'Violino' },
	{ min: 5, max: 5, result: 'Banjo' },
	{ min: 6, max: 6, result: 'Corno' },
	{ min: 7, max: 7, result: 'Ghironda' },
	{ min: 8, max: 8, result: 'Chitarra' },
	{ min: 9, max: 9, result: 'Mandolino' },
	{ min: 10, max: 10, result: 'Voce angelica' },
];

export interface TableEntry {
	min: number;
	max: number;
	result: string;
	subTable?: string;
}

export const container: TableEntry[] = [
	{ min: 1, max: 1, result: 'Secchio (fino a 4 oggetti normali)' },
	{ min: 2, max: 2, result: 'Bandoliera (fino a 6 oggetti piccoli)' },
	{ min: 3, max: 3, result: 'Bisaccia (fino a 8 oggetti normali)' },
	{ min: 4, max: 4, result: 'Zaino (fino a 10 oggetti normali)' },
	{ min: 5, max: 5, result: 'Grande baule da marinaio (fino a 20 oggetti, o un contenitore precedente)' },
	{ min: 6, max: 6, result: 'Scialuppa (piccola imbarcazione a remi, o un contenitore precedente)' }
];

export const commonItems: TableEntry[] = [
	{ min: 1, max: 1, result: 'Lanterna (olio per d6 ore di luce)' },
	{ min: 2, max: 2, result: 'd4 candele (1 ora ciascuna)' },
	{ min: 3, max: 3, result: 'Corda (9 m di canapa)' },
	{ min: 4, max: 4, result: 'Pala' },
	{
		min: 5,
		max: 5,
		result: 'Kit medico (ferma sanguinamento, veleno o infezione; cura d6 PV; Presenza + 4 usi)'
	},
	{ min: 6, max: 6, result: 'Dadi truccati' },
	{ min: 7, max: 7, result: 'Acciarino e pietra focaia' },
	{ min: 8, max: 8, result: 'Martello e chiodi' },
	{ min: 9, max: 9, result: 'Gavetta' },
	{ min: 10, max: 10, result: 'Pipa e scarsella da tabacco' },
	{ min: 11, max: 11, result: 'd6 torce (1 ora ciascuna)' },
	{ min: 12, max: 12, result: 'Animale domestico', subTable: 'animali' }
];

export const luxuryItems: TableEntry[] = [
	{ min: 1, max: 1, result: 'Bussola' },
	{ min: 2, max: 2, result: 'Cannocchiale' },
	{ min: 3, max: 3, result: 'Canna da pesca' },
	{ min: 4, max: 4, result: 'Antica reliquia', subTable: 'reliquie' },
	{ min: 5, max: 5, result: 'Bottiglia di rum pregiato' },
	{ min: 6, max: 6, result: 'Vecchio orologio da taschino' },
	{ min: 7, max: 7, result: 'Coperta e cuscino' },
	{ min: 8, max: 8, result: 'Inchiostro, piuma e pergamena' },
	{ min: 9, max: 9, result: 'Libro consumato' },
	{ min: 10, max: 10, result: 'Tenda' },
	{ min: 11, max: 11, result: 'Pietra per affilare' },
	{ min: 12, max: 12, result: 'Strumento musicale', subTable: 'strumenti' }
];

export const animals: TableEntry[] = [
	{ min: 1, max: 1, result: 'Serpente' },
	{ min: 2, max: 2, result: 'Topo' },
	{ min: 3, max: 3, result: 'Lucertola' },
	{ min: 4, max: 4, result: 'Scimmia' },
	{ min: 5, max: 5, result: 'Pappagallo' },
	{ min: 6, max: 6, result: 'Gatto' },
	{ min: 7, max: 7, result: 'Cane' },
	{ min: 8, max: 8, result: 'Falco' },
	{ min: 9, max: 9, result: 'Paguro' },
	{ min: 10, max: 10, result: 'Pesce in un vaso di vetro' }
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
	{ min: 10, max: 10, result: "Voce d'Angelo" }
];

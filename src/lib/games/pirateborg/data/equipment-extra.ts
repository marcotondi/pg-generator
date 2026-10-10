import type { TableEntry } from './equipment';

export const weapons: TableEntry[] = [
	{ min: 1, max: 1, result: 'Punta marlin o caviglia (d4)' },
	{ min: 2, max: 2, result: 'Coltello o baionetta (d4)' },
	{ min: 3, max: 3, result: 'Spadino o machete (d4)' },
	{ min: 4, max: 4, result: 'Gatto a nove code (d4, portata 3m)' },
	{ min: 5, max: 5, result: "Ascia d'abbordaggio (d6)" },
	{ min: 6, max: 6, result: 'Sciabolaccia (d6)' },
	{ min: 7, max: 7, result: 'Pistola a pietra focaia (2d4, ricarica 2 azioni, gittata 9m)' },
	{ min: 8, max: 8, result: 'Stocco di qualità (d8)' },
	{ min: 9, max: 9, result: 'Mezza picca (d10, portata 3m)' },
	{ min: 10, max: 10, result: 'Moschetto (2d6, ricarica 2 azioni, gittata 45m)' },
];

export const clothes: TableEntry[] = [
	{ min: 1, max: 2, result: 'Stracci' },
	{ min: 3, max: 4, result: 'Abiti comuni' },
	{ min: 5, max: 5, result: 'Vecchia uniforme' },
	{ min: 6, max: 6, result: 'Abiti alla moda' },
	{ min: 7, max: 7, result: 'Armatura di cuoio (-d2)' },
	{ min: 8, max: 8, result: 'Armatura di pelle (-d2)' },
	{ min: 9, max: 9, result: 'Giaco di maglia (-d4, +2 VD alle prove di AGILITÀ e Difesa)' },
	{
		min: 10, max: 10,
		result: 'Corazza da conquistador (-d6, 4 VD alle prove di AGILITÀ e +2 VD a difesa; vai a fondo come un sasso)'
	},
];

export const hats: TableEntry[] = [
	{ min: 1, max: 4, result: 'Nulla' },
	{ min: 5, max: 5, result: 'Parrucca' },
	{ min: 6, max: 6, result: 'Bandana' },
	{ min: 7, max: 7, result: 'Vallone' },
	{ min: 8, max: 8, result: 'Bicorno' },
	{ min: 9, max: 9, result: 'Tricorno semplice' },
	{ min: 10, max: 10, result: 'Tricorno alla moda' },
	{ min: 11, max: 11, result: 'Cappello rinforzato (-1 danno)' },
	{
		min: 12, max: 12,
		result: 'Morione (-1 danno. Rottura: ignora tutto il danno di un attacco.)'
	},
];

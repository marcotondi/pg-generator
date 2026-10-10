import type { TableEntry } from './equipment';

export const weapons: TableEntry[] = [
	{ min: 1, max: 1, result: 'Punteruolo da marinaio o caviglia di fissaggio (d4)' },
	{ min: 2, max: 2, result: 'Coltello o baionetta (d4)' },
	{ min: 3, max: 3, result: 'Spadino o machete (d4)' },
	{ min: 4, max: 4, result: "Gatto a nove code (d4, portata 3 m)" },
	{ min: 5, max: 5, result: "Ascia d'arrembaggio (d6)" },
	{ min: 6, max: 6, result: 'Sciabola da abbordaggio (d6)' },
	{
		min: 7,
		max: 7,
		result: 'Pistola a pietra focaia (2d4, ricarica 2 azioni, gittata 9 m, munizioni 10 + Presenza)'
	},
	{ min: 8, max: 8, result: 'Stocco di pregevole fattura (d8)' },
	{ min: 9, max: 9, result: "Picca d'arrembaggio (d10, 2 mani, portata 3 m)" },
	{
		min: 10,
		max: 10,
		result: 'Moschetto (2d6, ricarica 2 azioni, gittata 45 m, munizioni 10 + Presenza)'
	}
];

export const clothes: TableEntry[] = [
	{ min: 1, max: 2, result: 'Stracci (Grado 0)' },
	{ min: 3, max: 4, result: 'Abiti comuni (Grado 0)' },
	{ min: 5, max: 5, result: 'Vecchia uniforme (Grado 0)' },
	{ min: 6, max: 6, result: 'Abiti sfarzosi (Grado 0)' },
	{ min: 7, max: 7, result: 'Armatura di cuoio (Grado 1, -d2 danni subiti)' },
	{ min: 8, max: 8, result: 'Armatura di pelle (Grado 1, -d2 danni subiti)' },
	{
		min: 9,
		max: 9,
		result: 'Giaco di maglia (Grado 2, -d4 danni; +2 difficoltà alle prove di Agilità, difesa inclusa)'
	},
	{
		min: 10,
		max: 10,
		result:
			'Piastre da conquistador (Grado 3, -d6 danni; +4 difficoltà alle prove di Agilità, difesa +2; rischi di affondare in acqua)'
	}
];

export const hats: TableEntry[] = [
	{ min: 1, max: 4, result: 'Nessuno' },
	{ min: 5, max: 5, result: 'Parrucca' },
	{ min: 6, max: 6, result: 'Bandana' },
	{ min: 7, max: 7, result: 'Cappello da cavaliere (con piuma)' },
	{ min: 8, max: 8, result: 'Bicorno' },
	{ min: 9, max: 9, result: 'Tricorno semplice' },
	{ min: 10, max: 10, result: 'Tricorno sfarzoso' },
	{ min: 11, max: 11, result: 'Cappello rinforzato in metallo (-1 ai danni subiti)' },
	{
		min: 12,
		max: 12,
		result: 'Morione (-1 ai danni subiti; sacrificabile per ignorare tutti i danni di un attacco)'
	}
];

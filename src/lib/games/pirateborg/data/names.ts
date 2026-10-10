import type { TableEntry } from './equipment';

// Tabella rapida d12 su tre colonne: nome, secondo nome/cognome, soprannome.
export const firstNames: TableEntry[] = [
	{ min: 1, max: 1, result: 'Edmund' },
	{ min: 2, max: 2, result: 'Rogers' },
	{ min: 3, max: 3, result: 'Jack' },
	{ min: 4, max: 4, result: 'David' },
	{ min: 5, max: 5, result: 'Peter' },
	{ min: 6, max: 6, result: 'Angelica' },
	{ min: 7, max: 7, result: 'Samuel' },
	{ min: 8, max: 8, result: 'Morgan' },
	{ min: 9, max: 9, result: 'Diego' },
	{ min: 10, max: 10, result: 'Edward' },
	{ min: 11, max: 11, result: 'Isabella' },
	{ min: 12, max: 12, result: 'Charles' }
];

export const secondNames: TableEntry[] = [
	{ min: 1, max: 1, result: 'James' },
	{ min: 2, max: 2, result: 'Christopher' },
	{ min: 3, max: 3, result: 'Roberts' },
	{ min: 4, max: 4, result: 'Francois' },
	{ min: 5, max: 5, result: 'Juan' },
	{ min: 6, max: 6, result: 'Johnathan' },
	{ min: 7, max: 7, result: 'Butcher' },
	{ min: 8, max: 8, result: 'Old Ben' },
	{ min: 9, max: 9, result: 'William' },
	{ min: 10, max: 10, result: 'Louis' },
	{ min: 11, max: 11, result: 'Jean' },
	{ min: 12, max: 12, result: 'Stede' }
];

export const thirdNames: TableEntry[] = [
	{ min: 1, max: 1, result: 'Meathook' },
	{ min: 2, max: 2, result: 'Jose' },
	{ min: 3, max: 3, result: 'Fernando' },
	{ min: 4, max: 4, result: 'Henry' },
	{ min: 5, max: 5, result: 'Mary' },
	{ min: 6, max: 6, result: 'Anne' },
	{ min: 7, max: 7, result: 'Philip' },
	{ min: 8, max: 8, result: 'Scraggs' },
	{ min: 9, max: 9, result: 'Elizabeth' },
	{ min: 10, max: 10, result: 'Hector' },
	{ min: 11, max: 11, result: 'Genny' },
	{ min: 12, max: 12, result: 'Thomas' }
];

// Generatore d66: prefisso + soprannome.
export const nickPrefixes: TableEntry[] = [
	{ min: 1, max: 1, result: 'Red' },
	{ min: 2, max: 2, result: 'Crimson' },
	{ min: 3, max: 3, result: 'Black' },
	{ min: 4, max: 4, result: 'White' },
	{ min: 5, max: 5, result: 'Dark' },
	{ min: 6, max: 6, result: 'Devil' },
	{ min: 7, max: 7, result: 'Scurvy' },
	{ min: 8, max: 8, result: 'Bilge' },
	{ min: 9, max: 9, result: 'Shark' },
	{ min: 10, max: 10, result: 'Old' },
	{ min: 11, max: 11, result: 'Tall-Tale' },
	{ min: 12, max: 12, result: 'One-Eye' },
	{ min: 13, max: 13, result: 'One-Arm' },
	{ min: 14, max: 14, result: 'One-Leg' },
	{ min: 15, max: 15, result: 'Blue Water' },
	{ min: 16, max: 16, result: 'Skull' },
	{ min: 17, max: 17, result: 'Green' },
	{ min: 18, max: 18, result: 'Planktooth' }
];

export const nickSuffixes: TableEntry[] = [
	{ min: 1, max: 1, result: 'Blood' },
	{ min: 2, max: 2, result: 'Bones' },
	{ min: 3, max: 3, result: 'Heart' },
	{ min: 4, max: 4, result: 'Siren' },
	{ min: 5, max: 5, result: 'Sea Turtle' },
	{ min: 6, max: 6, result: 'Knife' },
	{ min: 7, max: 7, result: 'Claw' },
	{ min: 8, max: 8, result: 'Rat' },
	{ min: 9, max: 9, result: 'Skull' },
	{ min: 10, max: 10, result: 'King' },
	{ min: 11, max: 11, result: 'Queen' },
	{ min: 12, max: 12, result: 'Bride' },
	{ min: 13, max: 13, result: 'Groom' },
	{ min: 14, max: 14, result: 'Death' },
	{ min: 15, max: 15, result: 'Devil' }
];

import type { TableEntry } from './equipment';

// --- Segnaposto: in attesa dei valori definitivi ---

export const backgroundTable: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	backgroundTable.push({ min: i, max: i, result: `Professione #${i}` });
}

export const backgroundTie: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	backgroundTie.push({ min: i, max: i, result: `Legame #${i}` });
}

export const piecesOfEight: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	piecesOfEight.push({ min: i, max: i, result: `${i} Pezzi da Otto` });
}

export const preciousThings: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	preciousThings.push({ min: i, max: i, result: `Cosa preziosa #${i} (vedi regolamento pag. 52)` });
}

// --- Tabelle popolate ---

export const distinctiveFlaw: TableEntry[] = [
	{ min: 1, max: 1, result: 'Ubriacone perso' },
	{ min: 2, max: 2, result: 'Testardo' },
	{ min: 3, max: 3, result: 'Allegria sardonica' },
	{ min: 4, max: 4, result: 'Decisamente troppo rumoroso' },
	{ min: 5, max: 5, result: 'Stupido' },
	{ min: 6, max: 6, result: 'Codardo' },
	{ min: 7, max: 7, result: 'Arrogante' },
	{ min: 8, max: 8, result: 'Lievemente squilibrato' },
	{ min: 9, max: 9, result: 'Aggressivo' },
	{ min: 10, max: 10, result: 'Ansioso' },
	{ min: 11, max: 11, result: 'Imbroglione' },
	{ min: 12, max: 12, result: 'Egoista' },
	{ min: 13, max: 13, result: 'Pigro' },
	{ min: 14, max: 14, result: 'Edonista' },
	{ min: 15, max: 15, result: 'Impulsivo' },
	{ min: 16, max: 16, result: 'Ostentatore' },
	{ min: 17, max: 17, result: 'Paranoico' },
	{ min: 18, max: 18, result: 'Pretenzioso' },
	{ min: 19, max: 19, result: 'Sadico' },
	{ min: 20, max: 20, result: 'Sleale' }
];

export const physicalPeculiarity: TableEntry[] = [
	{ min: 1, max: 1, result: 'Maledetto (parte scheletro, spettro, acqua, fiamme o corallo)' },
	{ min: 2, max: 2, result: 'Orbo (manca un occhio)' },
	{ min: 3, max: 3, result: 'Capelli rasta o arruffati' },
	{ min: 4, max: 4, result: 'Gamba di legno o gruccia' },
	{ min: 5, max: 5, result: 'Uncino o chela' },
	{ min: 6, max: 6, result: 'Senza un orecchio' },
	{ min: 7, max: 7, result: 'Tatuatissimo' },
	{ min: 8, max: 8, result: 'Sguardo fisso (non sbatte mai le palpebre)' },
	{ min: 9, max: 9, result: 'Denti marci o spezzati' },
	{ min: 10, max: 10, result: 'Tic nervoso (specialmente il dito sul grilletto)' },
	{ min: 11, max: 11, result: 'Scorbuto grave (gengive sanguinanti)' },
	{ min: 12, max: 12, result: 'Infestato (parassiti e insetti)' },
	{ min: 13, max: 13, result: 'Cicatrice profonda sul viso' },
	{ min: 14, max: 14, result: 'Orrendamente brutto' },
	{ min: 15, max: 15, result: 'Corpulento (stazza imponente)' },
	{ min: 16, max: 16, result: 'In cancrena' },
	{ min: 17, max: 17, result: 'Puzza di sentina' },
	{ min: 18, max: 18, result: 'Contagioso (portatore di qualche piaga)' },
	{ min: 19, max: 19, result: 'Emaciato (magro e fragile)' },
	{ min: 20, max: 20, result: 'Troppo bello (scatena gelosia)' }
];

export const idiosyncrasy: TableEntry[] = [
	{ min: 1, max: 1, result: 'Fumi continuamente e tossisci ancora di più' },
	{ min: 2, max: 2, result: 'Alcolista "funzionante"' },
	{ min: 3, max: 3, result: 'Scommetti su qualsiasi cosa' },
	{ min: 4, max: 4, result: 'Conti continuamente le cose attorno a te' },
	{ min: 5, max: 5, result: 'I topi sono il tuo piatto preferito' },
	{ min: 6, max: 6, result: 'Conosci ogni leggenda marinaresca e pretendi che tutti lo sappiano' },
	{ min: 7, max: 7, result: 'Terrore superstizioso dei numeri primi maggiori di 3 (5, 7, 11, 13, 17 sul d20)' },
	{ min: 8, max: 8, result: 'Brontolone omicida quando hai fame' },
	{ min: 9, max: 9, result: 'Procrastinatore cronico' },
	{ min: 10, max: 10, result: 'Insonne volontario: dormire è per i morti' },
	{ min: 11, max: 11, result: 'Preferisci sparare prima e non fare domande' },
	{ min: 12, max: 12, result: 'Eccessivamente e fastidiosamente religioso' },
	{ min: 13, max: 13, result: 'Collezioni qualcosa e parli con la tua collezione' },
	{ min: 14, max: 14, result: 'Cerchi di ingannare i compagni solo per divertimento' },
	{ min: 15, max: 15, result: 'Perché comprare quando puoi rubare?' },
	{ min: 16, max: 16, result: 'Parli da solo quando sei solo' },
	{ min: 17, max: 17, result: 'Ti piace segretamente il sapore della carne umana' },
	{ min: 18, max: 18, result: 'Dici di "conoscere la strada" ma ti perdi continuamente' },
	{ min: 19, max: 19, result: 'Dai la colpa a chiunque tranne che a te stesso' },
	{ min: 20, max: 20, result: 'Estremamente ossessivo nei compiti e nelle relazioni' }
];

export const ammutinamento: TableEntry[] = [
	{ min: 1, max: 1, result: 'Ammutinato fallito' },
	{ min: 2, max: 2, result: 'Ammutinato con successo' }
];

export const misfortunes: TableEntry[] = [
	{ min: 1, max: 1, result: 'I tuoi cari sono stati bruciati vivi. La vendetta è il tuo unico scopo.' },
	{ min: 2, max: 2, result: 'Sei un pirata ricercato: ti aspetta il patibolo se vieni catturato.' },
	{ min: 3, max: 3, result: 'Hai tradito i tuoi ex compagni di ciurma e ora ti danno la caccia.' },
	{ min: 4, max: 4, result: "Abbandonato su un'isola deserta troppo a lungo: le voci nella tua testa sono reali." },
	{ min: 5, max: 5, result: 'Hai rubato una nave. Il proprietario vuole soldi o la tua testa.' },
	{ min: 6, max: 6, result: 'Sei fuggito dalla prigionia e non ci tornerai mai più vivo.' },
	{ min: 7, max: 7, result: 'Un parente stretto è diventato il tuo peggior nemico.' },
	{ min: 8, max: 8, result: 'Le ultime tre navi su cui hai prestato servizio sono tutte affondate.' },
	{ min: 9, max: 9, result: 'La tua vecchia ciurma è stata sterminata da non morti, lasciandoti vivo di proposito.' },
	{ min: 10, max: 10, result: 'Capi politici tengono in ostaggio le persone che ami.' },
	{ min: 11, max: 11, result: 'Uno spirito non morto che detesti ti possiede regolarmente.' },
	{ min: 12, max: 12, result: 'Hai fatto un torto grave a un famigerato Signore dei Pirati.' },
	{ min: 13, max: 13, result: 'Sei sfuggito per un pelo ai cannibali, ma quell\'odore non ti abbandonerà mai.' },
	{ min: 14, max: 14, result: 'Li hai massacrati tutti... come animali.' },
	{ min: 15, max: 15, result: 'Unico misterioso sopravvissuto di una spedizione al tesoro andata a monte.' },
	{ min: 16, max: 16, result: 'Ammutinato', subTable: 'ammutinamento' },
	{ min: 17, max: 17, result: 'Un fantasma silenzioso ti perseguita: è sempre lì, ma solo tu puoi vederlo.' },
	{ min: 18, max: 18, result: 'Hai disertato dalla marina militare, ma non sai chi lo sappia con certezza.' },
	{ min: 19, max: 19, result: 'Non hai alcun ricordo antecedente a pochi giorni fa.' },
	{ min: 20, max: 20, result: "Sei già morto una volta, ma l'Inferno ti ha sputato indietro." }
];

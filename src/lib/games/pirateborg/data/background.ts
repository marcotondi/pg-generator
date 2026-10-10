import type { TableEntry } from './equipment';

export const backgroundTable: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	backgroundTable.push({ min: i, max: i, result: `Background #${i} (vedi regolamento pag. 46)` });
}

export const piecesOfEight: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	piecesOfEight.push({ min: i, max: i, result: `${i} Pezzi da Otto` });
}

export const distinctiveFlaw: TableEntry[] = [
	{ min: 1, max: 1, result: 'Puzza come una sentina' },
	{ min: 2, max: 2, result: 'Mente una gamba' },
	{ min: 3, max: 3, result: 'Schiaffeggia la gente quando è eccitato' },
	{ min: 4, max: 4, result: 'Parla sempre in terza persona' },
	{ min: 5, max: 5, result: 'Non si fida della terraferma' },
	{ min: 6, max: 6, result: 'Colleziona denti' },
	{ min: 7, max: 7, result: 'Ha paura del buio' },
	{ min: 8, max: 8, result: 'Non sa nuotare' },
	{ min: 9, max: 9, result: 'Beve rum a colazione' },
	{ min: 10, max: 10, result: 'Parla con gli oggetti inanimati' },
	{ min: 11, max: 11, result: 'Deve contare tutto' },
	{ min: 12, max: 12, result: "Mai visto un'isola che non gli piaccia" },
	{ min: 13, max: 13, result: 'Lascia briciove ovunque' },
	{ min: 14, max: 14, result: 'Crede alle sirene (forse ha ragione)' },
	{ min: 15, max: 15, result: 'Rifiuta di togliersi il cappello' },
	{ min: 16, max: 16, result: 'Dorme con un occhio aperto' },
	{ min: 17, max: 17, result: 'Giura in modo creativo' },
	{ min: 18, max: 18, result: 'Ha un tesoro sepolto... da qualche parte' },
	{ min: 19, max: 19, result: 'Non conosce il suo vero nome' },
	{ min: 20, max: 20, result: 'Porta sfortuna (o così dice)' },
];

export const physicalPeculiarity: TableEntry[] = [
	{ min: 1, max: 1, result: 'Casco di vetro' },
	{ min: 2, max: 2, result: "Denti d'oro" },
	{ min: 3, max: 3, result: 'Occhio di vetro' },
	{ min: 4, max: 4, result: 'Gamba di legno' },
	{ min: 5, max: 5, result: 'Gancio al posto della mano' },
	{ min: 6, max: 6, result: 'Cicatrice sulla faccia' },
	{ min: 7, max: 7, result: 'Tatuaggi su tutto il corpo' },
	{ min: 8, max: 8, result: "Senza un orecchio" },
	{ min: 9, max: 9, result: 'Capelli colorati stranamente' },
	{ min: 10, max: 10, result: 'Sopracciglia unite' },
	{ min: 11, max: 11, result: 'Naso enorme' },
	{ min: 12, max: 12, result: 'Labbro leporino' },
	{ min: 13, max: 13, result: 'Dita palmate' },
	{ min: 14, max: 14, result: 'Segno di nascita misterioso' },
	{ min: 15, max: 15, result: 'Calvo ma con barba folta' },
	{ min: 16, max: 16, result: 'Bassa statura' },
	{ min: 17, max: 17, result: 'Gigantesco' },
	{ min: 18, max: 18, result: 'Zoppica leggermente' },
	{ min: 19, max: 19, result: 'Collo tatuato' },
	{ min: 20, max: 20, result: 'Senza denti' },
];

export const idiosyncrasy: TableEntry[] = [
	{ min: 1, max: 1, result: 'Fischietta sempre' },
	{ min: 2, max: 2, result: 'Non usa parole straniere' },
	{ min: 3, max: 3, result: 'Tocca il legno per fortuna' },
	{ min: 4, max: 4, result: 'Non si siede mai dando le spalle alla porta' },
	{ min: 5, max: 5, result: 'Mangia solo cibo che ha ucciso personalmente' },
	{ min: 6, max: 6, result: 'Bacia il suo medaglione prima di ogni pasto' },
	{ min: 7, max: 7, result: 'Conta i passi' },
	{ min: 8, max: 8, result: 'Non calpesta le crepe' },
	{ min: 9, max: 9, result: 'Raccoglie conchiglie' },
	{ min: 10, max: 10, result: 'Saluta ogni gabbiano' },
	{ min: 11, max: 11, result: 'Scrive poesie' },
	{ min: 12, max: 12, result: 'Parla da solo' },
	{ min: 13, max: 13, result: 'Deve sedersi in un posto specifico' },
	{ min: 14, max: 14, result: 'Non sopporta il formaggio' },
	{ min: 15, max: 15, result: 'Colleziona bottoni' },
	{ min: 16, max: 16, result: 'Accarezza sempre la sua arma' },
	{ min: 17, max: 17, result: 'Canta canzoni da lavoro' },
	{ min: 18, max: 18, result: 'Si spoglia prima di dormire ovunque' },
	{ min: 19, max: 19, result: 'Lancia monete per decisioni' },
	{ min: 20, max: 20, result: 'Non dice mai grazie' },
];

export const misfortunes: TableEntry[] = [
	{ min: 1, max: 1, result: "Nave affondata, sei l'unico superstite" },
	{ min: 2, max: 2, result: "Tradito dal primo ufficiale" },
	{ min: 3, max: 3, result: 'Maledetto da uno stregone' },
	{ min: 4, max: 4, result: 'Hai perso tutto al gioco' },
	{ min: 5, max: 5, result: 'Il tuo tesoro è stato rubato' },
	{ min: 6, max: 6, result: 'Sei stato venduto come schiavo' },
	{ min: 7, max: 7, result: 'Hai ucciso un uomo importante' },
	{ min: 8, max: 8, result: 'Hai una taglia sulla testa' },
	{ min: 9, max: 9, result: 'Hai perso un arto' },
	{ min: 10, max: 10, result: 'La tua ciurma si è ammutinata' },
	{ min: 11, max: 11, result: "Sei stato lasciato su un'isola deserta" },
	{ min: 12, max: 12, result: 'Hai contratto una malattia strana' },
	{ min: 13, max: 13, result: 'Il tuo vascello è stato requisito' },
	{ min: 14, max: 14, result: 'Hai un nemico giurato' },
	{ min: 15, max: 15, result: 'Hai perso la memoria' },
	{ min: 16, max: 16, result: 'Sei stato sbarcato in disgrazia' },
	{ min: 17, max: 17, result: 'Hai ucciso un ufficiale della corona' },
	{ min: 18, max: 18, result: 'I tuoi familiari sono stati uccisi' },
	{ min: 19, max: 19, result: 'Hai un debito con il diavolo' },
	{ min: 20, max: 20, result: 'Hai perso la tua anima in una scommessa' },
];

export const preciousThings: TableEntry[] = [];
for (let i = 1; i <= 100; i++) {
	preciousThings.push({ min: i, max: i, result: `Cosa preziosa #${i} (vedi regolamento pag. 52)` });
}

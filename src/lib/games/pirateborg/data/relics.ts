import type { TableEntry } from './equipment';

/**
 * Reliquie Antiche (d20). Attivazione: 1 azione; dopo l'uso, prova di Spirito RD12
 * (fallimento: stordito 1 round, inutilizzabile fino all'alba; 1 naturale: distrutta + d2 danni;
 * 20 naturale: effetto speciale a discrezione del GM).
 */
export const reliquie: TableEntry[] = [
	{ min: 1, max: 1, result: 'Croce del Paragone — un alleato ottiene +1 all\u2019attacco e +1 ai danni per d6 turni.' },
	{ min: 2, max: 2, result: 'Conchiglia dell\u2019Abisso — rivolgi una domanda a un cadavere vicino o a una creatura morta in mare entro 100 miglia.' },
	{ min: 3, max: 3, result: 'Mappa Inchiostrata in Ectoplasma — rileva trappole e porte segrete entro 9 m per d4 + Spirito round.' },
	{ min: 4, max: 4, result: 'Lanterna del Fuoco Fatuo — 4,5 m di luce intensa o di oscurità magica per d6 + Spirito round.' },
	{ min: 5, max: 5, result: 'Pagine del Necronomicon — le creature che odono la tua voce devono superare Spirito RD14 o subire d6 danni.' },
	{ min: 6, max: 6, result: 'Pistola a Pietra Focaia Incisa con Rune — una creatura a vista perde d6 + Spirito PV (ignora l\u2019armatura). Ricarica 1 azione.' },
	{ min: 7, max: 7, result: 'Dado di Giada — tira un dado: dispari, guadagni d8 PV temporanei; pari, una creatura ottiene +d8 al suo prossimo danno.' },
	{ min: 8, max: 8, result: 'Uccello Non-Morto — puoi parlare con gli animali (vivi o morti) per d6 + Spirito round.' },
	{ min: 9, max: 9, result: 'Scaglie di Sirena — mangia una scaglia per respirare sott\u2019acqua per d4 ore.' },
	{ min: 10, max: 10, result: 'Obolo di Caronte — se vieni ucciso, torni in vita il round successivo.' },
	{ min: 11, max: 11, result: 'Coppa del Falegname — una creatura recupera d6 + Spirito PV.' },
	{ min: 12, max: 12, result: 'Cuore del Mare — crea o distruggi ~57 litri d\u2019acqua o 30 piedi quadrati di nebbia densa.' },
	{ min: 13, max: 13, result: 'Collana di Occhi — invisibile per d6 + Spirito round (finché non attacchi o subisci danni). Attacchi e difendi a RD6.' },
	{ min: 14, max: 14, result: 'Corona del Signore Sommerso — scudo d\u2019acqua: -d2 ai danni per d2 + Spirito round (cumulabile con l\u2019armatura).' },
	{ min: 15, max: 15, result: 'Teschio di Cristallo — ascolta e ripete ad alta voce i pensieri delle creature vicine.' },
	{ min: 16, max: 16, result: 'Tavoletta del Codice — leggi qualsiasi lingua, glifo o runa per 1 + Spirito round.' },
	{ min: 17, max: 17, result: 'Chiave Scheletrica — apre qualsiasi serratura; si sgretola dopo 1 utilizzo.' },
	{ min: 18, max: 18, result: 'Testa di Scimmia Mummificata — 1 creatura deve superare Spirito RD12 o obbedire a un comando di una parola.' },
	{ min: 19, max: 19, result: 'Statuetta del Grande Antico — un umano è terrorizzato per d4 round salvo superare Presenza RD14 (ritenta ogni round).' },
	{ min: 20, max: 20, result: 'Bussola Rotta — punta verso un tesoro antico, una reliquia nascosta o un pericolo imminente.' }
];

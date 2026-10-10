import type { TableEntry } from './equipment';

export interface ClassTraitTable {
	label: string;
	entries: TableEntry[];
}

export interface PirateClass {
	id: number;
	name: string;
	forbidsRituals?: boolean;
	modifiers: Partial<Record<string, number>>;
	hpDie: number;
	devilLuck: string;
	weapon?: string;
	hasMusket?: boolean;
	trait?: ClassTraitTable;
}

export const classes: PirateClass[] = [
	{
		id: 1,
		name: 'Bruto',
		forbidsRituals: true,
		modifiers: { FORZA: 1, VIGORE: 1, PRESENZA: -1, SPIRITO: -1 },
		hpDie: 12,
		devilLuck: 'd2',
		trait: {
			label: 'Dono',
			entries: [
				{ min: 1, max: 1, result: "Dadi del Bugiardo — tira 5d6 a inizio combattimento: se pari, -2 RD in mischia ma +2 RD in difesa" },
				{ min: 2, max: 2, result: 'Bastone del Tuono — colubrina speciale (RD8, d10 a bruciapelo; RD12, d4 a distanza)' },
				{ min: 3, max: 3, result: 'Frenesia di Sangue — +2 ai danni per ogni nemico ucciso in questo combattimento' },
				{ min: 4, max: 4, result: 'Pugile da Taverna — i pugni infliggono 2d4 e ignorano i fallimenti critici' },
				{ min: 5, max: 5, result: 'Pelle Dura — conti come armatura leggera (-d2) anche da svestito' },
				{ min: 6, max: 6, result: 'Acrobazia da Grog — rutta a bruciapelo per stordire un avversario per 1 round (1/ora)' }
			]
		}
	},
	{
		id: 2,
		name: 'Lazzarone',
		modifiers: { AGILITÀ: 2, FORZA: -1, VIGORE: -1 },
		hpDie: 8,
		devilLuck: 'd2',
		trait: {
			label: 'Specialità',
			entries: [
				{ min: 1, max: 1, result: 'Pugnalata alle Spalle — a sorpresa o nascosto: -2 RD e +d2 danni extra' },
				{ min: 2, max: 2, result: 'Scassinatore — inizi con grimaldelli; borseggiare, disarmare o disattivare trappole a RD -4' },
				{ min: 3, max: 3, result: 'Scimmia del Cordame — attaccando dopo un\u2019acrobazia, Agilità RD10 per colpire automaticamente con +2 danni' },
				{ min: 4, max: 4, result: 'Bastardo Furtivo — attaccando dalle ombre, Agilità RD12 per un Colpo Critico automatico' },
				{ min: 5, max: 5, result: 'Fortunato del Diavolo — usando la Fortuna del Diavolo, con 9+ recuperi 1 punto Fortuna' },
				{ min: 6, max: 6, result: 'Birraio di Grog — attrezzatura da distillazione e intrugli alchemici' }
			]
		}
	},
	{
		id: 3,
		name: 'Bucaniere',
		modifiers: { PRESENZA: 2, AGILITÀ: -1, SPIRITO: -1 },
		hpDie: 8,
		devilLuck: 'd2',
		hasMusket: true,
		trait: {
			label: 'Specializzazione',
			entries: [
				{ min: 1, max: 1, result: 'Tracciatore di Fauna — tracci e individui animali e belve con facilità' },
				{ min: 2, max: 2, result: 'Tiratore Scelto — -2 RD sparando a lunga gittata con moschetti o fucili' },
				{ min: 3, max: 3, result: 'Fissa le Baionette! — baionetta: in mischia dopo lo sparo ignori la ricarica, a RD -2' },
				{ min: 4, max: 4, result: 'Mira Focalizzata — 1 round a mirare fermo: Colpo Critico automatico se colpisci' },
				{ min: 5, max: 5, result: 'Cuoco di Bordo — affumichi la carne; la ciurma recupera +d4 PV nei riposi' },
				{ min: 6, max: 6, result: 'Sopravvissuto — ignori il clima avverso e trovi cibo/acqua per te e 1 compagno' }
			]
		}
	},
	{
		id: 4,
		name: 'Spadaccino',
		modifiers: { FORZA: 1, AGILITÀ: 1, PRESENZA: -1, SPIRITO: -1 },
		hpDie: 10,
		devilLuck: 'd2',
		trait: {
			label: 'Stile di combattimento',
			entries: [
				{ min: 1, max: 1, result: 'Schermidore Ostentato — attacco e difesa a RD10 con striscia o sciabola; +1 danni in duello 1vs1' },
				{ min: 2, max: 2, result: 'Fanatico della Pietra Focaia — fino a 3 pistole per turno; ricaricarne 1 costa 1 round' },
				{ min: 3, max: 3, result: 'Canaglia da Scorbuto — RD -2 contro nemici già attaccati in questo turno' },
				{ min: 4, max: 4, result: 'Leader Ispiratore — 1/combattimento tira d4: gli alleati possono sommarlo a 1 tiro' },
				{ min: 5, max: 5, result: 'Furfante dei Coltelli — 2 coltelli, 2 attacchi a turno (RD10); se il primo colpisce, il secondo è automatico' },
				{ min: 6, max: 6, result: 'Poeta della Polvere Nera — esplosivi (d4 volte sulla tabella Bombe), lanciati a RD -2' }
			]
		}
	},
	{
		id: 5,
		name: 'Zelota',
		modifiers: { SPIRITO: 2, AGILITÀ: -1, VIGORE: -1 },
		hpDie: 8,
		devilLuck: 'd4',
		trait: {
			label: 'Preghiera',
			entries: [
				{ min: 1, max: 1, result: 'Guarigione — ripristina d6 + Spirito PV a un bersaglio' },
				{ min: 2, max: 2, result: 'Maledizione — penalità alle prove di un nemico' },
				{ min: 3, max: 3, result: 'Protezione dalla Morte — un bersaglio non scende sotto 1 PV' },
				{ min: 4, max: 4, result: 'Controllo del Tempo — modifichi direzione o velocità del vento' },
				{ min: 5, max: 5, result: 'Guida Benedetta — +d4 al prossimo tiro di un alleato' },
				{ min: 6, max: 6, result: 'Protezione Santa — -d4 alla protezione dai danni' },
				{ min: 7, max: 7, result: 'Luce Divina — acceca i nemici o illumina l\u2019oscurità' },
				{ min: 8, max: 8, result: 'Silenzio — annulla i suoni in un\u2019area' },
				{ min: 9, max: 9, result: 'Santuario — i nemici devono superare Spirito RD12 per attaccarti' },
				{ min: 10, max: 10, result: 'Comunione — poni 3 domande sì/no agli spiriti o alla tua divinità' }
			]
		}
	},
	{
		id: 6,
		name: 'Stregone',
		modifiers: { SPIRITO: 2, FORZA: -1, VIGORE: -1 },
		hpDie: 8,
		devilLuck: 'd4',
		weapon: 'Coltello di legno (d4) o caviglia (d4)',
		trait: {
			label: 'Incantesimo',
			entries: [
				{ min: 1, max: 1, result: 'Testa della Morte — interroghi un teschio o una testa mozza' },
				{ min: 2, max: 2, result: 'Possessione Spirituale — prendi il controllo temporaneo del corpo di una creatura' },
				{ min: 3, max: 3, result: 'Protezione Arcana — uno scudo spettrale che assorbe i danni' },
				{ min: 4, max: 4, result: 'Chiaroveggenza — vedi e ascolti luoghi lontani' },
				{ min: 5, max: 5, result: 'Sonnellino Necrofilo — fai addormentare d4 creature' },
				{ min: 6, max: 6, result: 'Rianimare i Morti — evochi e controlli d2 + Spirito scheletri o zombie' }
			]
		}
	},
	{
		id: 7,
		name: 'Anima Tormentata',
		modifiers: {},
		hpDie: 8,
		devilLuck: 'd4',
		trait: {
			label: 'Afflizione',
			entries: [
				{ min: 1, max: 1, result: 'Fantasma — 1/notte d12 danni da terrore (Spirito RD14); a 1 PV devi trovare un nuovo ospite entro d12 ore' },
				{ min: 2, max: 2, result: 'Condotto Spirituale — ad ogni alba ottieni 1 Rituale Arcano casuale' },
				{ min: 3, max: 3, result: 'Mente Eldritch — rischi il panico, ma quando lo superi colpisci a RD -2' },
				{ min: 4, max: 4, result: 'Zombie — perdi d2 PV al giorno senza carne umana (un cervello ripristina 2d6 PV)' },
				{ min: 5, max: 5, result: 'Vampirismo — devi bere sangue umano fresco per guarire e nutrirti' },
				{ min: 6, max: 6, result: 'Scheletro — se vieni distrutto, le tue ossa possono ricomporsi' }
			]
		}
	},
	{
		id: 8,
		name: 'Frottola da Marinaio',
		modifiers: {},
		hpDie: 8,
		devilLuck: 'd6',
		trait: {
			label: 'Origine',
			entries: [
				{ min: 1, max: 2, result: 'Tritone/Sirena — branchie e coda: -4 a tutte le RD sott\u2019acqua; muore senza immergersi; tira una classe normale aggiuntiva' },
				{ min: 3, max: 4, result: 'Mutante Acquatico', subTable: 'mutanti_acquatici' },
				{ min: 5, max: 6, result: 'Animale Senziente', subTable: 'animali_senzienti' }
			]
		}
	}
];

export const CLASSES: string[] = classes.map((c) => c.name);
/** Classi di base: le prime 6. Le successive sono opzionali. */
const BASE_CLASS_COUNT = 6;

/** Tabella delle classi tirate: 6 di base, oppure tutte se le opzionali sono incluse. */
export function buildClassTable(includeOptional: boolean): TableEntry[] {
	const list = includeOptional ? classes : classes.slice(0, BASE_CLASS_COUNT);
	return list.map((c, i) => ({ min: i + 1, max: i + 1, result: c.name }));
}

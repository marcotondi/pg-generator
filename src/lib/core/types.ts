export type GameId = 'ronin' | 'pirateborg';

/** Metadati che descrivono un gioco alla shell e alla landing. */
export interface GameMeta {
	id: GameId;
	title: string;
	subtitle: string;
	tagline: string;
	/** Logo mostrato nell'header (URL statico, opzionale). */
	logo?: string;
	/** Immagine decorativa (URL statico, opzionale). */
	heroImage?: string;
	/** Testo di licenza mostrato nel footer. */
	license: string;
	repoUrl: string;
}

/** Versione dell'involucro di salvataggio. */
export const ENVELOPE_VERSION = 2;

/** Personaggio salvato: involucro comune a tutti i giochi. */
export interface SavedCharacter<T = unknown> {
	id: string;
	envelopeVersion: number;
	game: GameId;
	name: string;
	savedAt: number;
	data: T;
}

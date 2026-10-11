import { ENVELOPE_VERSION, type GameId, type SavedCharacter } from './types';

const STORAGE_KEY = 'pg-generator.characters';

function read(): SavedCharacter[] {
	if (typeof localStorage === 'undefined') return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		// Scarta gli elementi senza involucro o con versione non riconosciuta,
		// senza interrompere l'elenco.
		return parsed.filter(
			(item): item is SavedCharacter =>
				!!item &&
				typeof item === 'object' &&
				typeof item.id === 'string' &&
				typeof item.game === 'string' &&
				typeof item.name === 'string' &&
				item.envelopeVersion === ENVELOPE_VERSION
		);
	} catch {
		return [];
	}
}

function write(list: SavedCharacter[]): boolean {
	if (typeof localStorage === 'undefined') return false;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		return true;
	} catch {
		return false;
	}
}

/** Elenco di tutti i personaggi salvati, di entrambi i giochi, dal più recente. */
export function getCharacters(): SavedCharacter[] {
	return read().sort((a, b) => b.savedAt - a.savedAt);
}

/** Ritrova un personaggio salvato per id. */
export function getCharacter(id: string): SavedCharacter | undefined {
	return read().find((item) => item.id === id);
}

/** Salva un nuovo personaggio e ritorna l'elemento creato, o null se lo storage è pieno/non disponibile. */
export function saveCharacter<T>(game: GameId, name: string, data: T): SavedCharacter<T> | null {
	const entry: SavedCharacter<T> = {
		id: crypto.randomUUID(),
		envelopeVersion: ENVELOPE_VERSION,
		game,
		name,
		savedAt: Date.now(),
		data
	};
	return write([entry, ...read()]) ? entry : null;
}

/** Rimuove un personaggio salvato per id. */
export function deleteCharacter(id: string): void {
	write(read().filter((item) => item.id !== id));
}

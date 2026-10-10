import type { GameMeta } from './types';

/**
 * Contratto di un modulo gioco. Convenzione di cartella `src/lib/games/<id>/`:
 *
 * - `meta.ts`       esporta `meta: GameMeta`
 * - `engine/`       generazione in TS puro: `generate(...) => Character`
 * - `data/`         tabelle, classi, equipaggiamento, testi (stringhe italiane dirette)
 * - `Sheet.svelte`  componente che riceve `{ character, onNameChange }` e compone
 *                   la scheda sui mattoni di `$lib/core/components`
 * - `theme.css`     valori dei token di `$lib/core/tokens.css`
 *
 * `GameModule` copre la parte dati/metadati; la scheda è il componente Svelte
 * che ogni route compone con la shell (`AppShell`).
 */
export interface GameModule {
	meta: GameMeta;
}

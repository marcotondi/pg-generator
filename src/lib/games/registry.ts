import type { GameMeta } from '$lib/core/types';
import { meta as ronin } from './ronin/meta';
import { meta as pirateborg } from './pirateborg/meta';

/** I giochi disponibili, nell'ordine mostrato dalla landing. */
export const games: GameMeta[] = [ronin, pirateborg];

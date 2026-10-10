import type { GameMeta } from '$lib/core/types';
import compatible from './assets/pirate-borg-compatible.png';

export const meta: GameMeta = {
	id: 'pirateborg',
	title: 'PirateBorg',
	subtitle: 'Generatore di Personaggi',
	tagline: 'Teschio, rum e morte. Genera il tuo pirata.',
	heroImage: compatible,
	license:
		'PirateBorg PG Generator is an independent production by Marco Tondi. It is not affiliated with Limithron LLC. It is published under the PIRATE BORG Third Party License. PIRATE BORG is ©2022 Limithron LLC.',
	repoUrl: 'https://github.com/marcotondi/pg-generator'
};

import type { GameMeta } from '$lib/core/types';
import cranio from './assets/cranio.png';
import teschio from './assets/teschio.png';

export const meta: GameMeta = {
	id: 'pirateborg',
	title: 'PirateBorg',
	subtitle: 'Generatore di Personaggi',
	tagline: 'Teschio, rum e morte. Genera il tuo pirata.',
	logo: cranio,
	generateImage: teschio,
	license:
		'PirateBorg PG Generator is an independent production by Marco Tondi. It is not affiliated with Limithron LLC. It is published under the PIRATE BORG Third Party License. PIRATE BORG is ©2022 Limithron LLC.',
	repoUrl: 'https://github.com/marcotondi/pg-generator'
};

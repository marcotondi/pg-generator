import type { GameMeta } from '$lib/core/types';
import hero from './assets/compwith_ronin.png';

export const meta: GameMeta = {
	id: 'ronin',
	title: 'Rōnin',
	subtitle: 'Generatore di Personaggi',
	tagline: 'Onore, lama e spiriti. Forgia il tuo guerriero.',
	heroImage: hero,
	license:
		'RŌNIN CHARACTER GENERATOR is an independent production by Marco Tondi. It is not affiliated with Slightly Reckless Games LTD. It is published under the Rōnin Third Party License. Rōnin is copyright © Slightly Reckless Games LTD.',
	repoUrl: 'https://github.com/marcotondi/pg-generator'
};

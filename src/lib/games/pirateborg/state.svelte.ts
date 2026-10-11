import { saveCharacter } from '$lib/core/storage';
import { generatePirate, type PirateCharacter } from './engine';

export type { PirateCharacter };

function empty(): PirateCharacter {
	return {
		name: '',
		container: '',
		economicItem: '',
		luxuryItem: '',
		weapons: [],
		clothes: '',
		hat: '',
		attributes: [],
		classId: null,
		classData: null,
		classTrait: undefined,
		hp: 0,
		hpMax: 0,
		devilLuck: 0,
		devilLuckMax: 0,
		background: {
			profession: '',
			silver: '',
			tie: '',
			distinctiveFlaw: '',
			physicalPeculiarity: '',
			idiosyncrasy: '',
			misfortunes: '',
			preciousThings: ''
		}
	};
}

export class PirateBorgState {
	optionalClasses = $state(false);
	character = $state<PirateCharacter>(empty());

	get hasCharacter(): boolean {
		return this.character.name !== '' || this.character.classData !== null;
	}

	generate(): void {
		this.character = generatePirate({ optionalClasses: this.optionalClasses });
	}

	load(data: PirateCharacter): void {
		this.character = data;
	}

	save(): boolean {
		return saveCharacter('pirateborg', this.character.name, $state.snapshot(this.character)) !== null;
	}
}

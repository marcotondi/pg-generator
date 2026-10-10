import { saveCharacter } from '$lib/core/storage';
import type { SavedCharacter } from '$lib/core/types';
import { generatePirate, type PirateCharacter } from './engine';

export type { PirateCharacter };

function empty(): PirateCharacter {
	return {
		name: '',
		container: '',
		commonItems: [],
		luxuryItems: [],
		attributes: [],
		classId: null,
		classData: null,
		weapon: '',
		clothes: '',
		hat: '',
		background: '',
		piecesOfEight: '',
		distinctiveFlaw: '',
		physicalPeculiarity: '',
		idiosyncrasy: '',
		misfortunes: '',
		preciousThings: '',
		hp: 0,
		hpMax: 0,
		devilLuck: 0,
		devilLuckMax: 0
	};
}

export class PirateBorgState {
	character = $state<PirateCharacter>(empty());

	get hasCharacter(): boolean {
		return this.character.name !== '' || this.character.classData !== null;
	}

	generate(): void {
		this.character = generatePirate();
	}

	load(data: PirateCharacter): void {
		this.character = data;
	}

	save(): SavedCharacter<PirateCharacter> {
		return saveCharacter('pirateborg', this.character.name, $state.snapshot(this.character));
	}
}

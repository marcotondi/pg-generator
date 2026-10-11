import { saveCharacter } from '$lib/core/storage';
import { generateCharacter } from './engine';
import type { Character } from './engine/types';
import type { HonourState } from './engine/utils';

export type { Character };

export class RoninState {
	honour = $state<HonourState>('none');
	character = $state<Character | null>(null);

	get hasCharacter(): boolean {
		return this.character !== null;
	}

	setHonour(honour: HonourState): void {
		this.honour = this.honour === honour ? 'none' : honour;
	}

	generate(): void {
		this.character = generateCharacter(this.honour);
	}

	load(data: Character): void {
		this.character = data;
	}

	save(): boolean {
		if (!this.character) return false;
		const snapshot = $state.snapshot(this.character) as Character;
		return saveCharacter('ronin', `${snapshot.firstName} ${snapshot.lastName}`, snapshot) !== null;
	}
}

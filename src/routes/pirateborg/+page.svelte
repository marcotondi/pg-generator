<script lang="ts">
	import GameScreen from '$lib/core/components/GameScreen.svelte';
	import GameTitle from '$lib/core/components/GameTitle.svelte';
	import Sheet from '$lib/games/pirateborg/Sheet.svelte';
	import { meta } from '$lib/games/pirateborg/meta';
	import { PirateBorgState, type PirateCharacter } from '$lib/games/pirateborg/state.svelte';
	import { getCharacter } from '$lib/core/storage';
	import { page } from '$app/state';
	import '$lib/games/pirateborg/theme.css';

	const game = new PirateBorgState();

	let initialized = false;
	// All'apertura genera subito un personaggio; se c'è ?load=<id>, carica quello.
	$effect(() => {
		const id = page.url.searchParams.get('load');
		if (id) {
			const found = getCharacter(id);
			if (found?.game === 'pirateborg') game.load(found.data as PirateCharacter);
			initialized = true;
			return;
		}
		if (!initialized) {
			initialized = true;
			game.generate();
		}
	});
</script>

<GameScreen
	{meta}
	hasCharacter={game.hasCharacter}
	generate={() => game.generate()}
	save={() => game.save()}
>
	{#snippet header()}
		<GameTitle name="PIRATEBORG" subtitle="GENERA IL TUO PG" />
	{/snippet}

	{#snippet sheet()}
		<Sheet character={game.character} />
	{/snippet}
</GameScreen>

<script lang="ts">
	import GameScreen from '$lib/core/components/GameScreen.svelte';
	import Sheet from '$lib/games/pirateborg/Sheet.svelte';
	import { meta } from '$lib/games/pirateborg/meta';
	import { PirateBorgState, type PirateCharacter } from '$lib/games/pirateborg/state.svelte';
	import { getCharacter } from '$lib/core/storage';
	import { page } from '$app/state';
	import '$lib/games/pirateborg/theme.css';

	const game = new PirateBorgState();

	// Carica un personaggio salvato indicato da ?load=<id>.
	$effect(() => {
		const id = page.url.searchParams.get('load');
		if (!id) return;
		const found = getCharacter(id);
		if (found?.game === 'pirateborg') game.load(found.data as PirateCharacter);
	});
</script>

<GameScreen
	{meta}
	hasCharacter={game.hasCharacter}
	generate={() => game.generate()}
	save={() => game.save()}
>
	{#snippet sheet()}
		<Sheet character={game.character} />
	{/snippet}
</GameScreen>

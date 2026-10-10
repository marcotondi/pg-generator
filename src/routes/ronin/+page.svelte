<script lang="ts">
	import GameScreen from '$lib/core/components/GameScreen.svelte';
	import Sheet from '$lib/games/ronin/Sheet.svelte';
	import { meta } from '$lib/games/ronin/meta';
	import { RoninState, type Character } from '$lib/games/ronin/state.svelte';
	import { getCharacter } from '$lib/core/storage';
	import { page } from '$app/state';
	import '$lib/games/ronin/theme.css';

	const game = new RoninState();

	// Carica un personaggio salvato indicato da ?load=<id>.
	$effect(() => {
		const id = page.url.searchParams.get('load');
		if (!id) return;
		const found = getCharacter(id);
		if (found?.game === 'ronin') game.load(found.data as Character);
	});
</script>

<GameScreen
	{meta}
	hasCharacter={game.hasCharacter}
	generate={() => game.generate()}
	save={() => game.save()}
>
	{#snippet controls()}
		<div class="honour-controls">
			<p>La tua ultima morte è stata&hellip;</p>
			<div class="buttons">
				<button
					class:active={game.honour === 'honourable'}
					onclick={() => game.setHonour('honourable')}
				>
					Onore
				</button>
				<button
					class:active={game.honour === 'dishonourable'}
					onclick={() => game.setHonour('dishonourable')}
				>
					Disonore
				</button>
			</div>
		</div>
	{/snippet}

	{#snippet sheet()}
		{#if game.character}
			<Sheet character={game.character} />
		{/if}
	{/snippet}
</GameScreen>

<style>
	.honour-controls {
		text-align: center;
	}
	.honour-controls p {
		color: var(--color-text-muted);
		margin: 0 0 var(--space-sm);
	}
	.buttons {
		display: flex;
		justify-content: center;
		gap: var(--space-md);
	}
	button.active {
		background: var(--color-accent);
		color: var(--color-bg);
	}
</style>

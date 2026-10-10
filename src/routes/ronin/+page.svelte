<script lang="ts">
	import GameScreen from '$lib/core/components/GameScreen.svelte';
	import GameTitle from '$lib/core/components/GameTitle.svelte';
	import Sheet from '$lib/games/ronin/Sheet.svelte';
	import { meta } from '$lib/games/ronin/meta';
	import { RoninState, type Character } from '$lib/games/ronin/state.svelte';
	import { getCharacter } from '$lib/core/storage';
	import { it } from '$lib/games/ronin/engine/data/it';
	import { page } from '$app/state';
	import '$lib/games/ronin/theme.css';

	const game = new RoninState();

	let initialized = false;
	// All'apertura genera subito un personaggio; se c'è ?load=<id>, carica quello.
	$effect(() => {
		const id = page.url.searchParams.get('load');
		if (id) {
			const found = getCharacter(id);
			if (found?.game === 'ronin') game.load(found.data as Character);
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
		<GameTitle name="RŌNIN" subtitle={it('page.title')} />
	{/snippet}

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

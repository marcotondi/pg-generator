<script lang="ts">
	import { games } from '$lib/games/registry';
	import type { GameId } from '$lib/core/types';

	let { currentGame }: { currentGame: GameId } = $props();
</script>

<nav class="switcher" aria-label="Scelta del gioco">
	{#each games as game (game.id)}
		<a
			class="tab"
			class:active={game.id === currentGame}
			href="/{game.id}/"
			aria-current={game.id === currentGame ? 'page' : undefined}
		>
			{game.title}
		</a>
	{/each}
</nav>

<style>
	.switcher {
		display: inline-flex;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		overflow: hidden;
	}
	.tab {
		font-family: var(--font-heading);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-dim);
		padding: var(--space-xs) var(--space-sm);
		white-space: nowrap;
	}
	.tab + .tab {
		border-left: 1px solid var(--color-border);
	}
	.tab.active {
		background: var(--color-accent);
		color: var(--color-bg);
	}
</style>

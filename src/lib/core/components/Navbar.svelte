<script lang="ts">
	import GameSwitcher from './GameSwitcher.svelte';
	import SavedPanel from './SavedPanel.svelte';
	import type { GameId } from '../types';

	let { currentGame = null }: { currentGame?: GameId | null } = $props();
</script>

<header class="navbar">
	<a class="brand" href="/" aria-label="Torna alla home">
		<img class="brand-icon" src="/icons/icon.svg" alt="" />
		<span class="brand-name">PG Gen</span>
	</a>

	{#if currentGame}
		<GameSwitcher {currentGame} />
	{/if}

	<SavedPanel {currentGame} />
</header>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) 0;
		border-bottom: 1px solid var(--color-accent);
		background: var(--color-bg);
	}
	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		flex-shrink: 0;
	}
	.brand-icon {
		width: 28px;
		height: 28px;
	}
	.brand-name {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text);
	}
</style>

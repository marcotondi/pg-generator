<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCharacters } from '../storage';
	import type { GameId, SavedCharacter } from '../types';

	let { currentGame }: { currentGame: GameId } = $props();

	const GAME_LABELS: Record<GameId, string> = {
		ronin: 'Rōnin',
		pirateborg: 'PirateBorg'
	};

	let open = $state(false);
	let items = $state<SavedCharacter[]>([]);

	function toggle() {
		open = !open;
		if (open) items = getCharacters();
	}

	function select(item: SavedCharacter) {
		open = false;
		goto(`/${item.game}/?load=${item.id}`);
	}
</script>

<button class="hamburger-btn" onclick={toggle} aria-label="Personaggi salvati" aria-expanded={open}>
	☰
</button>

{#if open}
	<div class="overlay" onclick={() => (open = false)} role="presentation"></div>
	<nav class="hamburger-menu" aria-label="Personaggi salvati">
		<a class="menu-link" href="/" onclick={() => (open = false)}>Home</a>
		<p class="menu-title">Personaggi salvati</p>
		{#if items.length === 0}
			<p class="empty">Nessun personaggio salvato.</p>
		{:else}
			<ul>
				{#each items as item (item.id)}
					<li>
						<button class="menu-item" class:current={item.game === currentGame} onclick={() => select(item)}>
							<span class="item-name">{item.name || 'Senza nome'}</span>
							<span class="item-game">{GAME_LABELS[item.game] ?? item.game}</span>
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</nav>
{/if}

<style>
	.hamburger-btn {
		background: none;
		border: none;
		color: var(--color-accent);
		font-size: 1.5rem;
		padding: var(--space-xs);
		flex-shrink: 0;
		line-height: 1;
		min-height: auto;
	}
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 900;
	}
	.hamburger-menu {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: min(320px, 85vw);
		background: var(--color-surface);
		border-right: 1px solid var(--color-accent);
		padding: var(--space-lg);
		overflow-y: auto;
		z-index: 950;
	}
	.menu-link,
	.menu-title {
		display: block;
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 var(--space-md);
	}
	.menu-title {
		color: var(--color-text-dim);
		font-size: 0.75rem;
		font-family: var(--font-mono);
	}
	.empty {
		color: var(--color-text-dim);
		font-size: 0.9rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.menu-item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		border: 1px solid var(--color-border);
		padding: var(--space-sm) var(--space-md);
	}
	.menu-item.current {
		border-color: var(--color-accent);
	}
	.item-name {
		font-family: var(--font-body);
		font-size: 1rem;
	}
	.item-game {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-dim);
	}
</style>

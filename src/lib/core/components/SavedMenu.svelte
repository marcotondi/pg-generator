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
	let buttonEl = $state<HTMLButtonElement | undefined>(undefined);
	let drawerEl = $state<HTMLElement | undefined>(undefined);

	function close() {
		open = false;
		buttonEl?.focus();
	}

	function toggle() {
		if (open) {
			close();
			return;
		}
		items = getCharacters();
		open = true;
	}

	function select(item: SavedCharacter) {
		open = false;
		goto(`/${item.game}/?load=${item.id}`);
	}

	function onKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') {
			event.preventDefault();
			close();
		}
	}

	// Sposta il focus nel pannello all'apertura, così la tastiera ci entra subito.
	$effect(() => {
		if (open) drawerEl?.focus();
	});
</script>

<svelte:window onkeydown={onKeydown} />

<button
	class="hamburger-btn"
	bind:this={buttonEl}
	onclick={toggle}
	aria-label="Personaggi salvati"
	aria-expanded={open}
	aria-haspopup="dialog"
>
	☰
</button>

{#if open}
	<button
		class="overlay"
		type="button"
		tabindex="-1"
		aria-label="Chiudi menu"
		onclick={close}
	></button>
	<nav class="hamburger-menu" bind:this={drawerEl} tabindex="-1" aria-label="Personaggi salvati">
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
		padding: 0;
		min-width: 44px;
		min-height: 44px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		line-height: 1;
	}
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 900;
		background: rgba(0, 0, 0, 0.5);
		border: none;
		border-radius: 0;
		padding: 0;
		min-height: 0;
		color: transparent;
		cursor: pointer;
	}
	.overlay:hover {
		background: rgba(0, 0, 0, 0.5);
		color: transparent;
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
	.hamburger-menu:focus {
		outline: none;
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
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-dim);
	}
</style>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { deleteCharacter, getCharacters } from '../storage';
	import type { GameId, SavedCharacter } from '../types';

	let { currentGame = null }: { currentGame?: GameId | null } = $props();

	const GAME_LABELS: Record<GameId, string> = {
		ronin: 'Rōnin',
		pirateborg: 'PirateBorg'
	};

	let open = $state(false);
	let items = $state<SavedCharacter[]>([]);
	let buttonEl = $state<HTMLButtonElement | undefined>(undefined);
	let panelEl = $state<HTMLElement | undefined>(undefined);
	let dragStart = 0;
	let drag = $state(0);

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

	function remove(item: SavedCharacter) {
		if (!confirm(`Cancellare "${item.name || 'Senza nome'}"?`)) return;
		deleteCharacter(item.id);
		items = getCharacters();
	}

	function onKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') {
			event.preventDefault();
			close();
		}
	}

	// Trascinamento verso il basso per chiudere il foglio (mobile).
	function onTouchStart(event: TouchEvent) {
		dragStart = event.touches[0].clientY;
	}
	function onTouchMove(event: TouchEvent) {
		drag = Math.max(0, event.touches[0].clientY - dragStart);
	}
	function onTouchEnd() {
		if (drag > 80) close();
		drag = 0;
	}

	$effect(() => {
		if (open) panelEl?.focus();
	});
</script>

<svelte:window onkeydown={onKeydown} />

<div class="saved">
	<button
		class="saved-btn"
		bind:this={buttonEl}
		onclick={toggle}
		aria-expanded={open}
		aria-haspopup="dialog"
		aria-label="Personaggi salvati"
	>
		Salvati
	</button>

	{#if open}
		<button class="overlay" type="button" tabindex="-1" aria-label="Chiudi" onclick={close}></button>
		<div
			class="panel"
			bind:this={panelEl}
			tabindex="-1"
			role="dialog"
			aria-label="Personaggi salvati"
			style="--drag: {drag}px"
			ontouchstart={onTouchStart}
			ontouchmove={onTouchMove}
			ontouchend={onTouchEnd}
		>
			<div class="handle" aria-hidden="true"></div>
			<p class="panel-title">Personaggi salvati</p>
			{#if items.length === 0}
				<p class="empty">Nessun personaggio salvato.</p>
			{:else}
				<ul>
					{#each items as item (item.id)}
						<li class="row">
							<button class="item" class:current={item.game === currentGame} onclick={() => select(item)}>
								<span class="item-name">{item.name || 'Senza nome'}</span>
								<span class="item-game">{GAME_LABELS[item.game] ?? item.game}</span>
							</button>
							<button
								class="delete"
								type="button"
								aria-label={`Cancella ${item.name || 'personaggio'}`}
								onclick={() => remove(item)}
							>
								✕
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style>
	.saved {
		position: relative;
		margin-left: auto;
		flex-shrink: 0;
	}
	.saved-btn {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: var(--space-xs) var(--space-sm);
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
	.panel {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 950;
		background: var(--color-surface);
		border-top: 1px solid var(--color-accent);
		border-radius: 16px 16px 0 0;
		padding: var(--space-sm) var(--space-lg) var(--space-xl);
		max-height: 70dvh;
		overflow-y: auto;
		transform: translateY(var(--drag, 0));
	}
	.handle {
		width: 40px;
		height: 4px;
		border-radius: 2px;
		background: var(--color-border);
		margin: var(--space-sm) auto;
	}
	.panel:focus {
		outline: none;
	}
	.panel-title {
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-dim);
		font-size: 0.8rem;
		margin: 0 0 var(--space-md);
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
	.row {
		display: flex;
		gap: var(--space-xs);
	}
	.item {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		border: 1px solid var(--color-border);
		padding: var(--space-sm) var(--space-md);
	}
	.item.current {
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
	.delete {
		min-width: 44px;
		padding: 0 var(--space-sm);
		border-color: var(--color-border);
		color: var(--color-text-dim);
	}
	@media (min-width: 768px) {
		.panel {
			position: absolute;
			left: auto;
			right: 0;
			bottom: auto;
			top: calc(100% + var(--space-sm));
			width: 22rem;
			border: 1px solid var(--color-accent);
			border-radius: var(--radius-md);
			padding: var(--space-md);
			max-height: 60dvh;
			transform: none;
		}
		.handle {
			display: none;
		}
	}
</style>

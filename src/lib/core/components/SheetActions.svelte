<script lang="ts">
	let { onSave }: { onSave: () => void } = $props();
</script>

<div class="sheet-actions no-print">
	<button class="btn-primary" onclick={onSave}>💾 Salva Personaggio</button>
	<button onclick={() => window.print()}>🖨️ Stampa</button>
</div>
<div class="bar-spacer" aria-hidden="true"></div>

<style>
	.sheet-actions {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}
	.bar-spacer {
		display: none;
	}
	@media (max-width: 767px) {
		.sheet-actions {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 200;
			margin: 0;
			padding: var(--space-sm) var(--space-md);
			gap: var(--space-sm);
			background: var(--color-bg);
			border-top: 1px solid var(--color-accent);
		}
		.sheet-actions button {
			flex: 1;
		}
		.bar-spacer {
			display: block;
			height: 5rem;
		}
	}
</style>

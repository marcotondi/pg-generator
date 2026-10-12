<script lang="ts">
	let { onSave }: { onSave: () => void } = $props();
</script>

<div class="sheet-actions no-print">
	<button class="btn-primary" onclick={onSave}>💾 Salva Personaggio</button>
	<button onclick={() => window.print()}>🖨️ Stampa</button>
</div>

<style>
	.sheet-actions {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}
	@media (max-width: 767px) {
		.sheet-actions button {
			flex: 1;
		}
	}
</style>

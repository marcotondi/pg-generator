<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { GameMeta } from '../types';
	import AppShell from './AppShell.svelte';
	import GenerateButton from './GenerateButton.svelte';
	import SavedMenu from './SavedMenu.svelte';
	import { toast } from '../toast.svelte';

	let {
		meta,
		hasCharacter,
		generate,
		save,
		controls,
		header,
		sheet
	}: {
		meta: GameMeta;
		hasCharacter: boolean;
		generate: () => void;
		save: () => boolean;
		controls?: Snippet;
		header?: Snippet;
		sheet: Snippet;
	} = $props();

	function onSave() {
		const ok = save();
		toast.show(ok ? 'Personaggio salvato!' : 'Memoria piena: salvataggio non riuscito');
	}
</script>

<AppShell {meta} showTitle={!header}>
	{#snippet menu()}
		<SavedMenu currentGame={meta.id} />
	{/snippet}

	{@render header?.()}
	{@render controls?.()}

	<div class="generate-section">
		<GenerateButton lines={['Genera', 'Nuovo PG']} image={meta.generateImage} onclick={generate} />
	</div>

	{#if hasCharacter}
		<div class="sheet-wrap">
			{@render sheet()}
		</div>

		<div class="sheet-actions no-print">
			<button class="btn-primary" onclick={onSave}>💾 Salva Personaggio</button>
			<button onclick={() => window.print()}>🖨️ Stampa</button>
		</div>
	{/if}
</AppShell>

<style>
	.generate-section {
		display: flex;
		justify-content: center;
		margin: var(--space-xl) 0;
	}
	.sheet-actions {
		display: flex;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}
	.sheet-wrap {
		animation: sheet-in 180ms ease-out;
	}
	@keyframes sheet-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

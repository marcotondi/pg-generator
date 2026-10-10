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
		sheet
	}: {
		meta: GameMeta;
		hasCharacter: boolean;
		generate: () => void;
		save: () => void;
		controls?: Snippet;
		sheet: Snippet;
	} = $props();

	function onSave() {
		save();
		toast.show('Personaggio salvato!');
	}
</script>

<AppShell {meta}>
	{#snippet menu()}
		<SavedMenu currentGame={meta.id} />
	{/snippet}

	{@render controls?.()}

	<div class="generate-section">
		<GenerateButton lines={['Genera', 'Nuovo PG']} image={meta.generateImage} onclick={generate} />
	</div>

	{#if hasCharacter}
		{@render sheet()}

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
</style>

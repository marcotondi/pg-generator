<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { GameMeta } from '../types';
	import AppShell from './AppShell.svelte';
	import GenerateButton from './GenerateButton.svelte';
	import SheetActions from './SheetActions.svelte';
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

<AppShell {meta}>
	{@render header?.()}
	{@render controls?.()}

	<div class="generate-section">
		<GenerateButton lines={['Genera', 'Nuovo PG']} onclick={generate} />
	</div>

	{#if hasCharacter}
		<div class="sheet-wrap">
			{@render sheet()}
		</div>

		<SheetActions {onSave} />
	{/if}
</AppShell>

<style>
	.generate-section {
		display: flex;
		justify-content: center;
		margin: var(--space-xl) 0;
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

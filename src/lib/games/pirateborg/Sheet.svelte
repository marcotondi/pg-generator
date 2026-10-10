<script lang="ts">
	import SheetFrame from '$lib/core/components/SheetFrame.svelte';
	import StatBlock from '$lib/core/components/StatBlock.svelte';
	import SectionHeading from '$lib/core/components/SectionHeading.svelte';
	import ItemList from '$lib/core/components/ItemList.svelte';
	import Divider from '$lib/core/components/Divider.svelte';
	import type { PirateCharacter } from './engine';

	let { character }: { character: PirateCharacter } = $props();
</script>

<SheetFrame name={character.name} classLabel={character.classData?.name || '—'}>
	<div class="stats-row">
		{#each character.attributes as attr}
			<StatBlock label={attr.name.slice(0, 3)} value={attr.value} mod={attr.mod} />
		{/each}
	</div>

	<div class="vital-row">
		<div class="vital-block">
			<span class="vital-label">HP</span>
			<span class="vital-value">
				{character.hp}<span class="vital-max"> / {character.hpMax}</span>
			</span>
		</div>
		<div class="vital-block">
			<span class="vital-label">Fortuna</span>
			<span class="vital-value">d{character.devilLuck}</span>
		</div>
	</div>

	<Divider />

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Equipaggiamento" />
			<ItemList>
				<li><strong>Contenitore:</strong> {character.container || '—'}</li>
				{#each character.commonItems as item}
					<li>{item}</li>
				{/each}
				{#each character.luxuryItems as item}
					<li>{item}</li>
				{/each}
				<li><strong>Arma:</strong> {character.weapon || '—'}</li>
				<li><strong>Vestiti:</strong> {character.clothes || '—'}</li>
				<li><strong>Cappello:</strong> {character.hat || '—'}</li>
			</ItemList>
		</div>
		<div class="col">
			<SectionHeading text="Background" />
			<ItemList>
				<li><strong>{character.background || '—'}</strong></li>
				<li>Pezzi da Otto: {character.piecesOfEight || '—'}</li>
				<li>Difetto: {character.distinctiveFlaw || '—'}</li>
				<li>Peculiarità: {character.physicalPeculiarity || '—'}</li>
				<li>Idiosincrasia: {character.idiosyncrasy || '—'}</li>
				<li>Disgrazie: {character.misfortunes || '—'}</li>
				<li>Cose Preziose: {character.preciousThings || '—'}</li>
			</ItemList>
		</div>
	</div>
</SheetFrame>

<style>
	.stats-row {
		display: flex;
		justify-content: space-between;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
	}
	.vital-row {
		display: flex;
		justify-content: center;
		gap: var(--space-xl);
		margin-bottom: var(--space-md);
	}
	.vital-block {
		text-align: center;
	}
	.vital-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--color-text-dim);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	.vital-value {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--color-text);
	}
	.vital-max {
		font-size: 1rem;
		color: var(--color-text-dim);
	}
	.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-lg);
	}
	@media (max-width: 768px) {
		.two-col {
			grid-template-columns: 1fr;
		}
	}
</style>

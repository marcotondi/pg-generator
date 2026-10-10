<script lang="ts">
	import StatBlock from '$lib/core/components/StatBlock.svelte';
	import SectionHeading from '$lib/core/components/SectionHeading.svelte';
	import ItemList from '$lib/core/components/ItemList.svelte';
	import Divider from '$lib/core/components/Divider.svelte';
	import type { PirateCharacter } from './engine';

	let { character }: { character: PirateCharacter } = $props();
</script>

<div class="sheet pb-sheet">
	<div class="pb-header">
		<h2 class="pb-name">{character.name || '—'}</h2>
		<p class="pb-class">{character.classData?.name || '—'}</p>
	</div>

	<div class="stats-row">
		{#each character.attributes as attr}
			<StatBlock
				label={attr.name.slice(0, 3)}
				value={attr.mod >= 0 ? `+${attr.mod}` : String(attr.mod)}
			/>
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

	{#if character.classTrait}
		<Divider />
		<div class="trait">
			<SectionHeading text={character.classTrait.label} center />
			<p class="trait-value">{character.classTrait.value}</p>
		</div>
	{/if}

	<Divider />

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Armi" />
			<ItemList>
				{#each character.weapons as weapon}
					<li>{weapon}</li>
				{/each}
			</ItemList>
		</div>
		<div class="col">
			<SectionHeading text="Equipaggiamento" />
			<ItemList>
				<li><strong>Contenitore:</strong> {character.container || '—'}</li>
				<li><strong>Oggetto:</strong> {character.economicItem || '—'}</li>
				<li><strong>Pregiato:</strong> {character.luxuryItem || '—'}</li>
				<li><strong>Vestiti:</strong> {character.clothes || '—'}</li>
				<li><strong>Cappello:</strong> {character.hat || '—'}</li>
			</ItemList>
		</div>
	</div>

	<Divider />

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Background" />
			<ItemList>
				<li><strong>Professione:</strong> {character.background.profession || '—'}</li>
				<li><strong>Argento:</strong> {character.background.silver || '—'}</li>
				<li><strong>Legame:</strong> {character.background.tie || '—'}</li>
			</ItemList>
		</div>
		<div class="col">
			<SectionHeading text="Dettagli" />
			<ItemList>
				<li>Difetto: {character.background.distinctiveFlaw || '—'}</li>
				<li>Segno: {character.background.physicalPeculiarity || '—'}</li>
				<li>Idiosincrasia: {character.background.idiosyncrasy || '—'}</li>
				<li>Disgrazie: {character.background.misfortunes || '—'}</li>
				<li>Cose preziose: {character.background.preciousThings || '—'}</li>
			</ItemList>
		</div>
	</div>
</div>

<style>
	.pb-sheet {
		border: none;
		padding: 0;
	}
	.pb-header {
		text-align: center;
		margin-bottom: var(--space-lg);
	}
	.pb-name {
		font-family: var(--font-heading);
		font-size: 2rem;
		text-transform: uppercase;
		color: var(--color-accent);
		margin: 0;
		letter-spacing: 0.02em;
		line-height: 1.1;
	}
	.pb-class {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-text-muted);
		margin: var(--space-sm) 0 0;
	}
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
		font-size: 0.75rem;
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
	.trait {
		text-align: center;
	}
	.trait-value {
		margin: 0;
		color: var(--color-text);
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

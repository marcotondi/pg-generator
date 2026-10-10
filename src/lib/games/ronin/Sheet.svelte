<script lang="ts">
	import SheetFrame from '$lib/core/components/SheetFrame.svelte';
	import SectionHeading from '$lib/core/components/SectionHeading.svelte';
	import ItemList from '$lib/core/components/ItemList.svelte';
	import Divider from '$lib/core/components/Divider.svelte';
	import { it } from './engine/data/it';
	import { CLASS_I18N_KEYS, type Character } from './engine/types';

	let { character }: { character: Character } = $props();

	const attributes: { label: string; value: number }[] = $derived([
		{ label: 'Prontezza', value: character.abilities.swiftness },
		{ label: 'Spirito', value: character.abilities.spirit },
		{ label: 'Vigore', value: character.abilities.vigor },
		{ label: 'Resilienza', value: character.abilities.resilience }
	]);
</script>

<SheetFrame>
	<div class="ronin-header">
		<p class="muted">Sei</p>
		<h2 class="name">{character.firstName.toUpperCase()} {character.lastName.toUpperCase()}</h2>
		<p class="nick italic">&ldquo;{character.nickName.english}&rdquo;</p>
		<p class="kanji">{character.nickName.kanji}</p>
		<p class="japanese">{character.nickName.japanese}</p>
		<p class="muted">il</p>
		<h3 class="class-name">{it(CLASS_I18N_KEYS[character.class])}</h3>
	</div>

	<div class="stats-row">
		<p><strong>PF</strong> {character.hitPoints}</p>
		<p><strong>Virtù</strong> {character.virtues} ({character.virtuesDice})</p>
		<p><strong>Onore</strong> {character.abilities.honour} ({it(character.honorStatus)})</p>
		<p><strong>Ryo</strong> {character.ryo}</p>
	</div>

	<Divider />

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Attributi" />
			<p class="muted">{it(character.brokenBodies ?? '')}</p>
			<p class="muted">{it(character.grimChronicles ?? '')}</p>
			<p class="muted">{it(character.badHabits ?? '')}</p>
			<p class="muted">{it(character.awfulAfflictions ?? '')}</p>
		</div>
		<div class="col">
			<SectionHeading text="Abilità" />
			<ItemList>
				{#each attributes as attr}
					<li>{attr.label}: {attr.value}</li>
				{/each}
			</ItemList>
		</div>
	</div>

	<Divider />

	<div class="tenets">
		<p class="muted">Devi seguire</p>
		<h3 class="tenet-title">{it(character.honourTenets.title)}</h3>
		<p class="muted">{character.honourTenets.tenetsList.map((t) => it(t)).join(' • ')}</p>
	</div>

	<Divider />

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Armi" />
			<ItemList>
				{#each character.classWeapons as weapon}
					<li>
						<strong>{it(weapon.name)}</strong>
						{weapon.damage ?? ''}
						{weapon.amount ? it(weapon.amount) : ''}
					</li>
				{/each}
			</ItemList>
		</div>
		<div class="col">
			<SectionHeading text="Armatura" />
			<p><strong>{it(character.armor.style)}</strong> <span class="muted">Tier {character.armor.tier}</span></p>
			<p class="muted">{it(character.armor.description)}</p>
		</div>
	</div>

	<div class="two-col">
		<div class="col">
			<SectionHeading text="Equipaggiamento" />
			<ItemList>
				{#each character.equipment as item}
					<li>{item}</li>
				{/each}
			</ItemList>
		</div>
		<div class="col">
			<SectionHeading text="Tratto" />
			<p><strong>{it(character.feature.title)}</strong></p>
			<p class="muted">{it(character.feature.description)}</p>
		</div>
	</div>

	{#if character.unseenText || character.shintaiText}
		<Divider />
		<div class="texts">
			{#if character.unseenText}
				<div class="text-col">
					<SectionHeading text="Testo dell'Invisibile" center />
					<p class="badge">{it(character.unseenText.title)}</p>
					<p class="muted">{it(character.unseenText.description)}</p>
				</div>
			{/if}
			{#if character.unseenText && character.shintaiText}
				<div class="vsep"></div>
			{/if}
			{#if character.shintaiText}
				<div class="text-col">
					<SectionHeading text="Testo Shintai" center />
					<p class="badge">{it(character.shintaiText.title)}</p>
					<p class="muted">{it(character.shintaiText.description)}</p>
				</div>
			{/if}
		</div>
	{/if}
</SheetFrame>

<style>
	.ronin-header {
		text-align: center;
		margin-bottom: var(--space-lg);
	}
	.name {
		font-family: var(--font-heading);
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-accent);
		margin: var(--space-xs) 0;
		letter-spacing: 0.02em;
	}
	.nick {
		font-size: 1.15rem;
		margin: var(--space-xs) 0;
	}
	.kanji {
		font-size: 1.4rem;
		font-family: var(--font-heading);
		color: var(--color-accent);
		margin: var(--space-xs) 0;
	}
	.japanese {
		font-size: 1.15rem;
		font-family: var(--font-special);
		margin: var(--space-xs) 0;
	}
	.class-name {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--color-accent);
		margin: var(--space-xs) 0 0;
		letter-spacing: 0.05em;
	}
	.stats-row {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: var(--space-md);
		text-align: center;
		font-size: 0.95rem;
	}
	.stats-row p {
		margin: 0;
	}
	.two-col {
		display: grid;
		grid-template-columns: 5fr 4fr;
		gap: var(--space-lg);
		margin: var(--space-lg) 0;
	}
	.two-col .col {
		min-width: 0;
	}
	.muted {
		color: var(--color-text-muted);
		margin: var(--space-xs) 0;
	}
	.tenets {
		text-align: center;
		margin: var(--space-lg) 0;
	}
	.tenet-title {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--color-accent);
		margin: var(--space-sm) 0;
		letter-spacing: 0.05em;
	}
	.texts {
		display: flex;
		align-items: stretch;
		gap: var(--space-lg);
		justify-content: center;
	}
	.text-col {
		flex: 1;
		text-align: center;
	}
	.badge {
		font-family: var(--font-special);
		font-size: 0.85rem;
		letter-spacing: 0.5em;
		background: var(--color-surface-alt);
		border-radius: var(--radius-sm);
		padding: var(--space-xs) var(--space-md);
		display: inline-block;
		color: var(--color-text-muted);
	}
	.vsep {
		width: 1px;
		background: var(--color-border);
	}
	@media (max-width: 768px) {
		.two-col,
		.texts {
			grid-template-columns: 1fr;
			flex-direction: column;
		}
		.vsep {
			display: none;
		}
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		name,
		classLabel,
		children
	}: {
		name?: string;
		classLabel?: string;
		children?: Snippet;
	} = $props();
</script>

<div class="sheet">
	{#if name !== undefined}
		<div class="sheet-header">
			<h2 class="sheet-name">{name || '—'}</h2>
			{#if classLabel}
				<p class="class-name">{classLabel}</p>
			{/if}
		</div>
	{/if}

	{@render children?.()}
</div>

<style>
	.sheet {
		border: 1px solid var(--color-border);
		padding: var(--space-lg);
	}
	.sheet-header {
		text-align: center;
		margin-bottom: var(--space-lg);
	}
	.sheet-name {
		font-family: var(--font-heading);
		font-size: 2rem;
		color: var(--color-accent);
		text-transform: uppercase;
		text-align: center;
		margin: 0;
		letter-spacing: 0.02em;
		line-height: 1.1;
	}
	.class-name {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-text-muted);
		margin: var(--space-sm) 0 0;
	}
</style>

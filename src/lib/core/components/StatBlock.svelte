<script lang="ts">
	let {
		label,
		value,
		mod
	}: { label: string; value: string | number; mod?: number } = $props();
</script>

<div class="stat-block">
	<span class="stat-label">{label}</span>
	<span class="stat-value">{value}</span>
	{#if mod !== undefined}
		<span class="stat-mod">{mod >= 0 ? '+' : ''}{mod}</span>
	{/if}
</div>

<style>
	.stat-block {
		flex: 1;
		text-align: center;
	}
	.stat-label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--color-text-dim);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	.stat-value {
		display: block;
		font-family: var(--font-heading);
		font-size: 2rem;
		color: var(--color-text);
		line-height: 1;
	}
	.stat-mod {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--color-text-dim);
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<ul class="item-list">
	{@render children()}
</ul>

<style>
	.item-list {
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 0.85rem;
		color: var(--color-text);
	}
	.item-list :global(li) {
		padding: 3px 0 3px var(--space-sm);
		border-left: 2px solid var(--color-accent);
		margin-bottom: 2px;
	}
	.item-list :global(strong) {
		color: var(--color-text);
	}
</style>

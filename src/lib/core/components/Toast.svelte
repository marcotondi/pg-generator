<script lang="ts">
	import { toast } from '$lib/core/toast.svelte';
</script>

<div class="toast" class:visible={toast.visible} role="status" aria-live="polite">
	{toast.message}
</div>

<style>
	.toast {
		position: fixed;
		bottom: var(--space-lg);
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-accent);
		color: var(--color-bg);
		font-family: var(--font-heading);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-sm);
		z-index: 1000;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s;
	}
	.toast.visible {
		opacity: 1;
	}
</style>

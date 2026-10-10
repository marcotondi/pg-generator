<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Toast from '$lib/core/components/Toast.svelte';

	let { children } = $props();

	let updateReady = $state(false);
	let registration = $state<ServiceWorkerRegistration | null>(null);

	onMount(() => {
		if (!('serviceWorker' in navigator) || import.meta.env.DEV) return;
		navigator.serviceWorker.register('/service-worker.js').then((reg) => {
			registration = reg;
			if (reg.waiting) updateReady = true;
			reg.addEventListener('updatefound', () => {
				const installing = reg.installing;
				installing?.addEventListener('statechange', () => {
					if (installing.state === 'installed' && navigator.serviceWorker.controller) {
						updateReady = true;
					}
				});
			});
		});
	});

	function reload() {
		registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
		location.reload();
	}
</script>

{@render children()}
<Toast />

{#if updateReady}
	<div class="update-banner" role="alert">
		<span>Nuova versione disponibile</span>
		<button onclick={reload}>Ricarica</button>
	</div>
{/if}

<style>
	.update-banner {
		position: fixed;
		bottom: var(--space-lg);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: var(--space-md);
		background: var(--color-surface);
		border: 1px solid var(--color-accent);
		color: var(--color-text);
		padding: var(--space-sm) var(--space-md);
		z-index: 1100;
	}
	.update-banner button {
		padding: var(--space-xs) var(--space-sm);
	}
</style>

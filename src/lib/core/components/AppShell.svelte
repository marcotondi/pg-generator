<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { GameMeta } from '../types';
	import Navbar from './Navbar.svelte';

	let { meta, children }: { meta: GameMeta; children: Snippet } = $props();
</script>

<div class="app theme-{meta.id}">
	<div class="app-inner">
		<Navbar currentGame={meta.id} />

		<main class="app-main">
			{@render children()}
		</main>

		<footer class="app-footer">
			<p class="license-text">{meta.license}</p>
			<p class="version-text">
				v{__APP_VERSION__} · <a href={meta.repoUrl} target="_blank" rel="noopener">GitHub</a>
			</p>
		</footer>
	</div>
</div>

{#if meta.heroImage}
	<img src={meta.heroImage} alt="" class="hero-image" />
{/if}

<style>
	.app {
		background: var(--color-bg);
		color: var(--color-text);
		font-family: var(--font-body);
		min-height: 100dvh;
		width: 100%;
	}
	.app-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--space-md) var(--space-md);
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.app-main {
		flex: 1;
		padding-top: var(--space-lg);
	}
	.app-footer {
		text-align: center;
		padding: var(--space-lg) 0 var(--space-md);
		border-top: 1px solid var(--color-accent);
		margin-top: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}
	.license-text {
		font-size: 0.75rem;
		color: var(--color-text-dim);
		line-height: 1.4;
		margin: 0;
	}
	.version-text {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--color-text-dim);
		margin: 0;
	}
	.hero-image {
		position: fixed;
		top: 18vh;
		right: 5vw;
		width: 15vw;
		height: auto;
		object-fit: contain;
		transform: rotate(var(--hero-rotate));
		opacity: var(--hero-opacity);
		pointer-events: none;
		z-index: 0;
	}
	@media (max-width: 1024px) {
		.hero-image {
			display: none;
		}
	}
</style>

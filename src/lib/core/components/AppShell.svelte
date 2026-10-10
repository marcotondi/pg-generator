<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { GameMeta } from '../types';
	import pkg from '../../../../package.json';

	let {
		meta,
		menu,
		showTitle = true,
		children
	}: {
		meta: GameMeta;
		menu?: Snippet;
		showTitle?: boolean;
		children: Snippet;
	} = $props();
</script>

<div class="app theme-{meta.id}">
	<div class="app-inner">
		<header class="app-header" class:compact={!showTitle}>
			<div class="header-row">
				{#if menu}
					{@render menu()}
				{/if}
				{#if showTitle}
					{#if meta.logo}
						<img src={meta.logo} alt="" class="header-logo" />
					{/if}
					<h1 class="app-title">{meta.title}</h1>
				{/if}
			</div>
			{#if showTitle}
				<p class="app-subtitle">{meta.subtitle}</p>
			{/if}
		</header>

		<main class="app-main">
			{@render children()}
		</main>

		<footer class="app-footer">
			<p class="license-text">{meta.license}</p>
			<p class="version-text">
				v{pkg.version} · <a href={meta.repoUrl} target="_blank" rel="noopener">GitHub</a>
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
		padding: var(--space-md);
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}
	.app-header {
		padding: var(--space-md) 0;
		border-bottom: 1px solid var(--color-accent);
		margin-bottom: var(--space-lg);
	}
	.app-header.compact {
		padding: var(--space-xs) 0;
		border-bottom: none;
		margin-bottom: 0;
	}
	.header-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}
	.header-logo {
		width: 40px;
		height: 40px;
		object-fit: contain;
		flex-shrink: 0;
	}
	.app-title {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		letter-spacing: 2px;
		color: var(--color-text);
		text-transform: uppercase;
		line-height: 1;
		margin: 0;
	}
	.app-subtitle {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--color-text-dim);
		margin: var(--space-xs) 0 0;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.app-main {
		flex: 1;
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

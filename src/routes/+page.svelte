<script lang="ts">
	import { games } from '$lib/games/registry';
	import '$lib/games/ronin/theme.css';
	import '$lib/games/pirateborg/theme.css';
</script>

<svelte:head>
	<title>PG Generator — Schede Personaggio</title>
</svelte:head>

<div class="landing">
	<header class="landing-header">
		<h1>PG Generator</h1>
		<p>Scegli il tuo gioco</p>
	</header>

	<div class="choices">
		{#each games as game (game.id)}
			<a class="choice theme-{game.id}" href="/{game.id}/">
				{#if game.logo}
					<img class="choice-logo" src={game.logo} alt="" />
				{/if}
				<h2 class="choice-title">{game.title}</h2>
				<p class="choice-tagline">{game.tagline}</p>
				<span class="choice-cta">Entra</span>
			</a>
		{/each}
	</div>

	<p class="landing-note">Genera un personaggio completo in un click, salvalo e stampalo.</p>
</div>

<style>
	.landing {
		max-width: 900px;
		margin: 0 auto;
		padding: var(--space-2xl) var(--space-md);
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-xl);
	}
	.landing-header {
		text-align: center;
	}
	.landing-header h1 {
		font-family: var(--font-heading);
		font-size: 2.6rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin: 0;
		color: var(--color-text);
	}
	.landing-header p {
		font-family: var(--font-mono);
		color: var(--color-text-dim);
		text-transform: uppercase;
		letter-spacing: 0.15em;
		font-size: 0.75rem;
		margin: var(--space-sm) 0 0;
	}
	.choices {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-lg);
	}
	.choice {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-sm);
		padding: var(--space-xl) var(--space-lg);
		border: 1px solid var(--color-border);
		background: var(--color-bg);
		color: var(--color-text);
		border-radius: var(--radius-md);
		transition: border-color 0.2s, transform 0.2s;
	}
	.choice:hover {
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}
	.choice-logo {
		width: 96px;
		height: 96px;
		object-fit: contain;
	}
	.choice-title {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		margin: 0;
		color: var(--color-accent);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.choice-tagline {
		margin: 0;
		color: var(--color-text-muted);
	}
	.choice-cta {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-text-dim);
		margin-top: var(--space-sm);
	}
	.landing-note {
		text-align: center;
		font-size: 0.85rem;
		color: var(--color-text-dim);
	}
	@media (max-width: 700px) {
		.choices {
			grid-template-columns: 1fr;
		}
	}
</style>

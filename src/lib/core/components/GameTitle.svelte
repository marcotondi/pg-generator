<script lang="ts">
	let { name, subtitle }: { name: string; subtitle: string } = $props();
</script>

<h1 class="game-title">
	<span class="game-name">
		{name}:
		<svg class="game-underline" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
			<path d="M2 4.15625C18.5 2.15625 58.5 2.15625 98 6.15625" />
		</svg>
	</span>
	<span class="game-sub">{subtitle}</span>
</h1>

<style>
	.game-title {
		text-align: center;
		font-family: var(--font-heading);
		font-size: 1.9rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		margin: 0 0 var(--space-lg);
		line-height: 1.2;
	}
	.game-name {
		position: relative;
		color: var(--color-accent);
	}
	.game-underline {
		position: absolute;
		left: 0;
		bottom: -0.35rem;
		width: 100%;
		height: 0.5rem;
		color: var(--color-accent);
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.game-sub {
		color: var(--color-text);
	}
</style>

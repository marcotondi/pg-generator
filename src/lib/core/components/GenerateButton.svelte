<script lang="ts">
	let {
		lines,
		onclick,
		ariaLabel = 'Genera un nuovo personaggio'
	}: {
		lines: string[];
		onclick: () => void;
		ariaLabel?: string;
	} = $props();
</script>

<button class="generate-btn" {onclick} aria-label={ariaLabel}>
	<span class="generate-text">
		{#each lines as line, i}{#if i > 0}<br />{/if}{line}{/each}
	</span>
</button>

<style>
	.generate-btn {
		position: relative;
		width: 160px;
		height: 160px;
		border-radius: 50%;
		border: 3px solid var(--color-accent);
		background: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		padding: 0;
		transition: background 0.2s, border-color 0.2s;
	}
	.generate-btn:hover {
		background: var(--color-accent);
		border-color: var(--color-accent-bright);
	}
	.generate-btn:hover .generate-text {
		color: var(--color-bg);
	}
	.generate-text {
		font-family: var(--font-heading);
		font-size: 1rem;
		color: var(--color-accent);
		text-transform: uppercase;
		text-align: center;
		line-height: 1.1;
		letter-spacing: 0.05em;
		transition: color 0.2s;
	}
	@media (max-width: 480px) {
		.generate-btn {
			width: 140px;
			height: 140px;
		}
	}
</style>

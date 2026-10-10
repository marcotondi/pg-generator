<script lang="ts">
	let { text, center = false }: { text: string; center?: boolean } = $props();
</script>

<h3 class="section-title" class:center>{text}</h3>

<style>
	.section-title {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--color-accent);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 var(--space-sm);
	}
	.center {
		text-align: center;
	}
</style>

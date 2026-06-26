<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import Navbase from '$lib/components/site-nav.svelte';

	let { children } = $props();

	import '$lib/styles/main.css';

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<span id="website-nametag"><a href="/">everloste.github.io</a></span>
	<Navbase />
</nav>

{@render children?.()}

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}
	@media screen and (max-width: 640px) {
		nav {
			flex-direction: column;
		}
	}
</style>
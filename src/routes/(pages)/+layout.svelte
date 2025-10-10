<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbase from '$lib/components/site-nav.svelte';

	let { children } = $props();

	import '$lib/styles/main.css';

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav style="display: flex; justify-content: space-between;">
	<span>everloste.github.io</span>
	<Navbase />
</nav>

{@render children?.()}

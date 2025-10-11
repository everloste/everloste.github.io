<script>
	import { fade } from 'svelte/transition';
	import "$lib/styles/main.css";
	export let data;
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}
<script>
	import { fade, blur } from 'svelte/transition';
	export let data;
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}
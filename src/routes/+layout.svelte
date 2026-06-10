<script>
	import { fade } from 'svelte/transition';
	import "$lib/styles/main.css";
    import MyName from '$lib/components/snippets/my-name.svelte';
    import SocialsInline from '$lib/components/snippets/socials-inline.svelte';
	export let data;
</script>

{#key data.currentRoute}
	<main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}

<footer>
	<p>
		website by <MyName/> 🏳️‍⚧️ &lowast; <a href="/sister-sites">sister sites</a> &lowast; <a href="https://github.com/everloste/everloste.github.io">source</a>
	</p>
	<p style="margin-top: 0.325rem;">
		<SocialsInline/>
	</p>
</footer>
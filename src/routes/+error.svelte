<script>
    import { page } from '$app/stores';

	import favicon from '$lib/assets/favicon.png';
	import Navbase from '$lib/components/site-nav.svelte';
</script>

<nav style="display: flex; justify-content: space-between;">
	<span id="website-nametag">everloste.github.io</span>
	<Navbase />
</nav>

<div>
	<h1>
		{$page.status}: {$page.error.message}
	</h1>
	{#if $page.status == 404}
		<p>
			sorry, the page you're on doesn't exist.
		</p>
		<p>
			if you're sure it should,
			like you clicked a link i posted and it shows you this,
			please <a href="/contact">contact me</a>.
		</p>
	{:else}
		<p>
			something went wrong.
		</p>
		<p>
			feel free to <a href="/contact">contact me</a> if you think this shouldn't be happening.
		</p>
	{/if}
	<h2>
		<a href="/">
			click here to go to the frontpage
		</a>
	</h2>
	<span style="height: 5em;">
		&nbsp;
	</span>
</div>

<style>
	div {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		text-align: center;
		flex-grow: 1;
		height: 100%;
		h1, h2, p {
			width: 100%;
		}
	}
</style>
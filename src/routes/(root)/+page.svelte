<script>
	import QuickLinks from "$lib/components/quick-links.svelte";
	import WebsiteTitle from "$lib/components/website-title.svelte";
	import NameAndPronouns from "$lib/components/snippets/name-and-pronouns.svelte";
	import { onMount } from 'svelte';

	import pfp_src from "$lib/assets/profile-picture.avif";
    import BlogPosts from "$lib/components/blog-posts.svelte";

	export let data;

	onMount(() => {
		console.log('the component has mounted');
	});
</script>

<WebsiteTitle />

<div id="introduction">
	<div>
		<p>
			hiya!
			i'm <NameAndPronouns/> - welcome to my page on the web!
		</p>
		<p>
			i'm an independent game-focused developer and artist based in Europe.
			if there's anything you might know about me, it's likely that i created <a href="https://www.curseforge.com/minecraft/mc-mods/geophilic">Geophilic</a>.
		</p>
		<p>
			i do many other things too, though - such as this website!
			have a look around it and check for yourself.
			i can't promise you'll like any of it, but i certainly hope you will!
		</p>
	</div>
	<img id="me" src={pfp_src} alt="A pixel art model of a sleepy silver fox"/>
</div>

<div id="featured-post">
	{#if data.posts.length > 0}
		{#if data.posts.length == 1}
			<h2>
				featured post
			</h2>
		{:else}
			<h2>
				featured posts
			</h2>
		{/if}
		<BlogPosts data={data}/>
	{/if}
</div>

<style>
	div#introduction {
		display: flex;
		flex-flow: row nowrap;
		align-items: flex-start;
		gap: 1em;
		img#me {
			width: 75%;
		}
	}
	@media screen and (max-width: 640px) {
		div#introduction {
			flex-direction: column-reverse;
			align-items: center;
			img#me {
				width: 50%;
			}
		}
	}
</style>
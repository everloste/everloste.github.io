<script lang="ts">
    import type { Component } from "svelte";

	export let data: {
		title: string,
		date: Date,
		content: Component,
		tags: string
		};
</script>

<article>
	<h1 class="title">
		{data.title}
	</h1>
	<p class="technical-font" style="color: var(--clr-subtext-0);">
		<span style="color: var(--clr-subtext-1);">
			<svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"/></svg>
			&thinsp;published
		</span>
		<b>
			{data.date.toLocaleDateString("en-IE", {weekday: "long", year: "2-digit", month: "short", day: "2-digit"})}
		</b>
		&lowast;
		written by Bee
	</p>
	<hr class="dividing-line">
	<svelte:component this={data.content}/>
</article>

<div class="post-end">
	thank you for reading! <a href="/blog">click here to go back.</a>
</div>

<style>
	.title {
		line-height: 1.25em;
		text-align: start;
		text-wrap: wrap balance;
		&::before {
			content: "";
		}
	}
	.dividing-line {
		margin: 1em 0;
	}
	article {
		padding: 0 5%;
		line-height: 1.75em;
		margin-bottom: 3em;
	}
	.post-end {
		text-align: center;
		margin-bottom: 3em;
		> a {
			border: 1px solid currentColor;
			border-radius: 0.25em;
			padding: 0.25em 0.5em;
			&:hover {
				border-width: 2px;
			}
		}
	}
</style>
<script lang="ts">
    import type { Component } from "svelte";

	export let data: {
		title: string,
		date: Date,
		content: Component
		};
</script>

<article>
	<h1>
		&gt; {data.title}
	</h1>
	<p>
		<b>
			{data.date.toLocaleDateString("en-IE", {weekday: "long", year: "numeric", month: "short", day: "2-digit",})}
		</b>
	</p>
	<svelte:component this={data.content}/>
</article>
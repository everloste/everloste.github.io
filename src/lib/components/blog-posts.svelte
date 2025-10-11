<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<a href={post.path} class="unformatted">
			<p>
				<b>{post.meta.title}</b>
			</p>
			<p style="text-align: right;">
				{new Date(post.meta.date).toLocaleDateString("en-IE", {weekday: "long", year: "numeric", month: "short", day: "2-digit",})}
			</p>
		</a>
	{/each}
</div>

<style>
	div {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 1em;
		> a {
			padding: 1em;
			backdrop-filter: brightness(1.25);
			transition: all 0.25s var(--ease-out-perfect);
			border: solid 1px transparent;
			width: 100%;
			&:hover {
				color: var(--accent-color);
				backdrop-filter: brightness(1.5);
				border: solid 1px var(--accent-color);
			}
		}
	}
</style>
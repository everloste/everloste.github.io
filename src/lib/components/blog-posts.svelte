<script>
	export let data;
</script>

<div>
	{#each data.posts as post}
		<a href={post.path} class="unformatted">
			{#if post.meta.thumbnailstyle}
				<img 
					src={post.meta.thumbnail}
					alt="Purely for decoration, can be ignored."
					style={post.meta.thumbnailstyle}
				/>
			{:else if post.meta.thumbnail}
				<img 
					src={post.meta.thumbnail}
					alt="Purely for decoration, can be ignored."
				/>
			{/if}
			<h4>
				{post.meta.title}
			</h4>
			<p>
				{post.meta.summary}
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
			background-color: var(--background-color-brighter);
			transition: all 0.25s var(--ease-out-perfect);
			border: solid 1px transparent;
			width: 100%;
			&:hover {
				color: var(--accent-color);
				background-color: var(--background-color-brightest);
				border: solid 1px var(--accent-color);
				> img {
					filter: brightness(1.1) sepia(25%);
					height: 8em;
				}
			}
			> p {
				margin: 0;
			}
			> h4 {
				margin-top: 0;
			}
			> img + h4 {
				margin-top: 1em;
			}
			> img {
				transition: all 1s var(--ease-out-perfect);
				width: 100%;
				height: 7em;
				object-fit: cover;
			}
		}
	}
</style>
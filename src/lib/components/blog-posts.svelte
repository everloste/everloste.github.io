<script>
	let { tagfilter, data } = $props();

	function getTagList(tags) {
		return tags.split(" ");
	}
</script>

<div class="post-list">
	{#each data.posts as post}
		{#if !tagfilter || post.meta.tags.includes(tagfilter)}
			<a href={post.path} class="unformatted post">
				{#if post.meta.thumbnailstyle}
					<img 
						src={post.meta.thumbnail}
						alt="Blog post thumbnail"
						style={post.meta.thumbnailstyle}
						class="post-thumbnail"
					/>
				{:else if post.meta.thumbnail}
					<img 
						src={post.meta.thumbnail}
						alt="Blog post thumbnail"
						class="post-thumbnail"
					/>
				{/if}
				<div class="post-text">
					<h3 class="post-title">
						{post.meta.title}
					</h3>
					<p class="post-summary">
						{post.meta.summary}
					</p>
					<div class="post-metadata">
						<span class="date-span technical-font">
							<svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z"/></svg>
							&thinsp;
							{new Date(post.meta.date).toLocaleDateString("en-IE", {weekday: "short", year: "numeric", month: "short", day: "2-digit",})}
						</span>
						{#if post.meta.tags}
							<div class="tag-list">
								{#each getTagList(post.meta.tags) as tag}
									<span class="tag technical-font">{tag}</span>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</a>
		{/if}
	{/each}
</div>

<style>
	.post-metadata {
		color: var(--clr-subtext-0);
		
		/* CONTENT DISPLAY */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;

		/* SPACING */
		margin-top: 1em;

		/* CHILD ELEMENTS */
		.date-span {
			padding: 0.25em 0;
		}
		.tag-list {
			display: flex;
			flex-wrap: wrap;
			gap: 1em;
			.tag {
				border: solid 1px currentColor;
				padding: 0.25em 0.5em;
				font-size: 0.8em;
			}
		}
	}
	.post-list {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 1em;
		.post {
			display: flex;
			gap: 1em;
			padding: 1em;
			background-color: var(--background-color-brighter);
			transition: all 0.25s var(--ease-out-perfect);
			border: solid 1px transparent;
			width: 100%;
			&:hover {
				color: var(--accent-color);
				background-color: var(--background-color-brightest);
				border: solid 1px var(--accent-color);
				/* > img {
					filter: brightness(1.1) sepia(25%);
					height: 8em;
				} */
			}
			.post-thumbnail {
				transition: all 1s var(--ease-out-perfect);
				width: 33%; height: 8em;
				object-fit: cover;
			}
			.post-text {
				display: flex;
				width: 66%;
				flex-flow: column wrap;
				flex-grow: 1;
				.post-title {
					margin-top: 0;
					margin-bottom: 0;
				}
				.post-summary {
					flex-grow: 1;
				}
			}
		}
	}

	@media screen and (max-width: 512px) {
		.post {
			flex-direction: column;
			.post-thumbnail {
				width: 100% !important;
			}
			.post-text {
				width: 100% !important;
			}
		}
	}

</style>
<script>
	export let data;
</script>

<h1>Blog</h1>

<ul>
	{#each data.posts as post}
		<li>
			<b>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</b>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
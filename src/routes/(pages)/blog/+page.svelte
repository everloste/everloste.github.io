<script>
	import BlogPosts from "$lib/components/blog-posts.svelte";
	export let data;
</script>

<h1>writing</h1>

<BlogPosts data={data} tagfilter=""/>
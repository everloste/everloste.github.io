export const load = async ({ fetch }) => {
	const response = await fetch(`./api/blog`);
	const old_posts = await response.json();
	let posts = [];

	// for this page, we want to filter the posts we want
	old_posts.forEach(post => {
		if (post.meta.tags.includes("featured")) {
			posts.push(post)
		}
	});

	return {
		posts
	};
};
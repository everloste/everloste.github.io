export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/lib/blog/*.mdx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as {[key: string]: any};
			const postPath = "/blog/" + path.split("/").at(-1)?.slice(0, -4);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
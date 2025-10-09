//import type { PageLoad } from './$types';

export async function load({ params }): Promise<{}> {
	const post = await import(`$lib/blog/${params.slug}.mdx`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
};
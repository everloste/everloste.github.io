//import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export async function load({ params }): Promise<{}> {
	const post = await import(`$lib/blog/${params.slug}.mdx`);
	const title = post.metadata.title as string;
	const date = new Date(post.metadata.date);
	const content = post.default as Component;

	return {
		content,
		title,
		date
	};
};
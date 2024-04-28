import { getFirestoreDoc } from '$lib/firebase';

interface BlogData {
	title: string;
	content: string;
	author: string;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const blogData = await getFirestoreDoc<BlogData>(`blogs/${params.slug}`);
	if (blogData) {
		return blogData;
	}
	throw new Error('Resource not found');
}

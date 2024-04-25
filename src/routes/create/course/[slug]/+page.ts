import { getFirestoreDoc } from "$lib/firebase";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let data;
	try {
		data = getFirestoreDoc(`courses/${params.slug}`);
	} catch (error) {
		console.error(error);
	}
	return data || {};
}

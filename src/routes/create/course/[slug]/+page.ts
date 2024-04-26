import { getFirestoreDoc } from "$lib/firebase";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let data = {
		title: "",
		description: "",
		chapters: [{
			title: "",
			content: ""
		}],
		id : "",
	};
	try {
		const doc = await getFirestoreDoc<typeof data>(`courses/${params.slug}`);
		if (doc !== null) {
			data = doc;
			data.id = params.slug
		}
	} catch (error) {
		console.error(error);
	}
	return data;
}

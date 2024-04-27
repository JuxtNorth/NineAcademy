/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return { courseId: params.slug };
}

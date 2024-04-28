<script lang="ts">
	import { BlogTab } from '$components';
	import { getFirebaseApp } from '$lib/firebase';
	import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let blogs: Array<{ id: string; title: string }> = [];

	function getBannerVariant(index: number) {
		return 'abcd'[index % blogs.length] as 'a' | 'b' | 'c' | 'd';
	}

	onMount(() => getBlogs());

	async function getBlogs() {
		const db = getFirestore(getFirebaseApp());
		const blogQuery = query(collection(db, 'resource-names'), where('type', '==', 'blog'));
		const blogDocs = await getDocs(blogQuery);
		blogDocs.forEach((doc) => {
			const data = doc.data();
			blogs.push({ id: doc.id, title: data.name });
		});
		blogs = blogs;
	}
</script>

<main class="mx-auto max-w-[100rem] space-y-8 p-8 text-center">
	<h1 class="mx-auto text-3xl font-semibold md:max-w-[72%] md:text-5xl">Explore Courses</h1>
	<section class="grid grid-flow-row gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
		{#each blogs as blog, index}
			<BlogTab {...blog} variant={getBannerVariant(index)} />
		{/each}
	</section>
</main>

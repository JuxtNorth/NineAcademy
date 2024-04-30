<script lang="ts">
	import { CourseTab } from '$components';
	import { user } from '$lib/stores';
	import { getFirebaseApp, getFirestoreDoc } from '$lib/firebase';
	import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
	import { Nav } from '$components';
	import { fade } from 'svelte/transition';

	let ownedCourses: string[] = [];
	let loadingState: 'progress' | 'complete' = 'progress';

	let courses: Array<{ id: string; title: string }> = [];

	function getBannerVariant(index: number) {
		return 'abcd'[index % courses.length] as 'a' | 'b' | 'c' | 'd';
	}

	async function getOwnedCourseIDs(uid: string): Promise<string[]> {
		const userDoc = await getFirestoreDoc<{ purchases: string[] }>(`users/${uid}`);
		loadingState = 'complete';
		return userDoc?.purchases ?? [];
	}

	async function getCourseNames(uid: string) {
		const db = getFirestore(getFirebaseApp());
		const courseQuery = query(collection(db, 'resource-names'), where('type', '==', 'course'));
		const courseDocs = await getDocs(courseQuery);
		ownedCourses = await getOwnedCourseIDs(uid);
		courses = [];
		courseDocs.forEach((doc) => {
			if (ownedCourses.includes(doc.id)) {
				courses.push({ id: doc.id, title: doc.data().name });
			}
		});
	}

	user.subscribe(async (userData) => {
		if (userData === null) return;
		getCourseNames(userData.uid);
	});
</script>

<Nav />
<main class="mx-auto max-w-[100rem] space-y-8 p-8">
	<h1 class="ml-4 text-3xl font-semibold md:max-w-[72%] md:text-5xl">DashBoard</h1>
	<div class="space-y-6 p-4 text-left">
		<p class="text-2xl">Your Courses</p>
		<section class="grid grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#if loadingState === 'progress'}
				<CourseTab skeleton />
				<CourseTab skeleton />
				<CourseTab skeleton />
				<CourseTab skeleton />
				<CourseTab skeleton />
				<CourseTab skeleton />
			{:else if loadingState === 'complete'}
				{#if courses.length === 0}
					<div class="flex flex-col gap-4 items-center justify-center fixed top-0 left-0 h-screen w-screen bg-background" in:fade>
						<p>You don't own any courses yet.</p>
						<a href="/explore" class="px-5 py-3 bg-surface rounded-full block w-fit hover:brightness-125 transition-[filter] text-sm">Explore Courses</a>
					</div>
				{:else}
					{#each courses as course, index}
						<CourseTab {...course} owned={ownedCourses} variant={getBannerVariant(index)} />
					{/each}
				{/if}
			{/if}
		</section>
	</div>
</main>

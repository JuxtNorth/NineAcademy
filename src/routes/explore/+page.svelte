<script lang="ts">
	import { CourseTab, Nav } from '$components';
	import { user } from '$lib/stores';
	import { getFirebaseApp, getFirestoreDoc } from '$lib/firebase';
	import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

	export let ownedCourses: string[] = [];

	let courses: Array<{ id: string; title: string }> = [];

	function getBannerVariant(index: number) {
		return 'abcd'[index % courses.length] as 'a' | 'b' | 'c' | 'd';
	}

	async function getOwnedCourseIDs(uid: string) {
		const userDoc = await getFirestoreDoc<{ purchases: string[] }>(`users/${uid}`);
		if (userDoc) {
			ownedCourses = userDoc.purchases;
		}
	}

	async function getCourseNames() {
		const db = getFirestore(getFirebaseApp());
		const courseQuery = query(collection(db, 'resource-names'), where('type', '==', 'course'));
		const courseDocs = await getDocs(courseQuery);
		ownedCourses = [];
		courseDocs.forEach((doc) => {
			courses.push({
				id: doc.id,
				title: doc.data().name
			});
		});
	}

	user.subscribe(async (userData) => {
		if (userData === null) return;
		getCourseNames();
		getOwnedCourseIDs(userData.uid);
	});
</script>

<Nav />
<main class="mx-auto max-w-[100rem] space-y-8 p-8 text-center">
	<h1 class="mx-auto text-3xl font-semibold md:max-w-[72%] md:text-5xl">Explore Courses</h1>
	<section class="grid grid-flow-row gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
		{#if ownedCourses.length > 0}
			{#each courses as course, index}
				<CourseTab {...course} owned={ownedCourses} variant={getBannerVariant(index)} />
			{/each}
		{:else}
			<CourseTab skeleton />
			<CourseTab skeleton />
			<CourseTab skeleton />
			<CourseTab skeleton />
			<CourseTab skeleton />
			<CourseTab skeleton />
		{/if}
	</section>
</main>

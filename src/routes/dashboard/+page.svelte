<script lang="ts">
	import { CourseTab } from '$components';
	import { user } from '$lib/stores';
	import { getFirebaseApp, getFirestoreDoc } from '$lib/firebase';
	import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
	import { Nav } from '$components';

	let ownedCourses: string[] = [];

	let courses: Array<{ id: string; title: string }> = [];

	function getBannerVariant(index: number) {
		return 'abcd'[index % courses.length] as 'a' | 'b' | 'c' | 'd';
	}

	async function getOwnedCourseIDs(uid: string): Promise<string[]> {
		const userDoc = await getFirestoreDoc<{ purchases: string[] }>(`users/${uid}`);
		return userDoc ? userDoc.purchases : [];
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
<main class="mx-auto max-w-[100rem] space-y-8 p-8 text-center">
	<h1
		class="mx-auto ml-4 text-left text-3xl font-semibold md:max-w-[72%] md:text-5xl lg:ml-0 lg:text-center"
	>
		DashBoard
	</h1>
	<div class="space-y-6 p-4 text-left">
		<p class="text-2xl">Your Courses</p>
		<section class="grid grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each courses as course, index}
				<CourseTab {...course} owned={ownedCourses} variant={getBannerVariant(index)} />
			{/each}
		</section>
	</div>
</main>

<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
	import { getFirebaseApp } from '$lib/firebase';

	let labels: string[] = ['Courses', 'Blogs'];

	let dom: HTMLCanvasElement;

	async function getMetrics(): Promise<number[]> {
		const db = getFirestore(getFirebaseApp());
		const ratio = [0, 0];
		const docs = await getDocs(collection(db, 'resource-names'));

		docs.forEach((doc) => {
			const { type } = doc.data();
			if (type === 'course') ratio[0]++;
			if (type === 'blog') ratio[1]++;
		});
		return ratio;
	}

	onMount(async () => {
		const ratio = await getMetrics();
		const data = {
			labels: labels,
			datasets: [
				{
					label: 'Portion',
					data: ratio,
					backgroundColor: ['#f13772', '#f4b446'],
					hoverOffset: 4,
					borderWidth: 0,
					spacing: 2,
					cutout: '80%',
					radius: '80%'
				}
			]
		};
		new Chart(dom, {
			type: 'doughnut',
			data: data
		});
	});
</script>

<canvas bind:this={dom}></canvas>

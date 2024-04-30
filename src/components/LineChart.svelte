<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

  export let label = 'Page Views'
	export let labels: string[] = [
    "S", "M", "T", "W", "T", "F", "S"
  ];
	export let dataPoints: number[] = [65, 59, 80, 81, 56, 55, 40];

	let dom: HTMLCanvasElement;

	const data = {
		labels: labels,
		datasets: [
			{
				label,
				data: dataPoints,
				fill: false,
				borderColor: '#fff',
				tension: 0.1
			}
		]
	};

	onMount(() => {
		new Chart(dom, {
			type: 'line',
			data: data
		});
	});
</script>

<canvas bind:this={dom}></canvas>

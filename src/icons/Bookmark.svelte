<script lang="ts">
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let label = 'Bookmark icon';
	export let viewBox = '0 0 24 24';
	export let filled = true;
</script>

<svg {...$$restProps} {viewBox} {width} {height} xmlns="http://www.w3.org/2000/svg" aria-hidden>
	{#if filled}
		<path
			d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z"
			fill={color}
		/>
	{:else}
		<path
			d="M17.5,0H6.5A5.507,5.507,0,0,0,1,5.5V20.472a3.5,3.5,0,0,0,6.044,2.4l4.912-5.2,5.013,5.25A3.5,3.5,0,0,0,23,20.51V5.5A5.507,5.507,0,0,0,17.5,0ZM20,20.51a.5.5,0,0,1-.861.345l-6.1-6.391A1.5,1.5,0,0,0,11.95,14h0a1.5,1.5,0,0,0-1.086.47l-6,6.345a.479.479,0,0,1-.549.122A.471.471,0,0,1,4,20.472V5.5A2.5,2.5,0,0,1,6.5,3h11A2.5,2.5,0,0,1,20,5.5Z"
			fill={color}
		/>
	{/if}
</svg>
<span class="sr-only">{label}</span>

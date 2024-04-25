<script lang="ts">
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let label = 'Kebab menu icon';
	export let viewBox = '0 0 512 512';
</script>

<svg {...$$restProps} {viewBox} {width} {height} xmlns="http://www.w3.org/2000/svg" aria-hidden>
	<g fill={color}>
		<circle cx="256" cy="42.667" r="42.667" />
		<circle cx="256" cy="256" r="42.667" />
		<circle cx="256" cy="469.333" r="42.667" />
	</g>
</svg>
<span class="sr-only">{label}</span>

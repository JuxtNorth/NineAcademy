<script lang="ts">
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let label = 'Angle left icon';
	export let viewBox = '0 0 24 24';
</script>

<svg {...$$restProps} {viewBox} {width} {height} xmlns="http://www.w3.org/2000/svg" aria-hidden
	><path
		d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z"
		fill={color}
	/></svg
>
<span class="sr-only">{label}</span>

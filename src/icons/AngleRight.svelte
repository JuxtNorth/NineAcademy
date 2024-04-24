<script lang="ts">
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let label = 'Angle right icon';
	export let viewBox = '0 0 24 24';
</script>

<svg {...$$restProps} {viewBox} {width} {height} xmlns="http://www.w3.org/2000/svg" aria-hidden
	><path
		d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"
		fill={color}
	/></svg
>
<span class="sr-only">{label}</span>

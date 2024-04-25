<script lang="ts">
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let label = 'Plus icon';
	export let viewBox = '0 0 24 24';
</script>

<svg {...$$restProps} {viewBox} {width} {height} xmlns="http://www.w3.org/2000/svg" aria-hidden
	><path
		d="M17,11H13V7a1,1,0,0,0-2,0v4H7a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0V13h4a1,1,0,0,0,0-2Z"
		fill={color}
	/></svg
>
<span class="sr-only">{label}</span>

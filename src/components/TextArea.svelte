<script lang="ts">
	export let value = '';
  export let placeholder = '';
</script>

<textarea
	bind:value
	class="h-36 w-full rounded-lg bg-surface-foreground px-5 py-4 font-body outline-none outline-1 placeholder:text-muted focus:outline-fuchsia"
	{placeholder}
/>

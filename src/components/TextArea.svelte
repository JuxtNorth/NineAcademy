<script lang="ts">
	export let value = '';
  export let placeholder = '';

  let ta: HTMLTextAreaElement;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key == 'Tab') {
			e.preventDefault();
			const start = ta.selectionStart;
			const end = ta.selectionEnd;
			value = ta.value.substring(0, start) + '\t' + ta.value.substring(end);
			ta.selectionStart = ta.selectionEnd = start + 1;
		}
	}
</script>

<textarea
	bind:value
  bind:this={ta}
  on:keydown={handleKeydown}
	class="h-36 w-full rounded-lg bg-surface-foreground px-5 py-4 font-body outline-none outline-1 placeholder:text-muted focus:outline-fuchsia"
	{placeholder}
/>

<script lang="ts">
	import type { FormEventHandler, HTMLInputTypeAttribute } from 'svelte/elements';

	export let value = '';
	export let type: HTMLInputTypeAttribute = 'text';
	export let placeholder = '';

	let input: HTMLInputElement;

	const handleInput: FormEventHandler<HTMLInputElement> = () => {
		if (input) value = input.value;
	};
</script>

<input
	{type}
	{placeholder}
	bind:this={input}
	on:input={handleInput}
	class="bg-surface-foreground placeholder:text-muted w-full rounded-full text-foreground px-5 py-4 text-[16px]"
/>

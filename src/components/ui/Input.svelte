<script lang="ts">
	import type { FormEventHandler, HTMLInputTypeAttribute } from 'svelte/elements';
	import { cn } from '$lib/utils';

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
	{value}
	bind:this={input}
	on:input={handleInput}
	{...$$restProps}
	class={cn(
		'w-full rounded-full bg-surface-foreground px-5 py-4 text-[16px] text-foreground placeholder:text-muted',
		$$props['class']
	)}
/>

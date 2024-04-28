<script lang="ts">
	import { TextArea } from '$components';
	import { Input } from '$components/ui';
	import { AngleLeft } from '$icons';
	import { createEventDispatcher } from 'svelte';

	export let index = 0;
	export let title = 'Untitled';
	export let content = '';
	export let collapsed = false;

	const dispatch = createEventDispatcher();

	function toggle() {
		collapsed = !collapsed;
		if (!collapsed) dispatch('open');
	}
</script>

<article class="space-y-4 rounded-lg bg-surface p-4">
	<header class="flex items-center justify-between">
		<div class="flex select-none items-center">
			<span class="mr-3 border-r-[1px] pr-3 font-display"
				>{(index + 1).toString().padStart(2, '0')}</span
			>
			<h1 class="font-body text-lg font-bold">{title}</h1>
		</div>
		<button
			class="rotate-90 rounded-full p-1 text-sm transition-transform hover:bg-surface-foreground [&[data-collapsed='true']]:-rotate-90"
			on:click={toggle}
			data-collapsed={collapsed}
		>
			<AngleLeft />
		</button>
	</header>
	{#if !collapsed}
		<div class="space-y-2">
			<Input
				class="rounded-lg text-sm"
				placeholder="Enter Chapter title"
				bind:value={title}
				required
			/>
			<TextArea bind:value={content} placeholder="Enter chapter content" required />
		</div>
	{/if}
</article>

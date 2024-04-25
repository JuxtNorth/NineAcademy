<script lang="ts">
	import { TextArea } from '$components';
	import { Input } from '$components/ui';
	import { Kebab } from '$icons';
	import { createEventDispatcher } from 'svelte';

	export let index = 0;
	export let title = 'Lorem Ipsum';
	export let content = '';
	export let collapsed = false;

	const dispatch = createEventDispatcher();

	function toggle(e: Event) {
		if (e.target === e.currentTarget) {
			collapsed = !collapsed;
			if (!collapsed) dispatch('open');
		}
	}
</script>

<article class="space-y-4 rounded-lg bg-surface p-4">
	<header
		class="flex items-center justify-between"
		on:click={toggle}
		on:keypress={toggle}
		tabindex="0"
		role="button"
	>
		<div class="flex select-none items-center">
			<span class="mr-3 border-r-[1px] pr-3 font-display"
				>{(index + 1).toString().padStart(2, '0')}</span
			>
			<h1 class="font-body text-lg font-bold">{title || 'Undefined'}</h1>
		</div>
		<button class="rounded-full p-1 text-sm hover:bg-surface-foreground">
			<Kebab />
		</button>
	</header>
	{#if !collapsed}
		<div class="space-y-2">
			<Input class="rounded-lg text-sm" placeholder="Enter Chapter title" bind:value={title} />
			<TextArea bind:value={content} placeholder="Enter chapter content" />
		</div>
	{/if}
</article>

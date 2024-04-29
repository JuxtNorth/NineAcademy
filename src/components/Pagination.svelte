<script lang="ts">
	import { Button } from './ui';
	import { AngleLeft, AngleRight } from '$icons';
	import { cn } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	export let editLink: string | undefined;

	const dispatch = createEventDispatcher();
</script>

<ul class={cn('flex gap-2', $$props['class'])}>
	{#if editLink}
		<li>
			<a
				class="flex h-full items-center justify-center rounded-full bg-blue px-5 text-sm"
				href={editLink}>Edit Course</a
			>
		</li>
	{/if}
	<li>
		<Button size="icon" style="mono" class="rounded-full" on:click={() => dispatch('prev')}
			><AngleLeft /></Button
		>
	</li>
	<li>
		<Button size="icon" style="mono" class="rounded-full" on:click={() => dispatch('next')}
			><AngleRight /></Button
		>
	</li>
</ul>

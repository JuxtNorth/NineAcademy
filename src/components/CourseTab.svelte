<script lang="ts">
	import { cva } from 'class-variance-authority';
	import { purchaseCourse } from '$lib/firebase';
	import type { VariantProps } from 'tailwind-variants';
	import { user } from '$lib/stores';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { Skeleton } from './ui';

	export let skeleton = false;
	export let title = '';
	export let owned: string[] = [];
	export let id = '';

	let isOwned = false;

	const bannerVariants = cva('h-48 w-full rounded-2xl', {
		variants: {
			variant: {
				a: 'bg-gradient-to-tr from-blue to-fuchsia',
				b: 'bg-gradient-to-bl from-rose to-fuchsia',
				c: 'bg-gradient-to-tr from-orange to-rose',
				d: 'bg-gradient-to-tr from-blue to-rose'
			}
		}
	});

	type Variants = VariantProps<typeof bannerVariants>;
	export let variant: Variants['variant'] = 'a';

	function buy() {
		const userData = get(user);
		if (userData) {
			purchaseCourse(userData.uid, id)
				.then(() => {
					owned = [...owned, id];
				})
				.catch(console.error);
		}
	}

	$: isOwned = owned.includes(id);
</script>

<article class="flex flex-col gap-4 rounded-2xl bg-surface p-4">
	{#if skeleton}
		<Skeleton class="h-48 w-full"></Skeleton>
		<div class="flex justify-between px-2 py-2">
			<Skeleton class="h-3 w-32" />
			<Skeleton class="h-3 w-24" />
		</div>
	{:else}
		<div class={bannerVariants({ variant })}></div>
		<div class="flex justify-between px-2 py-2">
			<p class="font-semibold">{title}</p>
			{#if isOwned}
				<button class="text-blue" on:click={() => goto(`course/${id}`)}>View</button>
			{:else}
				<button class="text-blue" on:click={buy}>Purchase</button>
			{/if}
		</div>
	{/if}
</article>

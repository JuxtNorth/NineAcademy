<script lang="ts">
	import { cva } from 'class-variance-authority';
	import type { VariantProps } from 'tailwind-variants';
	import { Skeleton } from './ui';

	export let skeleton = false;
	export let title = '';
	export let id = '';

	const bannerVariants = cva('h-48 w-full rounded-2xl', {
		variants: {
			variant: {
				a: 'bg-gradient-to-tr from-orange to-rose',
				b: 'bg-gradient-to-bl from-rose to-fuchsia',
				c: 'bg-gradient-to-tr from-blue to-fuchsia',
				d: 'bg-gradient-to-tr from-blue to-rose'
			}
		}
	});

	type Variants = VariantProps<typeof bannerVariants>;
	export let variant: Variants['variant'] = 'a';
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
			<a class="text-blue" href={`blogs/${id}`}>View</a>
		</div>
	{/if}
</article>

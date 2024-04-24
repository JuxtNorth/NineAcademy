<script lang="ts">
	import { cn } from '$lib/utils';
	import { cva, type VariantProps } from 'class-variance-authority';

	const buttonVariants = cva(
		' text-[16px] text-foreground hover:brightness-125 transition-[filter]',
		{
			variants: {
				size: {
					auto: 'px-4 py-2 rounded-full',
					wide: 'w-full py-5 rounded-full',
					icon: 'p-3 rounded-lg'
				},
				style: {
					primary: 'bg-primary',
					mono: 'bg-surface-foreground'
				}
			}
		}
	);

	type variant = VariantProps<typeof buttonVariants>;

	export let size: variant['size'] = 'auto';
	export let style: variant['style'] = 'primary';
</script>

<button {...$$restProps} on:click class={cn(buttonVariants({ size, style }), $$props['class'])}>
	<slot />
</button>

<div {...$$restProps}>
	<div class="grid grid-cols-3 grid-rows-3 gap-2">
		<div class="icon-container col-start-3 row-start-1">
			<img class="scale-[1.2]" src="/logos/svelte.svg" alt="Svelte Icon" />
		</div>
		<div
			class="icon-container col-start-2 row-start-2
    "
		>
			<img src="/logos/astro.svg" alt="Astro Icon" class="scale-[0.8]" />
		</div>
		<div class="icon-container col-start-3 row-start-2">
			<img class="rounded-md" src="/logos/typescript.svg" alt="Typescript Icon" />
		</div>
		<div class="icon-container col-start-2 row-start-3">
			<img class="scale-[1.24]" src="/logos/react.svg" alt="React Icon" />
		</div>
		<div class="icon-container col-start-1 row-start-3">
			<img class="size-full scale-[0.9] invert" src="/logos/next-js.svg" alt="Next JS Icon" />
		</div>
	</div>
</div>

<style lang="postcss">
	.icon-container {
		@apply size-14 rounded-lg bg-surface-foreground p-3 md:size-16 md:p-4 lg:size-24 lg:p-6;
	}
</style>

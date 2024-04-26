<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { Code } from '$components';

	export let source = '';
</script>

<article class="content-markdown">
	<SvelteMarkdown
		{source}
		renderers={{
			code: Code
		}}
	/>
</article>

<style lang="postcss">
	:global(.content-markdown) {
		@apply max-w-[80ch] p-4;
	}

	:global(.content-markdown > h1) {
		@apply mb-4 text-3xl font-bold last:!mb-4;
	}

	:global(.content-markdown > h2) {
		@apply mb-4 text-2xl font-semibold last:!mb-4;
	}

	:global(.content-markdown > p) {
		@apply mb-4 text-lg font-semibold last:!mb-4;
	}
</style>

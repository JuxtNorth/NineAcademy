<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { Code } from "$components";

	export let source = '';
</script>

<article class="content-markdown">
	<SvelteMarkdown {source} renderers={{
		code: Code
	}}/>
</article>

<style lang="postcss">
	:global(.content-markdown) {
		@apply max-w-[80ch] p-4;
	}

	:global(.content-markdown > h1) {
		@apply text-3xl font-bold mb-4 last:!mb-4;
	}

	:global(.content-markdown > h2) {
		@apply text-2xl font-semibold mb-4 last:!mb-4;
	}

	:global(.content-markdown > p) {
		@apply text-lg font-semibold mb-4 last:!mb-4;
	}
</style>

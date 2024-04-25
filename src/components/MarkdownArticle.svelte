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
		@apply mb-8 text-4xl font-bold;
	}

	:global(.content-markdown > p) {
		@apply mb-4 text-lg font-semibold;
	}
</style>

<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let source = '';
</script>

<div class="content-markdown">
	<SvelteMarkdown {source} />
</div>

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

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';

	let span: HTMLSpanElement;
	let observer: MutationObserver;
	let text = '';

	onMount(() => {
		text = span.innerText;
		observer = new MutationObserver((mutations) => {
			console.log('Update');
			mutations.forEach((mutation) => {
				console.log(span.innerText);
				if (mutation.type === 'characterData') {
					text = span.innerText;
				}
			});
		});
		observer.observe(span, { characterData: true, subtree: true });
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<span bind:this={span} class="hidden" aria-hidden><slot /></span>
<Highlight
	language={typescript}
	code={text
		.trim()
		.substring(3, text.length - 3)
		.trim()}
/>

<style lang="postcss">
	:global(pre code.hljs) {
		@apply mb-4 block overflow-x-auto rounded-lg bg-surface-foreground p-4;
	}

	:global(.hljs) {
		@apply text-[#abb2bf];
	}

	:global(.hljs-comment, .hljs-quote) {
		@apply italic text-[#5c6370];
	}

	:global(.hljs-doctag, .hljs-keyword, .hljs-formula) {
		@apply text-[#c678dd];
	}

	:global(.hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst) {
		@apply text-[#e06c75];
	}

	:global(.hljs-literal) {
		@apply text-[#56b6c2];
	}

	:global(.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta .hljs-string) {
		@apply text-[#98c379];
	}

	:global(
			.hljs-attr,
			.hljs-variable,
			.hljs-template-variable,
			.hljs-type,
			.hljs-selector-class,
			.hljs-selector-attr,
			.hljs-selector-pseudo,
			.hljs-number
		) {
		@apply text-[#d19a66];
	}

	:global(.hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title) {
		@apply text-[#61aeee];
	}

	:global(.hljs-built_in, .hljs-title.class_, .hljs-class .hljs-title) {
		@apply text-[#e6c07b];
	}

	:global(.hljs-emphasis) {
		@apply italic;
	}

	:global(.hljs-strong) {
		@apply font-[bold];
	}

	:global(.hljs-link) {
		@apply underline;
	}
</style>

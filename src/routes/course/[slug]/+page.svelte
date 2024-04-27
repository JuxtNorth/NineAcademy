<script lang="ts">
	import { Banner, MarkdownArticle, Nav, Pagination } from '$components';
	import { CheckBox } from '$components/ui';
	import type { PageData } from './$types';

	export let data: PageData;

	let selectedChapterIndex = 0;

	function getNavigationFunc(offset: number): () => void {
		return () => {
			selectedChapterIndex += offset;
			if (selectedChapterIndex < 0) selectedChapterIndex = data.chapters.length - 1;
			if (selectedChapterIndex >= data.chapters.length) selectedChapterIndex = 0;
		};
	}

	function getChapterSelector(index: number): () => void {
		return () => (selectedChapterIndex = index);
	}
</script>

<Nav />
<main class="mx-auto grid max-w-[100rem] grid-flow-row gap-4 p-4 lg:grid-cols-[auto_75%]">
	<aside
		class="top-4 row-start-2 mt-8 overflow-hidden rounded-3xl bg-surface lg:sticky lg:row-start-1 lg:mt-0 lg:max-h-[calc(100vh-2rem)]"
	>
		<div class="h-full space-y-6 overflow-y-scroll p-6">
			<ul class="space-y-2">
				{#each data.chapters as { title }, index}
					<li>
						<button
							on:click={getChapterSelector(index)}
							data-active={index === selectedChapterIndex}
							class="flex size-full items-center gap-2 text-left text-base font-semibold text-muted [&[data-active='false']]:hover:text-foreground [&[data-active='true']]:text-blue"
						>
							{title}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</aside>
	<section>
		<Banner class="mb-8">
			<slot slot="title">{data.title}</slot>
			<slot slot="description">{data.description}</slot>
		</Banner>
		<MarkdownArticle source={data.chapters[selectedChapterIndex].content} />
		<Pagination class="px-4" on:prev={getNavigationFunc(-1)} on:next={getNavigationFunc(1)} />
	</section>
</main>

<script lang="ts">
	import { Input, Button } from '$components/ui';
	import { Nav, ChapterEditor, MarkdownArticle } from '$components';
	import { Plus } from '$icons';
	import type { PageData } from "./$types";

	export let data: PageData;

	let { title, description, chapters } = data;
	let selectedChapterIndex = 0;

	function addNewChapter() {
		const newchapter = { title: '', content: '# Undefined' };
		chapters = [...chapters, newchapter];
	}
</script>

<Nav />
<div class="mx-auto max-w-[100rem] p-4 lg:grid lg:grid-cols-2 lg:gap-8">
	<div class="no-scrollbar space-y-4 lg:h-[calc(100vh-2rem)] lg:overflow-y-scroll">
		<header class="flex justify-between">
			<h1 class="text-4xl font-bold">{title || 'Untitled'}</h1>
			<Button size="auto" class="rounded-lg">Commit</Button>
		</header>
		<div class="space-y-2">
			<Input bind:value={title} class="rounded-lg" placeholder="Enter Course title" />
			<textarea
				bind:value={description}
				class="h-36 w-full rounded-lg bg-surface-foreground px-5 py-4 font-body outline-none outline-1 placeholder:text-muted focus:outline-fuchsia"
				placeholder="Enter description"
			/>
			<Button size="wide" class="rounded-lg bg-foreground py-3 text-sm text-background"
				>Update Details</Button
			>
		</div>
		<section class="space-y-4">
			<header class="flex items-center justify-between">
				<h1 class="text-2xl font-bold">Chapters</h1>
				<button on:click={addNewChapter} class="h-full">
					<Plus class="text-2xl" />
				</button>
			</header>
			<section class="space-y-2">
				{#each chapters as chapter, index}
					<ChapterEditor
						{index}
						bind:content={chapter.content}
						bind:title={chapter.title}
						on:open={() => (selectedChapterIndex = index)}
						collapsed={index !== selectedChapterIndex}
					/>
				{/each}
			</section>
		</section>
	</div>
	<section class="space-y-4">
		<header>
			<h1 class="text-4xl font-bold">Preview</h1>
		</header>
		<div class="h-fit overflow-y-scroll rounded-lg bg-surface p-4">
			<MarkdownArticle source={chapters[selectedChapterIndex].content} />
		</div>
	</section>
</div>

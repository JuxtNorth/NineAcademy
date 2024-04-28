<script lang="ts">
	import { Banner, MarkdownArticle, Nav, Pagination } from '$components';
	import { getFirestoreDoc } from '$lib/firebase';
	import { user } from '$lib/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	interface CourseData {
		title: string;
		description: string;
		chapters: Array<{ title: string; content: string }>;
		author: string;
	}

	let title = '',
		description = '',
		chapters: CourseData['chapters'] = [],
		selectedChapterIndex = 0,
		author = '/',
		userId = '#';

	user.subscribe(async (userData) => {
		if (userData === null) return;
		userId = userData.uid;
		const courseData = await getFirestoreDoc<CourseData>(`courses/${data.courseId}`);
		if (courseData) {
			({ title, description, author } = courseData);
			chapters = [...courseData.chapters];
			selectedChapterIndex = 0;
		} else {
			// redirect to 404 page
		}
	});

	function getNavigationFunc(offset: number): () => void {
		return () => {
			selectedChapterIndex += offset;
			if (selectedChapterIndex < 0) selectedChapterIndex = chapters.length - 1;
			if (selectedChapterIndex >= chapters.length) selectedChapterIndex = 0;
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
				{#each chapters as { title }, index}
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
			<slot slot="title">{title}</slot>
			<slot slot="description">{description}</slot>
		</Banner>
		{#if chapters.length > 0}
			<MarkdownArticle source={chapters[selectedChapterIndex].content} />
		{/if}
		<Pagination
			class="px-4"
			on:prev={getNavigationFunc(-1)}
			on:next={getNavigationFunc(1)}
			on:edit{moveToEditPage}
			editLink={userId === author ? `/create/course/${data.courseId}` : undefined}
		/>
	</section>
</main>

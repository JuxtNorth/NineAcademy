<script lang="ts">
	import { Input, Button } from '$components/ui';
	import { ChapterEditor, MarkdownArticle } from '$components';
	import { Plus } from '$icons';
	import type { PageData } from './$types';
	import { alert, user } from '$lib/stores';
	import { getFirebaseApp, getFirestoreDoc } from '$lib/firebase';
	import { doc, getFirestore, writeBatch } from 'firebase/firestore';

	export let data: PageData;

	let { courseId } = data;

	interface CourseData {
		title: string;
		description: string;
		chapters: Array<{ title: string; content: string }>;
	}

	let title = '',
		description = '',
		chapters: CourseData['chapters'] = [],
		selectedChapterIndex = 0,
		userId = '';

	user.subscribe(async (userData) => {
		if (userData === null) return;
		userId = userData.uid;
		const courseData = await getFirestoreDoc<CourseData>(`courses/${courseId}`);
		if (courseData) {
			({ title, description } = courseData);
			chapters = [...courseData.chapters];
			selectedChapterIndex = 0;
		} else {
			// Show 404 page
		}
	});

	function addNewChapter() {
		chapters = [...chapters, { title: '', content: '# Undefined' }];
	}

	async function commit() {
		if (!title || !description) return;
		try {
			const db = getFirestore(getFirebaseApp());
			const batch = writeBatch(db);
			batch.set(doc(db, `courses/${courseId}`), { title, description, chapters, author: userId });
			batch.set(doc(db, `resource-names/${courseId}`), { name: title, type: 'course' });
			await batch.commit();
			alert.set({
				title: 'Success',
				description: 'Successfully update this course',
				type: 'info'
			});
		} catch (error) {
			alert.set({
				title: 'Error',
				description: 'Failed to update this resource',
				type: 'error'
			});
			console.error(error);
		}
	}
</script>

<div class="mx-auto max-w-[100rem] p-4 lg:grid lg:grid-cols-2 lg:gap-8">
	<form class="no-scrollbar space-y-4 lg:h-[calc(100vh-2rem)] lg:overflow-y-scroll p-4">
		<header class="flex justify-between">
			<h1 class="text-4xl font-bold">{title || 'Untitled'}</h1>
			<Button type="type" size="auto" class="rounded-lg" on:click={commit}>Commit</Button>
		</header>
		<div class="space-y-2">
			<Input bind:value={title} class="rounded-lg" placeholder="Enter Course title" required />
			<textarea
				bind:value={description}
				class="h-36 w-full rounded-lg bg-surface-foreground px-5 py-4 font-body outline-none outline-1 placeholder:text-muted focus:outline-fuchsia"
				placeholder="Enter description"
				required
			/>
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
	</form>
	<section class="space-y-4">
		<header>
			<h1 class="text-4xl font-bold">Preview</h1>
		</header>
		<div class="h-fit overflow-y-scroll rounded-lg bg-surface p-4">
			{#if chapters.length > 0}
				<MarkdownArticle source={chapters[selectedChapterIndex].content} />
			{/if}
		</div>
	</section>
</div>

<script>
	import { ChapterEditor, MarkdownArticle } from '$components';
	import { Button, Input } from '$components/ui';
	import { Plus } from '$icons';
	import { getFirebaseApp, setFirestoreDoc } from '$lib/firebase';
	import { getFirestore, runTransaction, collection, addDoc } from 'firebase/firestore';
	import { alert, user } from '$lib/stores';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';

	let title = 'Untitled';
	let description = '';
	let chapters = [
		{
			title: 'Undefined',
			content: ''
		}
	];
	let selectedChapterIndex = 0;

	function addNewChapter() {
		chapters = [...chapters, { title: 'Undefined', content: '# Undefined' }];
	}

	async function create() {
		if (!title || !description) return;
		const db = getFirestore(getFirebaseApp());
		try {
			const userData = get(user);
			if (!userData) {
				alert.set({
					title: 'Auth Error',
					description: 'You need to be signed in to an account in order to create a course',
					type: 'error'
				});
				return goto('/signin');
			}
			const courseId = await runTransaction(db, async () => {
				const courseRef = collection(db, 'courses');
				const courseDocRef = await addDoc(courseRef, {
					title,
					description,
					chapters,
					author: userData.uid
				});
				await setFirestoreDoc(`resource-names/${courseDocRef.id}`, {
					name: title,
					type: 'course'
				});
				return courseDocRef.id;
			});
			alert.set({
				title: 'Success',
				description: 'Successfully update this course',
				type: 'info'
			});
			goto(`/course/${courseId}`);
			console.log(courseId);
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
	<form class="no-scrollbar space-y-4 lg:h-[calc(100vh-2rem)] lg:overflow-y-scroll">
		<header class="flex justify-between">
			<h1 class="text-4xl font-bold">{title}</h1>
			<Button type="submit" size="auto" class="rounded-lg" on:click={create}>Create</Button>
		</header>
		<div class="space-y-2 lg:px-2">
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

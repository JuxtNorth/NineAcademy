<script>
	import { TextArea, MarkdownArticle } from '$components';
	import { Input, Button } from '$components/ui';
	import { getFirebaseApp } from '$lib/firebase';
	import { getFirestore, collection, runTransaction, doc } from 'firebase/firestore';
	import { get } from 'svelte/store';
	import { user, alert } from '$lib/stores';
	import { goto } from '$app/navigation';

	let title = 'Untitled',
		content = '';

	async function createBlog() {
		const db = getFirestore(getFirebaseApp());
		const userData = get(user);
		try {
			if (userData) {
				const blogsCollectionRef = collection(db, 'blogs');
				const blogDocRef = doc(blogsCollectionRef);
				await runTransaction(db, async (transaction) => {
					await transaction.set(blogDocRef, {
						title,
						content,
						author: userData.uid
					});
					await transaction.set(doc(db, `resource-names/${blogDocRef.id}`), {
						name: title,
						type: 'blog'
					});
				});
				alert.set({
					title: 'Successfully Created blog',
					description: `You'll be redirected to the blog shortly`,
					type: 'info'
				});
			} else {
				alert.set({
					title: 'Auth Error',
					description: 'You need to be signed in to an account in order to create a blog',
					type: 'error'
				})
				return goto('/signin');
			}
		} catch (error) {
			console.error(error);
			alert.set({
				title: 'Error Creating blog',
				description: 'There was an error while attempting to create this resource.',
				type: 'error'
			});
		}
	}
</script>

<main class="mx-auto mt-8 max-w-[80rem] space-y-8 lg:mb-12 p-4 lg:p-0">
	<h1 class="text-3xl">Create a blog</h1>
	<section class="grid grid-flow-row lg:grid-cols-2 gap-8">
		<form class="space-y-4">
			<Input bind:value={title} placeholder="Enter blog title" class="rounded-lg" required />
			<TextArea bind:value={content} placeholder="Enter blog content" required />
			<Button
				type="submit"
				size="wide"
				class="bg-foreground text-surface-foreground"
				on:click={createBlog}>Commit Blog</Button
			>
		</form>
		<div class="space-y-4">
			<h1 class="text-3xl font-semibold">Markdown Preview</h1>
			<MarkdownArticle source={content} class="rounded-lg bg-surface !p-8" />
		</div>
	</section>
</main>

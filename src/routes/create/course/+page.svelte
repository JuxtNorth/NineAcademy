<script>
	import { Input, Button } from '$components/ui';
	import { Nav, ChapterEditor } from '$components';
	import { Plus } from '$icons';

	let title = '';
	let description = '';
</script>

<Nav />
<div class="space-y-8 p-4">
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
			<button class="h-full">
				<Plus class="text-2xl" />
			</button>
		</header>
		<section class="space-y-2">
			<ChapterEditor />
		</section>
	</section>
</div>

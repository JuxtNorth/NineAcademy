<script lang="ts">
	import { ActionBar, Banner, MarkdownArticle, Nav, Pagination } from '$components';
	import { CheckBox } from '$components/ui';
	const content = `
# Introduction

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
	`;

	const sections = [
		{
			title: 'Introduction',
			subsections: [
				{ title: 'Lorem Introduction' },
				{ title: 'Components Lorem' },
				{ title: 'content MarkdownArticle' },
				{ title: 'features developer' },
				{ title: 'Flow cards' },
				{ title: 'Lorem Introduction' },
				{ title: 'Interactive Introduction' },
				{ title: 'Locomotion MarkdownArticle' },
				{ title: 'Episode XI' },
				{ title: 'Wild Experience' },
				{ title: 'Grow' }
			]
		},
		{
			title: 'Building an App',
			subsections: [
				{ title: 'Lorem Introduction' },
				{ title: 'Components Lorem' },
				{ title: 'content MarkdownArticle' },
				{ title: 'features developer' },
				{ title: 'Flow cards' },
				{ title: 'Lorem Introduction' },
				{ title: 'Interactive Introduction' },
				{ title: 'Locomotion MarkdownArticle' },
				{ title: 'Episode XI' },
				{ title: 'Wild Experience' },
				{ title: 'Grow' }
			]
		}
	];
</script>

<Nav />
<main class="mx-auto grid max-w-[100rem] grid-flow-row gap-4 p-4 lg:grid-cols-[auto_75%]">
	<aside
		class="top-4 row-start-2 mt-8 overflow-hidden rounded-3xl bg-surface lg:sticky lg:row-start-1 lg:mt-0 lg:max-h-[calc(100vh-2rem)]"
	>
		<div class="h-full space-y-6 overflow-y-scroll p-6">
			{#each sections as { title, subsections }}
				<ul class="space-y-2">
					<h1 class="text-2xl font-semibold">{title}</h1>
					<hr class="border-[#333]" />
					{#each subsections as { title }}
						<li class="flex items-center gap-2 py-1 text-base font-semibold">
							<CheckBox></CheckBox>
							{title}
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</aside>
	<section>
		<Banner class="mb-8" />
		<MarkdownArticle source={content} />
		<Pagination class="px-4" />
	</section>
</main>

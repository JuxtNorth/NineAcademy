<script lang="ts">
	import { MarkdownArticle } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="mx-auto w-fit p-4 lg:!mt-12">
	<MarkdownArticle source={data.content} class="lg:!w-[80ch] [&>h1]:!text-4xl" />
</main>

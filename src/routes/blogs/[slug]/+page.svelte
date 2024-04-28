<script lang="ts">
	import { MarkdownArticle, Nav } from "$components";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<Nav />
<main class="mx-auto w-fit lg:!mt-12 p-4">
	<MarkdownArticle source={data.content} class="[&>h1]:!text-4xl lg:!w-[80ch]"/>
</main>
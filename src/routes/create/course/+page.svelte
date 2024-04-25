<script>
	import { Input, Button } from '$components/ui';
	import { Nav, ChapterEditor, MarkdownArticle } from '$components';
	import { Plus } from '$icons';

	let title = '';
  let content = '';
  let chapterContent = '';
</script>

<Nav />
<div class="lg:grid lg:grid-cols-2 max-w-[100rem] mx-auto p-4 lg:gap-8">
  <div class="space-y-8 lg:h-[calc(100vh-2rem)] lg:overflow-y-scroll">
    <div class="space-y-2">
      <Input bind:value={title} class="rounded-lg" placeholder="Enter Course title" />
      <textarea
        bind:value={content}
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
        <ChapterEditor bind:content={chapterContent} bind:title />
      </section>
    </section>
  </div>
  <section class="space-y-4">
    <header>
      <h1 class="text-4xl font-bold">Preview</h1>
    </header>
    <div class="h-fit bg-surface rounded-lg overflow-y-scroll p-4">
      <MarkdownArticle source={chapterContent}/>
    </div>
  </section>
</div>

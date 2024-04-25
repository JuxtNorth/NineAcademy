<script>
	import { cn } from '$lib/utils';
	import { Heart, Bookmark } from '$icons';
</script>

<section
	class={cn(
		'relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 [background-image:radial-gradient(at_left_bottom,hsl(var(--rose)),hsl(var(--orange)))] md:min-h-96 lg:p-12',
		$$props.class
	)}
>
	<div class="absolute left-0 top-0 size-full [background-image:url('noise-textures/1.png')]" />
	<div
		class="absolute -bottom-24 -left-12 size-64 rounded-full bg-gradient-to-tr from-white/5 to-white/35 md:size-72"
	/>
	<div
		class="absolute -right-12 -top-24 size-52 -rotate-[20deg] rounded-[4rem] bg-gradient-to-bl from-white/5 to-white/35 md:size-80 lg:-bottom-24"
	/>
	<div class="z-[1]">
		<h1 class="mb-6 text-4xl font-extrabold md:text-5xl">Nextjs 14 Crash Course</h1>
		<p class="max-w-prose text-base font-semibold md:text-xl">
			Next.js is a React framework for buildi4ng full-stack web applications. You use React
			Components to build user interfaces, and Next.js for additional features and optimizations.
		</p>
	</div>
	<ul class="z-[1] mt-12 flex gap-8 md:mt-0">
		<li class="flex items-center gap-2">
			<Heart class="inline text-lg opacity-80" />
			<span>1.2k</span>
		</li>
		<li class="flex items-center gap-2">
			<Bookmark class="inline text-lg opacity-80" />
			<span>200</span>
		</li>
	</ul>
</section>

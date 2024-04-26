<script>
	import { IconGrid, Nav, NoisyOverlay } from '$components';
	import { ArrowRight } from '$icons';
</script>

<Nav />
<main class="mx-auto max-w-[120rem] space-y-16 lg:space-y-32">
	<header
		class="lg:min-h-none relative grid h-[calc(100dvh-3rem)] max-h-[76rem] grid-rows-[auto_auto] justify-center md:min-h-[36rem] lg:grid lg:grid-cols-[80%_20%] lg:grid-rows-1 lg:place-items-center"
	>
		<div
			class="mb-12 mt-auto space-y-4 px-4 text-center lg:mb-16 lg:mt-0 lg:justify-self-center lg:px-8 lg:text-left"
		>
			<h1
				class="text-[clamp(3.4rem,5vw,12rem)] font-extrabold leading-[1.1] lg:mb-2 lg:text-[clamp(6.5rem,7vw,8rem)]"
			>
				<span class="bg-gradient-to-br from-rose to-orange bg-clip-text text-transparent"
					>Level Up</span
				><br class="hidden lg:inline" />
				Your
				<span class="bg-gradient-to-br from-blue to-fuchsia bg-clip-text text-transparent"
					>Coding Game</span
				>
			</h1>
			<p class="leading-[102%] text-muted lg:text-[clamp(1rem,2vw,2.4rem)]">
				Learn Coding like a game, not a chore, with targeted courses for devs.
			</p>
		</div>
		<IconGrid
			class="absolute bottom-4 right-4 hidden lg:bottom-8 lg:right-8 [@media(min-width:280px)]:block"
		/>
	</header>
	<section class="space-y-8 p-4 text-center lg:space-y-16">
		<h1 class="mx-auto text-3xl font-semibold md:max-w-[72%] md:text-5xl">
			We offer services that are <span class="text-rose">worth</span> every
			<span class="text-orange">rupee</span> you spend.
		</h1>
		<div class="lg:p-32 lg:pt-0">
			<div class="flex w-full flex-col gap-4 md:aspect-[2/1] md:flex-row">
				<div
					class="relative aspect-square size-full overflow-hidden rounded-2xl [background-image:radial-gradient(circle_at_0%_100%,hsl(var(--rose)),hsl(var(--orange)))] md:aspect-auto"
				>
					<article
						class="absolute left-0 top-0 z-[1] flex size-full flex-col justify-between p-8 text-left"
					>
						<span class="font-body text-3xl font-bold md:text-5xl">01</span>
						<div class="space-y-2 md:space-y-4">
							<h1 class="text-3xl font-semibold md:text-[52px] md:leading-[100%]">
								Comprehensive, easy to understand courses.
							</h1>
							<p class="!mb-6 text-sm md:!mb-8 md:text-xl">
								Each course is carefully curated to make sure you get the most out of your money
							</p>
							<button
								class="flex items-center justify-around gap-2 rounded-full bg-white/30 px-6 py-3.5 text-xs text-[#444] hover:bg-white/40 md:text-sm"
							>
								Explore Courses
								<ArrowRight class="text-sm" />
							</button>
						</div>
					</article>
					<div
						class="absolute -bottom-[21%] -left-[16%] size-[80%] rounded-full bg-gradient-to-tr from-white/5 to-white/35"
					></div>
					<NoisyOverlay class="opacity-60" />
				</div>

				<div class="flex aspect-square w-full flex-col gap-4 md:aspect-auto">
					<div class="flex h-[50%] w-full gap-4">
						<div
							class="relative size-full overflow-hidden rounded-2xl [background-image:radial-gradient(circle_at_100%_100%,hsl(var(--rose)),hsl(var(--fuchsia)))]"
						>
							<article
								class="absolute left-0 top-0 z-[1] flex size-full flex-col justify-between p-4 text-left"
							>
								<span class="font-body text-3xl font-bold md:text-5xl">02</span>
								<div class="space-y-2">
									<h1 class="text-2xl font-semibold leading-tight">Affordable</h1>
									<p class="text-xs md:text-sm">We offer reasonable prices for every course.</p>
								</div>
							</article>
							<NoisyOverlay class="opacity-60" />
							<div
								class="absolute -bottom-[12%] -left-[24%] size-[72%] rotate-[24deg] rounded-[2rem] bg-gradient-to-bl from-white/5 to-white/35"
							></div>
						</div>
						<div
							class="relative size-full overflow-hidden rounded-2xl bg-rose [background-image:radial-gradient(circle_at_0%_100%,hsl(var(--rose)),hsl(var(--orange)))]"
						>
							<article
								class="absolute left-0 top-0 z-[1] flex size-full flex-col justify-between p-4 text-left"
							>
								<span class="font-body text-3xl font-bold md:text-5xl">03</span>
								<div class="space-y-2">
									<h1 class="text-2xl font-semibold leading-tight md:text-3xl">Free trials</h1>
									<p class="text-xs md:text-sm">See if a course is for you before you buy it.</p>
								</div>
							</article>
							<NoisyOverlay class="opacity-60" />
							<div
								class="absolute -right-[24%] -top-[12%] size-[72%] rotate-[24deg] rounded-[2rem] bg-gradient-to-bl from-white/5 to-white/35"
							></div>
						</div>
					</div>
					<div
						class="relative h-[50%] w-full overflow-hidden rounded-2xl bg-fuchsia [background-image:radial-gradient(circle_at_0%_0%,hsl(var(--blue)),hsl(var(--fuchsia)))]"
					>
						<article
							class="absolute left-0 top-0 z-[1] flex size-full flex-col justify-between p-8 text-left"
						>
							<span class="font-body text-3xl font-bold md:text-5xl">04</span>
							<div class="space-y-2">
								<h1 class="text-3xl font-semibold md:text-3xl md:leading-[100%]">
									Byte-Sized blogs
								</h1>
								<p class="text-xs md:text-sm">For when you want to gain quick insights.</p>
							</div>
						</article>
						<div
							class="absolute -right-[16%] -top-[20%] size-[18rem] rounded-full bg-gradient-to-tr from-white/5 to-white/35 md:size-[26rem]"
						></div>
						<NoisyOverlay class="opacity-60" />
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

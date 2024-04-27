<script>
	import { IconGrid, Nav, NoisyOverlay } from '$components';
	import { ArrowRight, Heart, Twitter, LinkedIn, Instagram, Github } from '$icons';
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
				<span class="bg-gradient-to-br from-rose to-orange bg-clip-text text-transparent relative before:content-[''] before:w-full before:h-[60%] before:-z-[1] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-br before:from-rose/25 before:to-orange/25 before:blur-3xl"
					>Level Up</span
				><br class="hidden lg:inline" />
				Your
				<span class="bg-gradient-to-br from-blue to-fuchsia bg-clip-text text-transparent relative before:content-[''] before:w-full before:h-[60%] before:-z-[1] before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-br before:from-blue/25 before:to-fuchsia/25 before:blur-3xl"
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
	<section class="space-y-8 p-4 text-center lg:space-y-16">
		<h1 class="mx-auto text-3xl font-semibold md:max-w-[72%] md:text-5xl">
			The most <span class="text-blue">value</span> for money
			<span class="text-rose">educational</span> content you'll find on the planet.
		</h1>
		<div class="mx-auto flex max-w-[60rem] flex-col gap-4 px-8 md:grid md:grid-cols-2">
			<article
				class="flex w-full flex-col justify-between space-y-8 rounded-2xl bg-surface p-8 text-left"
			>
				<div class="space-y-2">
					<span class="font-semi-bold text-sm text-muted">Monthly</span>
					<h1 class="text-3xl font-bold">
						&#8377;899/<sub class="text-base text-muted">month</sub>
					</h1>
				</div>
				<ul class="space-y-2">
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Access to all courses.</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Access to member only blogs.</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Exclusive videos.</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Zero Ads</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Free exclusive merch sent to your doorstep.</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Live sessions.</span>
					</li>
					<li class="flex h-fit gap-2">
						<div class="mt-1 size-2 shrink-0 rounded-full bg-rose" />
						<span class="leading-tight">Cancel anytime</span>
					</li>
				</ul>

				<button class="w-full rounded-full bg-blue py-4 text-sm hover:brightness-110 md:max-w-36"
					>Buy plan</button
				>
			</article>
			<div class="flex flex-col gap-4">
				<article class="space-y-4 rounded-2xl bg-surface p-8 text-left">
					<div class="space-y-2">
						<span class="font-semi-bold text-sm text-muted">Yearly</span>
						<h1 class="text-3xl font-bold">
							&#8377;649/<sub class="text-base text-muted">month</sub>
						</h1>
					</div>
					<p class="text-sm leading-tight">
						Contains everything included in the monthly plan with discounts
					</p>
					<button class="w-full rounded-full bg-rose py-4 text-sm hover:brightness-110 md:max-w-36"
						>Buy plan</button
					>
				</article>
				<article
					class="relative space-y-4 rounded-2xl bg-surface p-8 text-left [background-image:radial-gradient(circle_at_100%_100%,hsl(var(--blue)),hsl(var(--fuchsia)))]"
				>
					<div class="z-[1] space-y-2">
						<span class="font-semi-bold text-sm">Life membership</span>
						<h1 class="text-3xl font-bold">&#8377;4999</h1>
					</div>
					<p class="z-[1] text-sm leading-tight">Get a huge discount and unlimited access.</p>
					<button
						class="z-[1] w-full rounded-full bg-white/20 py-4 text-sm hover:bg-white/30 md:max-w-36"
						>Buy plan</button
					>
					<NoisyOverlay class="opacity-60" />
				</article>
			</div>
		</div>
	</section>
	<footer class="w-full p-4">
		<div class="flex flex-col items-center gap-8 rounded-2xl bg-surface px-8 py-8">
			<h1
				class="bg-gradient-to-tr from-rose to-orange bg-clip-text text-4xl font-extrabold text-transparent"
			>
				Nine Academy
			</h1>
			<p class="text-center text-sm">Made under the 30DaysCoding 10 day hackathon</p>
			<ul class="flex gap-4">
				<li class="rounded-lg bg-surface-foreground p-3">
					<a href="https://github.com/JuxtNorth" class="size-fit"><Github /></a>
				</li>
				<li class="rounded-lg bg-surface-foreground p-3">
					<a href="https://www.instagram.com/juxt_north" class="size-fit"><Instagram /></a>
				</li>
				<li class="rounded-lg bg-surface-foreground p-3">
					<a href="https://www.linkedin.com/in/kiron-dey-2566302b3" class="size-fit"><LinkedIn /></a
					>
				</li>
				<li class="rounded-lg bg-surface-foreground p-3">
					<a href="https://x.com/KironDey14" class="size-fit"><Twitter /></a>
				</li>
			</ul>
			<p>Made with <Heart class="mx-px mb-1 inline text-sm text-rose" /> by Kiron Dey</p>
		</div>
	</footer>
</main>

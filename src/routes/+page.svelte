<script>
	import { IconGrid, Nav } from '$components';
</script>

<Nav />
<main class="max-w-[120rem] mx-auto">
	<header class="relative flex h-[calc(100dvh-3rem)] max-h-[76rem] flex-col justify-center lg:grid lg:grid-cols-[80%_20%] lg:place-items-center lg:min-h-none md:min-h-[36rem]">
		<div class="space-y-4 px-4 lg:px-8 text-center lg:text-left justify-self-start">
			<h1 class="text-[clamp(3.4rem,5vw,12rem)] lg:text-[clamp(6.5rem,7vw,8rem)] lg:mb-2 font-extrabold leading-[1.1]">
				<span class="from-rose to-orange bg-gradient-to-br bg-clip-text text-transparent"
					>Level Up</span
				><br class="hidden lg:inline"/>
				Your
				<span class="from-blue to-fuchsia bg-gradient-to-br bg-clip-text text-transparent"
					>Coding Game</span
				>
			</h1>
			<p class="leading-[102%] lg:text-[clamp(1rem,2vw,2.4rem)] text-muted">
				Learn Coding like a game, not a chore, with targeted courses for devs.
			</p>
		</div>
		<IconGrid class="absolute bottom-4 right-4 lg:right-8 lg:bottom-8 hidden [@media(min-height:320px)]:block" />
	</header>
</main>

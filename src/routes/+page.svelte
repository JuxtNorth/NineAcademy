<script>
	import { IconGrid, Nav } from '$components';
</script>

<Nav />
<main class="mx-auto max-w-[120rem]">
	<header
		class="lg:min-h-none relative flex h-[calc(100dvh-3rem)] max-h-[76rem] flex-col justify-center md:min-h-[36rem] lg:grid lg:grid-cols-[80%_20%] lg:place-items-center"
	>
		<div class="space-y-4 justify-self-start px-4 text-center lg:px-8 lg:text-left">
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
			class="absolute bottom-4 right-4 hidden lg:bottom-8 lg:right-8 [@media(min-height:320px)]:block"
		/>
	</header>
</main>

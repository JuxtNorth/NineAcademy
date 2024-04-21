<script>
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=League+Spartan:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-background;
	}

	:global(input, a, p, span, li) {
		@apply font-body;
	}
</style>

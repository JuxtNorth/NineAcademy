<script>
	import { onMount } from 'svelte';
	import { Alert } from '$components/ui';
	import { handleSignInWithEmail, observeAuthStateChange } from '$lib/firebase';
	import '../app.css';

	onMount(() => {
		handleSignInWithEmail();
		observeAuthStateChange();
	});
</script>

<Alert />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
		rel="stylesheet"
	/>
	<title>Nine Academy</title>
</svelte:head>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-background;
	}

	:global(input, a, p, span, li, button) {
		@apply font-body leading-3 text-foreground;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		@apply font-display text-foreground;
	}

	:global(input[type='text']) {
		@apply outline-none focus:outline-1 focus:outline-fuchsia;
	}
</style>

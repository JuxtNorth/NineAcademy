<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
	import { getFirebaseApp } from "$lib/firebase";

	onMount(async () => {
		const auth = getAuth(getFirebaseApp());
		if (isSignInWithEmailLink(auth, window.location.href)) {
			const email = window.localStorage.getItem('emailForSignIn');
			if (email) {
				try {
					const result = await signInWithEmailLink(auth, email, window.location.href);
					window.localStorage.removeItem('emailForSignIn');
					alert("Sign in Success");
					console.log(result)
				} catch (error) {
					console.error(error);
				}
			}
		}
	})
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
		rel="stylesheet"
	/>
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
</style>

<script lang="ts">
	import { Button, Input } from '$components/ui';
	import { Google, Github, Twitter } from '$icons';
	import {
		getAuth,
		sendSignInLinkToEmail,
		GoogleAuthProvider,
		TwitterAuthProvider,
		GithubAuthProvider
	} from 'firebase/auth';
	import { getFirebaseApp, signInWithProvider } from '$lib/firebase';
	import { actionCodeSettings } from '$constants';
	import { alert } from '$lib/stores';
	import { validateEmail } from '$lib/utils';

	let email = '';

	async function sendPaswordlessEmail() {
		if (!validateEmail(email)) {
			alert.set({
				title: 'Invalid Email',
				description: 'Please enter a valid email to log in.',
				type: 'error'
			});
			return;
		}

		const auth = getAuth(getFirebaseApp());

		try {
			await sendSignInLinkToEmail(auth, email, actionCodeSettings);
			window.localStorage.setItem('emailForSignIn', email.trim().toLowerCase());
			alert.set({
				title: 'Email passwordless link sent!',
				description: 'Please click on the link provided in the email to sign in',
				type: 'info'
			});
		} catch (error) {
			console.error(error);
			alert.set({
				title: 'Failed to send passwordless email.',
				description: 'Please use a different login provider or sign in again tomorrow.',
				type: 'error'
			});
		}
	}

	function authWithGoogle() {
		const provider = new GoogleAuthProvider();
		signInWithProvider(provider);
	}

	function authWithTwitter() {
		const provider = new TwitterAuthProvider();
		signInWithProvider(provider);
	}

	function authWithGithub() {
		const provider = new GithubAuthProvider();
		signInWithProvider(provider);
	}
</script>

<main class="relative h-dvh w-screen p-8 lg:grid lg:grid-cols-[60%_40%] lg:p-0">
	<section
		class="absolute left-0 top-0 -z-[1] flex size-full flex-col justify-center px-8 lg:static"
	>
		<div class="hidden max-w-[28vw] lg:block">
			<h1 class="text-[7.5vw] font-extrabold leading-[86%] bg-gradient-to-tr from-orange via-rose to-fuchsia bg-clip-text text-transparent inline-block">Nine<br /> Academy</h1>
			<p class="mt-6 text-[1.5vw] leading-[108%] text-foreground">
				Login to a free account to do more with nine academy.
			</p>
		</div>
	</section>
	<section
		class="flex size-full items-center justify-center rounded-2xl lg:rounded-r-none lg:bg-surface"
	>
		<form
			autocomplete="on"
			class="mx-auto flex h-fit max-w-96 flex-col space-y-2 rounded-2xl bg-surface px-8 py-12 lg:w-[90%] lg:max-w-[40rem]"
		>
			<h1 class="text-[42px] font-semibold leading-[104%] lg:text-5xl">Log In</h1>
			<p class="!mb-4 text-sm leading-tight lg:text-base">
				Please enter your email below to sign in.
			</p>
			<Input placeholder="Enter your email" type="email" bind:value={email} />
			<Button size="wide" style="primary" type="submit" on:click={sendPaswordlessEmail}
				>Send Magic Sign in link</Button
			>
			<p class="strike-line relative !mt-4 text-center text-xs">or continue with</p>
			<div class="self-center">
				<Button size="icon" style="mono" on:click={authWithGoogle}>
					<Google />
				</Button>
				<Button size="icon" style="mono" on:click={authWithGithub}>
					<Github />
				</Button>
				<Button size="icon" style="mono" on:click={authWithTwitter}>
					<Twitter />
				</Button>
			</div>
		</form>
	</section>
</main>

<style lang="postcss">
	.strike-line {
		@apply mx-auto flex w-fit items-center justify-evenly gap-2 overflow-x-hidden;
		&::before,
		&::after {
			@apply h-px w-16 bg-muted content-[''];
		}
	}
</style>

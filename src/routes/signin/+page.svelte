<script lang="ts">
	import { Button, Input } from '$components/ui';
	import { Google, Github, Apple } from '$icons';
	import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
	import { getFirebaseApp } from '$lib/firebase';
	import { actionCodeSettings } from '$constants';

	let email = '';

	async function sendPaswordlessEmail() {
		const auth = getAuth(getFirebaseApp());
		try {
			await sendSignInLinkToEmail(auth, email, actionCodeSettings);
			window.localStorage.setItem('emailForSignIn', email.trim().toLowerCase());
			alert("Email sent to " + email)
		} catch (error) {
			console.error(error);
			alert('Failed to send link');
		}
	}
</script>

<main class="relative h-dvh w-screen p-8 lg:grid lg:grid-cols-[60%_40%] lg:p-0">
	<section
		class="absolute left-0 top-0 -z-[1] flex size-full flex-col justify-center px-8 lg:static"
	>
		<div class="hidden max-w-[28vw] lg:block">
			<h1 class="text-[7.5vw] font-extrabold leading-[86%]">Nine<br /> Academy</h1>
			<p class="mt-6 text-[1.5vw] leading-[108%] text-muted">
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
			<p class="!mb-4">Please enter your email below to sign in.</p>
			<Input placeholder="Enter your email" type="email" bind:value={email} />
			<Button size="wide" style="primary" type="submit" on:click={sendPaswordlessEmail}
				>Send Magic Sign in link</Button
			>
			<p class="strike-line relative !mt-4 text-center text-xs">or continue with</p>
			<div class="self-center">
				<Button size="icon" style="mono">
					<Google />
				</Button>
				<Button size="icon" style="mono">
					<Github />
				</Button>
				<Button size="icon" style="mono">
					<Apple />
				</Button>
			</div>
		</form>
		<button class="absolute bottom-4 text-sm text-blue-700">Skip sign in</button>
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

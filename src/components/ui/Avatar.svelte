<script>
	import { signOutUser } from '$lib/firebase';
	import { user } from '$lib/stores';

	let isSignedIn = false;

	user.subscribe((user) => {
		isSignedIn = user !== null;
	});
</script>

{#if isSignedIn}
	<button class="block size-8" on:click={signOutUser}>
		<div class="from-orange to-rose size-full rounded-full bg-gradient-to-br"></div>
	</button>
{:else}
	<a href="/signin" class="bg-blue rounded-lg px-4 py-2">Sign In</a>
{/if}

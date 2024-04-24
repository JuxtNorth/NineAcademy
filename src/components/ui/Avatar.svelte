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
		<div class="size-full rounded-full bg-gradient-to-br from-orange to-rose"></div>
	</button>
{:else}
	<a href="/signin" class="rounded-full bg-blue px-4 py-2 text-xs">Sign In</a>
{/if}

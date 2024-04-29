<script lang="ts">
	import { user } from '$lib/stores';
	import { get } from 'svelte/store';
	import { Loader } from './ui';
	import { fade } from 'svelte/transition';

	let isSignedIn = !!get(user);
	let buffering = true;

	setTimeout(() => {
		buffering = false;
	}, 3000);

	user.subscribe((userData) => {
		if (userData !== null) {
			isSignedIn = true;
		}
	});
</script>

{#if !isSignedIn}
	<section
		class="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-background"
		out:fade
	>
		{#if buffering}
			<Loader />
		{:else}
			<div class="flex flex-col items-center gap-4" in:fade>
				<p>You need to be signed in to access this feature</p>
				<a
					href="/signin"
					class="w-fit rounded-full bg-surface px-5 py-2 text-sm transition-[filter] hover:brightness-125"
					>Sign In</a
				>
			</div>
		{/if}
	</section>
{/if}

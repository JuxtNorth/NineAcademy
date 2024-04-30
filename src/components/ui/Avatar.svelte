<script>
	import { signOutUser } from '$lib/firebase';
	import { user } from '$lib/stores';
	import Dropdown from './Dropdown';

	let isSignedIn = false;

	user.subscribe((user) => {
		isSignedIn = user !== null;
	});
</script>

{#if isSignedIn}
	<Dropdown>
		<slot slot="trigger" let:toggle>
			<button class="block size-8" on:click={toggle} aria-label="Dropdown-open">
				<div class="size-full rounded-full bg-gradient-to-br from-orange to-rose"></div>
			</button>
		</slot>
		<slot slot="items" let:Item>
			<Item
				><a href="/explore" class="block size-full py-1 transition-colors hover:text-blue"
					>Courses</a
				></Item
			>
			<Item
				><a href="/blogs" class="block size-full py-1 transition-colors hover:text-blue">Blogs</a
				></Item
			>
			<Item
				><a href="/you" class="block size-full py-1 transition-colors hover:text-blue"
					>You</a
				></Item
			>
			<hr class="my-1 border-[#222]" />
			<Item
				><a href="/create/course" class="block size-full py-1 transition-colors hover:text-blue"
					>Create Course</a
				></Item
			>
			<Item
				><a href="/create/blog" class="block size-full py-1 transition-colors hover:text-blue"
					>Create Blog</a
				></Item
			>
			<hr class="my-1 border-[#222]" />
			<Item
			><a href="/dashboard" class="block size-full py-1 transition-colors hover:text-blue"
				>Dashboard</a
			></Item
		>
			<hr class="my-1 border-[#222]" />

			<Item
				><button on:click={signOutUser} class="block size-full py-1 text-left text-rose"
					>Sign Out</button
				></Item
			>
		</slot>
	</Dropdown>
{:else}
	<a href="/signin" class="rounded-full bg-blue px-4 py-2 text-xs">Sign In</a>
{/if}

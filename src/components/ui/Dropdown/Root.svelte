<script lang="ts">
	import Item from './Item.svelte';
	import { fly } from 'svelte/transition';

	export let isOpen = true;

	let container: HTMLDivElement;

	function toggle() {
		isOpen = !isOpen;
	}

	function handleWindowClick(e: Event) {
		if (!container.contains(e.target as Node)) isOpen = false;
	}
</script>

<svelte:window on:click={handleWindowClick} />

<div class="relative w-fit" bind:this={container}>
	<slot name="trigger" {toggle} />
	{#if isOpen}
		<menu
			out:fly={{ y: -128, duration: 280 }}
			in:fly={{ y: -128, duration: 280 }}
			class="absolute right-0 top-full z-50 mt-2 w-36 rounded-lg bg-surface py-2"
		>
			<slot name="items" {Item} />
		</menu>
	{/if}
</div>

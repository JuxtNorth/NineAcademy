<script lang="ts">
	import { Warning } from '$icons';
	import { alert } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import * as Alert from './alert';

	export let isVisible = false;
	export let title = '';
	export let description = '';
	export let type = 'info';

	alert.subscribe((props) => {
		(title = props.title), (description = props.description), (type = props.type);
	});

	function show(duration = 1600) {
		isVisible = true;
		setTimeout(() => {
			(isVisible = false), (title = ''), (description = '');
		}, duration);
	}

	$: if (!!(title && description)) show();

	let variant: 'default' | 'destructive' = 'default';

	$: {
		if (type === 'info') {
			variant = 'default';
		} else if (type === 'error') {
			variant = 'destructive';
		}
	}
</script>

{#if isVisible}
	<div
		class="fixed left-[50%] top-4 z-50 mx-auto w-[80%] -translate-x-[50%]"
		transition:fly={{ y: -42 }}
	>
		<Alert.Root {variant}>
			<Warning />
			<Alert.Title>{title}</Alert.Title>
			<Alert.Description>
				{description}
			</Alert.Description>
		</Alert.Root>
	</div>
{/if}

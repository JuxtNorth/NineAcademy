<script lang="ts">
	import { Button } from './ui';
	import { Check, AngleLeft, AngleRight } from '$icons';
	import { cn } from '$lib/utils';
</script>

<ul class={cn('flex gap-2', $$props['class'])}>
	<li>
		<Button class="flex h-full items-center gap-2 text-sm"
			><Check /><span>Mark as Complete</span></Button
		>
	</li>
	<li>
		<Button size="icon" style="mono" class="rounded-full"><AngleLeft /></Button>
	</li>
	<li>
		<Button size="icon" style="mono" class="rounded-full"><AngleRight /></Button>
	</li>
</ul>

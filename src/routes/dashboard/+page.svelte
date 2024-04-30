<script lang="ts">
	import { Table } from '$components/ui';
	import { LineChart, Nav, PieChart } from '$components';
	import { collection, getDocs, getFirestore } from 'firebase/firestore';
	import { getFirebaseApp } from '$lib/firebase';
	import { onMount } from 'svelte';

	let metrics = [
		{
			name: 'NextJS 14 Crash Course',
			amount: '$699',
			date: 'unknown',
			user: 'deykiron365@gmail.com'
		},
		{
			name: 'NextJS 14 Crash Course',
			amount: '$699',
			date: 'unknown',
			user: 'deykiron365@gmail.com'
		},
		{
			name: 'NextJS 14 Crash Course',
			amount: '$699',
			date: 'unknown',
			user: 'deykiron365@gmail.com'
		}
	];

	interface Invoice {
		user: string;
		name: string;
		amount: string;
		date: string;
	}

	async function getInvoices() {
		// Optimise: Move to a invoice collection & Impl Pagination
		const invoices: Array<Invoice> = [];
		const db = getFirestore(getFirebaseApp());
		const usersRef = collection(db, 'users');
		const userDocs = await getDocs(usersRef);
		userDocs.forEach(async (doc) => {
			const data = doc.data();
			invoices.push({
				user: data.username,
				amount: '$12',
				date: 'unknown',
				name: 'NextJS 14 Crash Course'
			});
		});
		return invoices;
	}

	onMount(async () => {
		metrics = await getInvoices();
	});
</script>

<Nav />
<main class="p-4">
	<h1 class="mb-8 text-4xl font-semibold">Dashboard</h1>
	<div class="grid grid-flow-row lg:grid-cols-[auto_30%] gap-4">
		<section class="h-fit rounded-2xl bg-surface p-4 w-full overflow-auto max-h-[120rem]">
			<Table.Root class="w-full">
				<Table.Caption>Purchases</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Serial</Table.Head>
						<Table.Head>Course</Table.Head>
						<Table.Head>Amount</Table.Head>
						<Table.Head>Date</Table.Head>
						<Table.Head>Buyer</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each metrics as metric, index}
						<Table.Row class="border-surface-foreground">
							<Table.Cell>{index}</Table.Cell>
							<Table.Cell class="whitespace-nowrap">{metric.name}</Table.Cell>
							<Table.Cell>{metric.amount}</Table.Cell>
							<Table.Cell>{metric.date}</Table.Cell>
							<Table.Cell>{metric.user}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</section>
		<div class="flex flex-col gap-4">
			<section class="aspect-square w-full rounded-2xl bg-surface">
				<PieChart />
			</section>
			<section>
				<LineChart />
			</section>
		</div>
	</div>
</main>

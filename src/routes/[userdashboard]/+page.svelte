<script lang="ts">
	import TrackerList from '$lib/components/TrackerList.svelte';
	import type { TrackerData } from '../../interfaces/TrackerData';
	import { page } from '$app/state';
	import { UserIcon, EyeIcon } from 'lucide-svelte';

	export let data: {
		pageOwner: string;
		trackerData: TrackerData[];
	};
</script>

<div class="container mx-auto px-4 py-8">
	{#if data.pageOwner && data.pageOwner === page.params.userdashboard}
		<div class="mb-8 flex items-center">
			<UserIcon size={32} class="mr-4 text-red-500" />
			<h1 class="text-3xl font-bold text-gray-800">Your Trackers</h1>
		</div>
		<TrackerList trackerData={data.trackerData} />
	{:else if data.pageOwner && data.pageOwner !== page.params.userdashboard}
		<div class="mb-8 flex items-center">
			<EyeIcon size={32} class="mr-4 text-blue-500" />
			<h1 class="text-3xl font-bold text-gray-800">
				Trackers of {page.params.userdashboard}
			</h1>
		</div>
		<TrackerList trackerData={data.trackerData} />
	{:else}
		<div class="mb-8 flex items-center">
			<EyeIcon size={32} class="mr-4 text-blue-500" />
			<h1 class="text-3xl font-bold text-gray-800">
				The user {page.params.userdashboard} was not found!
			</h1>
		</div>
	{/if}
</div>

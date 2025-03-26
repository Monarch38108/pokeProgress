<script lang="ts">
	import TrackerList from '$lib/components/TrackerList.svelte';
	import type { TrackerData } from '../../interfaces/TrackerData';
	import { page } from '$app/state';
	import { UserIcon, EyeIcon } from 'lucide-svelte';

	export let data: {
		pageOwner: string,
		trackerData: TrackerData[]
	}
</script>

<div class="container mx-auto px-4 py-8">
	{#if data.pageOwner === page.params.slug}
		<div class="flex items-center mb-8">
			<UserIcon size={32} class="mr-4 text-red-500" />
			<h1 class="text-3xl font-bold text-gray-800">Your Trackers</h1>
		</div>
		<TrackerList trackerData={data.trackerData}/>
	{:else}
		<div class="flex items-center mb-8">
			<EyeIcon size={32} class="mr-4 text-blue-500" />
			<h1 class="text-3xl font-bold text-gray-800">
				Trackers of {page.params.slug}
			</h1>
		</div>
		<TrackerList trackerData={data.trackerData}/>
	{/if}

	{#if data.trackerData.length === 0}
		<div class="text-center py-12 bg-gray-100 rounded-lg">
			<p class="text-xl text-gray-600">
				No trackers to display at the moment.
			</p>
		</div>
	{/if}
</div>
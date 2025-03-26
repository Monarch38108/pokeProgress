<script lang="ts">
import TrackerList from '$lib/components/TrackerList.svelte';
import type { TrackerData } from '../../interfaces/TrackerData';
import { page } from '$app/state';
export let data: {
	pageOwner: string,
	trackerData : TrackerData[]
}
</script>
{#if data.pageOwner === page.params.slug}
	<h1>Your trackers:</h1>
	<TrackerList trackerData="{data.trackerData}"/>
{/if}
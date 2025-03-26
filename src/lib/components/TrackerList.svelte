<script lang="ts">
	import type { TrackerData } from '../../interfaces/TrackerData';

	export let trackerData: TrackerData[]
</script>

{#if trackerData.length < 1 }
	<h1>You are not tracking any progress of the games yet.</h1>
{/if}

{#each trackerData as tracker}
	<p>Tracker: {tracker.id} for the game {tracker.game.title}</p>
	<p>Progress: {tracker.progress}%</p>
{/each}
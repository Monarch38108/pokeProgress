<script lang="ts">
	import type { TrackerData } from '../../interfaces/TrackerData';
	import { GamepadIcon } from 'lucide-svelte';

	export let trackerData: TrackerData[];
</script>

{#if !trackerData}
	<div
		class="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-gray-100 p-8 text-center"
	>
		<GamepadIcon size={64} class="mb-6 text-gray-400" />
		<h1 class="mb-4 text-2xl font-bold text-gray-700">No Pokémon Trackers Yet</h1>
		<p class="max-w-md text-gray-500">
			Start your Pokémon journey by creating a new tracker. Track your progress, catch rates, and
			achievements!
		</p>
		<button class="mt-6 rounded-full bg-red-500 px-6 py-3 text-white transition hover:bg-red-600">
			Create First Tracker
		</button>
	</div>
{/if}

{#if trackerData}
	<div class="space-y-6">
		{#each trackerData as tracker, index (tracker.id || index)}
			<div
				class="rounded-lg border-l-4 border-red-500 bg-white p-6 shadow-md transition hover:shadow-lg"
			>
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-xl font-semibold text-gray-800">
						{tracker.game.title}
					</h3>
					<span class="text-sm text-gray-500">
						Tracker #{index + 1}
					</span>
				</div>

				<div class="mb-3 h-4 w-full rounded-full bg-gray-200">
					<div
						class="h-4 rounded-full bg-red-500 transition-all duration-500 ease-in-out"
						style="width: {tracker.progress}%"
					></div>
				</div>

				<div class="flex justify-between text-sm text-gray-600">
					<span>Progress</span>
					<span>{tracker.progress}%</span>
				</div>
			</div>
		{/each}
	</div>
{/if}

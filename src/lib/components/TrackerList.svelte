<script lang="ts">
	import type { TrackerData } from '../../interfaces/TrackerData';
	import { GamepadIcon } from 'lucide-svelte';

	export let trackerData: TrackerData[];
</script>

{#if trackerData.length < 1}
	<div class="flex flex-col items-center justify-center min-h-[400px] bg-gray-100 rounded-lg p-8 text-center">
		<GamepadIcon size={64} class="text-gray-400 mb-6" />
		<h1 class="text-2xl font-bold text-gray-700 mb-4">
			No Pokémon Trackers Yet
		</h1>
		<p class="text-gray-500 max-w-md">
			Start your Pokémon journey by creating a new tracker. Track your progress, catch rates, and achievements!
		</p>
		<button class="mt-6 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition">
			Create First Tracker
		</button>
	</div>
{/if}

{#if trackerData.length > 0}
	<div class="space-y-6">
		{#each trackerData as tracker, index (tracker.id || index)}
			<div class="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-500 hover:shadow-lg transition">
				<div class="flex justify-between items-center mb-4">
					<h3 class="text-xl font-semibold text-gray-800">
						{tracker.game.title}
					</h3>
					<span class="text-sm text-gray-500">
            Tracker #{index + 1}
          </span>
				</div>

				<div class="w-full bg-gray-200 rounded-full h-4 mb-3">
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
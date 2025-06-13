<script lang="ts">
	import { BookOpen, BarChart2, CheckSquare } from 'lucide-svelte';
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-br from-red-500 to-red-700">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 py-16 text-center">
		<h1 class="mb-6 text-5xl font-bold text-white drop-shadow-lg">PokéProgress</h1>
		<p class="mx-auto mb-10 max-w-2xl text-xl text-white">
			Your ultimate companion for tracking and celebrating your Pokémon journey
		</p>

		<div class="mb-16 flex justify-center space-x-6">
			<a
				href="/register"
				class="rounded-full bg-yellow-400 px-8 py-3 font-bold text-black
               transition hover:bg-yellow-500"
			>
				Get Started
			</a>
			<a
				href="/about"
				class="rounded-full border-2 border-white px-8 py-3 text-white
               transition hover:bg-white hover:text-red-600"
			>
				Learn More
			</a>
		</div>
	</div>

	<!-- Features Section -->
	<div class="bg-white py-16">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold text-gray-800">
				Track Your Pokémon Adventure
			</h2>

			<div class="grid gap-8 md:grid-cols-3">
				<!-- Feature 1 -->
				<div class="rounded-lg bg-gray-100 p-6 text-center shadow-md">
					<div class="mx-auto mb-4 flex justify-center text-red-600">
						<BookOpen size={64} />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Comprehensive Tracking</h3>
					<p class="text-gray-600">
						Log every Pokémon caught, badge earned, and milestone achieved across all your games.
					</p>
				</div>

				<!-- Feature 2 -->
				<div class="rounded-lg bg-gray-100 p-6 text-center shadow-md">
					<div class="mx-auto mb-4 flex justify-center text-red-600">
						<BarChart2 size={64} />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Detailed Progress Insights</h3>
					<p class="text-gray-600">
						Visualize your progress with intuitive charts and statistics for each game.
					</p>
				</div>

				<!-- Feature 3 -->
				<div class="rounded-lg bg-gray-100 p-6 text-center shadow-md">
					<div class="mx-auto mb-4 flex justify-center text-red-600">
						<CheckSquare size={64} />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Achievement Tracking</h3>
					<p class="text-gray-600">
						Keep track of rare catches, shiny discoveries, and game completion goals.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Call to Action -->
	<div class="bg-yellow-400 py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-6 text-3xl font-bold text-gray-900">Ready to Become a Pokémon Master?</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-800">
				Start tracking your Pokémon journey today and see how far you've come!
			</p>
			<a
				class="rounded-full bg-red-600 px-10 py-4 text-lg font-bold
               text-white transition hover:bg-red-700"
				href="/register"
			>
				Create Your Account
			</a>
		</div>
	</div>
</div>

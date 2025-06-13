<script lang="ts">
	import { BookOpen, BarChart2, CheckSquare } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex flex-col">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 py-16 text-center">
		<h1 class="text-5xl font-bold text-white mb-6 drop-shadow-lg">
			PokéProgress
		</h1>
		<p class="text-xl text-white mb-10 max-w-2xl mx-auto">
			Your ultimate companion for tracking and celebrating your Pokémon journey
		</p>

		<div class="flex justify-center space-x-6 mb-16">
			<a
				href="/register"
				class="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold
               hover:bg-yellow-500 transition"
			>
				Get Started
			</a>
			<a
				href="/about"
				class="border-2 border-white text-white px-8 py-3 rounded-full
               hover:bg-white hover:text-red-600 transition"
			>
				Learn More
			</a>
		</div>
	</div>

	<!-- Features Section -->
	<div class="bg-white py-16">
		<div class="container mx-auto px-4">
			<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
				Track Your Pokémon Adventure
			</h2>

			<div class="grid md:grid-cols-3 gap-8">
				<!-- Feature 1 -->
				<div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
					<div class="mx-auto mb-4 text-red-600 flex justify-center">
						<BookOpen size={64} />
					</div>
					<h3 class="text-xl font-semibold mb-3">
						Comprehensive Tracking
					</h3>
					<p class="text-gray-600">
						Log every Pokémon caught, badge earned, and milestone achieved across all your games.
					</p>
				</div>

				<!-- Feature 2 -->
				<div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
					<div class="mx-auto mb-4 text-red-600 flex justify-center">
						<BarChart2 size={64} />
					</div>
					<h3 class="text-xl font-semibold mb-3">
						Detailed Progress Insights
					</h3>
					<p class="text-gray-600">
						Visualize your progress with intuitive charts and statistics for each game.
					</p>
				</div>

				<!-- Feature 3 -->
				<div class="text-center p-6 bg-gray-100 rounded-lg shadow-md">
					<div class="mx-auto mb-4 text-red-600 flex justify-center">
						<CheckSquare size={64} />
					</div>
					<h3 class="text-xl font-semibold mb-3">
						Achievement Tracking
					</h3>
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
			<h2 class="text-3xl font-bold mb-6 text-gray-900">
				Ready to Become a Pokémon Master?
			</h2>
			<p class="text-xl mb-8 text-gray-800 max-w-2xl mx-auto">
				Start tracking your Pokémon journey today and see how far you've come!
			</p>
			<a
				class="bg-red-600 text-white px-10 py-4 rounded-full text-lg
               font-bold hover:bg-red-700 transition"
				href="/register"
			>
				Create Your Account
			</a>
		</div>
	</div>
</div>

<script lang="ts">
	import { enhance } from '$app/forms'
	import { UserPlus, User, Lock } from 'lucide-svelte'
	let { form } = $props()
</script>

<div class="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center px-4">
	<div class="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
		<div class="text-center mb-8">
			<div class="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
				<UserPlus class="text-white" size={32} />
			</div>
			<h1 class="text-3xl font-bold text-gray-800 mb-2">Join PokéProgress</h1>
			<p class="text-gray-600">Create your account to start tracking your Pokémon journey</p>
		</div>

		<form action="?/register" method="POST" use:enhance class="space-y-6">
			<div>
				<label for="username" class="block text-sm font-medium text-gray-700 mb-2">
					Username
				</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<User class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="username"
						name="username"
						type="text"
						required
						class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                   placeholder-gray-400 transition duration-200"
						placeholder="Choose a username"
					/>
				</div>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700 mb-2">
					Password
				</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<Lock class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                   placeholder-gray-400 transition duration-200"
						placeholder="Create a secure password"
					/>
				</div>
			</div>

			{#if form?.user}
				<div class="bg-red-50 border border-red-200 rounded-lg p-4">
					<p class="text-red-700 text-sm font-medium">
						Username is already taken. Please choose a different one.
					</p>
				</div>
			{/if}

			<button
				type="submit"
				class="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold
               hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500
               focus:ring-offset-2 transition duration-200 transform hover:scale-105"
			>
				Create Account
			</button>
		</form>

		<div class="mt-6 text-center">
			<p class="text-sm text-gray-600">
				Already have an account?
				<a href="/login" class="text-red-500 hover:text-red-600 font-medium">
					Sign in here
				</a>
			</p>
		</div>
	</div>
</div>
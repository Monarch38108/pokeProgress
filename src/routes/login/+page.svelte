<script lang="ts">
	import { enhance } from '$app/forms';
	import { LogIn, User, Lock } from 'lucide-svelte';
	let { form } = $props();
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 to-red-700 px-4"
>
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
		<div class="mb-8 text-center">
			<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500">
				<LogIn class="text-white" size={32} />
			</div>
			<h1 class="mb-2 text-3xl font-bold text-gray-800">Welcome Back</h1>
			<p class="text-gray-600">Sign in to track your Pokémon progress</p>
		</div>

		<form action="?/login" method="POST" use:enhance class="space-y-6">
			<div>
				<label for="username" class="mb-2 block text-sm font-medium text-gray-700">
					Username
				</label>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<User class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="username"
						name="username"
						type="text"
						required
						class="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10
                   placeholder-gray-400 transition duration-200 focus:border-red-500
                   focus:ring-2 focus:ring-red-500 focus:outline-none"
						placeholder="Enter your username"
					/>
				</div>
			</div>

			<div>
				<label for="password" class="mb-2 block text-sm font-medium text-gray-700">
					Password
				</label>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Lock class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="password"
						name="password"
						type="password"
						required
						class="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10
                   placeholder-gray-400 transition duration-200 focus:border-red-500
                   focus:ring-2 focus:ring-red-500 focus:outline-none"
						placeholder="Enter your password"
					/>
				</div>
			</div>

			{#if form?.invalid}
				<div class="rounded-lg border border-red-200 bg-red-50 p-4">
					<p class="text-sm font-medium text-red-700">Username and password are required.</p>
				</div>
			{/if}

			{#if form?.credentials}
				<div class="rounded-lg border border-red-200 bg-red-50 p-4">
					<p class="text-sm font-medium text-red-700">Invalid credentials. Please try again.</p>
				</div>
			{/if}

			<button
				type="submit"
				class="w-full transform rounded-lg bg-red-500 px-4 py-3 font-semibold
               text-white transition duration-200 hover:scale-105
               hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
			>
				Sign In
			</button>
		</form>

		<div class="mt-6 text-center">
			<p class="text-sm text-gray-600">
				Don't have an account?
				<a href="/register" class="font-medium text-red-500 hover:text-red-600"> Sign up here </a>
			</p>
		</div>
	</div>
</div>

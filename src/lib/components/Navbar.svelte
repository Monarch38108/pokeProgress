<script>
import { page } from '$app/state';
import { enhance } from '$app/forms';
</script>

<div class="bg-gray-800 text-white shadow-md">
	<nav class="container mx-auto px-4 py-3 flex justify-between items-center">
		<div class="flex items-center">
			<a href="/" class="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
				PokéProgress
			</a>
		</div>

		<div class="flex items-center space-x-4">
			{#if !page.data.user}
				<a
					href="/login"
					class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors"
				>
					Login
				</a>
				<a
					href="/register"
					class="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
				>
					Register
				</a>
			{/if}

			{#if page.data.user && page.data.user.role === 'ADMIN'}
				<a
					href="/admin"
					class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors"
				>
					Admin
				</a>
			{/if}
			{#if page.data.user}
				<a
					href="/{page.data.user.name}"
					class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 transition-colors"
				>
					Your Trackers
				</a>
				<form
					action="/logout"
					method="POST"
					use:enhance
					class="contents"
				>
					<button
						type="submit"
						class="px-3 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
					>
						Log out
					</button>
				</form>
			{/if}
		</div>
	</nav>
</div>
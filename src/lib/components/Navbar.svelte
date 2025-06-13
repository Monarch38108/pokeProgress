<script>
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
</script>

<div class="bg-gray-800 text-white shadow-md">
	<nav class="container mx-auto flex items-center justify-between px-4 py-3">
		<div class="flex items-center">
			<a href="/" class="text-2xl font-bold text-white transition-colors hover:text-gray-300">
				PokéProgress
			</a>
		</div>

		<div class="flex items-center space-x-4">
			{#if !page.data.user}
				<a
					href="/login"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
				>
					Login
				</a>
				<a
					href="/register"
					class="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium transition-colors hover:bg-blue-700"
				>
					Register
				</a>
			{/if}

			{#if page.data.user && page.data.user.role === 'ADMIN'}
				<a
					href="/admin"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
				>
					Admin
				</a>
			{/if}
			{#if page.data.user}
				<a
					href="/{page.data.user.name}"
					class="rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
				>
					Your Trackers
				</a>
				<form action="/logout" method="POST" use:enhance class="contents">
					<button
						type="submit"
						class="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
					>
						Log out
					</button>
				</form>
			{/if}
		</div>
	</nav>
</div>

<script lang="ts">
	import { page } from '$app/state'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<nav>
	{#if !$page.data.user}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{/if}

	{#if $page.data.user}
		<a href="/admin">Admin</a>

		<form action="/logout" method="POST">
			<button type="submit">Log out</button>
		</form>
	{/if}
</nav>

<main>
	{@render children?.()}
</main>

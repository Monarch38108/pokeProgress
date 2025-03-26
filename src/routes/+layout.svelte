<script lang="ts">
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>PokéProgress</title>
</svelte:head>

<!-- Navbar -->
<div class="flex flex-col min-h-screen">
	<Navbar/>
	<main class="flex-grow">
		{@render children?.()}
	</main>
	<Footer />
</div>
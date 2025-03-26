<script lang="ts">
	import  Footer  from '$lib/components/Footer.svelte';
	import  Navbar from '$lib/components/Navbar.svelte';
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
<script lang="ts">
import { page } from '$app/state';
export let data: {
	pageOwner: string,
}
</script>

{#if data.pageOwner === page.data.user.name}
	<h1>Here are your trackers!</h1>
	{:else }
	<h1>Trackers of {data.pageOwner}!</h1>
{/if}
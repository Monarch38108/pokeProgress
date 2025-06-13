<script lang="ts">
	let { UserData } = $props();
</script>

{#each UserData as user (user.username)}
	<p>{user.username}</p>
	<p>{user.role.name}</p>
{/each}

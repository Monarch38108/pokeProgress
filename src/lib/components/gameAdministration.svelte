<script lang="ts">
    let { GameData } = $props();
</script>

{#each GameData as Game (Game.title)}
        <p>{Game.title}</p>
{/each}



<script lang="ts">
	import GameAdministration from '$lib/components/GameAdministration.svelte';
	import UserAdministration from '$lib/components/UserAdministration.svelte';
	import type { UserData } from '../../interfaces/UserData';
	import type { Game } from '@prisma/client';

	export let data: {
		users: UserData[];
		games: Game[];
	};
	console.log(data);
</script>

<h1>Admin Page</h1>
<h2>User-Administration</h2>
<UserAdministration UserData={data.users}></UserAdministration>
<h2>game-Administration</h2>
<GameAdministration GameData={data.games}></GameAdministration>

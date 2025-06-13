import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user.role !== 'ADMIN') {
		redirect(302, '/');
	}

	const users = await prisma.user.findMany({
		select: {
			username: true,
			role: true
		}
	});

	const games = 'games';

	return {
		users: users,
		games: games
	};
};

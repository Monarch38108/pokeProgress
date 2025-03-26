import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { TrackerData } from '../../interfaces/TrackerData';
import { prisma } from '$lib/prisma';

let trackers: TrackerData[];


export const load: PageServerLoad = async ({ locals, params }) => {
	// redirect user if not logged in
	if (!locals.user) {
		redirect(302, '/');
	}

	const user = await prisma.user.findUnique({
		where: {
			username: params.slug
		}
	});
	if (user) {
		trackers = await prisma.tracker.findMany({
			where: { userId: user.id },
			select: {
				id: true,
				progress: true,
				isPublic: true,
				createdAt: true,
				updatedAt: true,
				game: {
					select: {
						id: true,
						title: true,
					}
				}
			}
		});
	}
	return {
		pageOwner: params.slug,
		trackerData: trackers
	};
};
import type { Game } from '@prisma/client';

export interface TrackerData {
	id: string
	progress: number
	createdAt: Date
	updatedAt: Date
	game: Game
}
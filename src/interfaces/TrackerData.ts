import type { Game } from '@prisma/client';

export interface TrackerData {
	id: string
	progress: number
	isPublic: boolean
	createdAt: Date
	updatedAt: Date
	game: Game
}
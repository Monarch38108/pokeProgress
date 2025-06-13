import type { Roles } from '@prisma/client';

export interface UserData {
	username: string;
	role: Roles;
}

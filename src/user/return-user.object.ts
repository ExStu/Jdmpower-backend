import { Prisma } from "@prisma/client";

export const returnUserObject: Prisma.UserSelect = {
	id: true,
	email: true,
	name: true,
	surname: true,
	middleName: true,
	avatarPath: true,
	password: false,
	phone: true,
	isAdmin: false
};

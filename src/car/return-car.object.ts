import { Prisma } from '@prisma/client'

export const returnCarObject: Prisma.CarSelect = {
	id: true,
	name: true,
	image: true,
	slug: true
}
import { Prisma } from '@prisma/client'
import { returnCarObject } from "src/car/return-car.object";

export const returnModelObject: Prisma.ModelSelect = {
	id: true,
	name: true,
	image: true,
	slug: true,
	car: {select: returnCarObject}
}
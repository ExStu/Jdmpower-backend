import { Prisma } from "@prisma/client";
import { returnModelObject } from "src/model/return-model.object";

export const returnGenerationObject: Prisma.GenerationSelect = {
	id: true,
	name: true,
	image: true,
	slug: true,
	chassis: true,
	engine: true,
	engineVolume: true,
	yearFrom: true,
	yearTo: true,
	model: {select: returnModelObject}
}
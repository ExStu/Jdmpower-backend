import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { GenerationDto } from "./generation.dto";
import { returnGenerationObject } from "./return-generation.object";
import { ModelService } from "src/model/model.service";

@Injectable()
export class GenerationService {
	constructor (
		private prisma: PrismaService,
		private modelService: ModelService
	) {}

	async byId(id: number) {
		const generation = await this.prisma.generation.findUnique({
			where: {
				id
			},
			select: returnGenerationObject
		})

		if (!generation) {
			throw new Error('Generation not found')
		}

		return generation
	}

	async bySlug(slug: string) {
		const generation = await this.prisma.generation.findUnique({
			where: {
				slug
			},
			select: returnGenerationObject
		})

		if (!generation) {
			throw new NotFoundException('Generation not found')
		}

		return generation
	}

	async getAll() {
		return this.prisma.generation.findMany({
			orderBy: {
				yearFrom: "asc"
			},
			select: returnGenerationObject
		})
	}

	async byModel(modelSlug: string) {
		const generations = await this.prisma.generation.findMany({
			where: {
				model: {
					slug: modelSlug
				}
			},
			orderBy: {
				yearFrom: "asc"
			},
			select: returnGenerationObject
		})

		if (!generations) throw new NotFoundException('Generations not found!')
		return generations
	}

	async create(dto: GenerationDto) {
		return this.prisma.generation.create({
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image,
				chassis: dto.chassis,
				engine: dto.engine,
				engineVolume: dto.engineVolume,
				yearFrom: dto.yearFrom,
				yearTo: dto.yearTo,
				model: {
					connect: {
						id: dto.modelId
					}
				}
			}
		})
	}

	async update(id: number, dto: GenerationDto) {

		await this.modelService.byId(dto.modelId)

		return this.prisma.generation.update({
			where: {
				id
			},
			data: {
				updatedAt: new Date(),
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image,
				chassis: dto.chassis,
				engine: dto.engine,
				engineVolume: dto.engineVolume,
				yearFrom: dto.yearFrom,
				yearTo: dto.yearTo,
				model: {
					connect: {
						id: dto.modelId
					}
				}
			}
		})
	}

	async delete(id: number) {
		return this.prisma.generation.delete({
			where: {
				id
			},
		})
	}
}

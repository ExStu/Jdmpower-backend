import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { ModelDto } from "./model.dto";
import { returnModelObject } from "./return-model.object";
import { CarService } from "src/car/car.service";

@Injectable()
export class ModelService {
	constructor (
		private prisma: PrismaService,
		private carService: CarService
	) {}

	async byId(id: number) {
		const model = await this.prisma.model.findUnique({
			where: {
				id
			},
			select: returnModelObject
		})

		if (!model) {
			throw new Error('Model not found')
		}

		return model
	}

	async bySlug(slug: string) {
		const model = await this.prisma.model.findUnique({
			where: {
				slug
			},
			select: returnModelObject
		})

		if (!model) {
			throw new NotFoundException('Model not found')
		}

		return model
	}

	async getAll() {
		return this.prisma.model.findMany({
			select: returnModelObject
		})
	}

	async byCar(carSlug: string) {
		const models = await this.prisma.model.findMany({
			where: {
				car: {
					slug: carSlug
				}
			},
			select: returnModelObject
		})

		if (!models) throw new NotFoundException('Models not found!')
		return models
	}

	async create(dto: ModelDto) {
		return this.prisma.model.create({
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image
			}
		})
	}

	async update(id: number, dto: ModelDto) {

		await this.carService.byId(dto.carId)

		return this.prisma.model.update({
			where: {
				id
			},
			data: {
				updatedAt: new Date(),
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image,
				car: {
					connect: {
						id: dto.carId
					}
				}
			}
		})
	}

	async delete(id: number) {
		return this.prisma.model.delete({
			where: {
				id
			},
		})
	}
}

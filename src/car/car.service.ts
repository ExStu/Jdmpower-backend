import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { CarDto } from "./car.dto";
import { returnCarObject } from "./return-car.object";

@Injectable()
export class CarService {
	constructor (private prisma: PrismaService) {}

	async byId(id: number) {
		const car = await this.prisma.car.findUnique({
			where: {
				id
			},
			select: returnCarObject
		})

		if (!car) {
			throw new Error('Car not found')
		}

		return car
	}

	async bySlug(slug: string) {
		const car = await this.prisma.car.findUnique({
			where: {
				slug
			},
			select: returnCarObject
		})

		if (!car) {
			throw new NotFoundException('Car not found')
		}

		return car
	}

	async getAll() {
		return this.prisma.car.findMany({
			orderBy: {
				name: "asc"
			},
			select: returnCarObject,
		})
	}

	async create() {
		return this.prisma.car.create({
			data: {
				name: "",
				slug: "",
				image: ""
			}
		})
	}

	async update(id: number, dto: CarDto) {
		return this.prisma.car.update({
			where: {
				id
			},
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image
			}
		})
	}

	async delete(id: number) {
		return this.prisma.car.delete({
			where: {
				id
			},
		})
	}
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { ManufactureDto } from "./manufacture.dto";
import { returnManufactureObject } from "./return-manufacture.object";

@Injectable()
export class ManufactureService {
	constructor(private prisma: PrismaService) {}

	async byId(id: number) {
		const manufacture = await this.prisma.manufacture.findUnique({
			where: {
				id
			},
			select: returnManufactureObject
		});

		if (!manufacture) {
			throw new Error("Manufacture not found");
		}

		return manufacture;
	}

	async bySlug(slug: string) {
		const manufacture = await this.prisma.manufacture.findUnique({
			where: {
				slug
			},
			select: returnManufactureObject
		});

		if (!manufacture) {
			throw new NotFoundException("Manufacture not found");
		}

		return manufacture;
	}

	async getAll() {
		return this.prisma.manufacture.findMany({
			orderBy: {
				name: "asc"
			},
			select: returnManufactureObject
		});
	}

	async create(dto: ManufactureDto) {
		return this.prisma.manufacture.create({
			data: {
				name: dto.name,
				slug: generateSlug(dto.name),
				image: dto.image
			}
		});
	}

	async update(id: number, dto: ManufactureDto) {
		return this.prisma.manufacture.update({
			where: {
				id
			},
			data: {
				updatedAt: new Date(),
				name: dto.name,
				slug: generateSlug(dto.name)
			}
		});
	}

	async delete(id: number) {
		return this.prisma.manufacture.delete({
			where: {
				id
			},
			select: returnManufactureObject
		});
	}
}

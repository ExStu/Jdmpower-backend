import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { returnNewsObject } from "./return-news.object";
import { GetNewsDto, NewsDto } from "./news.dto";
import { PaginationService } from "../pagination/pagination.service";

@Injectable()
export class NewsService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService
	) {}

	async getAll(dto: GetNewsDto) {
		const { perPage, skip, page } = this.paginationService.getPagination({
			page: dto.pageNumber,
			perPage: "8"
		});

		const news = await this.prisma.news.findMany({
			orderBy: {
				createdAt: "desc"
			},
			skip,
			take: perPage,
			select: returnNewsObject
		});

		const totalLength = await this.prisma.news.count();

		return {
			news,
			totalLength,
			pageNumber: page,
			pageSize: perPage
		};
	}

	async byId(id: number) {
		const news = await this.prisma.news.findUnique({
			where: {
				id
			},
			select: returnNewsObject
		});

		if (!news) {
			throw new Error("Post not found");
		}

		return news;
	}

	// async bySlug(slug: string) {
	//   const news = await this.prisma.news.findUnique({
	//     where: {
	//       slug
	//     },
	//     select: returnNewsObject
	//   })
	//
	//   if (!news) {
	// 		throw new NotFoundException('Post not found')
	// 	}
	//
	// 	return news
	// }

	async create(dto: NewsDto) {
		return this.prisma.news.create({
			data: {
				image: dto.image,
				title: dto.title,
				description: dto.description,
				slug: generateSlug(dto.title)
			}
		});
	}

	async update(id: number, dto: NewsDto) {
		return this.prisma.news.update({
			where: {
				id
			},
			data: {
				image: dto.image,
				title: dto.title,
				description: dto.description,
				slug: generateSlug(dto.title)
			}
		});
	}

	async delete(id: number) {
		return this.prisma.news.delete({
			where: {
				id
			}
		});
	}
}

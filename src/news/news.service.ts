import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { generateSlug } from "src/utils/generate-slug";
import { returnNewsObject } from "./return-news.object";
import { NewsDto } from "./news.dto";

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async byId(id: number) {
    const news = await this.prisma.news.findUnique({
      where: {
        id
      },
      select: returnNewsObject
    })

    if (!news) {
			throw new Error('Post not found')
		}

		return news
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

  async getAll() {
    return this.prisma.news.findMany({
      orderBy: {
        createdAt: "desc"
      },
      select: returnNewsObject
    })
  }

  async create(dto: NewsDto) {
    return this.prisma.news.create({
      data: {
        updatedAt: new Date(),
        image: dto.image,
        title: dto.title,
        description: dto.description,
        slug: generateSlug(dto.title)
      }
    })
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
		})
  }

  async delete(id: number) {
  
    return this.prisma.news.delete({
			where: {
				id
			},
		})
  }
}

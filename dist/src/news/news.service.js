"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
const return_news_object_1 = require("./return-news.object");
const pagination_service_1 = require("../pagination/pagination.service");
let NewsService = exports.NewsService = class NewsService {
    constructor(prisma, paginationService) {
        this.prisma = prisma;
        this.paginationService = paginationService;
    }
    async getAll(dto) {
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
            select: return_news_object_1.returnNewsObject
        });
        const totalLength = await this.prisma.news.count();
        return {
            news,
            totalLength,
            pageNumber: page,
            pageSize: perPage
        };
    }
    async byId(id) {
        const news = await this.prisma.news.findUnique({
            where: {
                id
            },
            select: return_news_object_1.returnNewsObject
        });
        if (!news) {
            throw new Error("Post not found");
        }
        return news;
    }
    async create(dto) {
        return this.prisma.news.create({
            data: {
                image: dto.image,
                title: dto.title,
                description: dto.description,
                slug: (0, generate_slug_1.generateSlug)(dto.title)
            }
        });
    }
    async update(id, dto) {
        return this.prisma.news.update({
            where: {
                id
            },
            data: {
                image: dto.image,
                title: dto.title,
                description: dto.description,
                slug: (0, generate_slug_1.generateSlug)(dto.title)
            }
        });
    }
    async delete(id) {
        return this.prisma.news.delete({
            where: {
                id
            }
        });
    }
};
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagination_service_1.PaginationService])
], NewsService);
//# sourceMappingURL=news.service.js.map
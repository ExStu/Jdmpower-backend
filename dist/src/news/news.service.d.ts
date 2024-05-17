import { PrismaService } from "src/prisma.service";
import { GetNewsDto, NewsDto } from "./news.dto";
import { PaginationService } from "../pagination/pagination.service";
export declare class NewsService {
    private prisma;
    private paginationService;
    constructor(prisma: PrismaService, paginationService: PaginationService);
    getAll(dto: GetNewsDto): Promise<{
        news: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            description: string;
            image: string;
            title: string;
        }[];
        totalLength: number;
        pageNumber: number;
        pageSize: number;
    }>;
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        image: string;
        title: string;
    }>;
    create(dto: NewsDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
    update(id: number, dto: NewsDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
}

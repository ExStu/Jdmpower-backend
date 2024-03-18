import { PrismaService } from "src/prisma.service";
import { NewsDto } from "./news.dto";
export declare class NewsService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        image: string;
        title: string;
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        image: string;
        title: string;
    }[]>;
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

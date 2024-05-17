import { NewsService } from "./news.service";
import { GetNewsDto, NewsDto } from "./news.dto";
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
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
    getById(newsId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        image: string;
        title: string;
    }>;
    create(newsDto: NewsDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
    update(newsId: string, dto: NewsDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
    delete(newsId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string;
        title: string;
        description: string;
        slug: string;
    }>;
}

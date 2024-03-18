import { PrismaService } from 'src/prisma.service';
import { ReviewDto } from './review.dto';
import { ProductService } from 'src/product/product.service';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phone: string;
            password: string;
            isAdmin: boolean;
            name: string;
            surname: string;
            middleName: string;
            avatarPath: string;
        };
        product: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            sku: string;
            description: string;
            price: number;
            images: string[];
            inStock: boolean;
            discount: number;
            categoryId: number;
            manufactureId: number;
            generationId: number;
            userId: number;
        };
        userId: number;
        productId: number;
        text: string;
    }[]>;
    create(userId: number, dto: ReviewDto, productId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        userId: number;
        productId: number;
    }>;
}

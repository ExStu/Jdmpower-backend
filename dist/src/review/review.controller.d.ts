import { ReviewDto } from './review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
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
    leaveReview(id: number, dto: ReviewDto, productId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        text: string;
        userId: number;
        productId: number;
    }>;
}

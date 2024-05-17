import { ReviewDto } from './review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getAll(): Promise<{
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
            discountedPrice: number;
            universal: boolean;
            categoryId: number;
            manufactureId: number;
            userId: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
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
        productId: number;
        rating: number;
        text: string;
    }[]>;
    leaveReview(id: number, dto: ReviewDto, productId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        rating: number;
        text: string;
        userId: number;
        productId: number;
    }>;
}

import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        reviews: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            text: string;
            userId: number;
            productId: number;
        }[];
        _count: {
            orders: number;
            reviews: number;
            favorites: number;
        };
        email: string;
        phone: string;
        password: string;
        isAdmin: boolean;
        surname: string;
        middleName: string;
        avatarPath: string;
        orders: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            userId: number;
        }[];
        favorites: {
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
        }[];
    }>;
    getNewTokens(id: number, dto: UserDto): Promise<{
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
    }>;
    toggleFavorite(id: number, productId: string): Promise<{
        message: string;
    }>;
}

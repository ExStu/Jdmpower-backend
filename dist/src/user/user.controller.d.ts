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
            rating: number;
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
            total: number;
            totalWithDiscount: number;
            email: string;
            phone: string;
            firstName: string;
            lastName: string;
            middleName: string;
            deliveryTc: boolean;
            desiredTc: string;
            city: string;
            tcAddress: string;
            passportSeries: string;
            passportNumber: string;
            deliveryToDoor: boolean;
            address: string;
            hardWrapRequired: boolean;
            message: string;
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
            discountedPrice: number;
            universal: boolean;
            categoryId: number;
            manufactureId: number;
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
    addToCart(id: number, productId: string): Promise<{
        message: string;
    }>;
}

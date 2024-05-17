import { OrderService } from "./order.service";
import { OrderDto } from "./order.dto";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<({
        items: ({
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
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                }[];
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    rating: number;
                    text: string;
                    userId: number;
                    productId: number;
                }[];
                generation: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                    chassis: string;
                    engine: string;
                    engineVolume: string;
                    yearFrom: string;
                    yearTo: string;
                    modelId: number;
                }[];
                category: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                };
                manufacture: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                };
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
                _count: {
                    orderItems: number;
                    reviews: number;
                    generation: number;
                    category: number;
                    manufacture: number;
                    user: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            orderId: number;
            productId: number;
        })[];
    } & {
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
    })[]>;
    getByUserId(userId: number): Promise<({
        items: ({} & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            orderId: number;
            productId: number;
        })[];
    } & {
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
    })[]>;
    createOrder(dto: OrderDto): Promise<{
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
    }>;
}

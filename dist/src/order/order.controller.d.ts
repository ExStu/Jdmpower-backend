import { OrderService } from './order.service';
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
                categoryId: number;
                manufactureId: number;
                generationId: number;
                userId: number;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: number;
                    productId: number;
                }[];
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    text: string;
                    userId: number;
                    productId: number;
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
                };
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
                    category: number;
                    manufacture: number;
                    generation: number;
                    user: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        userId: number;
    })[]>;
    getByUserId(userId: number): Promise<({
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
                categoryId: number;
                manufactureId: number;
                generationId: number;
                userId: number;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: number;
                    productId: number;
                }[];
                reviews: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    text: string;
                    userId: number;
                    productId: number;
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
                };
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
                    category: number;
                    manufacture: number;
                    generation: number;
                    user: number;
                };
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: number;
            productId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EnumOrderStatus;
        userId: number;
    })[]>;
}

import { PrismaService } from "src/prisma.service";
import { ManufactureDto } from "./manufacture.dto";
export declare class ManufactureService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
        image: string;
    }>;
    bySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
        image: string;
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
        image: string;
    }[]>;
    create(dto: ManufactureDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    update(id: number, dto: ManufactureDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            products: number;
        };
        products: {
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
        image: string;
    }>;
}

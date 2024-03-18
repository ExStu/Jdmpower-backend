import { ManufactureService } from "./manufacture.service";
import { ManufactureDto } from "./manufacture.dto";
export declare class ManufactureController {
    private readonly manufactureService;
    constructor(manufactureService: ManufactureService);
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
            categoryId: number;
            manufactureId: number;
            generationId: number;
            userId: number;
        }[];
    }[]>;
    getBySlug(manufactureSlug: string): Promise<{
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
            categoryId: number;
            manufactureId: number;
            generationId: number;
            userId: number;
        }[];
    }>;
    getById(manufactureId: string): Promise<{
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
            categoryId: number;
            manufactureId: number;
            generationId: number;
            userId: number;
        }[];
    }>;
    create(manufactureDto: ManufactureDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    update(manufactureId: string, dto: ManufactureDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(id: string): Promise<{
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
            categoryId: number;
            manufactureId: number;
            generationId: number;
            userId: number;
        }[];
    }>;
}

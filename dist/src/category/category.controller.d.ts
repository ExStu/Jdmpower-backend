import { CategoryDto } from "./category.dto";
import { CategoryService } from "./category.service";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
    getBySlug(categorySlug: string): Promise<{
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
    getById(categoryId: string): Promise<{
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
    create(categoryDto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    update(categoryId: string, dto: CategoryDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
    }>;
    delete(categoryId: string): Promise<{
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

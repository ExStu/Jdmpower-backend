import { Prisma } from "@prisma/client";
import { CategoryService } from "src/category/category.service";
import { PaginationService } from "src/pagination/pagination.service";
import { PrismaService } from "src/prisma.service";
import { GetAllProductDto } from "./dto/get-all.product.dto";
import { ProductDto } from "./dto/product.dto";
import { ManufactureService } from "src/manufacture/manufacture.service";
import { GenerationService } from "../generation/generation.service";
export declare class ProductService {
    private prisma;
    private paginationService;
    private categoryService;
    private manufactureService;
    private generationService;
    constructor(prisma: PrismaService, paginationService: PaginationService, categoryService: CategoryService, manufactureService: ManufactureService, generationService: GenerationService);
    getAll(queryDto?: GetAllProductDto): Promise<{
        products: {
            categoryId: number;
            manufactureId: number;
            generationId: number;
            name: string;
            description: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            sku: string;
            price: number;
            images: string[];
            inStock: boolean;
            discount: number;
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
        }[];
        totalLength: number;
        orderBy: Prisma.ProductOrderByWithRelationInput;
        pageSize: number;
        pageNumber: number;
    }>;
    private createFilter;
    private getSortOption;
    private getSearchTermFilter;
    private getPriceFilter;
    private getCategoryFilter;
    private getManufactureFilter;
    private getGenerationFilter;
    byId(id: number): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }>;
    bySku(sku: string): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }>;
    byCategory(categorySlug: string): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }[]>;
    byManufacture(manufactureSlug: string): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }[]>;
    byGeneration(generationSlug: string): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }[]>;
    getSimilar(id: number): Promise<{
        categoryId: number;
        manufactureId: number;
        generationId: number;
        name: string;
        description: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        sku: string;
        price: number;
        images: string[];
        inStock: boolean;
        discount: number;
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
    }[]>;
    create(dto: ProductDto): Promise<{
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
    }>;
    update(id: number, dto: ProductDto): Promise<{
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
    }>;
    delete(id: number): Promise<{
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
    }>;
}

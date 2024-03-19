import { GetAllProductDto } from "./dto/get-all.product.dto";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(bodyDto: GetAllProductDto, queryDto: GetAllProductDto): Promise<{
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
        orderBy: import(".prisma/client").Prisma.ProductOrderByWithRelationInput;
        pageSize: number;
        pageNumber: number;
    }>;
    getSimilar(id: string): Promise<{
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
    }[]>;
    getProductsByCategory(categorySlug: string): Promise<{
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
    }[]>;
    getProductsByManufacture(manufactureSlug: string): Promise<{
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
    }[]>;
    getProductsByGeneration(generationSlug: string): Promise<{
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
    }[]>;
    createProduct(productDto: ProductDto): Promise<{
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
    updateProduct(id: string, dto: ProductDto): Promise<{
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
    deleteProduct(id: string): Promise<{
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
    getProduct(id: string): Promise<{
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
    }>;
}

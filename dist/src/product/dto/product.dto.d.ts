import { Prisma } from '@prisma/client';
export declare class ProductDto implements Prisma.ProductUpdateInput {
    name: string;
    sku: string;
    price: number;
    inStock: boolean;
    discount: number;
    description: string;
    images: string[];
    categoryId: number;
    manufactureId: number;
    generationId: number;
}

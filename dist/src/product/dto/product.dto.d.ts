import { Prisma } from "@prisma/client";
export declare class ProductDto implements Prisma.ProductUpdateInput {
    name: string;
    slug: string;
    sku: string;
    price: number;
    inStock: boolean;
    universal: boolean;
    discount: number;
    discountedPrice: number;
    description: string;
    images: string[];
    categoryId: number;
    manufactureId: number;
    generationId: number[];
}

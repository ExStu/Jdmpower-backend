import { CategoryDto, CategoryResponseDto } from "../../category/category.dto";
import { ManufactureDto, ManufactureResponseDto } from "../../manufacture/manufacture.dto";
import { GenerationDto, GenerationResponseDto } from "../../generation/generation.dto";
import { ReviewDto } from "../../review/review.dto";
export declare class ProductResponseDto {
    id: number;
    name: string;
    slug: string;
    sku: string;
    images: string[];
    description: string;
    price: number;
    discount: number;
    inStock: boolean;
    category: CategoryResponseDto;
    manufacture: ManufactureResponseDto;
    generation: GenerationResponseDto;
    reviews: ReviewDto;
}
export declare class ProductMutationResponseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    images: string[];
    description: string;
    name: string;
    sku: string;
    price: number;
    slug: string;
    discount: number;
    inStock: boolean;
    category: CategoryDto;
    manufacture: ManufactureDto;
    generation: GenerationDto;
    reviews: ReviewDto;
}

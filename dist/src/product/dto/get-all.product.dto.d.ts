import { PaginationDto } from "src/pagination/pagination.dto";
import { ProductResponseDto } from "./responseProduct.dto";
export declare enum EnumProductSort {
    HIGH_PRICE = "high-price",
    LOW_PRICE = "low-price",
    NEWEST = "newest",
    OLDEST = "oldest"
}
export declare class GetAllProductDto extends PaginationDto {
    sortBy?: EnumProductSort;
    searchTerm?: string;
    ratings?: string;
    minPrice?: string;
    maxPrice?: string;
    categoryId?: string;
    manufactureId?: string;
    generationId?: string;
    pageNumber?: string;
}
export declare class GetAllProductResponseDto {
    products: ProductResponseDto;
    totalLength: number;
    orderBy: EnumProductSort;
    pageSize: number;
    pageNumber: number;
}

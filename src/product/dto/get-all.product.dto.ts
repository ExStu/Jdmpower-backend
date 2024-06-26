import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString
} from "class-validator";
import { PaginationDto } from "src/pagination/pagination.dto";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ProductResponseDto } from "./responseProduct.dto";

export enum EnumProductSort {
	HIGH_PRICE = "high-price",
	LOW_PRICE = "low-price",
	NEWEST = "newest",
	OLDEST = "oldest"
}

export class GetAllProductDto extends PaginationDto {
	@ApiPropertyOptional({
		enum: EnumProductSort
	})
	@IsOptional()
	@IsEnum(EnumProductSort)
	sortBy?: EnumProductSort;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	searchTerm?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	ratings?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	minPrice?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	maxPrice?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	categoryId?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	manufactureId?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	generationId?: string;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	pageNumber?: string;
}

export class GetAllProductResponseDto {
	@ApiProperty({
		type: ProductResponseDto
	})
	products: ProductResponseDto;

	@ApiProperty({
		type: Number
	})
	totalLength: number;

	@ApiProperty({
		enum: EnumProductSort
	})
	orderBy: EnumProductSort;

	@ApiProperty({
		type: Number
	})
	pageSize: number;

	@ApiProperty({
		type: Number
	})
	pageNumber: number;

	@ApiProperty({
		type: Number
	})
	minPrice: number;

	@ApiProperty({
		type: Number
	})
	maxPrice: number;
}

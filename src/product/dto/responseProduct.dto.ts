import { ApiProperty } from "@nestjs/swagger";
import { CategoryDto, CategoryResponseDto } from "../../category/category.dto";
import {
	ManufactureDto,
	ManufactureResponseDto
} from "../../manufacture/manufacture.dto";
import {
	GenerationDto,
	GenerationResponseDto
} from "../../generation/generation.dto";
import { ReviewDto } from "../../review/review.dto";
import { IsNumber, IsOptional } from "class-validator";

export class ProductResponseDto {
	@ApiProperty({
		type: Number
	})
	id: number;

	@ApiProperty({
		type: String
	})
	name: string;

	@ApiProperty({
		type: String
	})
	slug: string;

	@ApiProperty({
		type: String
	})
	sku: string;

	@ApiProperty({
		type: [String]
	})
	images: string[];

	@ApiProperty({
		type: String
	})
	description: string;

	@ApiProperty({
		type: Number
	})
	price: number;

	@ApiProperty({
		type: Number
	})
	discount: number;

	@ApiProperty({
		type: Number
	})
	@IsOptional()
	@IsNumber()
	discountedPrice: number;

	@ApiProperty({
		type: Boolean
	})
	inStock: boolean;

	@ApiProperty({
		type: CategoryDto
	})
	category: CategoryResponseDto;

	@ApiProperty({
		type: ManufactureDto
	})
	manufacture: ManufactureResponseDto;

	@ApiProperty({
		type: GenerationDto
	})
	generation: GenerationResponseDto;

	@ApiProperty({
		type: ReviewDto
	})
	reviews: ReviewDto;
}

export class ProductMutationResponseDto {
	@ApiProperty({
		type: Number
	})
	id: number;

	@ApiProperty({
		type: Date
	})
	createdAt: Date;

	@ApiProperty({
		type: Date
	})
	updatedAt: Date;

	@ApiProperty({
		type: [String]
	})
	images: string[];

	@ApiProperty({
		type: String
	})
	description: string;

	@ApiProperty({
		type: String
	})
	name: string;

	@ApiProperty({
		type: String
	})
	sku: string;

	@ApiProperty({
		type: Number
	})
	price: number;

	@ApiProperty({
		type: String
	})
	slug: string;

	@ApiProperty({
		type: Number
	})
	discount: number;

	@ApiProperty({
		type: Boolean
	})
	inStock: boolean;

	@ApiProperty({
		type: CategoryDto
	})
	category: CategoryDto;

	@ApiProperty({
		type: ManufactureDto
	})
	manufacture: ManufactureDto;

	@ApiProperty({
		type: GenerationDto
	})
	generation: GenerationDto;

	@ApiProperty({
		type: ReviewDto
	})
	reviews: ReviewDto;
}

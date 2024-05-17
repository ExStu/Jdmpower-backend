import { Prisma } from "@prisma/client";
import {
	ArrayMinSize,
	IsArray,
	IsBoolean,
	IsNumber,
	IsOptional,
	IsString
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ProductDto implements Prisma.ProductUpdateInput {
	@ApiProperty({
		type: String
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	slug: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	sku: string;

	@ApiProperty({
		type: Number
	})
	@IsNumber()
	price: number;

	@ApiProperty({
		type: Boolean
	})
	@IsBoolean()
	inStock: boolean;

	@ApiProperty({
		type: Boolean
	})
	@IsBoolean()
	universal: boolean;

	@ApiProperty({
		type: Number
	})
	@IsNumber()
	discount: number;

	@ApiProperty({
		type: Number
	})
	@IsOptional()
	@IsNumber()
	discountedPrice: number;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	description: string;

	@ApiPropertyOptional({
		type: [String]
	})
	@IsOptional()
	@IsString({ each: true })
	images: string[];

	@ApiProperty({
		type: Number
	})
	@IsNumber()
	categoryId: number;

	@ApiProperty({
		type: Number
	})
	@IsNumber()
	manufactureId: number;

	@ApiProperty({
		type: [Number]
	})
	@IsArray()
	generationId: number[];
}

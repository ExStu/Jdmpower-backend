import { Prisma } from '@prisma/client'
import { ArrayMinSize, IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ProductDto implements Prisma.ProductUpdateInput {
	@ApiProperty({
		type: String,
	})
	@IsString()
	name: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	sku: string

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	price: number

	@ApiProperty({
		type: Boolean,
	})
	@IsBoolean()
	inStock: boolean

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	discount: number

	@ApiPropertyOptional({
		type: String,
	})
	@IsOptional()
	@IsString()
	description: string

	@ApiPropertyOptional({
		type: [String],
		minItems: 1
	})
	@IsOptional()
	@IsString({ each: true })
	@ArrayMinSize(1)
	images: string[]

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	categoryId: number

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	manufactureId: number

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	generationId: number
}

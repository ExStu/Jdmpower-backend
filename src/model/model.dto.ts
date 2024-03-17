import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ModelDto {
	@ApiProperty({
		type: String
	})
	@IsString()
	name: string

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	image: string

	@ApiProperty({
		type: Number
	})
	@IsNumber()
	carId: number
}

export class ModelResponseDto {
	@ApiProperty({
		type: Number
	})
	id: number

	@ApiProperty({
		type: String
	})
	name: string

	@ApiProperty({
		type: String
	})
	slug: string

	@ApiProperty({
		type: Number
	})
	carId: number
}

export class ModelMutationResponseDto {
	@ApiProperty({
		type: Number
	})
	id: number

	@ApiProperty({
		type: Date
	})
	createdAt: Date

	@ApiProperty({
		type: Date
	})
	updatedAt: Date

	@ApiProperty({
		type: String
	})
	name: string

	@ApiProperty({
		type: String
	})
	slug: string

	@ApiProperty({
		type: Number
	})
	carId: number
}

import { IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class GenerationDto {
	@ApiProperty({
		type: String,
	})
	@IsString()
	name: string

	@ApiPropertyOptional({
		type: String,
	})
	@IsOptional()
	@IsString()
	image: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	chassis: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	engine: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	engineVolume: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	yearFrom: string

	@ApiProperty({
		type: String,
	})
	@IsString()
	yearTo: string

	@ApiProperty({
		type: Number,
	})
	@IsNumber()
	modelId: number
}

export class GenerationResponseDto {
	@ApiProperty({
		type: Number,
	})
	id: number

	@ApiProperty({
		type: String,
	})
	name: string

	@ApiProperty({
		type: String,
	})
	image: string

	@ApiProperty({
		type: String,
	})
	yearFrom: string

	@ApiProperty({
		type: String,
	})
	yearTo: string

	@ApiProperty({
		type: Number,
	})
	modelId: number
}

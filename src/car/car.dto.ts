import { IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CarDto {
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
}

export class ResponseCarDto {
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
	slug: string
}

import { IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ManufactureDto {
	@ApiProperty({
		type: String
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: String
	})
	@IsOptional()
	@IsString()
	image?: string;
}

export class ManufactureResponseDto {
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
	@IsString()
	@IsOptional()
	image?: string;
}

export class MutationManufactureResponseDto {
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
		type: String
	})
	name: string;

	@ApiProperty({
		type: String
	})
	slug: string;
}

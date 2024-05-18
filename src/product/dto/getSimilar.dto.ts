import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetSimilarDto {
	@ApiProperty({
		type: Number
	})
	@IsString()
	id: number;

	@ApiPropertyOptional({
		type: Number
	})
	@IsString()
	chosenGenId: number;

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	pageNumber?: string;
}

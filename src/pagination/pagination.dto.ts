import { IsOptional, IsString } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class PaginationDto {
	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	page?: string

	@ApiPropertyOptional({
		type: String
	})
	@IsOptional()
	@IsString()
	perPage?: string
}

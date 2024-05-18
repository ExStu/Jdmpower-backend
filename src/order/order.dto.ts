import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsObject, IsOptional, IsString } from "class-validator";
import { ICartItem } from "../email/email.dto";

export class OrderDto {
	@ApiProperty({
		type: String
	})
	@IsObject()
	items: ICartItem[];

	@ApiProperty({
		type: String
	})
	@IsString()
	email: string;

	@ApiProperty({
		type: String
	})
	@IsOptional()
	@IsString()
	phone?: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	firstName: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	lastName: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	middleName?: string;

	@ApiProperty({
		type: Boolean
	})
	@IsBoolean()
	@IsOptional()
	deliveryTc?: boolean;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	desiredTc?: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	city?: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	tcAddress?: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	passportSeries?: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	passportNumber?: string;

	@ApiProperty({
		type: Boolean
	})
	@IsBoolean()
	@IsOptional()
	deliveryToDoor?: boolean;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	address?: string;

	@ApiProperty({
		type: Boolean
	})
	@IsBoolean()
	@IsOptional()
	hardWrapRequired?: boolean;

	@ApiProperty({
		type: String
	})
	@IsString()
	@IsOptional()
	message?: string;
}

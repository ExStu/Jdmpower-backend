import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsObject, IsOptional, IsString } from "class-validator";
import { ProductResponseDto } from "../product/dto/responseProduct.dto";

export interface ICartItem {
	product: ProductResponseDto;
	quantity: number;
}

export class EmailForOrderDto {
	@ApiProperty({
		type: String
	})
	@IsString()
	to: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	subject: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	text: string;

	@ApiProperty({
		type: String
	})
	@IsObject()
	items: ICartItem[];

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

export class EmailToConfirmDto extends EmailForOrderDto {}

export class EmailContactRequestDto {
	@ApiProperty({
		type: String
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	email: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	subject: string;

	@ApiProperty({
		type: String
	})
	@IsString()
	message: string;
}

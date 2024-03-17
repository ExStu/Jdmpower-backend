import { IsEmail, IsOptional, IsString } from "class-validator";

export class UserDto {
	@IsEmail()
	email: string;

	@IsOptional()
	@IsString()
	password?: string;

	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	surname: string;

	@IsOptional()
	@IsString()
	middleName: string;

	@IsOptional()
	@IsString()
	avatarPath: string;

	@IsOptional()
	@IsString()
	phone?: string;
}

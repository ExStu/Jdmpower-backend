import {
	Body,
	Controller,
	Get,
	HttpCode,
	Param,
	Patch,
	Put,
	UsePipes,
	ValidationPipe
} from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/auth/decorators/user.decorator";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get("profile")
	@Auth()
	async getProfile(@CurrentUser("id") id: number) {
		return this.userService.byId(id);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put("profile")
	async getNewTokens(@CurrentUser("id") id: number, @Body() dto: UserDto) {
		return this.userService.updateProfile(id, dto);
	}

	@HttpCode(200)
	@Auth()
	@Patch("profile/favorites/:productId")
	async toggleFavorite(
		@CurrentUser("id") id: number,
		@Param("productId") productId: string
	) {
		return this.userService.toggleFavorite(id, +productId);
	}

	@HttpCode(200)
	@Auth()
	@Patch("profile/add-to-cart/:productId")
	async addToCart(
		@CurrentUser("id") id: number,
		@Param("productId") productId: string
	) {
		return this.userService.toggleFavorite(id, +productId);
	}
}

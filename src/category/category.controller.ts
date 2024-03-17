import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import {
	CategoryDto,
	CategoryResponseDto,
	MutationCategoryResponseDto
} from "./category.dto";
import { CategoryService } from "./category.service";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";

@ApiTags("Categories")
@Controller("categories")
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: CategoryResponseDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll() {
		return this.categoryService.getAll();
	}

	@Get(":categorySlug")
	@ApiOkResponse({
		description: "OK",
		type: CategoryResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getBySlug(@Param("categorySlug") categorySlug: string) {
		return this.categoryService.bySlug(categorySlug);
	}

	@Get(":categoryId")
	@Auth()
	@ApiOkResponse({
		description: "OK",
		type: CategoryResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getById(@Param("categoryId") categoryId: string) {
		return this.categoryService.byId(+categoryId);
	}

	@HttpCode(200)
	@Auth("admin")
	@Post("create-category")
	@ApiOkResponse({
		description: "OK",
		type: MutationCategoryResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async create(@Body() categoryDto: CategoryDto) {
		return this.categoryService.create(categoryDto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth("admin")
	@Put(":categoryId")
	@ApiOkResponse({
		description: "OK",
		type: MutationCategoryResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async update(
		@Param("categoryId") categoryId: string,
		@Body() dto: CategoryDto
	) {
		return this.categoryService.update(+categoryId, dto);
	}

	@HttpCode(200)
	@Auth("admin")
	@Delete(":categoryId")
	@ApiOkResponse({
		description: "Deleted Successfully",
		type: CategoryResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async delete(@Param("categoryId") categoryId: string) {
		return this.categoryService.delete(+categoryId);
	}
}

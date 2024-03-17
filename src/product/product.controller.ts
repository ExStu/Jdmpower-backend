import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import {
	GetAllProductDto,
	GetAllProductResponseDto
} from "./dto/get-all.product.dto";
import { ProductDto } from "./dto/product.dto";
import { ProductService } from "./product.service";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";
import {
	ProductMutationResponseDto,
	ProductResponseDto
} from "./dto/responseProduct.dto";

@ApiTags("Products")
@Controller("products")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	@ApiOkResponse({
		description: "OK",
		type: GetAllProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll(
		@Body() bodyDto: GetAllProductDto,
		@Query() queryDto: GetAllProductDto
	) {
		return this.productService.getAll(bodyDto, queryDto);
	}

	@Get("similar/:id")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getSimilar(@Param("id") id: string) {
		return this.productService.getSimilar(+id);
	}

	// @Get('by-slug/:slug')
	// @ApiOkResponse({
	// 	description: "OK",
	// 	type: ProductResponseDto,
	// })
	// @ApiNotFoundResponse({
	// 	description: 'Not Found',
	// })
	// @ApiBadRequestResponse({ description: 'Bad Request' })
	// async getProductBySlug(@Param('slug') slug: string) {
	// 	return this.productService.bySlug(slug)
	// }

	@Get("by-category/:categorySlug")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getProductsByCategory(@Param("categorySlug") categorySlug: string) {
		return this.productService.byCategory(categorySlug);
	}

	@Get("by-manufacture/:manufactureSlug")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getProductsByManufacture(
		@Param("manufactureSlug") manufactureSlug: string
	) {
		return this.productService.byManufacture(manufactureSlug);
	}
	@Get("by-generation/:generationSlug")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getProductsByGeneration(
		@Param("generationSlug") generationSlug: string
	) {
		return this.productService.byGeneration(generationSlug);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth("admin")
	@Post("create")
	@ApiOkResponse({
		description: "OK",
		type: ProductMutationResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async createProduct(@Body() productDto: ProductDto) {
		return this.productService.create(productDto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(":id")
	@Auth("admin")
	@ApiOkResponse({
		description: "OK",
		type: ProductMutationResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async updateProduct(@Param("id") id: string, @Body() dto: ProductDto) {
		return this.productService.update(+id, dto);
	}

	@HttpCode(200)
	@Delete(":id")
	@Auth("admin")
	@ApiOkResponse({
		description: "OK",
		type: ProductDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async deleteProduct(@Param("id") id: string) {
		return this.productService.delete(+id);
	}

	@Get(":id")
	@Auth("admin")
	async getProduct(@Param("id") id: string) {
		return this.productService.byId(+id);
	}
}

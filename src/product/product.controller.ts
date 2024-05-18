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
	Req,
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
	ApiProperty,
	ApiTags
} from "@nestjs/swagger";
import {
	ProductMutationResponseDto,
	ProductResponseDto
} from "./dto/responseProduct.dto";
import { IsOptional } from "class-validator";

class GetSimilarArgDto {
	@ApiProperty({
		type: Number
	})
	id: number;

	@ApiProperty({
		type: Number
	})
	@IsOptional()
	chosenGenId?: number;

	@ApiProperty({
		type: Number
	})
	@IsOptional()
	pageNumber?: string;
}
@ApiTags("Products")
@Controller("products")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	@ApiOkResponse({
		description: "OK",
		isArray: true,
		type: GetAllProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll(@Query() queryDto: GetAllProductDto) {
		return this.productService.getAll(queryDto);
	}

	@Get("search")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto,
		isArray: true
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getProductsBySearch(@Query("searchTerm") searchTerm: string) {
		return this.productService.getProductsBySearch(searchTerm);
	}

	@UsePipes(new ValidationPipe())
	@Get("similar")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getSimilar(@Query() dto: GetSimilarArgDto) {
		return this.productService.getSimilar(
			+dto.id,
			+dto.chosenGenId,
			dto.pageNumber
		);
	}

	@Get("by-id/:id")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getProduct(@Param("id") id: string) {
		return this.productService.byId(+id);
	}

	@Get("by-category/:categorySlug")
	@ApiOkResponse({
		description: "OK",
		type: ProductResponseDto,
		isArray: true
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
		type: ProductResponseDto,
		isArray: true
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
		type: ProductResponseDto,
		isArray: true
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
	@Auth("admin")
	@Post("create-many")
	@ApiOkResponse({
		description: "OK",
		type: ProductMutationResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async createManyProducts(@Body() productDto: ProductDto[]) {
		return this.productService.createMany(productDto);
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
}

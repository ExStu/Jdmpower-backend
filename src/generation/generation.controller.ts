import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { GenerationDto, GenerationResponseDto } from "./generation.dto";
import { GenerationService } from "./generation.service";
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CategoryResponseDto } from "../category/category.dto";

@ApiTags("Generations")
@Controller('generations')
export class GenerationController {
	constructor(private readonly generationService: GenerationService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: GenerationResponseDto,
		isArray: true,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getAll() {
		return this.generationService.getAll()
	}

	@Get('by-slug/:slug')
	@ApiOkResponse({
		description: "OK",
		type: GenerationResponseDto
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getBySlug(@Param('slug') slug: string) {
		return this.generationService.bySlug(slug)
	}

	@Get('by-model/:modelSlug')
	@ApiOkResponse({
		description: "OK",
		type: GenerationResponseDto
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getByModel(@Param('modelSlug') modelSlug: string) {
		return this.generationService.byModel(modelSlug)
	}

	@Get(':id')
	@Auth()
	@ApiOkResponse({
		description: "OK",
		type: GenerationResponseDto
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getById(@Param('id') id: string) {
		return this.generationService.byId(+id)
	}

	@HttpCode(200)
	@Auth('admin')
	@Post("create-generation")
	@ApiOkResponse({
		description: "OK",
		type: GenerationResponseDto
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async create(@Body() dto: GenerationDto) {
		return this.generationService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth('admin')
	@Put(':id')
	@ApiOkResponse({
		description: "OK",
		type: CategoryResponseDto,
		isArray: false,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async update(@Param('id') id: string,
							 @Body() dto: GenerationDto) {
		return this.generationService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth('admin')
	@Delete(':id')
	@ApiOkResponse({
		description: "Deleted successfully",
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async delete(@Param('id') id: string) {
		return this.generationService.delete(+id)
	}

}

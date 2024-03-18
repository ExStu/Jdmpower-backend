import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { ModelDto, ModelMutationResponseDto, ModelResponseDto } from "./model.dto";
import { ModelService } from "./model.service";
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Models")
@Controller('models')
export class ModelController {
	constructor(private readonly modelService: ModelService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: ModelResponseDto,
		isArray: true,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getAll() {
		return this.modelService.getAll()
	}

	@Get('by-slug/:modelSlug')
	@ApiOkResponse({
		description: "OK",
		type: ModelResponseDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getBySlug(@Param('modelSlug') modelSlug: string) {
		return this.modelService.bySlug(modelSlug)
	}

	@Get(':modelId')
	@Auth()
	@ApiOkResponse({
		description: "OK",
		type: ModelResponseDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getById(@Param('modelId') modelId: string) {
		return this.modelService.byId(+modelId)
	}

	@Get('by-car/:carSlug')
	@ApiOkResponse({
		description: "OK",
		type: ModelResponseDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async getByCar(@Param('carSlug') carSlug: string) {
		return this.modelService.byCar(carSlug)
	}

	@HttpCode(200)
	@Auth('admin')
	@Post("create")
	@ApiOkResponse({
		description: "OK",
		type: ModelMutationResponseDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async create(@Body() modelDto: ModelDto) {
		return this.modelService.create(modelDto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth('admin')
	@Put(':id')
	@ApiOkResponse({
		description: "OK",
		type: ModelMutationResponseDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async update(@Param('id') id: string,
							 @Body() dto: ModelDto) {
		return this.modelService.update(+id, dto)
	}

	@HttpCode(200)
	@Auth('admin')
	@Delete(':id')
	@ApiOkResponse({
		description: "Deleted successfully",
		type: ModelDto,
	})
	@ApiNotFoundResponse({
		description: 'Not Found',
	})
	@ApiBadRequestResponse({ description: 'Bad Request' })
	async delete(@Param('id') id: string) {
		return this.modelService.delete(+id)
	}
}

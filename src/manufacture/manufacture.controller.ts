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
import { ManufactureService } from "./manufacture.service";
import {
	ManufactureDto,
	ManufactureResponseDto,
	MutationManufactureResponseDto
} from "./manufacture.dto";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";

@ApiTags("Manufactures")
@Controller("manufactures")
export class ManufactureController {
	constructor(private readonly manufactureService: ManufactureService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: ManufactureResponseDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll() {
		return this.manufactureService.getAll();
	}

	@Get("/:manufactureSlug")
	@ApiOkResponse({
		description: "OK",
		type: ManufactureResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getBySlug(@Param("manufactureSlug") manufactureSlug: string) {
		return this.manufactureService.bySlug(manufactureSlug);
	}

	@Get(":manufactureId")
	@Auth()
	@ApiOkResponse({
		description: "OK",
		type: ManufactureResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getById(@Param("manufactureId") manufactureId: string) {
		return this.manufactureService.byId(+manufactureId);
	}

	@HttpCode(200)
	@Auth("admin")
	@Post("create-manufacturer")
	@ApiOkResponse({
		description: "OK",
		type: MutationManufactureResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async create(@Body() manufactureDto: ManufactureDto) {
		return this.manufactureService.create(manufactureDto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth("admin")
	@Put(":manufactureId")
	@ApiOkResponse({
		description: "OK",
		type: MutationManufactureResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async update(
		@Param("manufactureId") manufactureId: string,
		@Body() dto: ManufactureDto
	) {
		return this.manufactureService.update(+manufactureId, dto);
	}

	@HttpCode(200)
	@Auth("admin")
	@Delete(":id")
	@ApiOkResponse({
		description: "Deleted successfully",
		type: ManufactureResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async delete(@Param("id") id: string) {
		return this.manufactureService.delete(+id);
	}
}

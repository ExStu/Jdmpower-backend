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
import { CarDto, ResponseCarDto } from "./car.dto";
import { CarService } from "./car.service";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";

@ApiTags("Cars")
@Controller("cars")
export class CarController {
	constructor(private readonly carService: CarService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: ResponseCarDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll() {
		return this.carService.getAll();
	}

	@Get("by-slug/:carSlug")
	@ApiOkResponse({
		description: "OK",
		type: ResponseCarDto,
		isArray: false
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getBySlug(@Param("slug") slug: string) {
		return this.carService.bySlug(slug);
	}

	@Get(":carId")
	@Auth()
	@ApiOkResponse({
		description: "OK",
		type: ResponseCarDto,
		isArray: false
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getById(@Param("carId") id: string) {
		return this.carService.byId(+id);
	}

	@HttpCode(200)
	@Auth("admin")
	@Post()
	@ApiOkResponse({
		description: "OK",
		type: ResponseCarDto,
		isArray: false
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async create(@Body() dto: CarDto) {
		return this.carService.create(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth("admin")
	@Put(":carId")
	@ApiOkResponse({
		description: "OK",
		type: ResponseCarDto,
		isArray: false
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async update(@Param("carId") id: string, @Body() dto: CarDto) {
		return this.carService.update(+id, dto);
	}

	@HttpCode(200)
	@Auth("admin")
	@Delete(":carId")
	@ApiOkResponse({
		description: "Deleted Successfully"
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	async delete(@Param("carId") id: string) {
		return this.carService.delete(+id);
	}
}

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
import { CurrencyDto, CurrencyResponseDto } from "./currency.dto";
import { CurrencyService } from "./currency.service";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";

@ApiTags("Currencies")
@Controller("currencies")
export class CurrencyController {
	constructor(private readonly currencyService: CurrencyService) {}

	@Get()
	@ApiOkResponse({
		description: "OK",
		type: CurrencyResponseDto,
		isArray: true
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async getAll() {
		return this.currencyService.getAll();
	}

	@HttpCode(200)
	// @Auth("admin")
	@Post("create")
	@ApiOkResponse({
		description: "OK",
		type: CurrencyResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async create(@Body() currencyDto: CurrencyDto) {
		return this.currencyService.create(currencyDto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth("admin")
	@Put(":currencyId")
	@ApiOkResponse({
		description: "OK",
		type: CurrencyResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async update(
		@Param("currencyId") currencyId: string,
		@Body() dto: CurrencyDto
	) {
		return this.currencyService.update(+currencyId, dto);
	}

	@HttpCode(200)
	@Auth("admin")
	@Delete(":currencyId")
	@ApiOkResponse({
		description: "Deleted Successfully",
		type: CurrencyResponseDto
	})
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async delete(@Param("currencyId") currencyId: string) {
		return this.currencyService.delete(+currencyId);
	}
}

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
import { EmailService } from "./email.service";
import {
	ApiBadRequestResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags
} from "@nestjs/swagger";
import { EmailContactRequestDto, EmailForOrderDto } from "./email.dto";

@ApiTags("Email")
@Controller("email")
export class EmailController {
	constructor(private readonly emailService: EmailService) {}

	@HttpCode(200)
	@Post("send-order-success")
	// @ApiOkResponse({
	//   description: "OK",
	//   type: ModelResponseDto,
	//   isArray: true,
	// })
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async sendOrderSuccess(@Body() emailDto: EmailForOrderDto) {
		return this.emailService.sendOrderSuccess(emailDto);
	}

	@HttpCode(200)
	@Post("send-order-update")
	// @ApiOkResponse({
	//   description: "OK",
	//   type: ModelResponseDto,
	//   isArray: true,
	// })
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async sendOrderStatusUpdate(@Body() emailDto: EmailForOrderDto) {
		return this.emailService.sendOrderStatusUpdate(emailDto);
	}

	@HttpCode(200)
	@Post("send-contact-request")
	// @ApiOkResponse({
	//   description: "OK",
	//   type: ModelResponseDto,
	//   isArray: true,
	// })
	@ApiNotFoundResponse({
		description: "Not Found"
	})
	@ApiBadRequestResponse({ description: "Bad Request" })
	async sendContactRequest(@Body() emailDto: EmailContactRequestDto) {
		return this.emailService.sendContactRequest(emailDto);
	}
}

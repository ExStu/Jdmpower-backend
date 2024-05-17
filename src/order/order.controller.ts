import { Body, Controller, Get, Post } from "@nestjs/common";
import { Auth } from "src/auth/decorators/auth.decorator";
import { CurrentUser } from "src/auth/decorators/user.decorator";
import { OrderService } from "./order.service";
import { ApiTags } from "@nestjs/swagger";
import { OrderDto } from "./order.dto";

@ApiTags("Orders")
@Controller("orders")
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Get()
	@Auth("admin")
	async getAll() {
		return this.orderService.getAll();
	}

	@Get("by-user")
	@Auth()
	async getByUserId(@CurrentUser("id") userId: number) {
		return this.orderService.getByUserId(userId);
	}

	@Post("create-order")
	async createOrder(@Body() dto: OrderDto) {
		return this.orderService.createOrder(dto);
	}
}

import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { EmailService } from "../email/email.service";

@Module({
	controllers: [OrderController],
	providers: [EmailService, OrderService, PrismaService]
})
export class OrderModule {}

import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { EmailController } from "./email.controller";
import { EmailService } from "./email.service";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
	imports: [
		MailerModule.forRoot({
			transport: {
				host: "smtp.yandex.ru",
				secure: true,
				port: 465,
				auth: {
					user: "exstu1@yandex.ru",
					pass: "chnlupdoqgxynmvr"
				}
			}
		})
	],
	controllers: [EmailController],
	providers: [EmailService, PrismaService],
	exports: [EmailService]
})
export class EmailModule {}

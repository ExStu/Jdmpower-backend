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
					user: "sales@jdmpower.ru",
					pass: process.env.SMTP_PASS
				}
			}
		})
	],
	controllers: [EmailController],
	providers: [EmailService, PrismaService],
	exports: [EmailService]
})
export class EmailModule {}

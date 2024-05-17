import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { MailerService } from "@nestjs-modules/mailer";
import { EmailContactRequestDto, EmailForOrderDto } from "./email.dto";

@Injectable()
export class EmailService {
	constructor(
		private prisma: PrismaService,
		private mailerService: MailerService
	) {}

	async sendOrderSuccess(emailDto: EmailForOrderDto) {
		await this.mailerService.sendMail({
			from: "exstu1@yandex.ru",
			to: emailDto.to,
			subject: emailDto.subject,
			text: emailDto.text
		});
	}

	async sendOrderStatusUpdate(emailDto: EmailForOrderDto) {
		await this.mailerService.sendMail({
			from: "exstu1@yandex.ru",
			to: emailDto.to,
			subject: emailDto.subject,
			text: emailDto.text
		});
	}

	async sendContactRequest(emailDto: EmailContactRequestDto) {
		await this.mailerService.sendMail({
			from: "exstu1@yandex.ru",
			to: "exstu1@yandex.ru",
			subject: emailDto.subject,
			text: `${emailDto.name} хочет связаться:\nПочта для связи:\n${emailDto.email}\nСообщение: ${emailDto.message}`
		});
	}
}

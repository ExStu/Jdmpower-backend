import { PrismaService } from "src/prisma.service";
import { MailerService } from "@nestjs-modules/mailer";
import { EmailContactRequestDto, EmailForOrderDto } from "./email.dto";
export declare class EmailService {
    private prisma;
    private mailerService;
    constructor(prisma: PrismaService, mailerService: MailerService);
    sendOrderSuccess(emailDto: EmailForOrderDto): Promise<void>;
    sendOrderStatusUpdate(emailDto: EmailForOrderDto): Promise<void>;
    sendContactRequest(emailDto: EmailContactRequestDto): Promise<void>;
}

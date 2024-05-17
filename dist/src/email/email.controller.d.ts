import { EmailService } from "./email.service";
import { EmailContactRequestDto, EmailForOrderDto } from "./email.dto";
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendOrderSuccess(emailDto: EmailForOrderDto): Promise<void>;
    sendOrderStatusUpdate(emailDto: EmailForOrderDto): Promise<void>;
    sendContactRequest(emailDto: EmailContactRequestDto): Promise<void>;
}

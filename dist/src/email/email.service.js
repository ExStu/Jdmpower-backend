"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const mailer_1 = require("@nestjs-modules/mailer");
let EmailService = class EmailService {
    constructor(prisma, mailerService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
    }
    async sendOrderSuccess(emailDto) {
        await this.mailerService.sendMail({
            from: "exstu1@yandex.ru",
            to: emailDto.to,
            subject: emailDto.subject,
            text: emailDto.text
        });
    }
    async sendOrderStatusUpdate(emailDto) {
        await this.mailerService.sendMail({
            from: "exstu1@yandex.ru",
            to: emailDto.to,
            subject: emailDto.subject,
            text: emailDto.text
        });
    }
    async sendContactRequest(emailDto) {
        await this.mailerService.sendMail({
            from: "exstu1@yandex.ru",
            to: "exstu1@yandex.ru",
            subject: emailDto.subject,
            text: `${emailDto.name} хочет связаться:\nПочта для связи:\n${emailDto.email}\nСообщение: ${emailDto.message}`
        });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_1.MailerService])
], EmailService);
//# sourceMappingURL=email.service.js.map
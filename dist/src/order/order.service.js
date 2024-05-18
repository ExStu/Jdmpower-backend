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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("../product/return-product.object");
const email_service_1 = require("../email/email.service");
let OrderService = class OrderService {
    constructor(prisma, emailService) {
        this.prisma = prisma;
        this.emailService = emailService;
    }
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.returnProductObject
                        }
                    }
                }
            }
        });
    }
    async getByUserId(userId) {
        return this.prisma.order.findMany({
            where: {
                userId
            },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                items: {
                    include: {}
                }
            }
        });
    }
    async createOrder(orderDto) {
        const orderItemsToCreate = orderDto.items.map(item => ({
            quantity: item.quantity,
            product: {
                connect: {
                    id: item.product.id
                }
            }
        }));
        const totalOrderPrice = orderDto.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
        const totalOrderDiscounted = orderDto.items.reduce((acc, item) => acc + item.product.discountedPrice * item.quantity, 0);
        const order = await this.prisma.order.create({
            data: {
                items: {
                    create: orderItemsToCreate
                },
                total: totalOrderPrice,
                totalWithDiscount: totalOrderDiscounted,
                email: orderDto.email,
                phone: orderDto.phone,
                firstName: orderDto.firstName,
                lastName: orderDto.lastName,
                middleName: orderDto.middleName,
                deliveryTc: orderDto.deliveryTc,
                desiredTc: orderDto.desiredTc,
                city: orderDto.city,
                tcAddress: orderDto.tcAddress,
                passportSeries: orderDto.passportSeries,
                passportNumber: orderDto.passportNumber,
                deliveryToDoor: orderDto.deliveryToDoor,
                address: orderDto.address,
                hardWrapRequired: orderDto.hardWrapRequired,
                message: orderDto.message
            }
        });
        if (order) {
            const text = "Детали заказа\n" +
                "\n" +
                `Номер заказа: ${order.id}\n` +
                `Кому: ${orderDto.firstName} ${orderDto.lastName} ${orderDto.middleName}\n` +
                `Данные для связи:\n${orderDto.email}\n${orderDto.phone}\n` +
                "\n" +
                `Нужна доставка Транспортной компанией: ${orderDto.deliveryTc ? "да" : "нет"}\n` +
                `${orderDto.deliveryTc
                    ? `Предпочитаемая Транспортная компания: ${orderDto.desiredTc}\n` +
                        `Город: ${orderDto.city}\n` +
                        `Требуется доставка до двери: ${orderDto.deliveryToDoor ? "да" : "нет"}\n` +
                        `${orderDto.deliveryToDoor
                            ? `Адрес: ${orderDto.address}\n`
                            : `Адрес Точки ТК: ${orderDto.tcAddress}\n`}`
                    : ""}` +
                `Требуется жесткая упаковка: ${orderDto.hardWrapRequired ? "да" : "нет"}\n` +
                `${orderDto.message && `Комментарий: ${orderDto.message}\n`}` +
                `Список товаров:\n` +
                "\n" +
                orderDto.items.map(item => `Название: ${item.product.name}\n` +
                    `Артикул: ${item.product.sku}\n` +
                    `Количество: ${item.quantity}\n` +
                    `_______________________________\n`) +
                "\n" +
                `Общая сумма заказа: ${totalOrderPrice.toFixed(2).toString()} $\n` +
                `Общая сумма со скидкой: ${totalOrderDiscounted
                    .toFixed(2)
                    .toString()} $`;
            await this.emailService.sendOrderSuccess({
                to: orderDto.email,
                subject: "Заказ оформлен успешно",
                text,
                firstName: orderDto.firstName,
                lastName: orderDto.lastName,
                items: orderDto.items,
                middleName: orderDto.middleName,
                deliveryTc: orderDto.deliveryTc,
                desiredTc: orderDto.desiredTc,
                city: orderDto.city,
                tcAddress: orderDto.tcAddress,
                deliveryToDoor: orderDto.deliveryToDoor,
                address: orderDto.address,
                hardWrapRequired: orderDto.hardWrapRequired,
                message: orderDto.message
            });
        }
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        email_service_1.EmailService])
], OrderService);
//# sourceMappingURL=order.service.js.map
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { returnProductObject } from "src/product/return-product.object";
import { OrderDto } from "./order.dto";
import { EmailService } from "../email/email.service";

@Injectable()
export class OrderService {
	constructor(
		private prisma: PrismaService,
		private emailService: EmailService
	) {}

	async getAll() {
		return this.prisma.order.findMany({
			// where: {
			//   userId
			// },
			orderBy: {
				createdAt: "desc"
			},
			include: {
				items: {
					include: {
						product: {
							select: returnProductObject
						}
					}
				}
			}
		});
	}

	async getByUserId(userId: number) {
		return this.prisma.order.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: "desc"
			},
			include: {
				items: {
					include: {
						// product: {
						// 	select: returnProductObject
						// }
					}
				}
			}
		});
	}

	async createOrder(orderDto: OrderDto) {
		const orderItemsToCreate = orderDto.items.map(item => ({
			quantity: item.quantity,
			product: {
				connect: {
					id: item.product.id
				}
			}
		}));

		const totalOrderPrice = orderDto.items.reduce(
			(acc, item) => acc + item.product.price * item.quantity,
			0
		);

		const totalOrderDiscounted = orderDto.items.reduce(
			(acc, item) => acc + item.product.discountedPrice * item.quantity,
			0
		);

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
			const text =
				"Детали заказа\n" +
				"\n" +
				`Номер заказа: ${order.id}\n` +
				`Кому: ${orderDto.firstName} ${orderDto.lastName} ${orderDto.middleName}\n` +
				`Данные для связи:\n${orderDto.email}\n${orderDto.phone}\n` +
				"\n" +
				`Нужна доставка Транспортной компанией: ${
					orderDto.deliveryTc ? "да" : "нет"
				}\n` +
				`${
					orderDto.deliveryTc
						? `Предпочитаемая Транспортная компания: ${orderDto.desiredTc}\n` +
						  `Город: ${orderDto.city}\n` +
						  `Требуется доставка до двери: ${
								orderDto.deliveryToDoor ? "да" : "нет"
						  }\n` +
						  `${
								orderDto.deliveryToDoor
									? `Адрес: ${orderDto.address}\n`
									: `Адрес Точки ТК: ${orderDto.tcAddress}\n`
						  }`
						: ""
				}` +
				`Требуется жесткая упаковка: ${
					orderDto.hardWrapRequired ? "да" : "нет"
				}\n` +
				`${orderDto.message && `Комментарий: ${orderDto.message}\n`}` +
				`Список товаров:\n` +
				"\n" +
				orderDto.items.map(
					item =>
						`Название: ${item.product.name}\n` +
						`Артикул: ${item.product.sku}\n` +
						`Количество: ${item.quantity}\n` +
						`_______________________________\n`
				) +
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

			// await this.emailService.sendOrderSuccess({
			// 	to: "exstu1@yandex.ru",
			// 	subject: "Заказ оформлен успешно",
			// 	text,
			// 	firstName: orderDto.firstName,
			// 	lastName: orderDto.lastName,
			// 	items: orderDto.items,
			// 	middleName: orderDto.middleName,
			// 	deliveryTc: orderDto.deliveryTc,
			// 	desiredTc: orderDto.desiredTc,
			// 	city: orderDto.city,
			// 	tcAddress: orderDto.tcAddress,
			// 	deliveryToDoor: orderDto.deliveryToDoor,
			// 	address: orderDto.address,
			// 	hardWrapRequired: orderDto.hardWrapRequired,
			// 	message: orderDto.message
			// });
		}

		return order;
	}
}

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
			await this.emailService.sendOrderSuccess({
				to: orderDto.email,
				subject: "Заказ оформлен успешно",
				text: `Детали заказа\nКому: ${
					orderDto.firstName +
					" " +
					orderDto.lastName +
					" " +
					orderDto.middleName
				}\nДанные для связи:\n${orderDto.email}\n${
					orderDto.phone
				}\nНужна доставка ТК: ${orderDto.deliveryTc ? "да" : "нет"}\n
				${
					orderDto.deliveryTc
						? `Предпочитаемая ТК: \n${orderDto.desiredTc}\n 
							Город: ${orderDto.city}\n 
							Адрес ТК: ${orderDto.tcAddress}\n 
							Серия и номер: ${orderDto.passportNumber} ${orderDto.passportSeries}\n
							${
								orderDto.deliveryToDoor
									? `Требуется доставка до двери\n Адрес: ${orderDto.address}\n`
									: ""
							}
							Требуется жесткая упаковка: ${orderDto.hardWrapRequired ? "да" : "нет"}\n
							Комментарий: ${orderDto.message}
							`
						: ""
				} 
				Список товаров:\n
				__________________
				${orderDto.items.map(
					item =>
						`Название: ${item.product.name}\n
						Артикул: ${item.product.sku}\n
						Количество: ${item.quantity}\n
						_______________________________\n
					`
				)}
				Общая сумма заказа: ${totalOrderPrice.toString()}\n
				Общая сумма со скидкой: ${totalOrderDiscounted.toString()}
				`,
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
}

import { faker } from "@faker-js/faker";
import { PrismaClient, Product } from "@prisma/client";
import * as dotenv from "dotenv";
import { generateSlug } from "../src/utils/generate-slug";
import { generationsMap } from "./mocks";
// import { generateDiscount } from 'src/utils/random-number'
// import { generateSlug } from 'src/utils/generate-slug'
// import { getRandomNumber } from 'src/utils/random-number'

dotenv.config();

const getRandomInteger = (a = 0, b = 1) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));

	return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDiscount = () => {
	const discounts = [30, 20, 10, 0];

	const randomIndex = getRandomInteger(0, discounts.length - 1);

	return discounts[randomIndex];
};

const categoryMap = [
	"Тормоза",
	"Трансмиссия",
	"Электроника",
	"Моторные комплектующие",
	"Выпускные системы",
	"Экстерьер и подкапотное",
	"Подвесочные компоненты",
	"Охлаждение",
	"Интерьер и другое"
];
const manufactureMap = [
	"Aem",
	"Blitz",
	"Blox",
	"Garrett",
	"Invidia",
	"Tanabe",
	"Tein",
	"Defi",
	"Cusco"
];
const carMap = [
	"Lexus",
	"Honda",
	"Mitsubishi",
	"Subaru",
	"Toyota",
	"Nissan",
	"Mazda",
	"Infinity"
];

const models = ["Lancer", "Lancer Evolution", "Eclipse"];

const prisma = new PrismaClient();

const seed = async (quantity: number) => {
	// let first = 1;
	// let second = 2;
	// let third = 3;
	// let catId = 1;
	// let manId = 1;
	for (let i = 0; i < quantity; i++) {
		const productName = faker.commerce.productName() + i;
		const categoryName = faker.commerce.department();
		const manufactureName = faker.vehicle.manufacturer();
		const carName = faker.vehicle.vehicle();
		const modelName = faker.vehicle.model();
		const generationName = faker.vehicle.type();
		const newsName = faker.commerce.productName();
		// const brandName = faker.commerce.productMaterial()
		const generatedPrice = +faker.commerce.price(10, 999, 0);
		const generatedDiscount = generateDiscount();
		const manId = getRandomInteger(1, 9);
		const catId = getRandomInteger(1, 9);
		const genId1 = getRandomInteger(1, 99);
		const genId2 = getRandomInteger(1, 99);
		const genId3 = getRandomInteger(1, 99);

		// const newsPost = await prisma.news.create({
		// 	data: {
		// 		image: faker.image.imageUrl(500, 500, "cat", true),
		// 		title: newsName,
		// 		description: faker.lorem.paragraphs(10, "<br/>\n"),
		// 		slug: generateSlug(newsName.toLowerCase())
		// 	}
		// });

		// if (catId === 9) {
		// 	catId = 1;
		// 	manId = 1;
		// }
		// if (third === 99) {
		// 	first = 1;
		// 	second = 2;
		// 	third = 3;
		// }
		// if (i % 29 === 0) {
		// 	first += 3;
		// 	second += 3;
		// 	third += 3;
		// 	catId += 1;
		// 	manId += 1;
		// }

		const product = await prisma.product.create({
			data: {
				name: productName,
				slug: generateSlug(productName.toLowerCase()),
				sku: faker.vehicle.vrm(),
				description: faker.commerce.productDescription(),
				price: generatedPrice,
				inStock: faker.datatype.boolean(0.5),
				universal: false,
				discount: generatedDiscount,
				discountedPrice: generatedPrice * (1 - generatedDiscount / 100),
				images: Array.from({
					length: faker.datatype.number({ min: 2, max: 6 })
				}).map(() => faker.image.imageUrl(500, 500, "cat", true)),
				category: {
					connect: {
						id: catId
					}
					// 4, 5, 6, 7, 8, 9, 10

					// create: {
					// 	name: categoryName,
					// 	slug: faker.helpers.slugify(categoryName).toLowerCase()
					// }
				},
				manufacture: {
					connect: {
						id: manId
					}
					// 4, 5, 6, 8, 9, 12, 13
					// create: {
					// 	name: manufactureName,
					// 	slug: faker.helpers.slugify(manufactureName).toLowerCase()
					// }
				},
				generation: {
					connect: [{ id: genId1 }, { id: genId2 }, { id: genId3 }]
					// create: {
					// 	name: generationName,
					// 	slug: faker.helpers.slugify(generationName).toLowerCase(),
					// 	image: faker.image.imageUrl(500, 500, "car", true),
					// 	chassis: faker.vehicle.vin(),
					// 	engine: faker.vehicle.vrm(),
					// 	engineVolume: faker.number
					// 		.float({ min: 1, max: 5, precision: 0.1 })
					// 		.toString(),
					// 	yearFrom: faker.date
					// 		.between({
					// 			from: "2010-01-01T00:00:00.000Z",
					// 			to: "2020-01-01T00:00:00.000Z"
					// 		})
					// 		.getFullYear()
					// 		.toString(),
					// 	yearTo: faker.date
					// 		.between({ from: "2020-01-01T00:00:00.000Z", to: new Date() })
					// 		.getFullYear()
					// 		.toString(),
					// 	model: {
					// 		create: {
					// 			name: modelName,
					// 			slug: faker.helpers.slugify(modelName).toLowerCase(),
					// 			image: faker.image.imageUrl(500, 500, "car", true),
					// 			car: {
					// 				create: {
					// 					name: carName,
					// 					slug: faker.helpers.slugify(carName).toLowerCase(),
					// 					image: faker.image.imageUrl(500, 500, "car", true)
					// 				}
					// 			}
					// 		}
					// 	}
					// }
				}
				// reviews: {
				// 	create: [
				// 		{
				// 			// rating: faker.datatype.number({ min: 1, max: 5}),
				// 			text: faker.lorem.paragraph(),
				// 			user: {
				// 				connect: {
				// 					id: 1
				// 				}
				// 			}
				// 		},
				// 		{
				// 			// rating: faker.datatype.number({ min: 1, max: 5}),
				// 			text: faker.lorem.paragraph(),
				// 			user: {
				// 				connect: {
				// 					id: 1
				// 				}
				// 			}
				// 		}
				// 	]
				// }
			}
		});

		// const category = await prisma.category.create({
		// 	data: {
		// 		name: categoryMap[i],
		// 		slug: generateSlug(categoryMap[i])
		// 	}
		// });
		//
		// const manufacture = await prisma.manufacture.create({
		// 	data: {
		// 		name: manufactureMap[i],
		// 		slug: generateSlug(manufactureMap[i]),
		// 		image: `http://localhost:4200/uploads/manufactures/${manufactureMap[
		// 			i
		// 		].toLowerCase()}`
		// 	}
		// });

		// const car = await prisma.car.create({
		// 	data: {
		// 		name: carMap[i],
		// 		slug: generateSlug(carMap[i].toLowerCase()),
		// 		image: faker.image.transport(500, 500, true)
		// 	}
		// });

		// const model = await prisma.model.create({
		// 	data: {
		// 		name: models[i],
		// 		slug: generateSlug(models[i].toLowerCase()),
		// 		image: faker.image.transport(500, 500, true),
		// 		car: {
		// 			connect: {
		// 				id: 3
		// 			}
		// 		}
		// 		// generations: [],
		// 	}
		// });

		// const generation = await prisma.generation.create({
		// 	data: {
		// 		name: generationName,
		// 		slug: generateSlug(generationName.toLowerCase()),
		// 		chassis: faker.vehicle.vin(),
		// 		engine: faker.vehicle.vrm(),
		// 		engineVolume: "2.0",
		// 		yearFrom: "2017",
		// 		yearTo: "2020",
		// 		image: faker.image.transport(500, 500, true),
		// 		model: {
		// 			connect: {
		// 				id: 39
		// 			}
		// 		}
		// 	}
		// });

		// products.push(product);
	}

	// console.log(`Created ${products.length} products`);
};

async function main() {
	console.log("Started seeding...");
	await seed(1000);
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});

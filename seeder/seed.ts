import { faker } from "@faker-js/faker";
import { PrismaClient, Product } from "@prisma/client";
import * as dotenv from "dotenv";
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

const prisma = new PrismaClient();

const createProducts = async (quantity: number) => {
	const products: Product[] = [];
	// const news: News[] = [];
	//
	// for (let i = 0; i < quantity; i++) {
	// 	const newsName = faker.commerce.productName();
	//
	// 	const newsPost = await prisma.news.create({
	// 		data: {
	// 			image: faker.image.imageUrl(500, 500, "cat", true),
	// 			title: newsName,
	// 			description: faker.commerce
	// 				.productDescription()
	// 				.concat(faker.commerce.productDescription()),
	// 			slug: faker.helpers.slugify(newsName).toLowerCase()
	// 		}
	// 	});
	//
	// 	news.push(newsPost);
	// }

	for (let i = 0; i < quantity; i++) {
		const productName = faker.commerce.productName() + i;
		const categoryName = faker.commerce.department();
		const manufactureName = faker.vehicle.manufacturer();
		const carName = faker.vehicle.vehicle();
		const modelName = faker.vehicle.model();
		const generationName = faker.vehicle.type();
		// const brandName = faker.commerce.productMaterial()

		const product = await prisma.product.create({
			data: {
				name: productName,
				slug: faker.helpers.slugify(productName).toLowerCase(),
				sku: faker.vehicle.vrm(),
				description: faker.commerce.productDescription(),
				price: +faker.commerce.price(10, 999, 0),
				inStock: faker.datatype.boolean(0.5),
				discount: generateDiscount(),
				images: Array.from({
					length: faker.datatype.number({ min: 2, max: 6 })
				}).map(() => faker.image.imageUrl(500, 500, "cat", true)),
				category: {
					connect: {
						id: 10
					},
					// 4, 5, 6, 7, 8, 9, 10

					// create: {
					// 	name: categoryName,
					// 	slug: faker.helpers.slugify(categoryName).toLowerCase()
					// }
				},
				manufacture: {
					connect: {
						id: 13
					}
					// 4, 5, 6, 8, 9, 12, 13
					// create: {
					// 	name: manufactureName,
					// 	slug: faker.helpers.slugify(manufactureName).toLowerCase()
					// }
				},
				generation: {
					connect: {
						id: 29
					},
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
				},
				reviews: {
					create: [
						{
							// rating: faker.datatype.number({ min: 1, max: 5}),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 1
								}
							}
						},
						{
							// rating: faker.datatype.number({ min: 1, max: 5}),
							text: faker.lorem.paragraph(),
							user: {
								connect: {
									id: 1
								}
							}
						}
					]
				}
			}
		});

		products.push(product);
	}

	console.log(`Created ${products.length} products`);
};

async function main() {
	console.log("Started seeding...");
	await createProducts(10);
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});

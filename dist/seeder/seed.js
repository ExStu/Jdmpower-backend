"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
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
const prisma = new client_1.PrismaClient();
const createProducts = async (quantity) => {
    const products = [];
    for (let i = 0; i < quantity; i++) {
        const productName = faker_1.faker.commerce.productName() + i;
        const categoryName = faker_1.faker.commerce.department();
        const manufactureName = faker_1.faker.vehicle.manufacturer();
        const carName = faker_1.faker.vehicle.vehicle();
        const modelName = faker_1.faker.vehicle.model();
        const generationName = faker_1.faker.vehicle.type();
        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: faker_1.faker.helpers.slugify(productName).toLowerCase(),
                sku: faker_1.faker.vehicle.vrm(),
                description: faker_1.faker.commerce.productDescription(),
                price: +faker_1.faker.commerce.price(10, 999, 0),
                inStock: faker_1.faker.datatype.boolean(0.5),
                discount: generateDiscount(),
                images: Array.from({
                    length: faker_1.faker.datatype.number({ min: 2, max: 6 })
                }).map(() => faker_1.faker.image.imageUrl(500, 500, "cat", true)),
                category: {
                    create: {
                        name: categoryName,
                        slug: faker_1.faker.helpers.slugify(categoryName).toLowerCase()
                    }
                },
                manufacture: {
                    create: {
                        name: manufactureName,
                        slug: faker_1.faker.helpers.slugify(manufactureName).toLowerCase()
                    }
                },
                generation: {
                    create: {
                        name: generationName,
                        slug: faker_1.faker.helpers.slugify(generationName).toLowerCase(),
                        image: faker_1.faker.image.imageUrl(500, 500, "car", true),
                        chassis: faker_1.faker.vehicle.vin(),
                        engine: faker_1.faker.vehicle.vrm(),
                        engineVolume: faker_1.faker.number
                            .float({ min: 1, max: 5, precision: 0.1 })
                            .toString(),
                        yearFrom: faker_1.faker.date
                            .between({
                            from: "2010-01-01T00:00:00.000Z",
                            to: "2020-01-01T00:00:00.000Z"
                        })
                            .getFullYear()
                            .toString(),
                        yearTo: faker_1.faker.date
                            .between({ from: "2020-01-01T00:00:00.000Z", to: new Date() })
                            .getFullYear()
                            .toString(),
                        model: {
                            create: {
                                name: modelName,
                                slug: faker_1.faker.helpers.slugify(modelName).toLowerCase(),
                                image: faker_1.faker.image.imageUrl(500, 500, "car", true),
                                car: {
                                    create: {
                                        name: carName,
                                        slug: faker_1.faker.helpers.slugify(carName).toLowerCase(),
                                        image: faker_1.faker.image.imageUrl(500, 500, "car", true)
                                    }
                                }
                            }
                        }
                    }
                },
                reviews: {
                    create: [
                        {
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            text: faker_1.faker.lorem.paragraph(),
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
    await createProducts(50);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
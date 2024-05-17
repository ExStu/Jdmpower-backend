"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
const generate_slug_1 = require("../src/utils/generate-slug");
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
const prisma = new client_1.PrismaClient();
const seed = async (quantity) => {
    let first = 1;
    let second = 2;
    let third = 3;
    let catId = 1;
    let manId = 1;
    for (let i = 0; i < quantity; i++) {
        const productName = faker_1.faker.commerce.productName() + i;
        const categoryName = faker_1.faker.commerce.department();
        const manufactureName = faker_1.faker.vehicle.manufacturer();
        const carName = faker_1.faker.vehicle.vehicle();
        const modelName = faker_1.faker.vehicle.model();
        const generationName = faker_1.faker.vehicle.type();
        const newsName = faker_1.faker.commerce.productName();
        const generatedPrice = +faker_1.faker.commerce.price(10, 999, 0);
        const generatedDiscount = generateDiscount();
        if (catId === 9) {
            catId = 1;
            manId = 1;
        }
        if (third === 99) {
            first = 1;
            second = 2;
            third = 3;
        }
        if (i % 29 === 0) {
            first += 3;
            second += 3;
            third += 3;
            catId += 1;
            manId += 1;
        }
        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: (0, generate_slug_1.generateSlug)(productName.toLowerCase()),
                sku: faker_1.faker.vehicle.vrm(),
                description: faker_1.faker.commerce.productDescription(),
                price: generatedPrice,
                inStock: faker_1.faker.datatype.boolean(0.5),
                universal: false,
                discount: generatedDiscount,
                discountedPrice: generatedPrice * (1 - generatedDiscount / 100),
                images: Array.from({
                    length: faker_1.faker.datatype.number({ min: 2, max: 6 })
                }).map(() => faker_1.faker.image.imageUrl(500, 500, "cat", true)),
                category: {
                    connect: {
                        id: catId
                    }
                },
                manufacture: {
                    connect: {
                        id: manId
                    }
                },
                generation: {
                    connect: [{ id: first }, { id: second }, { id: third }]
                }
            }
        });
    }
};
async function main() {
    console.log("Started seeding...");
    await seed(6600);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
import { Prisma } from "@prisma/client";
import { returnCategoryObject } from "src/category/return-category.object";
import { returnManufactureObject } from "src/manufacture/return-manufacture.object";
import { returnReviewObject } from "src/review/return-review.object";
import { returnGenerationObject } from "src/generation/return-generation.object";

export const returnProductObject: Prisma.ProductSelect = {
	id: true,
	name: true,
	slug: true,
	sku: true,
	price: true,
	images: true,
	description: true,
	discount: true,
	discountedPrice: true,
	universal: true,
	inStock: true,
	category: { select: returnCategoryObject },
	manufacture: { select: returnManufactureObject },
	generation: { select: returnGenerationObject },
	reviews: {
		select: returnReviewObject,
		orderBy: {
			createdAt: "desc"
		}
	}
};

export const returnProductObjectFullest: Prisma.ProductSelect = {
	...returnProductObject
};

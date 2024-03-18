"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnProductObjectFullest = exports.returnProductObject = void 0;
const return_category_object_1 = require("../category/return-category.object");
const return_manufacture_object_1 = require("../manufacture/return-manufacture.object");
const return_review_object_1 = require("../review/return-review.object");
const return_generation_object_1 = require("../generation/return-generation.object");
exports.returnProductObject = {
    id: true,
    name: true,
    slug: true,
    sku: true,
    price: true,
    images: true,
    description: true,
    discount: true,
    inStock: true,
    category: { select: return_category_object_1.returnCategoryObject },
    manufacture: { select: return_manufacture_object_1.returnManufactureObject },
    generation: { select: return_generation_object_1.returnGenerationObject },
    reviews: {
        select: return_review_object_1.returnReviewObject,
        orderBy: {
            createdAt: 'desc'
        }
    }
};
exports.returnProductObjectFullest = {
    ...exports.returnProductObject
};
//# sourceMappingURL=return-product.object.js.map
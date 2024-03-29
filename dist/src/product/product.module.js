"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const pagination_service_1 = require("../pagination/pagination.service");
const pagination_module_1 = require("../pagination/pagination.module");
const category_module_1 = require("../category/category.module");
const manufacture_module_1 = require("../manufacture/manufacture.module");
const generation_module_1 = require("../generation/generation.module");
let ProductModule = exports.ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController],
        imports: [pagination_module_1.PaginationModule, category_module_1.CategoryModule, manufacture_module_1.ManufactureModule, generation_module_1.GenerationModule],
        providers: [product_service_1.ProductService, prisma_service_1.PrismaService, pagination_service_1.PaginationService]
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map
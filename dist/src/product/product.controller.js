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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const get_all_product_dto_1 = require("./dto/get-all.product.dto");
const product_dto_1 = require("./dto/product.dto");
const product_service_1 = require("./product.service");
const swagger_1 = require("@nestjs/swagger");
const responseProduct_dto_1 = require("./dto/responseProduct.dto");
const class_validator_1 = require("class-validator");
class GetSimilarArgDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], GetSimilarArgDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], GetSimilarArgDto.prototype, "chosenGenId", void 0);
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getAll(queryDto) {
        return this.productService.getAll(queryDto);
    }
    async getProductsBySearch(searchTerm) {
        return this.productService.getProductsBySearch(searchTerm);
    }
    async getSimilar(dto) {
        return this.productService.getSimilar(+dto.id, +dto.chosenGenId);
    }
    async getProduct(id) {
        return this.productService.byId(+id);
    }
    async getProductsByCategory(categorySlug) {
        return this.productService.byCategory(categorySlug);
    }
    async getProductsByManufacture(manufactureSlug) {
        return this.productService.byManufacture(manufactureSlug);
    }
    async getProductsByGeneration(generationSlug) {
        return this.productService.byGeneration(generationSlug);
    }
    async createProduct(productDto) {
        return this.productService.create(productDto);
    }
    async createManyProducts(productDto) {
        return this.productService.createMany(productDto);
    }
    async updateProduct(id, dto) {
        return this.productService.update(+id, dto);
    }
    async deleteProduct(id) {
        return this.productService.delete(+id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        isArray: true,
        type: get_all_product_dto_1.GetAllProductResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_product_dto_1.GetAllProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("search"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Query)("searchTerm")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsBySearch", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Get)("similar"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetSimilarArgDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getSimilar", null);
__decorate([
    (0, common_1.Get)("by-id/:id"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)("by-category/:categorySlug"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("categorySlug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCategory", null);
__decorate([
    (0, common_1.Get)("by-manufacture/:manufactureSlug"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("manufactureSlug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByManufacture", null);
__decorate([
    (0, common_1.Get)("by-generation/:generationSlug"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("generationSlug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByGeneration", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductMutationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Post)("create-many"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductMutationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createManyProducts", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: responseProduct_dto_1.ProductMutationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(":id"),
    (0, auth_decorator_1.Auth)("admin"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: product_dto_1.ProductDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)("Products"),
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMutationResponseDto = exports.ProductResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const category_dto_1 = require("../../category/category.dto");
const manufacture_dto_1 = require("../../manufacture/manufacture.dto");
const generation_dto_1 = require("../../generation/generation.dto");
const review_dto_1 = require("../../review/review.dto");
const class_validator_1 = require("class-validator");
class ProductResponseDto {
}
exports.ProductResponseDto = ProductResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String]
    }),
    __metadata("design:type", Array)
], ProductResponseDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductResponseDto.prototype, "discountedPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], ProductResponseDto.prototype, "inStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: category_dto_1.CategoryDto
    }),
    __metadata("design:type", category_dto_1.CategoryResponseDto)
], ProductResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: manufacture_dto_1.ManufactureDto
    }),
    __metadata("design:type", manufacture_dto_1.ManufactureResponseDto)
], ProductResponseDto.prototype, "manufacture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: generation_dto_1.GenerationDto
    }),
    __metadata("design:type", generation_dto_1.GenerationResponseDto)
], ProductResponseDto.prototype, "generation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: review_dto_1.ReviewDto
    }),
    __metadata("design:type", review_dto_1.ReviewDto)
], ProductResponseDto.prototype, "reviews", void 0);
class ProductMutationResponseDto {
}
exports.ProductMutationResponseDto = ProductMutationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductMutationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], ProductMutationResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], ProductMutationResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String]
    }),
    __metadata("design:type", Array)
], ProductMutationResponseDto.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductMutationResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductMutationResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductMutationResponseDto.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductMutationResponseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ProductMutationResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ProductMutationResponseDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean
    }),
    __metadata("design:type", Boolean)
], ProductMutationResponseDto.prototype, "inStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: category_dto_1.CategoryDto
    }),
    __metadata("design:type", category_dto_1.CategoryDto)
], ProductMutationResponseDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: manufacture_dto_1.ManufactureDto
    }),
    __metadata("design:type", manufacture_dto_1.ManufactureDto)
], ProductMutationResponseDto.prototype, "manufacture", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: generation_dto_1.GenerationDto
    }),
    __metadata("design:type", generation_dto_1.GenerationDto)
], ProductMutationResponseDto.prototype, "generation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: review_dto_1.ReviewDto
    }),
    __metadata("design:type", review_dto_1.ReviewDto)
], ProductMutationResponseDto.prototype, "reviews", void 0);
//# sourceMappingURL=responseProduct.dto.js.map
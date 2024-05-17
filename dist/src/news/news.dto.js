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
exports.NewsMutationResponseDto = exports.NewsResponseDto = exports.NewsDto = exports.GetNewsDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GetNewsDto {
}
exports.GetNewsDto = GetNewsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetNewsDto.prototype, "pageNumber", void 0);
class NewsDto {
}
exports.NewsDto = NewsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewsDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewsDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewsDto.prototype, "description", void 0);
class NewsResponseDto {
}
exports.NewsResponseDto = NewsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], NewsResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], NewsResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsResponseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsResponseDto.prototype, "slug", void 0);
class NewsMutationResponseDto {
}
exports.NewsMutationResponseDto = NewsMutationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], NewsMutationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], NewsMutationResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsMutationResponseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsMutationResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsMutationResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], NewsMutationResponseDto.prototype, "slug", void 0);
//# sourceMappingURL=news.dto.js.map
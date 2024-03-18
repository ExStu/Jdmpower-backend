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
exports.ModelMutationResponseDto = exports.ModelResponseDto = exports.ModelDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ModelDto {
}
exports.ModelDto = ModelDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: String
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ModelDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ModelDto.prototype, "carId", void 0);
class ModelResponseDto {
}
exports.ModelResponseDto = ModelResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ModelResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ModelResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ModelResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ModelResponseDto.prototype, "carId", void 0);
class ModelMutationResponseDto {
}
exports.ModelMutationResponseDto = ModelMutationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ModelMutationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], ModelMutationResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], ModelMutationResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ModelMutationResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ModelMutationResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ModelMutationResponseDto.prototype, "carId", void 0);
//# sourceMappingURL=model.dto.js.map
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
exports.MutationManufactureResponseDto = exports.ManufactureResponseDto = exports.ManufactureDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ManufactureDto {
}
exports.ManufactureDto = ManufactureDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManufactureDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ManufactureDto.prototype, "image", void 0);
class ManufactureResponseDto {
}
exports.ManufactureResponseDto = ManufactureResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], ManufactureResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ManufactureResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], ManufactureResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ManufactureResponseDto.prototype, "image", void 0);
class MutationManufactureResponseDto {
}
exports.MutationManufactureResponseDto = MutationManufactureResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number
    }),
    __metadata("design:type", Number)
], MutationManufactureResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], MutationManufactureResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date
    }),
    __metadata("design:type", Date)
], MutationManufactureResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], MutationManufactureResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    __metadata("design:type", String)
], MutationManufactureResponseDto.prototype, "slug", void 0);
//# sourceMappingURL=manufacture.dto.js.map
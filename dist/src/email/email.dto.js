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
exports.EmailContactRequestDto = exports.EmailToConfirmDto = exports.EmailForOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EmailForOrderDto {
}
exports.EmailForOrderDto = EmailForOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Array)
], EmailForOrderDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "middleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EmailForOrderDto.prototype, "deliveryTc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "desiredTc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "tcAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EmailForOrderDto.prototype, "deliveryToDoor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Boolean
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], EmailForOrderDto.prototype, "hardWrapRequired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EmailForOrderDto.prototype, "message", void 0);
class EmailToConfirmDto extends EmailForOrderDto {
}
exports.EmailToConfirmDto = EmailToConfirmDto;
class EmailContactRequestDto {
}
exports.EmailContactRequestDto = EmailContactRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailContactRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailContactRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailContactRequestDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EmailContactRequestDto.prototype, "message", void 0);
//# sourceMappingURL=email.dto.js.map
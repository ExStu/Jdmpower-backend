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
exports.CurrencyController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const currency_dto_1 = require("./currency.dto");
const currency_service_1 = require("./currency.service");
const swagger_1 = require("@nestjs/swagger");
let CurrencyController = class CurrencyController {
    constructor(currencyService) {
        this.currencyService = currencyService;
    }
    async getAll() {
        return this.currencyService.getAll();
    }
    async create(currencyDto) {
        return this.currencyService.create(currencyDto);
    }
    async update(currencyId, dto) {
        return this.currencyService.update(+currencyId, dto);
    }
    async delete(currencyId) {
        return this.currencyService.delete(+currencyId);
    }
};
exports.CurrencyController = CurrencyController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: currency_dto_1.CurrencyResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "getAll", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: currency_dto_1.CurrencyResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_dto_1.CurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Put)(":currencyId"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: currency_dto_1.CurrencyResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("currencyId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, currency_dto_1.CurrencyDto]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Delete)(":currencyId"),
    (0, swagger_1.ApiOkResponse)({
        description: "Deleted Successfully",
        type: currency_dto_1.CurrencyResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("currencyId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CurrencyController.prototype, "delete", null);
exports.CurrencyController = CurrencyController = __decorate([
    (0, swagger_1.ApiTags)("Currencies"),
    (0, common_1.Controller)("currencies"),
    __metadata("design:paramtypes", [currency_service_1.CurrencyService])
], CurrencyController);
//# sourceMappingURL=currency.controller.js.map
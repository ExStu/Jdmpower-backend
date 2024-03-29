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
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const car_dto_1 = require("./car.dto");
const car_service_1 = require("./car.service");
const swagger_1 = require("@nestjs/swagger");
let CarController = exports.CarController = class CarController {
    constructor(carService) {
        this.carService = carService;
    }
    async getAll() {
        return this.carService.getAll();
    }
    async getBySlug(slug) {
        return this.carService.bySlug(slug);
    }
    async getById(id) {
        return this.carService.byId(+id);
    }
    async create() {
        return this.carService.create();
    }
    async update(id, dto) {
        return this.carService.update(+id, dto);
    }
    async delete(id) {
        return this.carService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: car_dto_1.ResponseCarDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("by-slug/:carSlug"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: car_dto_1.ResponseCarDto,
        isArray: false
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("slug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)(":carId"),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: car_dto_1.ResponseCarDto,
        isArray: false
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("carId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: car_dto_1.ResponseCarDto,
        isArray: false
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Put)(":carId"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: car_dto_1.ResponseCarDto,
        isArray: false
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("carId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, car_dto_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Delete)(":carId"),
    (0, swagger_1.ApiOkResponse)({
        description: "Deleted Successfully"
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    __param(0, (0, common_1.Param)("carId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "delete", null);
exports.CarController = CarController = __decorate([
    (0, swagger_1.ApiTags)("Cars"),
    (0, common_1.Controller)("cars"),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
//# sourceMappingURL=car.controller.js.map
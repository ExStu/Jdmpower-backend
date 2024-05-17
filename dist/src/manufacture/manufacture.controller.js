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
exports.ManufactureController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const manufacture_service_1 = require("./manufacture.service");
const manufacture_dto_1 = require("./manufacture.dto");
const swagger_1 = require("@nestjs/swagger");
let ManufactureController = class ManufactureController {
    constructor(manufactureService) {
        this.manufactureService = manufactureService;
    }
    async getAll() {
        return this.manufactureService.getAll();
    }
    async getBySlug(manufactureSlug) {
        return this.manufactureService.bySlug(manufactureSlug);
    }
    async getById(manufactureId) {
        return this.manufactureService.byId(+manufactureId);
    }
    async create(manufactureDto) {
        return this.manufactureService.create(manufactureDto);
    }
    async update(manufactureId, dto) {
        return this.manufactureService.update(+manufactureId, dto);
    }
    async delete(id) {
        return this.manufactureService.delete(+id);
    }
};
exports.ManufactureController = ManufactureController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: manufacture_dto_1.ManufactureResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:manufactureSlug"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: manufacture_dto_1.ManufactureResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("manufactureSlug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)(":manufactureId"),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: manufacture_dto_1.ManufactureResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("manufactureId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Post)("create-manufacturer"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: manufacture_dto_1.MutationManufactureResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacture_dto_1.ManufactureDto]),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Put)(":manufactureId"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: manufacture_dto_1.MutationManufactureResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("manufactureId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, manufacture_dto_1.ManufactureDto]),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)("admin"),
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiOkResponse)({
        description: "Deleted successfully",
        type: manufacture_dto_1.ManufactureResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ManufactureController.prototype, "delete", null);
exports.ManufactureController = ManufactureController = __decorate([
    (0, swagger_1.ApiTags)("Manufactures"),
    (0, common_1.Controller)("manufactures"),
    __metadata("design:paramtypes", [manufacture_service_1.ManufactureService])
], ManufactureController);
//# sourceMappingURL=manufacture.controller.js.map
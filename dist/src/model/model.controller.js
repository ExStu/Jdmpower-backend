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
exports.ModelController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const model_dto_1 = require("./model.dto");
const model_service_1 = require("./model.service");
const swagger_1 = require("@nestjs/swagger");
let ModelController = exports.ModelController = class ModelController {
    constructor(modelService) {
        this.modelService = modelService;
    }
    async getAll() {
        return this.modelService.getAll();
    }
    async getBySlug(modelSlug) {
        return this.modelService.bySlug(modelSlug);
    }
    async getById(modelId) {
        return this.modelService.byId(+modelId);
    }
    async getByCar(carSlug) {
        return this.modelService.byCar(carSlug);
    }
    async create(modelDto) {
        return this.modelService.create(modelDto);
    }
    async update(id, dto) {
        return this.modelService.update(+id, dto);
    }
    async delete(id) {
        return this.modelService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelResponseDto,
        isArray: true,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by-slug/:modelSlug'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('modelSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)(':modelId'),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('modelId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('by-car/:carSlug'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('carSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "getByCar", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelMutationResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_dto_1.ModelDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: model_dto_1.ModelMutationResponseDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, model_dto_1.ModelDto]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: "Deleted successfully",
        type: model_dto_1.ModelDto,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModelController.prototype, "delete", null);
exports.ModelController = ModelController = __decorate([
    (0, swagger_1.ApiTags)("Models"),
    (0, common_1.Controller)('models'),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelController);
//# sourceMappingURL=model.controller.js.map
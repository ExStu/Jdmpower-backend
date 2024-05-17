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
exports.GenerationController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const generation_dto_1 = require("./generation.dto");
const generation_service_1 = require("./generation.service");
const swagger_1 = require("@nestjs/swagger");
const category_dto_1 = require("../category/category.dto");
let GenerationController = class GenerationController {
    constructor(generationService) {
        this.generationService = generationService;
    }
    async getAll() {
        return this.generationService.getAll();
    }
    async getBySlug(slug) {
        return this.generationService.bySlug(slug);
    }
    async getByModel(modelSlug) {
        return this.generationService.byModel(modelSlug);
    }
    async getById(id) {
        return this.generationService.byId(+id);
    }
    async create(dto) {
        return this.generationService.create(dto);
    }
    async update(id, dto) {
        return this.generationService.update(+id, dto);
    }
    async delete(id) {
        return this.generationService.delete(+id);
    }
};
exports.GenerationController = GenerationController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: generation_dto_1.GenerationResponseDto,
        isArray: true,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by-slug/:slug'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: generation_dto_1.GenerationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)('by-model/:modelSlug'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: generation_dto_1.GenerationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('modelSlug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "getByModel", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: generation_dto_1.GenerationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Post)("create-generation"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: generation_dto_1.GenerationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generation_dto_1.GenerationDto]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: category_dto_1.CategoryResponseDto,
        isArray: false,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, generation_dto_1.GenerationDto]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)('admin'),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: "Deleted successfully",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Not Found',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenerationController.prototype, "delete", null);
exports.GenerationController = GenerationController = __decorate([
    (0, swagger_1.ApiTags)("Generations"),
    (0, common_1.Controller)('generations'),
    __metadata("design:paramtypes", [generation_service_1.GenerationService])
], GenerationController);
//# sourceMappingURL=generation.controller.js.map
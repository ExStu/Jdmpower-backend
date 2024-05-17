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
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const news_service_1 = require("./news.service");
const news_dto_1 = require("./news.dto");
const swagger_1 = require("@nestjs/swagger");
let NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    async getAll(dto) {
        return this.newsService.getAll(dto);
    }
    async getById(newsId) {
        return this.newsService.byId(+newsId);
    }
    async create(newsDto) {
        return this.newsService.create(newsDto);
    }
    async update(newsId, dto) {
        return this.newsService.update(+newsId, dto);
    }
    async delete(newsId) {
        return this.newsService.delete(+newsId);
    }
};
exports.NewsController = NewsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: news_dto_1.NewsResponseDto,
        isArray: true
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_1.GetNewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":newsId"),
    (0, auth_decorator_1.Auth)(),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: news_dto_1.NewsResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("newsId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: news_dto_1.NewsResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [news_dto_1.NewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(":newsId"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: news_dto_1.NewsMutationResponseDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("newsId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, news_dto_1.NewsDto]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(":newsId"),
    (0, swagger_1.ApiOkResponse)({
        description: "OK",
        type: news_dto_1.NewsDto
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "Not Found"
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad Request" }),
    __param(0, (0, common_1.Param)("newsId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "delete", null);
exports.NewsController = NewsController = __decorate([
    (0, swagger_1.ApiTags)("News"),
    (0, common_1.Controller)("news"),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map
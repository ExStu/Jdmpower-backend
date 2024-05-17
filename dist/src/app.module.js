"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const category_module_1 = require("./category/category.module");
const news_module_1 = require("./news/news.module");
const order_module_1 = require("./order/order.module");
const pagination_module_1 = require("./pagination/pagination.module");
const prisma_service_1 = require("./prisma.service");
const product_module_1 = require("./product/product.module");
const review_module_1 = require("./review/review.module");
const statistics_module_1 = require("./statistics/statistics.module");
const user_module_1 = require("./user/user.module");
const files_module_1 = require("./files/files.module");
const generation_module_1 = require("./generation/generation.module");
const car_dto_1 = require("./car/car.dto");
const model_module_1 = require("./model/model.module");
const currency_module_1 = require("./currency/currency.module");
const email_module_1 = require("./email/email.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            product_module_1.ProductModule,
            review_module_1.ReviewModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
            statistics_module_1.StatisticsModule,
            pagination_module_1.PaginationModule,
            news_module_1.NewsModule,
            files_module_1.FilesModule,
            generation_module_1.GenerationModule,
            car_dto_1.CarDto,
            model_module_1.ModelModule,
            currency_module_1.CurrencyModule,
            email_module_1.EmailModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
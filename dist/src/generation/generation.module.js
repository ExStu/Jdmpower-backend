"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationModule = void 0;
const common_1 = require("@nestjs/common");
const generation_service_1 = require("./generation.service");
const generation_controller_1 = require("./generation.controller");
const prisma_service_1 = require("../prisma.service");
const model_module_1 = require("../model/model.module");
let GenerationModule = class GenerationModule {
};
exports.GenerationModule = GenerationModule;
exports.GenerationModule = GenerationModule = __decorate([
    (0, common_1.Module)({
        controllers: [generation_controller_1.GenerationController],
        imports: [model_module_1.ModelModule],
        providers: [generation_service_1.GenerationService, prisma_service_1.PrismaService],
        exports: [generation_service_1.GenerationService]
    })
], GenerationModule);
//# sourceMappingURL=generation.module.js.map
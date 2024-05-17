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
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
const return_model_object_1 = require("./return-model.object");
const car_service_1 = require("../car/car.service");
let ModelService = class ModelService {
    constructor(prisma, carService) {
        this.prisma = prisma;
        this.carService = carService;
    }
    async byId(id) {
        const model = await this.prisma.model.findUnique({
            where: {
                id
            },
            select: return_model_object_1.returnModelObject
        });
        if (!model) {
            throw new Error("Model not found");
        }
        return model;
    }
    async bySlug(slug) {
        const model = await this.prisma.model.findUnique({
            where: {
                slug
            },
            select: return_model_object_1.returnModelObject
        });
        if (!model) {
            throw new common_1.NotFoundException("Model not found");
        }
        return model;
    }
    async getAll() {
        return this.prisma.model.findMany({
            select: return_model_object_1.returnModelObject
        });
    }
    async byCar(carSlug) {
        const models = await this.prisma.model.findMany({
            where: {
                car: {
                    slug: carSlug
                }
            },
            select: return_model_object_1.returnModelObject
        });
        if (!models)
            throw new common_1.NotFoundException("Models not found!");
        return models;
    }
    async create(dto) {
        return this.prisma.model.create({
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image,
                car: {
                    connect: {
                        id: dto.carId
                    }
                }
            }
        });
    }
    async update(id, dto) {
        await this.carService.byId(dto.carId);
        return this.prisma.model.update({
            where: {
                id
            },
            data: {
                updatedAt: new Date(),
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image,
                car: {
                    connect: {
                        id: dto.carId
                    }
                }
            }
        });
    }
    async delete(id) {
        return this.prisma.model.delete({
            where: {
                id
            }
        });
    }
};
exports.ModelService = ModelService;
exports.ModelService = ModelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, car_service_1.CarService])
], ModelService);
//# sourceMappingURL=model.service.js.map
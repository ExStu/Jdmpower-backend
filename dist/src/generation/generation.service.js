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
exports.GenerationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
const return_generation_object_1 = require("./return-generation.object");
const model_service_1 = require("../model/model.service");
let GenerationService = exports.GenerationService = class GenerationService {
    constructor(prisma, modelService) {
        this.prisma = prisma;
        this.modelService = modelService;
    }
    async byId(id) {
        const generation = await this.prisma.generation.findUnique({
            where: {
                id
            },
            select: return_generation_object_1.returnGenerationObject
        });
        if (!generation) {
            throw new Error('Generation not found');
        }
        return generation;
    }
    async bySlug(slug) {
        const generation = await this.prisma.generation.findUnique({
            where: {
                slug
            },
            select: return_generation_object_1.returnGenerationObject
        });
        if (!generation) {
            throw new common_1.NotFoundException('Generation not found');
        }
        return generation;
    }
    async getAll() {
        return this.prisma.generation.findMany({
            orderBy: {
                yearFrom: "asc"
            },
            select: return_generation_object_1.returnGenerationObject
        });
    }
    async byModel(modelSlug) {
        const generations = await this.prisma.generation.findMany({
            where: {
                model: {
                    slug: modelSlug
                }
            },
            orderBy: {
                yearFrom: "asc"
            },
            select: return_generation_object_1.returnGenerationObject
        });
        if (!generations)
            throw new common_1.NotFoundException('Generations not found!');
        return generations;
    }
    async create(dto) {
        return this.prisma.generation.create({
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image,
                chassis: dto.chassis,
                engine: dto.engine,
                engineVolume: dto.engineVolume,
                yearFrom: dto.yearFrom,
                yearTo: dto.yearTo,
                model: {
                    connect: {
                        id: dto.modelId
                    }
                }
            }
        });
    }
    async update(id, dto) {
        await this.modelService.byId(dto.modelId);
        return this.prisma.generation.update({
            where: {
                id
            },
            data: {
                updatedAt: new Date(),
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image,
                chassis: dto.chassis,
                engine: dto.engine,
                engineVolume: dto.engineVolume,
                yearFrom: dto.yearFrom,
                yearTo: dto.yearTo,
                model: {
                    connect: {
                        id: dto.modelId
                    }
                }
            }
        });
    }
    async delete(id) {
        return this.prisma.generation.delete({
            where: {
                id
            },
        });
    }
};
exports.GenerationService = GenerationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        model_service_1.ModelService])
], GenerationService);
//# sourceMappingURL=generation.service.js.map
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
exports.ManufactureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
const return_manufacture_object_1 = require("./return-manufacture.object");
let ManufactureService = class ManufactureService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async byId(id) {
        const manufacture = await this.prisma.manufacture.findUnique({
            where: {
                id
            },
            select: return_manufacture_object_1.returnManufactureObject
        });
        if (!manufacture) {
            throw new Error("Manufacture not found");
        }
        return manufacture;
    }
    async bySlug(slug) {
        const manufacture = await this.prisma.manufacture.findUnique({
            where: {
                slug
            },
            select: return_manufacture_object_1.returnManufactureObject
        });
        if (!manufacture) {
            throw new common_1.NotFoundException("Manufacture not found");
        }
        return manufacture;
    }
    async getAll() {
        return this.prisma.manufacture.findMany({
            orderBy: {
                name: "asc"
            },
            select: return_manufacture_object_1.returnManufactureObject
        });
    }
    async create(dto) {
        return this.prisma.manufacture.create({
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image
            }
        });
    }
    async update(id, dto) {
        return this.prisma.manufacture.update({
            where: {
                id
            },
            data: {
                updatedAt: new Date(),
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name)
            }
        });
    }
    async delete(id) {
        return this.prisma.manufacture.delete({
            where: {
                id
            },
            select: return_manufacture_object_1.returnManufactureObject
        });
    }
};
exports.ManufactureService = ManufactureService;
exports.ManufactureService = ManufactureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ManufactureService);
//# sourceMappingURL=manufacture.service.js.map
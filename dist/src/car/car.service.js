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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
const return_car_object_1 = require("./return-car.object");
let CarService = exports.CarService = class CarService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async byId(id) {
        const car = await this.prisma.car.findUnique({
            where: {
                id
            },
            select: return_car_object_1.returnCarObject
        });
        if (!car) {
            throw new Error('Car not found');
        }
        return car;
    }
    async bySlug(slug) {
        const car = await this.prisma.car.findUnique({
            where: {
                slug
            },
            select: return_car_object_1.returnCarObject
        });
        if (!car) {
            throw new common_1.NotFoundException('Car not found');
        }
        return car;
    }
    async getAll() {
        return this.prisma.car.findMany({
            select: return_car_object_1.returnCarObject,
        });
    }
    async create() {
        return this.prisma.car.create({
            data: {
                name: "",
                slug: "",
                image: ""
            }
        });
    }
    async update(id, dto) {
        return this.prisma.car.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                image: dto.image
            }
        });
    }
    async delete(id) {
        return this.prisma.car.delete({
            where: {
                id
            },
        });
    }
};
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarService);
//# sourceMappingURL=car.service.js.map
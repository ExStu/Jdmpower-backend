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
exports.CurrencyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_currency_object_1 = require("./return-currency.object");
let CurrencyService = class CurrencyService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.currency.findMany({
            select: return_currency_object_1.returnCurrencyObject
        });
    }
    async create(dto) {
        return this.prisma.currency.create({
            data: {
                name: dto.name,
                value: dto.value
            }
        });
    }
    async update(id, dto) {
        return this.prisma.currency.update({
            where: {
                id
            },
            data: {
                updatedAt: new Date(),
                name: dto.name,
                value: dto.value
            },
        });
    }
    async delete(id) {
        return this.prisma.currency.delete({
            where: {
                id
            },
            select: return_currency_object_1.returnCurrencyObject
        });
    }
};
exports.CurrencyService = CurrencyService;
exports.CurrencyService = CurrencyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CurrencyService);
//# sourceMappingURL=currency.service.js.map
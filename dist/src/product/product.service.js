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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../category/category.service");
const pagination_service_1 = require("../pagination/pagination.service");
const prisma_service_1 = require("../prisma.service");
const convert_to_number_1 = require("../utils/convert-to-number");
const generate_slug_1 = require("../utils/generate-slug");
const get_all_product_dto_1 = require("./dto/get-all.product.dto");
const return_product_object_1 = require("./return-product.object");
const manufacture_service_1 = require("../manufacture/manufacture.service");
const generation_service_1 = require("../generation/generation.service");
let ProductService = exports.ProductService = class ProductService {
    constructor(prisma, paginationService, categoryService, manufactureService, generationService) {
        this.prisma = prisma;
        this.paginationService = paginationService;
        this.categoryService = categoryService;
        this.manufactureService = manufactureService;
        this.generationService = generationService;
    }
    async getAll(queryDto = {}) {
        const { perPage, skip, page } = this.paginationService.getPagination({
            page: queryDto.pageNumber
        });
        const filters = this.createFilter(queryDto);
        const sortOption = this.getSortOption(queryDto.sortBy);
        const products = await this.prisma.product.findMany({
            where: filters,
            orderBy: sortOption,
            skip,
            take: perPage,
            select: return_product_object_1.returnProductObject
        });
        const totalLength = await this.prisma.product.count({
            where: filters
        });
        const minPrice = await this.prisma.product.findFirst({
            orderBy: {
                price: "asc",
            },
        });
        const maxPrice = await this.prisma.product.findFirst({
            orderBy: {
                price: "desc"
            }
        });
        return {
            products,
            totalLength,
            orderBy: sortOption,
            pageSize: perPage,
            pageNumber: page,
            minPrice: minPrice.price,
            maxPrice: maxPrice.price
        };
    }
    async getProductsBySearch(searchTerm) {
        const products = await this.prisma.product.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    },
                    {
                        sku: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    },
                ]
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!products) {
            throw new common_1.NotFoundException("Products not found");
        }
        return products;
    }
    createFilter(dto) {
        const filters = [];
        if (dto.searchTerm)
            filters.push(this.getSearchTermFilter(dto.searchTerm));
        if (dto.minPrice || dto.maxPrice)
            filters.push(this.getPriceFilter((0, convert_to_number_1.convertToNumber)(dto.minPrice), (0, convert_to_number_1.convertToNumber)(dto.maxPrice)));
        if (dto.categoryId)
            filters.push(this.getCategoryFilter(+dto.categoryId));
        if (dto.manufactureId)
            filters.push(this.getManufactureFilter(+dto.manufactureId));
        if (dto.generationId)
            filters.push(this.getGenerationFilter(+dto.generationId));
        return filters.length ? { AND: filters } : {};
    }
    getSortOption(sort) {
        switch (sort) {
            case get_all_product_dto_1.EnumProductSort.LOW_PRICE:
                return { price: "asc" };
            case get_all_product_dto_1.EnumProductSort.HIGH_PRICE:
                return { price: "desc" };
            case get_all_product_dto_1.EnumProductSort.OLDEST:
                return { createdAt: "asc" };
            default:
                return { createdAt: "desc" };
        }
    }
    getSearchTermFilter(searchTerm) {
        return {
            OR: [
                {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    sku: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                },
                {
                    description: {
                        contains: searchTerm,
                        mode: "insensitive"
                    }
                }
            ]
        };
    }
    getPriceFilter(minPrice, maxPrice) {
        let priceFilter = undefined;
        if (minPrice) {
            priceFilter = {
                ...priceFilter,
                gte: minPrice
            };
        }
        if (maxPrice) {
            priceFilter = {
                ...priceFilter,
                lte: maxPrice
            };
        }
        return {
            price: priceFilter
        };
    }
    getCategoryFilter(categoryId) {
        return {
            categoryId
        };
    }
    getManufactureFilter(manufactureId) {
        return {
            manufactureId
        };
    }
    getGenerationFilter(generationId) {
        return {
            generationId
        };
    }
    async byId(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!product) {
            throw new common_1.NotFoundException("Product not found");
        }
        return product;
    }
    async bySku(sku) {
        const product = await this.prisma.product.findUnique({
            where: {
                sku
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!product) {
            throw new common_1.NotFoundException("Product not found");
        }
        return product;
    }
    async byCategory(categorySlug) {
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    slug: categorySlug
                }
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!products)
            throw new common_1.NotFoundException("Products not found!");
        return products;
    }
    async byManufacture(manufactureSlug) {
        const products = await this.prisma.product.findMany({
            where: {
                manufacture: {
                    slug: manufactureSlug
                }
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!products)
            throw new common_1.NotFoundException("Products not found!");
        return products;
    }
    async byGeneration(generationSlug) {
        const products = await this.prisma.product.findMany({
            where: {
                generation: {
                    slug: generationSlug
                }
            },
            select: return_product_object_1.returnProductObjectFullest
        });
        if (!products)
            throw new common_1.NotFoundException("Products not found!");
        return products;
    }
    async getSimilar(id) {
        const currentProduct = await this.byId(id);
        if (!currentProduct)
            throw new common_1.NotFoundException("Current product not found!");
        return this.prisma.product.findMany({
            where: {
                category: {
                    name: currentProduct.category.name
                },
                NOT: {
                    id: currentProduct.id
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            select: return_product_object_1.returnProductObject
        });
    }
    async create(dto) {
        return this.prisma.product.create({
            data: {
                description: dto.description,
                name: dto.name,
                price: dto.price,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                sku: dto.sku,
                discount: dto.discount,
                inStock: dto.inStock,
                categoryId: dto.categoryId,
                manufactureId: dto.manufactureId,
                generationId: dto.generationId,
                images: dto.images
            }
        });
    }
    async update(id, dto) {
        const { description, images, price, name, categoryId, manufactureId, generationId, sku } = dto;
        await this.categoryService.byId(categoryId);
        await this.manufactureService.byId(manufactureId);
        await this.generationService.byId(generationId);
        return this.prisma.product.update({
            where: {
                id
            },
            data: {
                description,
                images,
                price,
                name,
                sku,
                slug: (0, generate_slug_1.generateSlug)(name),
                category: {
                    connect: {
                        id: categoryId
                    }
                },
                manufacture: {
                    connect: {
                        id: manufactureId
                    }
                },
                generation: {
                    connect: {
                        id: generationId
                    }
                }
            }
        });
    }
    async delete(id) {
        return this.prisma.product.delete({ where: { id } });
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        pagination_service_1.PaginationService,
        category_service_1.CategoryService,
        manufacture_service_1.ManufactureService,
        generation_service_1.GenerationService])
], ProductService);
//# sourceMappingURL=product.service.js.map
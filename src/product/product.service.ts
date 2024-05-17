import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PaginationService } from "src/pagination/pagination.service";
import { PrismaService } from "src/prisma.service";
import { convertToNumber } from "src/utils/convert-to-number";
import { generateSlug } from "src/utils/generate-slug";
import { EnumProductSort, GetAllProductDto } from "./dto/get-all.product.dto";
import { ProductDto } from "./dto/product.dto";
import {
	returnProductObject,
	returnProductObjectFullest
} from "./return-product.object";
import { returnReviewObject } from "../review/return-review.object";

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService
	) {}

	async getAll(queryDto: GetAllProductDto = {}) {
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
			select: returnProductObject
		});

		const totalLength = await this.prisma.product.count({
			where: filters
		});

		const prices = await this.prisma.product.aggregate({
			where: filters,
			_min: {
				price: true
			},
			_max: {
				price: true
			}
		});

		return {
			products,
			totalLength,
			orderBy: sortOption,
			pageSize: perPage,
			pageNumber: page,
			minPrice: prices._min.price,
			maxPrice: prices._max.price
		};
	}

	async getProductsBySearch(searchTerm: string) {
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
					}
					// {
					// 	description: {
					// 		contains: searchTerm,
					// 		mode: "insensitive"
					// 	}
					// }
				]
			},
			select: returnProductObjectFullest
		});
		if (!products) {
			throw new NotFoundException("Products not found");
		}

		return products;
	}

	private createFilter(dto: GetAllProductDto): Prisma.ProductWhereInput {
		const filters: Prisma.ProductWhereInput[] = [];

		if (dto.searchTerm) filters.push(this.getSearchTermFilter(dto.searchTerm));

		// if (dto.ratings)
		// 	filters.push(
		// 		this.getRatingFilter(dto.ratings.split('|').map(rating => +rating))
		// 	)

		if (dto.minPrice || dto.maxPrice)
			filters.push(
				this.getPriceFilter(
					convertToNumber(dto.minPrice),
					convertToNumber(dto.maxPrice)
				)
			);

		if (dto.categoryId) filters.push(this.getCategoryFilter(dto.categoryId));
		if (dto.manufactureId)
			filters.push(this.getManufactureFilter(dto.manufactureId));
		if (dto.generationId)
			filters.push(this.getGenerationFilter(+dto.generationId));

		return filters.length ? { AND: filters } : {};
	}

	private getSortOption(
		sort: EnumProductSort
	): Prisma.ProductOrderByWithRelationInput {
		switch (sort) {
			case EnumProductSort.LOW_PRICE:
				return { discountedPrice: "asc" };
			case EnumProductSort.HIGH_PRICE:
				return { discountedPrice: "desc" };
			case EnumProductSort.OLDEST:
				return { createdAt: "asc" };
			default:
				return { createdAt: "desc" };
		}
	}

	private getSearchTermFilter(searchTerm: string): Prisma.ProductWhereInput {
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

	// private getRatingFilter(ratings: number[]): Prisma.ProductWhereInput {
	// 	return {
	// 		reviews: {
	// 			some: {
	// 				rating: {
	// 					in: ratings
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	private getPriceFilter(
		minPrice?: number,
		maxPrice?: number
	): Prisma.ProductWhereInput {
		let priceFilter: Prisma.IntFilter | undefined = undefined;

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

	private getCategoryFilter(categoryId: string) {
		const categories = categoryId
			.split(",")
			.map(item => ({ category: { id: Number(item) } }));
		return {
			OR: categories
		};
	}

	private getManufactureFilter(
		manufactureId: string
	): Prisma.ProductWhereInput {
		const manufactures = manufactureId
			.split(",")
			.map(item => ({ manufacture: { id: Number(item) } }));
		return {
			OR: manufactures
		};
	}

	private getGenerationFilter(generationId: number) {
		return {
			generation: {
				some: {
					id: generationId
				}
			}
		};
	}

	async byId(id: number) {
		const product = await this.prisma.product.findUnique({
			where: {
				id
			},
			select: returnProductObjectFullest
		});

		if (!product) {
			throw new NotFoundException("Product not found");
		}

		return product;
	}

	async bySku(sku: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				sku
			},
			select: returnProductObjectFullest
		});

		if (!product) {
			throw new NotFoundException("Product not found");
		}

		return product;
	}

	async byCategory(categorySlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				category: {
					slug: categorySlug
				}
			},
			select: returnProductObjectFullest
		});

		if (!products) throw new NotFoundException("Products not found!");
		return products;
	}

	async byManufacture(manufactureSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				manufacture: {
					slug: manufactureSlug
				}
			},
			select: returnProductObjectFullest
		});

		if (!products) throw new NotFoundException("Products not found!");
		return products;
	}

	async byGeneration(generationSlug: string) {
		const products = await this.prisma.product.findMany({
			where: {
				generation: {
					some: {
						slug: generationSlug
					}
				}
			},
			select: returnProductObjectFullest
		});

		if (!products) throw new NotFoundException("Products not found!");
		return products;
	}

	async getSimilar(id: number, chosenGenId?: number) {
		const currentProduct = await this.byId(id);
		const generations = currentProduct.generation.map(item => item.id);

		if (!currentProduct)
			throw new NotFoundException("Current product not found!");

		const products = await this.prisma.product.findMany({
			where: {
				generation: {
					some: {
						id: {
							in: chosenGenId ? [chosenGenId] : generations
						}
					}
				},
				NOT: {
					id
				}
			},
			orderBy: {
				createdAt: "desc"
			},
			select: returnProductObject
		});

		if (!products) {
			throw new NotFoundException("Similar products not found");
		}

		return products;
	}

	async create(dto: ProductDto) {
		const generations = dto.generationId.map(item => ({
			id: item
		}));
		return this.prisma.product.create({
			data: {
				description: dto.description,
				name: dto.name,
				price: dto.price,
				slug: generateSlug(dto.name),
				sku: dto.sku,
				discount: dto.discount,
				discountedPrice: dto.price * (1 - dto.discount / 100),
				inStock: dto.inStock,
				universal: dto.universal,
				categoryId: dto.categoryId,
				manufactureId: dto.manufactureId,
				generation: {
					connect: generations
				},
				images: dto.images
			}
		});
	}

	async createMany(dto: ProductDto[]) {
		const getGenerations = (genIds: number[]) =>
			genIds.map(item => ({
				id: item
			}));
		const productsToCreate = dto.map(item => ({
			description: item.description,
			name: item.name,
			price: item.price,
			slug: generateSlug(item.name),
			sku: item.sku,
			discount: item.discount,
			discountedPrice: item.price * (1 - item.discount / 100),
			inStock: item.inStock,
			categoryId: item.categoryId,
			manufactureId: item.manufactureId,
			generation: {
				connect: getGenerations(item.generationId)
			},
			images: item.images
		}));
		return this.prisma.product.createMany({
			data: productsToCreate
		});
	}

	async update(id: number, dto: ProductDto) {
		const {
			description,
			images,
			price,
			name,
			categoryId,
			manufactureId,
			generationId,
			sku
		} = dto;

		const generations = generationId.map(item => ({
			id: item
		}));

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
				slug: generateSlug(name),
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
					connect: generations
				}
			}
		});
	}

	async delete(id: number) {
		return this.prisma.product.delete({ where: { id } });
	}
}

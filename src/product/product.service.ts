import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CategoryService } from "src/category/category.service";
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
import { ManufactureService } from "src/manufacture/manufacture.service";
import { GenerationService } from "../generation/generation.service";

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private paginationService: PaginationService,
		private categoryService: CategoryService,
		private manufactureService: ManufactureService,
		private generationService: GenerationService
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
		})

		const minPrice = await this.prisma.product.findFirst({
			orderBy: {
				price: "asc",
			},
		})

		const maxPrice = await this.prisma.product.findFirst({
			orderBy: {
				price: "desc"
			}
		})

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
					},
					// {
					// 	description: {
					// 		contains: searchTerm,
					// 		mode: "insensitive"
					// 	}
					// }
				]
			},
			select: returnProductObjectFullest
		})
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

		// if (dto.categoryId) {
		// 	return {
		// 		OR: dto.categoryId.map(categoryItem =>
		// 			filters.push({ category: { id: categoryItem } })
		// 		)
		// 	};
		// }
		if (dto.categoryId) filters.push(this.getCategoryFilter(+dto.categoryId));
		if (dto.manufactureId)
			filters.push(this.getManufactureFilter(+dto.manufactureId));
		if (dto.generationId)
			filters.push(this.getGenerationFilter(+dto.generationId));

		return filters.length ? { AND: filters } : {};
	}

	private getSortOption(
		sort: EnumProductSort
	): Prisma.ProductOrderByWithRelationInput {
		switch (sort) {
			case EnumProductSort.LOW_PRICE:
				return { price: "asc" };
			case EnumProductSort.HIGH_PRICE:
				return { price: "desc" };
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

	private getCategoryFilter(categoryId: number): Prisma.ProductWhereInput {
		return {
			categoryId
		};
	}

	private getManufactureFilter(
		manufactureId: number
	): Prisma.ProductWhereInput {
		return {
			manufactureId
		};
	}

	private getGenerationFilter(generationId: number): Prisma.ProductWhereInput {
		return {
			generationId
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
					slug: generationSlug
				}
			},
			select: returnProductObjectFullest
		});

		if (!products) throw new NotFoundException("Products not found!");
		return products;
	}

	async getSimilar(id: number) {
		const currentProduct = await this.byId(id);

		if (!currentProduct)
			throw new NotFoundException("Current product not found!");

		const products = await this.prisma.product.findMany({
			where: {
				category: {
					name: currentProduct.category.name
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
			throw new NotFoundException("Similar products not found")
		}

		return products
	}

	async create(dto: ProductDto) {
		return this.prisma.product.create({
			data: {
				description: dto.description,
				name: dto.name,
				price: dto.price,
				slug: generateSlug(dto.name),
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
					connect: {
						id: generationId
					}
				}
			}
		});
	}

	async delete(id: number) {
		return this.prisma.product.delete({ where: { id } });
	}
}

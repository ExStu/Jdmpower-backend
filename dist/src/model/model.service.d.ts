import { PrismaService } from "src/prisma.service";
import { ModelDto } from "./model.dto";
import { CarService } from "src/car/car.service";
export declare class ModelService {
    private prisma;
    private carService;
    constructor(prisma: PrismaService, carService: CarService);
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            car: number;
            generations: number;
        };
        image: string;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        carId: number;
        generations: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            chassis: string;
            engine: string;
            engineVolume: string;
            yearFrom: string;
            yearTo: string;
            modelId: number;
        }[];
    }>;
    bySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            car: number;
            generations: number;
        };
        image: string;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        carId: number;
        generations: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            chassis: string;
            engine: string;
            engineVolume: string;
            yearFrom: string;
            yearTo: string;
            modelId: number;
        }[];
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            car: number;
            generations: number;
        };
        image: string;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        carId: number;
        generations: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            chassis: string;
            engine: string;
            engineVolume: string;
            yearFrom: string;
            yearTo: string;
            modelId: number;
        }[];
    }[]>;
    byCar(carSlug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            car: number;
            generations: number;
        };
        image: string;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        carId: number;
        generations: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            chassis: string;
            engine: string;
            engineVolume: string;
            yearFrom: string;
            yearTo: string;
            modelId: number;
        }[];
    }[]>;
    create(dto: ModelDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
    update(id: number, dto: ModelDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
}

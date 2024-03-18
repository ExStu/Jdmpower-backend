import { ModelDto } from "./model.dto";
import { ModelService } from "./model.service";
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
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
        _count: {
            car: number;
            generations: number;
        };
    }[]>;
    getBySlug(modelSlug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
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
        _count: {
            car: number;
            generations: number;
        };
    }>;
    getById(modelId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
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
        _count: {
            car: number;
            generations: number;
        };
    }>;
    getByCar(carSlug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
        car: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
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
        _count: {
            car: number;
            generations: number;
        };
    }[]>;
    create(modelDto: ModelDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
    update(id: string, dto: ModelDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
    delete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        carId: number;
    }>;
}

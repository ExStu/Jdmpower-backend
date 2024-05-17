import { CarDto } from "./car.dto";
import { CarService } from "./car.service";
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            models: number;
        };
        image: string;
        models: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            carId: number;
        }[];
    }[]>;
    getBySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            models: number;
        };
        image: string;
        models: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            carId: number;
        }[];
    }>;
    getById(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        _count: {
            models: number;
        };
        image: string;
        models: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
            carId: number;
        }[];
    }>;
    create(dto: CarDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    update(id: string, dto: CarDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    delete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
}

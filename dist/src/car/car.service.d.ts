import { PrismaService } from "src/prisma.service";
import { CarDto } from "./car.dto";
export declare class CarService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
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
        _count: {
            models: number;
        };
    }>;
    bySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
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
        _count: {
            models: number;
        };
    }>;
    getAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
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
        _count: {
            models: number;
        };
    }[]>;
    create(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    update(id: number, dto: CarDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
    }>;
}

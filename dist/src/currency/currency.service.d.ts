import { PrismaService } from "src/prisma.service";
import { CurrencyDto } from "./currency.dto";
export declare class CurrencyService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }[]>;
    create(dto: CurrencyDto): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
    update(id: number, dto: CurrencyDto): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
    delete(id: number): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
}

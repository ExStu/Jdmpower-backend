import { CurrencyDto } from "./currency.dto";
import { CurrencyService } from "./currency.service";
export declare class CurrencyController {
    private readonly currencyService;
    constructor(currencyService: CurrencyService);
    getAll(): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }[]>;
    create(currencyDto: CurrencyDto): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
    update(currencyId: string, dto: CurrencyDto): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
    delete(currencyId: string): Promise<{
        id: number;
        updatedAt: Date;
        name: string;
        value: number;
    }>;
}

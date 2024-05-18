import { ICartItem } from "../email/email.dto";
export declare class OrderDto {
    items: ICartItem[];
    email: string;
    phone?: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    deliveryTc?: boolean;
    desiredTc?: string;
    city?: string;
    tcAddress?: string;
    passportSeries?: string;
    passportNumber?: string;
    deliveryToDoor?: boolean;
    address?: string;
    hardWrapRequired?: boolean;
    message?: string;
}

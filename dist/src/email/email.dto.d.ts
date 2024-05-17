import { ProductResponseDto } from "../product/dto/responseProduct.dto";
export interface ICartItem {
    product: ProductResponseDto;
    quantity: number;
}
export declare class EmailForOrderDto {
    to: string;
    subject: string;
    text: string;
    items: ICartItem[];
    firstName: string;
    lastName: string;
    middleName?: string;
    deliveryTc?: boolean;
    desiredTc?: string;
    city?: string;
    tcAddress?: string;
    deliveryToDoor?: boolean;
    address?: string;
    hardWrapRequired?: boolean;
    message?: string;
}
export declare class EmailToConfirmDto extends EmailForOrderDto {
}
export declare class EmailContactRequestDto {
    name: string;
    email: string;
    subject: string;
    message: string;
}

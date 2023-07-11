import { IProductItem } from "./IProductItem";

export interface ICartLine {
    productId: string;
    product: IProductItem;
    quantity: number;
}
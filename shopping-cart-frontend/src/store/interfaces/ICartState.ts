import { ICart } from "./ICart";

export interface ICartState extends ICart {
    calculating: boolean;
}
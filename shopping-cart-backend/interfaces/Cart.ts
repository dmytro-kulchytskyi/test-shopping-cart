import { CartItem } from "./CartItem";

export class Cart {
    id: string;
    userId: string;
    isGuestCart: boolean;
    iteams: CartItem[];
    total: number = 0;
}
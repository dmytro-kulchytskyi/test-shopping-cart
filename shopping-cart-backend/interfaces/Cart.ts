import { CartItem } from "./CartItem";

export class Cart {
    id: string;
    userId: string;
    isGuestCart: boolean;
    items: CartItem[] = [];
    total: number = 0;
}
import { AddToCartRequestBody } from "../interfaces/AddToCartRequestBody";
import { Cart } from "../interfaces/Cart";
import { CartItem } from "../interfaces/CartItem";
import { ProductService } from './productService';

const CARTS_STORAGE: Cart[] = [];

export class CartService {
    private readonly productService: ProductService;

    constructor () {
        this.productService = new ProductService();
    }

    async getOrCreateCartByUserId(userId: string): Promise<Cart> {
        const cart = CARTS_STORAGE.find((c: Cart) => c.userId === userId);
        if (cart) {
            await this.calculateTotal(cart);
            return cart;
        }
        const newCart = new Cart();
        newCart.userId = userId;
        newCart.total = 0;
        newCart.id = '123';
        newCart.isGuestCart = false;
        CARTS_STORAGE.push(newCart);
        return newCart;
    }



    async addProduct(userId: string, productId: string, quantity: number): Promise<void> {
        if (quantity < 1) {
            throw new Error('InvalidQuantity');
        }

        const cart = await this.getOrCreateCartByUserId(userId);

        const product = await this.productService.getProductById(productId);
        if (!product) {
            throw new Error('InvalidProductId');
        }

        const cartItem = cart.items.find((i: CartItem) => i.productId === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            const newCartItem = new CartItem();
            newCartItem.productId = productId;
            newCartItem.product = product;
            newCartItem.quantity = quantity;
            cart.items.push(newCartItem);
        }
    }

    async changeProductQuantity(userId: string, productId: string, quantity: number): Promise<void> {
        if (quantity < 1) {
            throw new Error('InvalidQuantity');
        }

        const cart = await this.getOrCreateCartByUserId(userId);

        const product = await this.productService.getProductById(productId);
        if (!product) {
            throw new Error('InvalidProductId');
        }

        const cartItem = cart.items.find((i: CartItem) => i.productId === productId);
        if (cartItem) {
            cartItem.quantity = quantity;
        } else {
            throw new Error('NotInCart');
        }
    }

    async removeProduct(userId: string, productId: string): Promise<void> {
        const cart = await this.getOrCreateCartByUserId(userId);

        const product = await this.productService.getProductById(productId);
        if (!product) {
            throw new Error('InvalidProductId');
        }

        const cartItem = cart.items.find((i: CartItem) => i.productId === productId);
        if (!cartItem) {
            throw new Error('NotInCart');
        } else {
            cart.items.splice(cart.items.indexOf(cartItem), 1);
        }
    }

    async cleartCart(userId: string): Promise<void> {
        const cart = await this.getOrCreateCartByUserId(userId);

        cart.items = [];
    }

    private async calculateTotal(cart: Cart): Promise<void> {
        const total = cart.items.reduce((total, i) => {
            i.total = i.quantity * i.product.price;
            return total + i.total;
        }, 0);
        cart.total = total;
    }
}
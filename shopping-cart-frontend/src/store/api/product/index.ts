import { ICart } from '@/store/interfaces/ICart';
import { IProductItem } from '@/store/interfaces/IProductItem';
import axios from 'axios';

export async function getProducts(): Promise<IProductItem[]> {
    const { data } = await axios.get('/api/products');
    return data;
}

export async function addProductToCart(productId: string, quantity: number): Promise<ICart> {
    const { data } = await axios.post('/api/cart', { productId, quantity });
    return data;
}

export async function removeProductFromCart(productId: string,): Promise<ICart> {
    const { data } = await axios.delete(`/api/cart/remove/${productId}`);
    return data;
}


export async function clearCart(): Promise<ICart> {
    const { data } = await axios.delete('/api/cart/clear');
    return data;
}
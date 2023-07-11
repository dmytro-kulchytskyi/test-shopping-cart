import { ICart } from '@/store/interfaces/ICart';
import axios from 'axios';

export async function getCart(): Promise<ICart> {
    const { data } = await axios.get('/api/cart');
    return data;
}

export async function addProductToCart(productId: string, quantity: number): Promise<ICart> {
    const { data } = await axios.post('/api/cart', { productId, quantity });
    return data;
}

export async function setProductQuantity(productId: string, quantity: number) {
    const { data } = await axios.patch('/api/cart', { productId, quantity });
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
import { Router, Request, Response } from 'express'; 
import { AddToCartRequestBody } from '../interfaces/AddToCartRequestBody';
import { CartService } from '../servies/cartService';

const router = Router();

const cartService = new CartService();

router.get('/', async (req, res) => {
    const userId: string = req.userId;
    const cart = await cartService.getOrCreateCartByUserId(userId);
    res.json(cart)
});

router.post('/', async (req, res) => {
    const userId: string = req.userId;
    const { productId, quantity }: AddToCartRequestBody = req.body;

    try {
        await cartService.addProduct(userId, productId, quantity);
    } catch (error) {
        res.status(400).send(error.message); 
    }

    const cart = await cartService.getOrCreateCartByUserId(userId);
    res.json(cart)
});

router.patch('/', async (req, res) => {
    const userId: string = req.userId;
    const { productId, quantity }: AddToCartRequestBody = req.body;

    try {
        await cartService.achangeProductQuantity(userId, productId, quantity);
    } catch (error) {
        res.status(400).send(error.message); 
    }

    const cart = await cartService.getOrCreateCartByUserId(userId);
    res.json(cart)
});

router.delete('/remove/:productId', async (req, res) => {
    const userId: string = req.userId;
    const productId: string = req.params.productId;

    try {
        await cartService.removeProduct(userId, productId);
    } catch (error) {
        res.status(400).send(error.message); 
    }

    const cart = await cartService.getOrCreateCartByUserId(userId);
    res.json(cart)
});

router.delete('/clear', async (req, res) => {
    const userId: string = req.userId;

    try {
        await cartService.cleartCart(userId);
    } catch (error) {
        res.status(400).send(error.message); 
    }

    const cart = await cartService.getOrCreateCartByUserId(userId);
    res.json(cart)
});

export default router;

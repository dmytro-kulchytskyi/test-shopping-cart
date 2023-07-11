import { Router } from 'express'; 
import { ProductService } from '../servies/productService';

const router = Router();

const productService = new ProductService();

router.get('/product', async (req, res) => {
    const products = await productService.getProducts();
    res.json(products)
});

export default router;
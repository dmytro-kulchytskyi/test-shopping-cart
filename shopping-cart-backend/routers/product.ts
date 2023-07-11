import { Router } from 'express'; 
import { ProductService } from '../servieces/productService';

const router = Router();

const productService = new ProductService();

router.get('/', async (req, res) => {
    const products = await productService.getProducts();
    res.json(products)
});

export default router;
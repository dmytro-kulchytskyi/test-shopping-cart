import productsJson from '../data/products.json';
import { Product } from '../interfaces/Product';

export class ProductService {
    async getProductById(id: string): Promise<Product | undefined> {
        return productsJson.find((p: Product) => p.id === id);
    }

    async getProducts(): Promise<Product[] > {
        return productsJson;
    }
}
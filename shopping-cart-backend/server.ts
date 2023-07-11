import express from 'express';

import cartRouter from './routers/cart';
import productRouter from './routers/product';

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.userId = '123';
    next()
})

app.use('/api/cart', cartRouter);
app.use('/api/product', productRouter);

export default app;
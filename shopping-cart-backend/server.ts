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

const allowCrossDomain = function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
}
app.use(allowCrossDomain);



app.use('/api/cart', cartRouter);
app.use('/api/products', productRouter);

export default app;
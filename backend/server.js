import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    })
);

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port: http://localhost:${PORT}`);
});


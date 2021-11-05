import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

import { constants } from './constants';
import { commentsRouter, productsRouter } from './routers';

const { PORT, MONGO_DB_URL } = constants;

mongoose.connect(MONGO_DB_URL);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

app.use('/products', productsRouter);

app.use('/comments', commentsRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

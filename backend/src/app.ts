import express from 'express';
import contentRoute from './routes/Content.route';
import errorMiddleware from './middlewares/errorMiddleware';
require('express-async-errors');
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use(contentRoute);

app.use(errorMiddleware);

export default app;

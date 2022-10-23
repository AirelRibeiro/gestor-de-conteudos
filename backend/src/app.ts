import express from 'express';
import contentRoute from './routes/Content.route';
import errorMiddleware from './middlewares/errorMiddleware';
require('express-async-errors');

const app = express();

app.use(express.json());

app.use(contentRoute);

app.use(errorMiddleware);

export default app;

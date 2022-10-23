import express from 'express';
import contentRoute from './routes/Content.route';

const app = express();

app.use(express.json());

app.use(contentRoute);

export default app;

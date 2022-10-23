import * as express from 'express';
require('express-async-errors');
import Content from '../database/models/Content';
import History from '../database/models/History';
import ContentService from '../services/Content.service';
import HistoryService from '../services/History.service';
import ContentController from '../controllers/Content.controller';
import contentVAlidation from '../middlewares/validateContent';

const contentRoute = express.Router();

const contentController = new ContentController(
  new ContentService(Content, History),
  new HistoryService(History)
);

contentRoute.post('/', contentVAlidation, (req, res) => {
  contentController.create(req, res);
});

contentRoute.get('/:id', (req, res, next) => {
  contentController.findHistory(req, res, next);
});

contentRoute.get('/', (req, res) => {
  contentController.findAll(req, res);
});

contentRoute.put('/:id', contentVAlidation, (req, res, next) => {
  contentController.update(req, res, next);
});

contentRoute.delete('/:id', (req, res, next) => {
  contentController.delete(req, res, next);
});

export default contentRoute;

import * as express from 'express';
require('express-async-errors');
import Content from '../database/models/Content';
import History from '../database/models/History';
import ContentService from '../services/Content.service';
import HistoryService from '../services/History.service';
import ContentController from '../controllers/Content.controller';

const contentRoute = express.Router();

const contentController = new ContentController(
  new ContentService(Content, History),
  new HistoryService(History)
);

contentRoute.post('/', (req, res) => {
  contentController.create(req, res);
});

contentRoute.get('/:id', (req, res) => {
  contentController.findHistory(req, res);
});

contentRoute.get('/', (req, res) => {
  contentController.findAll(req, res);
});

contentRoute.put('/:id', (req, res) => {
  contentController.update(req, res);
});

contentRoute.delete('/:id', (req, res) => {
  contentController.delete(req, res);
});

export default contentRoute;

import { Request, Response } from 'express';
import ContentService from '../services/Content.service';
import HistoryService from '../services/History.service';

class ContentController {
  constructor(
    private contentService: ContentService,
    private historyService: HistoryService
  ) {}

  async findAll(_req: Request, res: Response): Promise<Response> {
    const contents = await this.contentService.findAll();
    return res.status(200).json(contents);
  }

  async findHistory(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const content = await this.contentService.findByPk(Number(id));
    const history = await this.historyService.findHistoryById(Number(id));
    return res.status(200).json({ content, history });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const content = await this.contentService.create(req.body);
    return res.status(201).json(content);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const message = await this.contentService.update(Number(id), req.body);
    return res.status(200).json(message);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const message = await this.contentService.delete(Number(id));
    return res.status(200).json(message);
  }
}

export default ContentController;

import HistoryModel from '../database/models/History';

class HistoryService {
  constructor(
    private historyModel: typeof HistoryModel
  ) {}
  
  async findHistoryById(id: number): Promise<HistoryModel[]> {
    const history = await this.historyModel.findAll({
      where: { content_id: id },
      order: [
        ['created_at', 'ASC'],
      ]       
    });
    return history;
  }

  
}

export default HistoryService;
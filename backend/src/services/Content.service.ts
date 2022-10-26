import ContentModel from '../database/models/Content';
import HistoryModel from '../database/models/History';
import { Op } from 'sequelize';

class ContentService {
  constructor(
    private contentModel: typeof ContentModel,
    private historyModel: typeof HistoryModel
  ) {}

  async create(content: ContentModel): Promise<ContentModel> {
    const createdContent = await this.contentModel.create(content as any);
    return this.historyModel.create({
      content_id: createdContent.id,
      titulo: createdContent.titulo,
      corpo: !content.corpo ? 'Campo deixado vazio pelo autor.' : content.corpo
    }).then(() => createdContent );
  }

  async findAll(): Promise<ContentModel[]> {
    const contents = await this.contentModel.findAll();
    return contents;
  }

  async findByPk(id: number): Promise<ContentModel> {
    const content = await this.contentModel.findByPk(id);

    if (!content) throw new Error('contentNotFound');

    return content;
  }

  async findByName(titulo: string): Promise<ContentModel[]> {
    const contents = await this.contentModel.findAll({
      where: {
        titulo: {
          [Op.like]: `%${titulo}%`
        }
      }
    });
    if(!contents.length) throw new Error('contentsNotFound');

    return contents;
  }

  async update(id: number, content: ContentModel): Promise<object> {
    const lastcontent = await this.contentModel.findByPk(id);
    if (!lastcontent) throw new Error('contentNotFound');

    return this.contentModel.update(content, { where: { id } }).then(async () => {
      this.historyModel.create({
        content_id: id,
        titulo: content.titulo,
        corpo: !content.corpo ? 'Campo deixado vazio pelo autor.' : content.corpo
      });
      return { message: 'Conteúdo atualizado com sucesso!' }
    }).catch((err) => {throw new Error(err.message)});
  }

  async delete(id: number): Promise<object> {
    const lastcontent = await this.contentModel.findByPk(id);
    if (!lastcontent) throw new Error('contentNotFound');
    return this.contentModel.destroy({ where: { id } }).then(() => {
      return { message: 'Conteúdo excluído com sucesso!' }
    }).catch((err) => {throw new Error(err.message)});
  }
}

export default ContentService;

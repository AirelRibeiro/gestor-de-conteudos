"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ContentService {
    constructor(contentModel, historyModel) {
        this.contentModel = contentModel;
        this.historyModel = historyModel;
    }
    create(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdContent = yield this.contentModel.create(content);
            return this.historyModel.create({
                content_id: createdContent.id,
                titulo: createdContent.titulo,
                corpo: !content.corpo ? 'Campo deixado vazio pelo autor vazio.' : content.corpo
            }).then((result) => result);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const contents = yield this.contentModel.findAll();
            return contents;
        });
    }
    findByPk(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.contentModel.findByPk(id);
            if (!content)
                throw new Error('contentNotFound');
            return content;
        });
    }
    update(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastcontent = yield this.contentModel.findByPk(id);
            if (!lastcontent)
                throw new Error('contentNotFound');
            return this.contentModel.update(content, { where: { id } }).then(() => __awaiter(this, void 0, void 0, function* () {
                this.historyModel.create({
                    content_id: id,
                    titulo: content.titulo,
                    corpo: !content.corpo ? 'Campo deixado vazio pelo autor vazio.' : content.corpo
                });
                return { message: 'Conteúdo atualizado com sucesso!' };
            })).catch(() => { throw new Error('contentNotFound'); });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const lastcontent = yield this.contentModel.findByPk(id);
            if (!lastcontent)
                throw new Error('contentNotFound');
            return this.contentModel.destroy({ where: { id } }).then(() => {
                return { message: 'Conteúdo excluído com sucesso!' };
            }).catch(() => { throw new Error('contentNotFound'); });
        });
    }
}
exports.default = ContentService;

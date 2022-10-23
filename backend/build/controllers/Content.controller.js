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
class ContentController {
    constructor(contentService, historyService) {
        this.contentService = contentService;
        this.historyService = historyService;
    }
    findAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contents = yield this.contentService.findAll();
            return res.status(200).json(contents);
        });
    }
    findHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const content = yield this.contentService.findByPk(Number(id));
            const history = yield this.historyService.findHistoryById(Number(id));
            return res.status(200).json({ content, history });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.contentService.create(req.body);
            return res.status(201).json(content);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const message = yield this.contentService.update(Number(id), req.body);
            return res.status(200).json(message);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const message = yield this.contentService.delete(Number(id));
            return res.status(200).json(message);
        });
    }
}
exports.default = ContentController;

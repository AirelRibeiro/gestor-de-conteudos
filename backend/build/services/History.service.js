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
class HistoryService {
    constructor(historyModel) {
        this.historyModel = historyModel;
    }
    findHistoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const history = yield this.historyModel.findAll({
                where: { content_id: id },
                order: [
                    ['created_at', 'ASC'],
                ]
            });
            return history;
        });
    }
}
exports.default = HistoryService;

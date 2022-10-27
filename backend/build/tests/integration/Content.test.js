"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const Sinon = __importStar(require("sinon"));
const app_1 = __importDefault(require("../../app"));
const Content_1 = __importDefault(require("../../database/models/Content"));
const History_1 = __importDefault(require("../../database/models/History"));
const Content_mock_1 = require("../mocks/Content.mock");
const History_mock_1 = require("../mocks/History.mock");
describe('Rota POST /', () => {
    describe('Ao inserir o conteúdo com sucesso', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'create').resolves(Content_mock_1.singleContent);
            Sinon.stub(History_1.default, 'create').resolves(History_mock_1.historyOfIntert);
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o conteúdo com título e corpo inseridos', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).post('/').send(Content_mock_1.newContentToPost);
            chai.expect(response.body).to.deep.equal(Content_mock_1.singleContent);
        }));
        it('Verifica se o código de status é 201', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).post('/').send(Content_mock_1.newContentToPost);
            chai.expect(response).to.have.status(201);
        }));
    });
    describe('Ao enviar uma requisição sem título', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'create').resolves();
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o erro correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).post('/').send(Content_mock_1.invalidNewContentToPost);
            chai.expect(response.body).to.deep.equal({ message: 'O título é obrigatório e deve possuir mais de 4 caracteres!' });
        }));
        it('Verifica se o código de status é 400', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).post('/').send(Content_mock_1.invalidNewContentToPost);
            chai.expect(response).to.have.status(400);
        }));
    });
});
describe('Rota GET /', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        Sinon.stub(Content_1.default, 'findAll').resolves(Content_mock_1.contentsArray);
    }));
    afterEach(() => Sinon.restore());
    it('Verifica se é retornado o número correto conteúdos', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield chai.request(app_1.default).get('/');
        chai.expect(response).to.have.status(200);
        chai.expect(response.body).to.length(10);
    }));
    it('Verifica se o código de status é 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield chai.request(app_1.default).get('/');
        chai.expect(response).to.have.status(200);
    }));
});
describe('Rota GET /:{id}', () => {
    describe('Ao buscar um conteúdo específico que existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(Content_mock_1.singleContent);
            Sinon.stub(History_1.default, 'findAll').resolves(History_mock_1.historyById);
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o conteúdo correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/4');
            chai.expect(response.body).to.deep.equal({ content: Content_mock_1.singleContent, history: History_mock_1.historyById });
        }));
        it('Verifica se o código de status é 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/4');
            chai.expect(response).to.have.status(200);
        }));
    });
    describe('Ao buscar um conteúdo que não existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(null);
            Sinon.stub(History_1.default, 'findAll').resolves();
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o erro correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/11');
            chai.expect(response.body).to.deep.equal({ message: 'O conteúdo com o Id buscado não existe!' });
        }));
        it('Verifica se o código de status é 404', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/11');
            chai.expect(response).to.have.status(404);
        }));
    });
});
describe('Rota GET /search com query "title"', () => {
    describe('Ao buscar um título que existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findAll').resolves(Content_mock_1.contentsByNameArray)
                .onCall(1).resolves([]);
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o número correto conteúdos', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/search').query({ title: 'educação' });
            chai.expect(response.body).to.length(4);
        }));
        it('Verifica se o código de status é 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/search').query({ title: 'educação' });
            chai.expect(response).to.have.status(200);
        }));
    });
    describe('Ao buscar um título que não existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findAll').resolves([]);
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o erro correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/search').query({ title: 'duvidoso' });
            chai.expect(response.body).to.deep.equal({ message: 'Não existem conteúdos com esse título!' });
        }));
        it('Verifica se o código de status é 404', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).get('/search').query({ title: 'duvidoso' });
            chai.expect(response).to.have.status(404);
        }));
    });
});
describe('Rota PUT /:{id}', () => {
    describe('Ao atualizar um conteúdo que existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(Content_mock_1.contentsArray[9]);
            Sinon.stub(Content_1.default, 'update').resolves();
            Sinon.stub(History_1.default, 'create').resolves();
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornada a mensagem correta', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/10').send(Content_mock_1.contentToUpdate);
            chai.expect(response.body).to.deep.equal(Content_mock_1.updatedMessage);
        }));
        it('Verifica se o código de status é 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/10').send(Content_mock_1.contentToUpdate);
            chai.expect(response).to.have.status(200);
        }));
    });
    describe('Ao tentar atualizar um conteúdo que não existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(null);
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o erro correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/11').send(Content_mock_1.contentToUpdate);
            chai.expect(response.body).to.deep.equal({ message: 'O conteúdo com o Id buscado não existe!' });
        }));
        it('Verifica se o código de status é 404', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/11').send(Content_mock_1.contentToUpdate);
            chai.expect(response).to.have.status(404);
        }));
    });
});
describe('Rota DELETE /:{id}', () => {
    describe('Ao excluir um conteúdo que existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(Content_mock_1.contentsArray[8]);
            Sinon.stub(Content_1.default, 'destroy').resolves();
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornada a mensagem correta', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/9');
            chai.expect(response.body).to.deep.equal(Content_mock_1.deletedMessage);
        }));
        it('Verifica se o código de status é 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/9');
            chai.expect(response).to.have.status(200);
        }));
    });
    describe('Ao tentar excluir um conteúdo que não existe', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(null);
            Sinon.stub(Content_1.default, 'destroy').resolves();
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornado o erro correto', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/11');
            chai.expect(response.body).to.deep.equal({ message: 'O conteúdo com o Id buscado não existe!' });
        }));
        it('Verifica se o código de status é 404', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/11');
            chai.expect(response).to.have.status(404);
        }));
    });
});
describe('Tratamento de erros não personalizados', () => {
    describe('Na rota delete', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(Content_mock_1.contentsArray[8]);
            Sinon.stub(Content_1.default, 'destroy').rejects(new Error('Erro não personalizado!'));
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornada a mensagem do erro', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/9');
            chai.expect(response.body).to.deep.equal({ message: 'Erro não personalizado!' });
        }));
        it('Verifica se o código de status é 500', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).delete('/9');
            chai.expect(response).to.have.status(500);
        }));
    });
    describe('Na rota update', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            Sinon.stub(Content_1.default, 'findByPk').resolves(Content_mock_1.contentsArray[9]);
            Sinon.stub(Content_1.default, 'update').rejects(new Error('Erro não customizado!'));
        }));
        afterEach(() => Sinon.restore());
        it('Verifica se é retornada a mensagem do erro', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/10').send(Content_mock_1.contentToUpdate);
            chai.expect(response.body).to.deep.equal({ message: 'Erro não customizado!' });
        }));
        it('Verifica se o código de status é 500', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai.request(app_1.default).put('/10').send(Content_mock_1.contentToUpdate);
            chai.expect(response).to.have.status(500);
        }));
    });
});

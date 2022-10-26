const chai =require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
import * as Sinon from 'sinon';
import app from '../../app';
import Content from '../../database/models/Content';
import History from '../../database/models/History';
import { contentsArray, singleContent, contentsByNameArray, newContentToPost, invalidNewContentToPost, contentToUpdate, updatedMessage, deletedMessage } from '../mocks/Content.mock';
import { historyById, historyOfIntert } from '../mocks/History.mock';

describe('Rota POST /', () => {

  describe('Ao inserir o conteúdo com sucesso', () => {

    beforeEach(async () => {
      Sinon.stub(Content, 'create').resolves(singleContent as unknown as Content);
      Sinon.stub(History, 'create').resolves(historyOfIntert as unknown as History);
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o conteúdo com título e corpo inseridos', async () => {
      const response = await chai.request(app).post('/').send(newContentToPost); 

      chai.expect(response.body).to.deep.equal(singleContent);
    });

    it('Verifica se o código de status é 201', async () => {
      const response = await chai.request(app).post('/').send(newContentToPost);

      chai.expect(response).to.have.status(201);
    });
  });

  describe('Ao enviar uma requisição sem título', () => {

    beforeEach(async () => {
      Sinon.stub(Content, 'create').resolves();
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o erro correto', async () => {
      const response = await chai.request(app).post('/').send(invalidNewContentToPost);

      chai.expect(response.body).to.deep.equal({ message: 'O título é obrigatório e deve possuir mais de 4 caracteres!' });
    });

    it('Verifica se o código de status é 400', async () => {
      const response = await chai.request(app).post('/').send(invalidNewContentToPost);

      chai.expect(response).to.have.status(400);
    });

  });
});


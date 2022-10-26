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

describe('Rota GET /', () => {

  beforeEach(async () => {    
    Sinon.stub(Content, 'findAll').resolves(contentsArray as unknown as Content[]);
  });
  
  afterEach(() => Sinon.restore());

  it('Verifica se é retornado o número correto conteúdos', async () => {
    const response = await chai.request(app).get('/');

    
    chai.expect(response).to.have.status(200);
    chai.expect(response.body).to.length(10);
  });

  it('Verifica se o código de status é 200', async () => {
    const response = await chai.request(app).get('/');
  
    chai.expect(response).to.have.status(200);
  });
});

describe('Rota GET /:{id}', () => {

  describe('Ao buscar um conteúdo específico que existe', () => {

    beforeEach(async () => {
      Sinon.stub(Content, 'findByPk').resolves(singleContent as unknown as Content);
      Sinon.stub(History, 'findAll').resolves(historyById as unknown as History[]);
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o conteúdo correto', async () => {
      const response = await chai.request(app).get('/4');

      
      chai.expect(response.body).to.deep.equal({ content: singleContent, history: historyById });
    });

    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).get('/4');

      chai.expect(response).to.have.status(200);
    });
  });

  describe('Ao buscar um conteúdo que não existe', () => {

    beforeEach(async () => {
      Sinon.stub(Content, 'findByPk').resolves(null);
      Sinon.stub(History, 'findAll').resolves();
    });
    
    afterEach(() => Sinon.restore());

    it('Verifica se é retornado o erro correto', async () => {
      const response = await chai.request(app).get('/11');

      
      chai.expect(response.body).to.deep.equal({ message: 'O conteúdo com o Id buscado não existe!' });
    });

    it('Verifica se o código de status é 404', async () => {
      const response = await chai.request(app).get('/11');

      chai.expect(response).to.have.status(404);
    });
  });
});

describe('Rota GET /search com query "title"', () => {

  describe('Ao buscar um título que existe', () => {
    beforeEach(async () => {
    
      Sinon.stub(Content, 'findAll').resolves(contentsByNameArray as unknown as Content[])
        .onCall(1).resolves([]);
    });
    
    afterEach(() => Sinon.restore());
  
    it('Verifica se é retornado o número correto conteúdos', async () => {
      const response = await chai.request(app).get('/search').query({title: 'educação' });
  
      chai.expect(response.body).to.length(4);
    });
  
    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).get('/search').query({title: 'educação' });
    
      chai.expect(response).to.have.status(200);
    });
  });

  describe('Ao buscar um título que não existe', () => {
    beforeEach(async () => {  
      Sinon.stub(Content, 'findAll').resolves([]);
    });
    
    afterEach(() => Sinon.restore());
  
    it('Verifica se é retornado o erro correto', async () => {
      const response = await chai.request(app).get('/search').query({title: 'duvidoso' });
  
      chai.expect(response.body).to.deep.equal({ message: 'Não existem conteúdos com esse título!' });
    });
  
    it('Verifica se o código de status é 404', async () => {
      const response = await chai.request(app).get('/search').query({title: 'duvidoso' });
    
      chai.expect(response).to.have.status(404);
    });
  });
});

describe('Rota PUT /:{id}', () => {

  describe('Ao atualizar um conteúdo que existe', () => {
    beforeEach(async () => {    
      Sinon.stub(Content, 'findByPk').resolves(contentsArray[9] as unknown as Content);
      Sinon.stub(Content, 'update').resolves();
      Sinon.stub(History, 'create').resolves();
    });
    
    afterEach(() => Sinon.restore());
  
    it('Verifica se é retornada a mensagem correta', async () => {
      const response = await chai.request(app).put('/10').send(contentToUpdate);
  
      chai.expect(response.body).to.deep.equal(updatedMessage);
    });
  
    it('Verifica se o código de status é 200', async () => {
      const response = await chai.request(app).put('/10').send(contentToUpdate);
    
      chai.expect(response).to.have.status(200);
    });
  });

  describe('Ao tentar atualizar um conteúdo que não existe', () => {
    beforeEach(async () => {   
      Sinon.stub(Content, 'findByPk').resolves(null);
    });
    
    afterEach(() => Sinon.restore());
  
    it('Verifica se é retornado o erro correto', async () => {
      const response = await chai.request(app).put('/11').send(contentToUpdate);
  
      chai.expect(response.body).to.deep.equal({ message: 'O conteúdo com o Id buscado não existe!' });
    });
  
    it('Verifica se o código de status é 404', async () => {
      const response = await chai.request(app).put('/11').send(contentToUpdate);
    
      chai.expect(response).to.have.status(404);
    });
  });
});

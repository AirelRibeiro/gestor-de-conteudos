# <h1 align="center"> Conteúdos Motrix </h1>

![image](https://user-images.githubusercontent.com/98190806/198351437-58e88e9d-e01b-4f66-b457-98aaaf092156.png)

## Descrição:

<p align="justify">Essa aplicação foi desenvolvida como parte do processo seletivo para pessoa desenvolvedora backend na <a href="https://www.motrix.global/#topo" >Motrix</a>. Ela compreende um gestor de conteúdos que permite a pessoa usuária criar, ler, atualizar e apagar conteúdos, formatá-los na sua criação com editor wysiwyg, bem como consultar o histórico de modificações e recuperar uma atualização anterior se assim o desejar.</p>



<details>
   <summary><h2>Configurações das estruturas:</h2></summary>

  ### Setup:

  <p align="justify">A aplicação é compostade três camadas: banco de dados, backend e frontend. Essas camadas estão isoladas entre si em containers <strong>Docker</strong>, que funcionam em conjunto geridos pelo <strong>Docker-compose</strong>.</p>

  ### Banco de dados:

  <p align="justify">O banco de dados da aplicação é o Motrix, suportado pelo <strong>MySQL</strong>, um sistema de gerenciamento de bancos de dados relacionais open-source. O banco conta com duas tabelas, uma para armazenar os conteúdos, denominada <strong>contents</strong> e outra para armazenar o histórico das alterações feitas nos conteúdos ao longo do tempo,denominada <strong>histories</strong>. As tabelas possuem campos e relacionamento conforme demonstrado no esque abaixo: </p>

  ![image](https://user-images.githubusercontent.com/98190806/198350462-024589a1-8c00-4c0c-ad4f-3c0ba390ff93.png)

  ### Backend:

  <p align="justify">A ligação entre o banco de dados e o frontend é feita por meio de uma <strong>API RESTful</strong>, contando com as camadas <strong>MSC</strong> (Model, Service e Controller) e uma camada adicional de <strong>middlewares</strong> para validação de requisições e tratamento de erros. A API foi contruída em <strong>Node.js</strong> e teve seus endpoints estruturados com uso do <strong>Express</strong>; a manipulação do banco de dados foi facilitada pelo uso da <strong>ORM Sequelize</strong>. É uma <strong>API CRUD</strong> (Create, Read, Update and Delete), permitindo operações de <strong>criação, leitura, atualização e exclusão</strong> de conteúdos.</p>
  <p align="justify">O desenvolvimento foi orientado ao comportamento, utilizando <strong>Typescript</strong> e aplicando conceitos de <strong>Programação Orientada a Objetos</strong>. Os testes desenvolvidos foram de integração e fizeram uso de <strong>Mocha</strong>, <strong>Chai</strong>, <strong>Chai-http</strong> e <strong>Sinon</strong>. A documentação completa das rotas da API pode ser encontrada no <a href="https://www.postman.com/" target="_blanck">Postman</a>, clicando no ícone abaixo.</p>

  <a href="https://documenter.getpostman.com/view/22527230/2s84LF4bz7" target="_blanck">
    <img src="https://user-images.githubusercontent.com/98190806/198616220-1791f96f-b572-42aa-8bfd-21bec5d7fe5a.png" height="160"/>
  </a>

  ### Frontend:

  <p align="justify">O frontend da aplicação foi desenvolvido em <strong>React</strong>. Ela é composta de cinco rotas, viabilizadas pelo <strong>React-Router-Dom</strong>; sendo elas para listar todos os conteúdos, pesquisar conteúdos por título, visualizar histórico de atualizações, atualizar conteúdos e criá-los. O desenvolvimento do frontend também foi orientado ao comportamento, com os testes sendo <strong>End2End</strong>, desenvolvidos utilizando <strong>Cypress</strong>.A estrutura seguida empregou a organização de diretórios por funcionalidades, contando com as separações entre <strong>components</strong>, <strong>page</strong>, <strong>helpers</strong> e <strong>style</strong>; enquanto isso, a estilização da página foi feita utilizando <strong>CSS</strong>.</p>

</details>

<details>
  <summary><h2>Rodando o projeto na sua máquina</h2></summary>

  1. Escolha um diretório e clone o repositório utilizando **git clone**:
  ```
    git@github.com:AirelRibeiro/motrix-desafio.git
  ```

  2. Acesse o diretório do projeto **motrix-desafio** e instale as dependências:
  ```
    cd motrix-desafio
    npm install
  ```

  3. Então rode o script **compose:up** para montar a aplicação:
  ```
    npm run compose:up
  ```

  4. Entre no diretório de backend e utilize o script **prepare:db** para iniciar o banco Motrix:
  ```
    cd backend
    npm run prepare:db
  ```
  5. Por fim, com o banco funcionando, acesse o projeto via navegador, usando a seguinte url:
  ```
    http://localhost:3000
  ```
  _Para sua melhor experiência o script **prepare:db** também popula o banco com 10 conteúdos, então a página inicial da aplicação irá lista-los assim que carregar._
  
  </details>


<details>
  <summary><h2>Rode os testes da aplicação</h2></summary>
  
  1. No diretório raiz do projeto, acesse o backend
  ```
    cd backend
  ```

  2. Agora basta rodar o script de teste:
  ```
    npm run test
  ```
  3. Para verificar a cobertura de testes da aplicação, rode o script **test:coverage**:
  ```
    npm run test:coverage
  ```

  ### Testes do frontend

  **Observação importante**: _Optou-se por não fazer mcks para os testes de frontend, visando ter uma interação real com a API no momento dos testes, assim, antes de sequir os passos abaixo, verifique que executou todos os passos da seção **Rodando o projeto na sua máquina:**_

  1. No diretório raiz do projeto, acesse o frontend

  ```
    cd frontend
  ```

  2. Agora basta rodar o script de teste:
  ```
    npm run test
  ```
  
  3. Quando o Cypress abrir, você só precisa rodar as specs:
  ```
    0_header.cy.js
    1_home.cy.js
    2_history.cy.js
    3_search.cy.js
    4_formDemostration.cy.js
  ```

</details>

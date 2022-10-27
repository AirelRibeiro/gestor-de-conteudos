# <h1 align="center"> Conteúdos Motrix </h1>

![image](https://user-images.githubusercontent.com/98190806/198351437-58e88e9d-e01b-4f66-b457-98aaaf092156.png)

## Descrição:

<p align="justify">Essa aplicação foi desenvolvida como parte do processo seletivo para pessoa desenvolvedora backend na <a href="https://www.motrix.global/#topo" >Motrix</a>. Ela compreende uma estrutura completa com banco de dados, backend e frontend rodando em containers Docker isolados entre si e gerenciados pelo Docker-compose.</p>

## Configurações das estruturas:

### Banco de dados:

<p align="justify">O banco de dados da aplicação é o Motrix, suportado pelo MySQL, um sistema de gerenciamento de bancos de dados relacionais open-source. O banco conta com duas tabelas, uma para armazenar os conteúdos, denominada <strong>contents</strong> e outra para armazenar o histórico das alterações feitas nos conteúdos ao longo do tempo,denominada <strong>histories</strong>. As tabelas possuem campos e relacionamento conforme demonstrado no esque abaixo: </p>

![image](https://user-images.githubusercontent.com/98190806/198350462-024589a1-8c00-4c0c-ad4f-3c0ba390ff93.png)

### Backend:

<p align="justify">A ligação entre o banco de dados e o frontend é feita por meio de uma <strong>API RESTful</strong>, contando com as camadas <strong>MSC</strong> (Model, Service e Controller), com uma camada adicional de <strong>middlewares</strong> para validação de requeste e tratamento de erros. A API foi contruída em <strong>Node.js</strong> e teve seus endpoints estruturados com uso do <strong>Express</strong>; a manipulação do banco de dados foi facilitada pelo uso da <strong>ORM Sequelize</strong>.</p>
<p align="justify">A linguagem de desenvolvimento utilizada foi <strong>Typescript</strong>, aplicando conceitos de <strong>POO</strong>.</p>


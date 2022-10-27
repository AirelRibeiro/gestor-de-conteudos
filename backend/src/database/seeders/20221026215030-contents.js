'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'contents',
      [
        {
          titulo: 'Jovens de Paraisópolis, em São Paulo, recebem bolsa de iniciação científica',
          corpo: 'Medicina, biologia, engenharia, economia, política. Estas são apenas algumas das áreas que podem abrigar o trabalho de um cientista. Embora seja muito comum relacionar a profissão ao ambiente típico de laboratório, cientistas estão espalhados nos mais diversos campos do conhecimento.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'OVNI: pilotos relatam presença de “luz estranha” durante voo em Santa Catarina',
          corpo: 'Uma “luz estranha” no céu chamou a atenção de pilotos em um voo de São Paulo para Porto Alegre no último sábado (22). O incidente foi registrado em uma conversa entre a tripulação de um voo da Azul e profissionais do Aeroporto Internacional Salgado Filho, de Porto Alegre.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'USP aparece como melhor universidade da América Latina em ranking global',
          corpo: `A Universidade de São Paulo (USP) foi tida como a melhor universidade latino-americana no ranking World University Rankings, elaborado pela consultoria britânica Times Higher Education (THE).
          A lista contempla com outras instituições brasileiras, como a Universidade Estadual de Campinas (Unicamp) que é a segunda da América Latina mais bem posicionada na lista.
          Além destas, a Universidade Federal do Rio Grande do Sul (UFRS), Universidade Federal de São Paulo (Unifesp), Universidade Federal de Minas Gerais (UFMG), também estão no ranking. Ao todo, 62 instituições brasileiras foram classificadas.`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'É nosso dever conscientizar alunos contra LGBTfobia',
          corpo: `Desde 2013, está em andamento um projeto de conscientização contra a LGBTfobia na escola estadual Professor Joaquim Luiz de Brito, na zona oeste de São Paulo.
          Idealizado pelo professor Fábio de Lima, a iniciativa tem a intenção de informar os alunos, e a comunidade como um todo, sobre a importância do debate sobre diversidade sexual e de gênero.
          “É nosso dever como ser humano fazer algo em prol da sociedade, nós, como educadores, temos o campo fértil para conscientizar os alunos a importância dos valores humanos”, afirmou Fábio`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.',
          corpo: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Ninguém é tão grande que não possa aprender, nem tão pequeno que não possa ensinar.',
          corpo: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Só a educação liberta.',
          corpo: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'O homem não é nada além daquilo que a educação faz dele.',
          corpo: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Maurício de Sousa recebe prêmio Cátedra Unesco por estímulo à leitura',
          corpo: 'O quadrinhista Maurício de Sousa recebeu na última sexta feira (21 de outubro) uma homenagem da cátedra Unesco de Leitura da PUC Rio, em reconhecimento ao estímulo à leitura de várias gerações no país.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'Educação é uma descoberta progressiva de nossa própria ignorância.',
          corpo: null,
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('contents', null, {});
  },
};
'use strict';
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'contents',
      [
        {
          titulo: 'Jovens de Paraisópolis, em São Paulo, recebem bolsa de iniciação científica',
          corpo: `<div>\n<div style=\"text-align: center;\"><span style=\"font-family: 'courier new', courier, monospace;\"><strong><span style=\"color: rgb(8, 10, 69);\">Parcerias dessa natureza ajudam a impulsionar a educa&ccedil;&atilde;o, pois possibilitam aos alunos articular, organizar e produzir conhecimentos, rompendo a bolha da desinforma&ccedil;&atilde;o que impera nas redes sociais, tendo como alvo principal os jovens em idade escolar</span></strong></span></div>\n</div>`,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'OVNI: pilotos relatam presença de “luz estranha” durante voo em Santa Catarina',
          corpo: '<div>\n<div style=\"text-align: justify;\"><sub><strong>Uma &ldquo;luz estranha&rdquo; no c&eacute;u chamou a aten&ccedil;&atilde;o de pilotos em um voo de S&atilde;o Paulo para Porto Alegre no &uacute;ltimo s&aacute;bado (22). O incidente foi registrado em uma conversa entre a tripula&ccedil;&atilde;o de um voo da Azul e profissionais do Aeroporto Internacional Salgado Filho, de Porto Alegre.</strong></sub></div>\n</div>',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'USP aparece como melhor universidade da América Latina em ranking global',
          corpo: '<div>\n<p style=\"text-align: justify;\"><sup>A Universidade de S&atilde;o Paulo (USP) foi tida como a melhor universidade latino-americana no ranking World University Rankings, elaborado pela consultoria brit&acirc;nica Times Higher Education (THE).</sup></p>\n<p style=\"text-align: justify;\"><sup>A lista contempla com outras institui&ccedil;&otilde;es brasileiras, como a Universidade Estadual de Campinas (Unicamp) que &eacute; a segunda da Am&eacute;rica Latina mais bem posicionada na lista.</sup></p>\n<p style=\"text-align: justify;\"><sup>Al&eacute;m destas, a Universidade Federal do Rio Grande do Sul (UFRS), Universidade Federal de S&atilde;o Paulo (Unifesp), Universidade Federal de Minas Gerais (UFMG), tamb&eacute;m est&atilde;o no ranking. Ao todo, 62 institui&ccedil;&otilde;es brasileiras foram classificadas.</sup></p>\n</div>',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          titulo: 'É nosso dever conscientizar alunos contra LGBTfobia',
          corpo: `<div>\n<div style=\"text-align: justify;\"><span style=\"font-family: 'comic sans ms', sans-serif; font-size: 14pt;\">Desde 2013, est&aacute; em andamento um projeto de conscientiza&ccedil;&atilde;o contra a LGBT-fobia na escola estadual Professor Joaquim Luiz de Brito, na zona oeste de S&atilde;o Paulo.</span></div>\n<div style=\"text-align: justify;\"><span style=\"font-family: 'comic sans ms', sans-serif; font-size: 14pt;\">Idealizado pelo professor F&aacute;bio de Lima, a iniciativa tem a inten&ccedil;&atilde;o de informar os alunos, e a comunidade como um todo, sobre a import&acirc;ncia do debate sobre diversidade sexual e de g&ecirc;nero.</span></div>\n<div style=\"text-align: justify;\"><span style=\"font-family: 'comic sans ms', sans-serif; font-size: 14pt;\">&ldquo;&Eacute; nosso dever como ser humano fazer algo em prol da sociedade, n&oacute;s, como educadores, temos o campo f&eacute;rtil para conscientizar os alunos a import&acirc;ncia dos valores humanos&rdquo;, afirmou F&aacute;bio.</span></div>\n</div>`,
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
          corpo: `<div>\n<h2><span style=\"font-family: 'book antiqua', palatino, serif; color: rgb(53, 152, 219);\">O quadrinhista Maur&iacute;cio de Sousa recebeu na &uacute;ltima sexta feira (21 de outubro) uma homenagem da c&aacute;tedra Unesco de Leitura da PUC Rio, em reconhecimento ao est&iacute;mulo &agrave; leitura de v&aacute;rias gera&ccedil;&otilde;es no pa&iacute;s.</span></h2>\n</div>`,
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
describe('Página History', () => {

  beforeEach(() => {
    cy.visit('/1');
  });

  it('Verifica a última versão do conteúdo é renderizada corretamente', () => {
    cy.get('h1').contains('Jovens de Paraisópolis, em São Paulo, recebem bolsa de iniciação científica');
    cy.get('#content-body').contains('Medicina, biologia, engenharia, economia, política. Estas são apenas algumas das áreas que podem abrigar o trabalho de um cientista. Embora seja muito comum relacionar a profissão ao ambiente típico de laboratório, cientistas estão espalhados nos mais diversos campos do conhecimento.');

    cy.get('strong').should(($date) => {
      expect($date[0]).to.have.text('Data de criação');
      expect($date[1]).to.have.text('Última atualização');
    })
  });

  it('Verifica que o histórico de atualizações está presente na página', () => {
    cy.contains('Histórico de atualizações');

    cy.get('.single-update').should(($updates) => {
      expect($updates).to.have.length(6);
    });

    cy.get('.update-body').should(($bodies) => {
      expect($bodies).to.have.length(6);
    });

    cy.get('.history-dates').should(($dates) => {
      expect($dates).to.have.length(6);
    });
  });

  it('Verifica que é possível ir para a página de atualização clicando em "Atualizar"', () => {
    cy.get('input')
      .should(($input) => {
        $input[0].click();
    });
    cy.url().should('include', '/update/1');
  });

});

describe('Página History', () => {

  beforeEach(() => {
    cy.visit('/1');
    cy.viewport(1440, 900);
  });

  it('Verifica a última versão do conteúdo é renderizada corretamente', () => {
    cy.get('h1').contains('Jovens de Paraisópolis, em São Paulo, recebem bolsa de iniciação científica');
    cy.get('#content-body').contains(/Parcerias dessa natureza ajudam a impulsionar a educação, pois possibilitam aos alunos articular, organizar e produzir conhecimentos, rompendo a bolha da desinformação que impera nas redes sociais, tendo como alvo principal os jovens em idade escolar/);
  });

  it('Verifica que é possível verificar o histórico de atualizações', () => {
    cy.get('#history-button').click();

    cy.scrollTo(0, 300) 

    cy.contains('Histórico de atualizações');

  });

  it('Verifica que é possível ir para a página de atualização clicando em "Atualizar"', () => {
    cy.get('input')
      .should(($input) => {
        $input[0].click();
    });
    cy.url().should('include', '/update/1');
  });

});

describe('Componente global Header', () => {

  beforeEach(() => {
    cy.visit('/1');
  });

  it('Verifica que o primeiro link leva a página de criação de conteúdo', () => {
    cy.get('a')
      .should(($link) => {
        $link[0].click();
    });
    cy.url().should('include', '/create');
  });

  it('Verifica que o segundo link leva a página de inicial', () => {
    cy.get('a')
      .should(($link) => {
        $link[1].click();
    });
    cy.url().should('not.include', 'create');
  });

  it('Verifica que o terceiro link direciona para a página de pesquisa por título', () => {
    cy.get('a')
      .should(($link) => {
        $link[2].click();
    });
    cy.url().should('include', '/search');
  });
});

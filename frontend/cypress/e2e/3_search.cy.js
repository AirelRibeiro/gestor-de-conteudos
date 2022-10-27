describe('Página Search', () => {

  beforeEach(() => {
    cy.visit('/search');
  });

  it('Verifica se todos os elementos iniciais são renderizados', () => {
    cy.get('input')
      .should(($input) => {
        expect($input).to.have.length(2);
        expect($input[0]).to.have.value('');
        expect($input[1]).to.have.value('Buscar');
      });
    cy.contains('Busque seu conteúdo pelo título!').should('be.visible');
  });

  it('Verifica que é possível digitar um termo e buscar conteúdos', () => {
    cy.get('#title-input').type('educação');
    cy.get('#search-button').click();

    cy.get('.search-single-content').should('have.length', 4);
  });

  it('Verifica se cada conteúdo retornado tem no título a palavra chave buscada', () => {
    cy.get('#title-input').type('educação');
    cy.get('#search-button').click();

    cy.get('h2').should('contain.text', 'educação');
  });

  it('Verifica se cada conteúdo tem um botão para mais informações', () => {
    cy.get('#title-input').type('educação');
    cy.get('#search-button').click();

    cy.get('.search-button').should(($button) => {
      expect($button).to.have.length(4);
      expect($button).to.have.value('Mais informações')
    });
  });

  it('Verifica se ao clicar mais informações a pessoa usuária é direcionada ao histórico do conteúdo', () => {
    cy.get('#title-input').type('educação');
    cy.get('#search-button').click();

    cy.get('.search-button').should(($button) => {
      $button[0].click();
    });

    cy.url().should('not.include', '/search');
    cy.url().should('include', '/5');
  });
});
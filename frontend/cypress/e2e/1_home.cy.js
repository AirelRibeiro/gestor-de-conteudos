describe('Página Home', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Verifica se todos os conteúdos são renderizados', () => {
    cy.get('.home-single-content')
      .should(($content) => {
        expect($content).to.have.length(10);
      });
  });

  it('Vetifica se cada conteúdo possui todos os botões', () => {
    cy.get('input')
      .should(($input) => {
        expect($input).to.have.length(31);
        expect($input[0]).to.value('Excluir conteúdos selecionados')
        expect($input[1]).to.value('Mais informações')
        expect($input[2]).to.value('Excluir')
    });
    cy.contains('Marque para exclusão');
  });

  it('Verifica se todos os conteúdos possuem título', () => {
    cy.get('h2').should(($title) => {
      expect($title).to.have.length(10);
    });
  });

  it('Verifica que ao clicar no botão "Mais informações" a pessoa usuária é direcionada ao histórico', () => {
    cy.get('input')
      .should(($input) => {
        $input[1].click();
    });
    cy.url().should('include', '/1');
  });
});
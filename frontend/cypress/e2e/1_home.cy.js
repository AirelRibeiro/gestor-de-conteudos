describe('Página Home', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1440, 900);
  });

  it('Verifica se todos os conteúdos são renderizados', () => {
    cy.get('.single-content')
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
    cy.contains('Exclusão conjunta');
  });

  it('Verifica se todos os conteúdos possuem título', () => {
    cy.get('.title').should(($title) => {
      expect($title).to.have.length(10);
    });
  });

  it('Verifica que ao clicar no botão "Mais informações" a pessoa usuária é direcionada ao histórico', () => {
    cy.get('input')
      .should(($input) => {
        $input[4].click();
    });
    cy.url().should('include', '/10');
  });

  it('Verifica que é possível excluir conteúdos individualmente', () => {
    cy.get('input')
      .should(($input) => {
        $input[2].click();
    });
    cy.get('É nosso dever conscientizar alunos contra LGBTfobia').should('not.exist');
  });

  it('Verifica que é possível excluir conteúdos de forma conjunta', () => {
    cy.get('input')
      .should(($input) => {
        $input[9].click();
        $input[12].click();
        $input[0].click();
    });
    cy.get('Maurício de Sousa recebe prêmio Cátedra Unesco por estímulo à leitura').should('not.exist');
  });
});
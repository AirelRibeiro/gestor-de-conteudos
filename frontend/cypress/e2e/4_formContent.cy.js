describe('Página Create', () => {

  beforeEach(() => {
    cy.visit('/create');
  });

  it('Verifica se todos os elementos iniciais são renderizados', () => {
    cy.get('input')
      .should(($input) => {
        expect($input).to.have.length(5);
        expect($input[0]).to.have.value('');
        expect($input[1]).to.have.value('Salvar');
        expect($input[2]).to.have.value('Mais informações');
        expect($input[3]).to.have.value('Excluir');
      });
    cy.contains('Crie um novo conteúdo').should('be.visible');
    cy.contains('Marque para exclusão').should('be.visible');
  });

  it('Verifica que o botão "Salvar está desabilitado até que a pessoa usuária tenha digitado ao menos 5 caracteres"', () => {
    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        expect($input[1]).to.be.disabled;
    });
    
    cy.get('#title').type('Motrix');

    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        expect($input[1]).not.be.disabled;
    });
  });

  it('Verifica se o que é colocado como título e conteúdo aparece na div de demonstração"', () => {
    cy.get('#title').type('Motrix');

    cy.get('#content-demostration h2').contains('Motrix');

    cy.get('#body').type('Somos movidos pela ciência, evidência, comprovação e transformação.');

    cy.get('#content-demostration p').contains('Somos movidos pela ciência, evidência, comprovação e transformação.');
  });

  it('Verifica que é possível salvar um conteúdo e ser redirecionado para a página de histórico', () => {
    cy.get('#title').type('Motrix');
    cy.get('#body').type('Somos movidos pela ciência, evidência, comprovação e transformação.');

    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        $input[1].click();
    });

    cy.url().should('not.include', '/create');
    cy.url().should('include', '/11');
  });

});

describe('Página Update', () => {

  beforeEach(() => {
    cy.visit('/update/11');
  });

  it('Verifica se todos os elementos iniciais são renderizados', () => {
    cy.get('input')
      .should(($input) => {
        expect($input).to.have.length(5);
        expect($input[0]).to.have.value('');
        expect($input[1]).to.have.value('Salvar');
        expect($input[2]).to.have.value('Mais informações');
        expect($input[3]).to.have.value('Excluir');
      });
    cy.contains('Atualize seu conteúdo').should('be.visible');
    cy.contains('Marque para exclusão').should('be.visible');
  });

  it('Verifica que o botão "Salvar está desabilitado até que a pessoa usuária tenha digitado ao menos 5 caracteres"', () => {
    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        expect($input[1]).to.be.disabled;
    });
    
    cy.get('#title').type('Motrix');

    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        expect($input[1]).not.be.disabled;
    });
  });

  it('Verifica se o que é colocado como título e conteúdo aparece na div de demonstração"', () => {
    cy.get('#title').type('Motrix');

    cy.get('#content-demostration h2').contains('Motrix');

    cy.get('#body').type('Somos movidos pela ciência, evidência, comprovação e transformação.');

    cy.get('#content-demostration p').contains('Somos movidos pela ciência, evidência, comprovação e transformação.');
  });

  it('Verifica que é possível salvar um conteúdo e ser redirecionado para a página de histórico', () => {
    cy.get('#title').type('Motrix');
    cy.get('#body').type('Somos movidos pela ciência, evidência, comprovação e transformação.');

    cy.get('input')
      .should(($input) => {
        expect($input[1]).to.have.value('Salvar');
        $input[1].click();
    });

    cy.url().should('not.include', '/update');
    cy.url().should('include', '/11');
  });

});
import { toCyString } from "../helpers/kebab.helper";

describe("Completar cadastro no sistema", () => {
  context("Completar cadastro com dados válidos", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Teste para completar cadastro com dados de endereço válidos", () => {
      // Fazer login com as credenciais da fixture de criar conta
      cy.fixture("criar-conta").then((dadosLogin) => {
        cy.typeLogin(dadosLogin.email, dadosLogin.senha);
        cy.get('[data-cy="user-menu"]').should("be.visible"); // Verifica se o login foi bem-sucedido
      });

      // Clicar no menu do usuário para abrir as opções
      cy.get('[data-cy="user-menu"]').click();

      // Clicar em Editar Perfil
      cy.get('[data-cy="editar-perfil"]').click();

      // Clicar na etapa de Endereço
      cy.get('[data-cy="endereco"]').click();

      // Preencher dados de endereço
      cy.fixture("completar-cadastro").then((dados) => {
        // Preenchendo CEP
        cy.get('[data-cy="endereco.cep"]').type(dados.cep);
        cy.wait(1000); // Esperar o sistema preencher os campos de endereço automaticamente com base no CEP
        
        // Limpar e preencher Número
        cy.get('[data-cy="endereco.numero"]').clear().type(dados.numero);
        
        // Preencher Complemento
        cy.get('[data-cy="endereco.complemento"]').clear().type(dados.complemento);

        // Salvar dados de endereço
        cy.get('[data-cy="menu-salvar"]').click();

        // Clicar na etapa de Dados Acadêmicos
        cy.get('[data-cy="dados-academicos"]').click();

        // Preencher dados acadêmicos básicos
        cy.get('[data-cy="search-instituicao-id"]').click();
        cy.get('[data-cy="ufms-universidade-federal-do-mat"]').click(); // Clica na opção UFMS

        cy.get('[data-cy="search-unidade-id"]').click();
        cy.get('[data-cy="facom-faculdade-de-computacao"]').click(); // Clica na opção Facom

        cy.get('[data-cy="search-nivel-academico-id"]').click();
        cy.get('[data-cy="ensino-superior"]').click(); // Clica na opção Ensino Superior

        // Preencher LinkedIn
        cy.get('[data-cy="linkedin"]').type(dados.Linkedin);

        // PRIMEIRO SALVAR - dados acadêmicos básicos
        cy.get('[data-cy="menu-salvar"]').click();

        // Adicionar Área de Conhecimento
        cy.get('[data-cy="add-areas-de-conhecimento"]').click(); // Clica no botão Adicionar

        // Preencher Grande Área
        cy.get('[data-cy="search-grande-area-id"]').click();
        cy.get('[data-cy="ciencias-exatas-e-da-terra"]').click(); // Clica em Ciências Exatas

        // Preencher Área
        cy.get('[data-cy="search-area-id"]').click();
        cy.get('[data-cy="ciencia-da-computacao"]').click(); // Clica em Ciência da Computação

        // Preencher Sub-área
        cy.get('[data-cy="search-sub-area-id"]').click();
        cy.get('[data-cy="sistemas-de-computacao"]').click(); // Clica em Sistemas de Computação

        // Preencher Especialidade
        cy.get('[data-cy="search-especialidade-id"]').click();
        cy.get('[data-cy="arquitetura-de-sistemas-de-compu"]').click(); // Clica em Arquitetura de Sistemas

        // SEGUNDO SALVAR - confirmar Área de Conhecimento
        cy.get('[data-cy="areaDeConhecimento-confirmar"]').click();

        // Finalizar cadastro
        //cy.get('[data-cy="finalizar"]').click();
      });
    });
  });
});
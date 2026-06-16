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
      cy.fixture("submeter-proposta").then((dados) => {
    
      // Clicar no botão "Ver mais" do edital para acessar a página de detalhes do edital
      cy.get('[data-cy="editais-ver-mais"]').click(); 

      // Procurar o edital específico "Edital 2026-0001 Sig Cypress" e clicar no botão "Visualizar edital" 
      cy.get('.css-1ihz0ac').type(dados.edital);
        cy.get('.css-qvg66t').click(); 
        cy.get('[data-cy="criar-proposta"]').click(); // Clicar no botão "Criar proposta" para iniciar o processo de submissão da proposta
        cy.wait(1000); 


      // Preenchimento do formulário de submissão da proposta
      cy.get('[data-cy="titulo"]').clear().type(dados.titulo); 
      // Prencher Tipo de Evento    
      cy.get('[data-cy="search-tipo-evento-id"]').click();
        cy.get('[data-cy="workshop"]').click(); 
      // Preencher Estado de execução do evento
      cy.get('[data-cy="search-estado-execucao-evento"]').click();
        cy.get('[data-cy="mato-grosso-do-sul"]').click();
      // Preencher Local de execução do evento
      cy.get('[data-cy="search-municipio-execucao-evento"]').click();
        cy.get('[data-cy="campo-grande"]').click();
      // Salvar a proposta
      cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      
      // Clicar na etapa de Informações Complementares
      cy.get('[data-cy="informacoes-complementares"]').click(); 
      // Selecionar "Faturamento anual da MEI de até R$ 81.000,00"
      cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-218-item-mei-faturamento-ano-de-ate-r-81"] > .css-1khbjd7 > [name="formularioPropostaInformacaoComplementar.pergunta-218"]').click(); 
        cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-219"]').type(dados.pergunta1); // Preencher a resposta da pergunta complementar
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      // Clicar na etapa de Abrangencia
      cy.get('[data-cy="abrangencia"]').click();
        cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="search-estado-id"]').click();
        cy.get('[data-cy="mato-grosso-do-sul"]').click();
        cy.get('[data-cy="search-abrangencia-municipio"]').click();
            cy.get('[data-cy="agua-clara"]').click();
            cy.get('[data-cy="close-abrangencia-municipio"] > .css-pls6ua').click();
            cy.get('[data-cy="abrangencia-confirmar"]').click();
            cy.get('[data-cy="menu-salvar"]').click();
            cy.wait(1000);

      // Clicar na etapa de Coordenação
      cy.get('[data-cy="coordenacao"]').click();
      cy.get('[data-cy="dados-pessoais"]').click();
      cy.get('[data-cy="search-raca-cor-id"]').click();
        cy.get('[data-cy="pardo-a"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      // Clicar na etapa de Apresentação
      cy.get('[data-cy="apresentacao"] > .MuiListItemText-root > .MuiTypography-root').click();
      // Selecionar Descrição
      cy.get('[data-cy="descricao"]').click();
      cy.get('[data-cy="formularioPropostaDescritiva.pergunta-221-item-opcao-1"] > .css-1khbjd7 > [name="formularioPropostaDescritiva.pergunta-221"]').click();
      cy.get('[data-cy="formularioPropostaDescritiva.pergunta-222"]').type(dados.pergunta1); // Preencher a resposta da pergunta de apresentação
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      // Clicar na etapa de Indicadores de Produção
      cy.get('[data-cy="indicadores-de-producao"]').click();
        cy.get('#mui-6').type(dados.qtdNacional); 
        cy.get('#mui-7').type(dados.qtdInternacional);
        cy.get('#mui-8').type(dados.qtdNacional);
        cy.get('#mui-9').type(dados.qtdInternacional);
        cy.get('#mui-10').type(dados.qtdNacional); 
        cy.get('#mui-11').type(dados.qtdInternacional);
        cy.get('#mui-12').type(dados.qtdNacional);
        cy.get('#mui-13').type(dados.qtdInternacional);
        cy.get('#mui-14').type(dados.qtdNacional); 
        cy.get('#mui-15').type(dados.qtdInternacional);
        cy.get('#mui-16').type(dados.qtdNacional);
        cy.get('#mui-17').type(dados.qtdInternacional);
        cy.get('#mui-18').type(dados.qtdNacional); 
        cy.get('#mui-19').type(dados.qtdInternacional);
        cy.get('#mui-20').type(dados.qtdNacional);
        cy.get('#mui-21').type(dados.qtdInternacional);
        cy.get('#mui-22').type(dados.qtdNacional); 
        cy.get('#mui-23').type(dados.qtdInternacional);
        cy.get('#mui-24').type(dados.qtdNacional);
        cy.get('#mui-25').type(dados.qtdInternacional);
        cy.get('#mui-26').type(dados.qtdNacional); 
        cy.get('#mui-27').type(dados.qtdInternacional);
        cy.get('#mui-28').type(dados.qtdNacional); 
        cy.get('#mui-29').type(dados.qtdInternacional);
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      // Clicar na etapa de Membros
      cy.get('[data-cy="membros"]').click();
      // Clicar na etapa de Atividades
      cy.get('[data-cy="atividades"]').click();
      cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="propostaAtividadeForm.titulo"]').type(dados.atividade);
        cy.get('[data-cy="propostaAtividadeForm.descricao"]').type(dados.descricao);
        cy.get('[data-cy="search-mes-inicio"]').click();
        cy.get('[data-cy="2"]').click(); 
        cy.get('[data-cy="search-duracao"]').click();
        cy.get('[data-cy="10-meses"]').click();
        cy.get('[data-cy="search-carga-horaria-semanal"]').click();
        cy.get('[data-cy="4-horas"]').click();
        cy.get('[data-cy="propostaAtividade-confirmar"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
    
      // Clicar na etapa de Orçamento
      cy.get('[data-cy="orcamento"] > .MuiListItemText-root > .MuiTypography-root').click();
      // Selecionar Faixa de financiamento
      cy.get('[data-cy="faixa-de-financiamento"]').click();
      cy.get('[data-cy="search-faixa-financiamento-id"]').click();
      cy.get('[data-cy="faixa-a-r-500-00-r-10-000-00"]').click();
      cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
      // Clicar na etapa de bolsa
      cy.get('[data-cy="bolsa"]').click();
      cy.get('[data-cy="add-button"]').click();
        cy.get('[data-cy="search-modalidade-bolsa-id"]').click();
        cy.get('[data-cy="at"]').click();
        cy.get('[data-cy="search-nivel-bolsa-id"]').click();
        cy.get('[data-cy="ns-r-770-00"]').click();
        cy.get('[data-cy="rubricaBolsaForm.quantidade"]').type(dados.Quantidade);
        cy.get('[data-cy="search-duracao"]').click();
        cy.get('[data-cy="3"]').click();
        cy.get('[data-cy="rubricaBolsa-confirmar"]').click();
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);

      // Clicar na etapa de Anexos
      cy.get('[data-cy="anexos"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('[data-cy="documentos-da-proposta"]').click();
        cy.get('.css-1ro2z6h').click();
        cy.get('[data-cy="carta-de-apresentacao"]').click();
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/ExemploCNH.pdf', { force: true });
        cy.get('[data-cy="menu-salvar"]').click();
        cy.wait(1000);
    
      // Clicar na etapa de Finalização
      cy.get('[data-cy="finalizacao"] > .MuiListItemText-root > .MuiTypography-root').click();
      cy.get('[data-cy="visualizacao-da-proposta"]').click();
        cy.get('[data-cy="termo-de-aceite"]').click(); 
        cy.get('[data-cy="termo-de-aceite-aceito-box"]').click();
      // Submeter a proposta
      /*cy.get('[data-cy="menu-verificar-pendencias"]').click();
        cy.get('.emp3m7p0 > .MuiButtonBase-root').click(); 
        cy.get('[data-cy="sim-continuar-button"]').click();*/
    });
    });
})
});

/// <reference types="cypress" />

const faker = require('faker');
const emailAdress = faker.internet.email()
const cpf = require('cpf');

describe('Cadastro inválido', () => {
  beforeEach(() => {
    cy.visit('https://sandbox.melhorenvio.com.br/')
  })

  it('Cadastro inválido', () => {
    const email = emailAdress
    cy.get('.row-desktop > :nth-child(5) > .btn-border').should('be.visible').click()
    cy.get('#iptNome').should('be.visible').type(faker.name.firstName())
    cy.get('#iptEmail').should('be.visible').type(emailAdress)
    cy.get('.button').should('be.visible').click()
    cy.get('#iptSobrenome').should('be.visible').type(faker.name.lastName())
    cy.get('#iptCPF').should('be.visible').type(cpf.generate())
    cy.get('#iptDtNascimento').should('be.visible').type(Cypress.env('me').dados_cadastro.data)
    cy.get('#iptCelular').should('be.visible').type(`11998${faker.phone.phoneNumber()}`)
    cy.get('#iptConfirmaEmail').should('be.visible').type(emailAdress)
    cy.get('#iptSenha').should('be.visible').type(Cypress.env('me').dados_cadastro.senha)
    cy.get('#iptConfirmaSenha').should('be.visible').type(Cypress.env('me').dados_cadastro.senha)
    cy.get('.checkLine > .inputBox > label').should('be.visible').click()
    cy.get('.button').click()
    cy.get('.button').click()
    cy.get('#iptCepEmpresa').should('be.visible').type(Cypress.env('me').dados_cadastro.cep)
    cy.get('#iptNumeroEmpresa').should('be.visible')
    cy.get('.button').click()
    cy.get('.error > .inputBox > .errorText').should('be.visible')
  })
})

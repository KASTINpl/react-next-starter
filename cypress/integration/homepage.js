// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Check homepage', () => {
  it('index page loaded', () => {
    cy.visit('/')
    cy.get('#__next').contains('react-next-starter')
    cy.title().should('include', 'react next starter')
  })
})

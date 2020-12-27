// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Error pages', () => {
  it('page not found - 404', () => {
    cy.visit('/404', { failOnStatusCode: false })
    cy.get('#__next').contains('404')
  })
})

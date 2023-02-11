/// <reference types="Cypress" />

describe('Mi primer Test', () => {
  it('Haciendo click en el "type"', () => {
    //expect(true).to.equal(false)
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include','/commands/actions')
    cy.get('.action-email').type('test@email.com')
    cy.get('.action-email').should('have.value', 'test@email.com')
  })
})
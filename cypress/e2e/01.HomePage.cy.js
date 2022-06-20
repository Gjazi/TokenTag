/// <reference types="Cypress" /> 
describe('TokenTag', () => {
  it('should test home page responsiveness', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      return false
  })
    cy.visit('https://dev.tokentag.io/')
    // cy.viewport(1024, 768)
    // cy.viewport('iphone-x')

    
    cy.get(':nth-child(2) > .no-underline').click()
    cy.contains("Communities").click()
    cy.contains('About').click()
    cy.contains('Login').click()

    
    
    
  })
})
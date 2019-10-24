describe('Fill form', function() {
    it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000')

    //cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.firstNameInput')
        .type('Ola')
        .should('have.value', 'Ola')
    
    cy.get('.lastNameInput')
        .type('Nordmann')
        .should('have.value', 'Nordmann')
    
    cy.get('.ageInput')
        .type('1975')
        .should('have.value', '1975') 
    
    cy.get('.professionInput')
        .type('Doorman')
        .should('have.value', 'Doorman')

    cy.get('.ratingInput')
        .select('48')
        .should('have.value', '48')    

    cy.get('Button.submitButton').click()

    cy.url().should('include', '/?firstName=Ola&lastName=Nordmann&age=1975&profession=Doorman&rating=48')

    })
})
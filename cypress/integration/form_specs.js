
describe('Fill form on website to add new person', function() {
    it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000')

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
        .select('66')
        .should('have.value', '66')    

    cy.get('Button.submitButton').click()

    cy.url().should('include', '/?firstName=Ola&lastName=Nordmann&age=1975&profession=Doorman&rating=48')

    })
})


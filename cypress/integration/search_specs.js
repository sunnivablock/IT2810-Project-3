describe('Fill searchform', function() {
    it('Gets, types and asserts 2', function() {
    cy.visit('http://localhost:3000')

    //cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    //cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('Input[id="Rating"]')
        .type('69')
        .should('have.value', '69')
    
    cy.get('Input[id="Fornavn"]')
        .type('Brad')
        .should('have.value', 'Brad')
    
    cy.get('Input[id="Etternavn"]')
        .type('Pitt')
        .should('have.value', 'Pitt') 
    
    cy.get('Input[id="Født"]')
        .type('1963')
        .should('have.value', '1963')

    cy.get('Select[id="Sorting"]')
        .select('rating')
        .should('have.value', 'rating')
        
    cy.get('Select[id="SortDirection"]')
        .select('asc')
        .should('have.value', 'asc')

    cy.get('Button[id="applyButton"]').click()

    /*cy.url().should('include', '/?firstName=Ola&lastName=Nordmann&age=1975&profession=Doorman&rating=48')*/

    })
})
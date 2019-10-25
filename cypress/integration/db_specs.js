
describe('Check if person was added to DB', function() {
    it('Gets, types and fetches', function() {
    cy.visit('http://localhost:3000')

    cy.get('.firstNameInput')
        .type('Morgana')
    
    cy.get('.lastNameInput')
        .type('Ventimiglia')
    
    cy.get('.ageInput')
        .type('1977')
    
    cy.get('.professionInput')
        .type('Actor')
    
    cy.get('.ratingInput')
        .select('1')  

    cy.get('Button.submitButton').click()

    cy.get('#Sorting')
        .select('rating')
    
    cy.get('#SortDirection')
        .select('ascending')
    
    cy.get('#applyButton').click()

    cy.get('.mainContent')
        .contains('Morgan')
    
    //cy.visit('http://it2810-09.idi.ntnu.no:8000/api/persons?firstName=Milo')
    //cy.url().should('include', '/lastName=Ventimiglia&age=1977&profession=Actor&rating=77')

    })
})
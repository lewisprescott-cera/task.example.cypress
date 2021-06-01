/// <reference types="cypress" />

context('Jobs Search', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('verify search results', () => {
      cy.get("a[href$='/jobs/care/']").first().click()
      //I would remove this as having a .should check early on can lead to a false postive cy.get('h2').should('have.text', "We're Hiring!")
      cy.get('#searchLocation').type('Manchester')
      cy.get('[type="submit"]').click()
      // This is not needed cy.get('.results').within(() => {
      cy.get('.job-location').first().contains('Manchester')
      cy.get('[data-target="https://careers.ceracare.co.uk//jobs/1167316-care-assistant"] > :nth-child(1) > .job-location > span').should('have.text', "Manchester")
        //cy.get('#searchLocation').should('have.text','Manchester')
      })
    //})

    it('negative scenario', () => {
      cy.get("a[href$='/jobs/care/']").first().click()
      cy.get('#searchLocation').type('Manchester')
      cy.get('[type="submit"]').click()
      cy.get('.job-location').first().contains('Manchester')
      cy.get('[data-target="https://careers.ceracare.co.uk//jobs/1167316-care-assistant"] > :nth-child(1) > .job-location > span').should('not.have.text', "Norwich")
    })
  })

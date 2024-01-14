describe('API stubbing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=List%20of%20the%20highest%20major%20summits%20of%20the%20United%20States`,
            {
                fixture: 'searchOnMain.json',
            }
        ).as('searchApi');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mt.%20Marcy`,
            {
                fixture: 'searchMarcy.json',
            }
        ).as('searchMarcyApi');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=parse&pageid=50045486&format=json&origin=*`,
            {
                fixture: 'searchMarcy.json',
            }
        ).as('articleMarcyApi');
    });
  

    it('search for the high peak of New York', () => {
          cy.get('input[type="search"]').type('New York')
          cy.get('.search-button').should('be.visible').click()
          cy.get('.card').should('be.visible')
          cy.get('.card').should('be.visible')
          cy.get('.search-button').should('be.visible')
          cy.get('input[type="search"]').should('be.visible')
          cy.get('.mountains-container').should('be.visible')
          cy.get('.save-button').should('be.visible')
          cy.get('.save-button').click()
          cy.get('h1').should('be.visible')
          cy.get('nav').contains('Saved Articles_')
          cy.get('nav').contains('Home')
          cy.url().should('include', '/peaks/Mt.%20Marcy');
    })
})
describe('API stubbing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=List%20of%20the%20Highest%20Major%20Summits%20of%20the%20United%20States`,
            {
                fixture: 'searchOnMain.json',
            }
        ).as('searchApi');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=parse&pageid=50045486&format=json&origin=*`,
            {
              fixture: 'searchOnMainID.json',
            }
          ).as('searchOnMainID');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mount%20Mansfield`,
            {
                fixture: 'searchMansfield.json',
            }
        ).as('searchMansfieldApi');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=parse&pageid=502286&format=json&origin=*`,
            {
                fixture: 'searchMansfieldID.json',
            }
        ).as('articleMansfieldApi');
        cy.intercept(
            'GET',
            'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mount%20Marcy',           
            {
                fixture: 'searchMarcy.json',
            }
        ).as('searchMarcy');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=parse&pageid=577223&format=json&origin=*`,
            {
                fixture: 'searchMarcyID.json',
            }
        ).as('searchMarcyID');
    });

    it('search for the high peaks and save them', () => {
        cy.get('input[type="search"]').type('New York')
        cy.get('.search-button').click()
        cy.url().should('include', '/peaks/Mount%20Marcy');
        cy.get('.save-button').should('be.visible')
        cy.get('.save-button').click()
        cy.get('input[type="search"]').type('Vermont')
        cy.get('.search-button').click()
        cy.url().should('include', '/Mount%20Mansfield');
        cy.get('.save-button').should('be.visible')
        cy.get('.save-button').click()
        cy.get('.saved-articles').click();
        cy.url().should('include', '/saved');
        cy.get('.card').should('have.length', 2);
    })
})
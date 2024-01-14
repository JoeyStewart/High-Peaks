describe('API pull main article onto screen', () => {
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
            `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mt.%20Mansfield`,
            {
                fixture: 'searchMansfield.json',
            }
        ).as('searchMansfieldApi');
        cy.intercept(
            'GET',
            `https://en.wikipedia.org/w/api.php?action=parse&pageid=50045486&format=json&origin=*`,
            {
                fixture: 'searchMansfield.json',
            }
        ).as('articleMansfieldApi');
    });

    it('search for the high peaks and save them', () => {
        cy.get('input[type="search"]').type('New York')
        cy.get('.search-button').click()
        cy.url().should('include', '/peaks/Mt.%20Marcy');
        cy.get('.save-button').should('be.visible')
        cy.get('.save-button').click()
        cy.get('input[type="search"]').type('Vermont')
        cy.get('.search-button').click()
        cy.url().should('include', '/peaks/Mt.%20Mansfield');
        cy.get('.save-button').should('be.visible')
        cy.get('.save-button').click()
        cy.contains('Saved Articles_').click();
        cy.url().should('include', '/saved');
        cy.get('.card').should('have.length', 2);
    })
})
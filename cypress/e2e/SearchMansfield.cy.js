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
  });

    it('Searches and displays article details', () => {
             cy.get('input[type="search"]').type('Vermont');
             cy.get('button:contains("Search")').click();
             cy.get('.mountains-container').should('be.visible')
             cy.get('.search-button').should('be.visible')
            cy.get('input[type="search"]').should('be.visible')
            cy.get('.mountains-container').should('be.visible')
            cy.get('.save-button').should('be.visible')
            cy.get('.save-button').click()
            cy.get('h1').should('be.visible')
            cy.get('.saved-articles').contains('Saved Articles')
            cy.get('.home').contains('Home')
            cy.url().should('include', '/peaks/Mount%20Mansfield');
       });
})
 
 
 
 
 
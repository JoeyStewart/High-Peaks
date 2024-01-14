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
      `https://en.wikipedia.org/w/api.php?action=parse&pageid=50045486&format=json&origin=*`,
      {
        fixture: 'searchOnMainID.json',
      }
    ).as('articleApi');
  });

  it('loads article data when title is available', () => {
    cy.get('.card').should('be.visible')
    cy.get('.search-button').should('be.visible')
    cy.get('input[type="search"]').should('be.visible')
    cy.get('.mountains-container').should('be.visible')
    cy.get('h1').should('be.visible')
    cy.get('nav').contains('Saved Articles_')
    cy.get('nav').contains('Home')
    cy.url().should('include', '/');
  });

  it('search for the high peak of Vermont', () => {
    cy.get('input[type="search"]').type('Vermont')
    cy.get('.search-button').should('be.visible').click()
    cy.get('.card').should('be.visible')
    cy.get('input[type="search"]').clear();
  })

    // cy.intercept(
    //   'GET',
    //   `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mt.Mansfield`,
    //   {
    //     fixture: 'searchMansfield.json',
    //   }
    // ).as('searchMansfieldApi');
    // cy.intercept(
    //   'GET',
    //   `https://en.wikipedia.org/w/api.php?action=parse&pageid=502286&format=json&origin=*`,
    //   {
    //     fixture: 'searchMansfield.json',
    //   }
    // ).as('articleMansfieldApi');

    // cy.intercept(
    //   'GET',
    //   `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=Mt.Mansfield`,
    //   {
    //     fixture: 'searchMansfield.json',
    //   }
    // ).as('searchMansfieldApi');
    // cy.intercept(
    //   'GET',
    //   `https://en.wikipedia.org/w/api.php?action=parse&pageid=502286&format=json&origin=*`,
    //   {
    //     fixture: 'searchMansfield.json',
    //   }
    // ).as('articleMansfieldApi');
  
  // it('search for the high peak of Vermont', () => {
  //   cy.get('.card').should('be.visible')
  //   cy.get('.search-button').should('be.visible')
  //   cy.get('input[type="search"]').should('be.visible')
  //   cy.get('.mountains-container').should('be.visible')
  //   cy.get('.save-button').should('be.visible')
  //   cy.get('.save-button').click()
  //   cy.get('h1').should('be.visible')
  //   cy.get('nav').contains('Saved Articles_')
  //   cy.get('nav').contains('Home')
  //   cy.url().should('include', '/peaks/Mt.%20Mansfield');
  // })

  // it('The card for Mt. Mansfield should be present and saved', () => {
  //   cy.get('.card').should('be.visible')
  //   cy.get('.search-button').should('be.visible')
  //   cy.get('input[type="search"]').should('be.visible')
  //   cy.get('.mountains-container').should('be.visible')
  //   cy.get('.save-button').should('be.visible')
  //   cy.get('.save-button').click()
  //   cy.get('h1').should('be.visible')
  //   cy.get('nav').contains('Saved Articles_')
  //   cy.get('nav').contains('Home')
  //   cy.url().should('include', '/peaks/Mt.%20Mansfield');
  // })
  
  // it('search for the high peak of New York', () => {
  //   cy.get('input[type="search"]').type('New York')
  //   cy.get('.search-button').should('be.visible').click()
  //   cy.get('.card').should('be.visible')
  //   cy.get('input[type="search"]').type('')
  // })

  // it('The card for Mt. Marcy should be present and saved', () => {
  //   cy.get('.card').should('be.visible')
  //   cy.get('.search-button').should('be.visible')
  //   cy.get('input[type="search"]').should('be.visible')
  //   cy.get('.mountains-container').should('be.visible')
  //   cy.get('.save-button').should('be.visible')
  //   cy.get('.save-button').click()
  //   cy.get('h1').should('be.visible')
  //   cy.get('nav').contains('Saved Articles_')
  //   cy.get('nav').contains('Home')
  //   cy.url().should('include', '/peaks/Mt.%20Marcy');
  // })

  // it('Should see the saved page with the articles of Mt. Marcy and Mt. Mansfield present', () => {
  //   cy.contains('Saved Articles_').click();
  //   cy.url().should('include', '/saved');
  //   cy.get('.card').should('have.length', 2);
  //   cy.get('h1').should('be.visible').contains('Vermont');
  //   cy.get('h2').should('be.visible').contains('Mt. Mansfield');
  //   cy.get('h3').should('be.visible').contains('Article Title in Vermont');
  
  //   cy.get('h1').should('be.visible').contains('New York');
  //   cy.get('h2').last().should('be.visible').contains('Mt. Marcy');
  //   cy.get('h3').last().should('be.visible').contains('Article Title in New York');
  // });

  // it('Should see the saved page with the articles of Mt. Marcy and Mt. Mansfield present', () => {
  //   cy.contains('Home').click()
  //   cy.url().should('include', '/');
  //   cy.get('.card').should('be.visible')
  //   cy.get('.search-button').should('be.visible')
  //   cy.get('input[type="search"]').should('be.visible')
  //   cy.get('.mountains-container').should('be.visible')
  //   cy.get('h1').should('be.visible')
  //   cy.get('nav').contains('Saved Articles_')
  //   cy.get('nav').contains('Home')
  // });
});






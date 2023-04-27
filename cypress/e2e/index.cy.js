it('titles are correct', () => {
    const page = cy.visit('/');
  
    page.get('title').should('have.text', 'Hello Friend')
    page.get('h1').should('have.text', 'Astro Template');
  });
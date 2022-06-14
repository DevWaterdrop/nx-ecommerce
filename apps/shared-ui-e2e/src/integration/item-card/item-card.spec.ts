describe('shared-ui: ItemCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemcard--primary'));

  it('should render the component', () => {
    cy.get('figcaption').should('have.text', 'Lovely flower');
  });
});

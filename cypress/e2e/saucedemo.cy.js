describe('SauceDemo E2E Tests', () => {
  
    const username = 'standard_user';
    const password = 'secret_sauce';
  
    before(() => {
      cy.visit('/');
    });
  
    it('Login with Valid Credentials', () => {
      cy.get('[data-test=username]').type(username);
      cy.get('[data-test=password]').type(password);
      cy.get('[data-test=login-button]').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('Add Products to Cart', () => {
      cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
      cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
      cy.get('.shopping_cart_badge').should('contain', '2');
    });
  
    it('Verify Items in Cart', () => {
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('have.length', 2);
    });
  
    it('Complete the Purchase', () => {
      cy.get('[data-test=checkout]').click();
      cy.url().should('include', '/checkout-step-one.html');
  
      cy.get('[data-test=firstName]').type('John');
      cy.get('[data-test=lastName]').type('Doe');
      cy.get('[data-test=postalCode]').type('12345');
      cy.get('[data-test=continue]').click();
  
      cy.url().should('include', '/checkout-step-two.html');
      cy.get('[data-test=finish]').click();
  
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
  });
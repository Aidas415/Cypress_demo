/// <reference types="cypress" />

describe('Some', () => {

    beforeEach(() => {
        Cypress.config({
            defaultCommandTimeout: 5000,
            baseUrl: 'https://automationexercise.com'
        })
    });


    it('', () => {
        cy.visit(Cypress.env('endpoint_login_url'));

        cy.viewport('iphone-6');
        cy.wait(2000);

        cy.viewport('ipad-mini');
        cy.wait(2000);

        cy.viewport('iphone-x');
        cy.wait(3000);

        cy.viewport('samsung-note9');
        cy.wait(4000);
    });

    it('Open page: products', () => {
        cy.visit(Cypress.env('endpoind_products_url'));
    });

    it('Open page: view cart', () => {
        cy.visit(Cypress.env('endpoind_view_cart'));
    });
});
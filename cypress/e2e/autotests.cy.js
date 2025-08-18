/// <reference types="cypress" />

// const { should } = require("chai");

describe('Hw automation exercise', () => {
    const listOfProductsInCart = 'table[id="cart_info_table"] tbody tr';

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    it('Test case 12: Add product in cart', () => {

        cy.clickOnProductsOfNavigationMenu();

        cy.addProductToCart(1);
        cy.clickOnContinueShoping();

        cy.addProductToCart(2);
        cy.clickOnViewCart();

        cy.get(listOfProductsInCart).should('have.length', 2);

        cy.getProductPrice(1).should('have.text', 'Rs. 500');

        // cy.getProductPrice(1)
        //     .should("be.visible")
        //     .then(($tag) => {
        //         expect($tag.text().trim())
        //             .equal("Rs. 500");
        //     });

        cy.getProductsQuantity(1).should('have.text', '1');

        // cy.getProductsQuantity(1)
        //     .invoke('text')
        //     .then((text) => {
        //         expect(text.trim())
        //             .equal('1');
        //     });

        cy.getProductsTotalPrice(1).should('have.text', 'Rs. 500');

        // cy.getProductsTotalPrice(1)
        //     .invoke('text')
        //     .then((text) => {
        //         expect(text.trim())
        //             .equal('Rs. 500');
        //     });

        cy.getProductPrice(2).should('have.text', 'Rs. 400');

        // cy.getProductPrice(2)
        //     .should('be.visible')
        //     .then(($tag) => {
        //         expect($tag.text().trim())
        //             .equal("Rs. 400");
        //     });

        cy.getProductsQuantity(2).should('have.text', '1');

        // cy.getProductsQuantity(2)
        //     .invoke('text')
        //     .then((text) => {
        //         expect(text.trim())
        //             .equal('1')
        //     });

        cy.getProductsTotalPrice(2).should('have.text', 'Rs. 400');

        // cy.getProductsTotalPrice(2)
        //     .should('be.visible')
        //     .then(($tag) => {
        //         expect($tag.text().trim())
        //             .equal('Rs. 400');
        //     });
    });

    it('Test case 13: Verify product quantity in cart', () => {

        cy.getProduktDetails(3);

        cy.detailsProductInformation(3)
            .should('eq', '3');

        cy.addQuantityOfProducts(4);

        cy.addProductsToCartFromInfoPage();

        cy.clickOnViewCart();

        cy.getProductsQuantity(3).should('have.text', '4');
    });

    it('Test case 1: Register user', () => {

        cy.clickOnSignupLoginOfNavigationMenu();

        cy.get('#form h2').should('have.text', 'New User Signup!');

        cy.get('#form input[name="name"]').type('Aidas');

        cy.get('#form input[name="email"]').type('aidas@example.com');

        cy.get('#form button[data-qa="signup-button"]').click();

        cy.get('#form h2 b').should('have.text', 'Enter Account Information');

        // cy.get('#form input[name="email"]').type('aidas@example.com');

        // cy.get('#form input[name="password"]').type('AB55ok');
    });
});
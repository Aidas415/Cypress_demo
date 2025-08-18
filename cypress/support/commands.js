// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { Command } = require("concurrently");

Cypress.Commands.add('clickOnProductsOfNavigationMenu', () => {
    cy.get('a[href="/products"]').click();
});

Cypress.Commands.add('addProductToCart', (productId) => {
    cy.get(`div[class="overlay-content"] a[data-product-id="${productId}"]`)
        .invoke('show')
        .click({ force: true });
});

Cypress.Commands.add('clickOnContinueShoping', () => {
    cy.get('div[class="modal-content"] button[data-dismiss="modal"]')
        .click();
});

Cypress.Commands.add('clickOnViewCart', () => {
    cy.get('div[class="modal-body"] a[href="/view_cart"]')
        .click();
});

Cypress.Commands.add('getProductPrice', (productId) => 
    cy.get(`tr[id="product-${productId}"] > td[class="cart_product"] + + > p`)
);

Cypress.Commands.add('getProductsQuantity', (productId) => 
    cy.get(`tr[id="product-${productId}"] > > button[class="disabled"]`)
        
);

Cypress.Commands.add('getProductsTotalPrice', (productId) => 
    cy.get(`tr[id="product-${productId}"] > td[class="cart_product"] + + + + > p`)
);

Cypress.Commands.add('getProduktDetails', (productId) => {
    cy.get(`a[href="/product_details/${productId}"]`).click();
});

Cypress.Commands.add('detailsProductInformation', () => 
    cy.get('input[name="product_id"]').invoke(`val`)
);

Cypress.Commands.add('addQuantityOfProducts', (quantity) => {
    cy.get('input[id="quantity"]').clear().type(`${quantity}`);
});

Cypress.Commands.add('addProductsToCartFromInfoPage', () => {
    cy.get('button[class="btn btn-default cart"]').click();
});

Cypress.Commands.add('clickOnSignupLoginOfNavigationMenu', () => {
    cy.get('a[href="/login"]').click();
});
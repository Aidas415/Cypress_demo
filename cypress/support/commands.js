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

Cypress.Commands.add('listOfProductsInCart', () => {
    cy.get('table[id="cart_info_table"] tbody tr');
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

////
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

////
Cypress.Commands.add('clickOnSignupLoginOfNavigationMenu', () => {
    cy.get('a[href="/login"]').click();
});

Cypress.Commands.add('NewUserSignupIsVisible', () => {
    cy.get('#form h2').eq(2);
});

Cypress.Commands.add('enterNameToNewUserSignup', (name) => {
    cy.get('#form input[name="name"]').type(`${name}`);
});

Cypress.Commands.add('enterEmailToNewUserSignup', (email) => {
    cy.get('#form input[name="email"]').eq(1).type(`${email}`);
});

Cypress.Commands.add('clickOnSignup', () => {
    cy.get('#form button[data-qa="signup-button"]').click();
});

// ENTER ACCOUNT INFORMATION
Cypress.Commands.add('enterAccountInformationIsVisible', () => {
    cy.get('section[id="form"] > > > > > h2');
});

Cypress.Commands.add('checkMrBox', () => {
    cy.get('#id_gender1').click();
});

Cypress.Commands.add('enterPassword', () => {
    cy.get('#form input[data-qa="password"]').type('AB55ok');
});

Cypress.Commands.add('enterBirthDay', () => {
    cy.get('#form select[name="days"]').select('12');
});

Cypress.Commands.add('enterBirthMonth', () => {
    cy.get('#form select[name="months"]').select('March');
});

Cypress.Commands.add('enterBirthYear', () => {
    cy.get('#form select[name="years"]').select('1994');
});

Cypress.Commands.add('checkNewsletter', () => {
    cy.get('#newsletter').click();
});

Cypress.Commands.add('checkOffers', () => {
    cy.get('#optin').click();

    
});

// ADDRESS INFORMATION
Cypress.Commands.add('enterFirstName', (name) => {
    cy.get('#first_name').type(`${name}`);
});

Cypress.Commands.add('enterLastName', () => {
    cy.get('#last_name').type('Pavardenis');
});

Cypress.Commands.add('enterCompanyName', () => {
    cy.get('#company').type('PIEVOS');
});

Cypress.Commands.add('enterAddress1', () => {
    cy.get('#address1').type('Gatve 5, P.O.10, PIEVOS');
});

Cypress.Commands.add('enterAddress2', () => {
    cy.get('#address1').type('Skersgatvis 10, P.O.15, PIEVOS');
});

Cypress.Commands.add('selectCountry', () => {
    cy.get('#country').select('United States');
});

Cypress.Commands.add('enterState', () => {
    cy.get('#state').type('State');
});

Cypress.Commands.add('enteerCity', () => {
    cy.get('#city').type('City');
});

Cypress.Commands.add('enterZipCode', () => {
    cy.get('#zipcode').type('20');
});

Cypress.Commands.add('enterMobileNumber', () => {
    cy.get('#mobile_number').type('1234567890');
});

// CREATE ACCOUNT
Cypress.Commands.add('clickCreateAccountButton', () => {
    cy.get('button[data-qa="create-account"]').click();
});

Cypress.Commands.add('accountCreatedIsVisible', () => {
    cy.get('h2[data-qa="account-created"]')
});

Cypress.Commands.add('clickOnContinueButton', () => {
    cy.get('section[id="form"] a[data-qa="continue-button"]').click();
});

Cypress.Commands.add('loggedInAsUsernameIsVisible',() => {
    cy.get('ul[class="nav navbar-nav"] a').eq(9).contains(`Logged in as ${name}`)
});

Cypress.Commands.add('clickOnDeleteAccountButton', () => {
    cy.get('header[id="header"] a[href="/delete_account"]').click();
});

Cypress.Commands.add('accountDeletedIsVisible', () => {
    cy.get('section[id="form"] h2[data-qa="account-deleted"] b')
});

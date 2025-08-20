/// <reference types="cypress" />

describe('Hw automation exercise', () => {
    const listOfProductsInCart = 'table[id="cart_info_table"] tbody tr';
    const name = 'Aidas';

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

        cy.getProductPrice(1).should('have.text', 'Rs. 500').should("be.visible");

        // cy.getProductPrice(1)
        //     .should("be.visible")
        //     .then(($tag) => {
        //         expect($tag.text().trim())
        //             .equal("Rs. 500");
        //     });

        cy.getProductsQuantity(1).should('have.text', '1');

        // cy.getProductsQuantity(1)
        //     .should("be.visible")
        //     .then((text) => {
        //         expect(text.trim())
        //             .equal('1');
        //     });

        cy.getProductsTotalPrice(1).should('have.text', 'Rs. 500');

        // cy.getProductsTotalPrice(1)
        //     .should("be.visible")
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

        cy.get('#form h2').eq(2).should('have.text', 'New User Signup!').should('be.visible');

        cy.get('#form input[name="name"]').type(`${name}`);

        cy.get('#form input[name="email"]').eq(1).type('savas@example.com');

        cy.get('#form button[data-qa="signup-button"]').click();

        cy.get('section[id="form"] > > > > > h2').should('have.text','Enter Account Information').should('be.visible');

        // cy.within(() => {

            cy.get('#id_gender1').click();

            cy.get('#form input[data-qa="password"]').type('AB55ok');

            cy.get('#form select[name="days"]').select('12');

            cy.get('#form select[name="months"]').select('March');

            cy.get('#form select[name="years"]').select('1994');

            cy.get('#newsletter').click();

            cy.get('#optin').click();

            cy.get('#first_name').type(`${name}`);

            cy.get('#last_name').type('Pavardenis');

            cy.get('#company').type('PIEVOS');

            cy.get('#address1').type('Gatve 5, P.O.10, PIEVOS');

            cy.get('#address1').type('Skersgatvis 10, P.O.15, PIEVOS');

            cy.get('#country').select('United States');

            cy.get('#state').type('State');

            cy.get('#city').type('City');

            cy.get('#zipcode').type('20');

            cy.get('#mobile_number').type('1234567890');

            // // });

            cy.get('button[data-qa="create-account"]').click();

            cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!').should('be.visible');

            cy.get('section[id="form"] a[data-qa="continue-button"]').click();

            // cy.get('ul[class="nav navbar-nav"] i[class="fa fa-user"]').contains('have.text', ' Logged in as Aidas').should('be.visible');

            cy.get('header[id="header"] a[href="/delete_account"]').click();

            cy.get('section[id="form"] h2[data-qa="account-deleted"] b').should('have.text', 'Account Deleted!').should('be.visible');

            cy.get('#form  a[data-qa="continue-button"]').click();

        });
        // it('Login User with correct email and password', () => {
        //     cy.get('ul[nav navbar-nav] > + + + > a[id="header"]');
        // });
    });
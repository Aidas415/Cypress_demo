/// <reference types="cypress" />

describe("Hw automation exercise", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com");
  });

  it("Test case 1: Register user", () => {
    const name = "Aidas";
    const email = "any@some.com";

    cy.clickOnSignupLoginOfNavigationMenu();

    cy.NewUserSignupIsVisible()
      .should("have.text", "New User Signup!")
      .should("be.visible");

    cy.enterNameToNewUserSignup(name);

    cy.enterEmailToNewUserSignup(email);

    cy.clickOnSignup();

    cy.enterAccountInformationIsVisible()
      .should("have.text", "Enter Account Information")
      .should("be.visible");

    cy.checkMrBox();

    cy.enterPassword();

    cy.enterBirthDay();

    cy.enterBirthMonth();

    cy.enterBirthYear();

    cy.checkNewsletter();

    cy.checkOffers();

    cy.enterFirstName(`${name}`);

    cy.enterLastName();

    cy.enterCompanyName();

    cy.enterAddress1();

    cy.enterAddress2();

    cy.selectCountry();

    cy.enterState();

    cy.enteerCity();

    cy.enterZipCode();

    cy.enterMobileNumber();

    cy.clickCreateAccountButton();

    cy.accountCreatedIsVisible()
      .should("have.text", "Account Created!")
      .should("be.visible");

    cy.clickOnContinueButton();

    cy.loggedInAsUsernameIsVisible().should("be.visible");

    cy.clickOnDeleteAccountButton();

    cy.accountDeletedIsVisible()
      .should("have.text", "Account Deleted!")
      .should("be.visible");

    cy.get('#form  a[data-qa="continue-button"]').click();
  });

  it("Test case 12: Add product in cart", () => {
    cy.clickOnProductsOfNavigationMenu();

    cy.addProductToCart(1);
    cy.clickOnContinueShoping();

    cy.addProductToCart(2);
    cy.clickOnViewCart();

    cy.listOfProductsInCart().should("have.length", 2);

    cy.getProductPrice(1).should("have.text", "Rs. 500").should("be.visible");

    cy.getProductsQuantity(1).should("have.text", "1");

    cy.getProductsTotalPrice(1).should("have.text", "Rs. 500");

    cy.getProductPrice(2).should("have.text", "Rs. 400");

    cy.getProductsQuantity(2).should("have.text", "1");

    cy.getProductsTotalPrice(2).should("have.text", "Rs. 400");
  });

  it("Test case 13: Verify product quantity in cart", () => {
    cy.getProduktDetails(3);

    cy.detailsProductInformation(3).should("eq", "3");

    cy.addQuantityOfProducts(4);

    cy.addProductsToCartFromInfoPage();

    cy.clickOnViewCart();

    cy.getProductsQuantity(3).should("have.text", "4");
  });
});

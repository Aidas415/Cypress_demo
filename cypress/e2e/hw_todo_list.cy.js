/// <reference types="cypress" />

describe('template spec', () => {
    it('ToDo list page visible', () => {
        cy.visit('https://todolist.james.am/#/');

        cy.contains('h1', 'To Do List').should('be.visible');
        cy.contains('p', 'Double-click to edit a toodo').should('be.visible');
        cy.get('input').should('have.attr', 'placeholder', "What need's to be done?");
    });
});
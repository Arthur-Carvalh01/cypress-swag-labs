Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('add_itens_carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
})

Cypress.Commands.add('verificar_itens_carrinho', () => {
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should('be.visible')
})

Cypress.Commands.add('remover_itens_carrinho', () => {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    cy.get('[data-test="remove-sauce-labs-onesie"]').click()
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
})
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
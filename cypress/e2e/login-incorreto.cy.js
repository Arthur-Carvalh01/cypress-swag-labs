describe('Pagína de Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it ('Verificar mensagem de falha em login incorreto', () => {
        cy.login('standard_user', 'standard_user')
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })
})
describe('Pagína de Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it ('Deve preencher os campos de login corretamente para realizar o login', () => {
        cy.login('standard_user', 'secret_sauce')
    })
})
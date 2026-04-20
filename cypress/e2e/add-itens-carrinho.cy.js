describe('Pagína de Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.login('standard_user', 'secret_sauce')
    })
    it('Deve adicionar itens ao carrinho, e verificar se foi adicionaodo', () => {
        cy.add_itens_carrinho()
        cy.verificar_itens_carrinho()
    })
})
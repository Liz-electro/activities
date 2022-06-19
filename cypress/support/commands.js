import loginPage from "../pages/LoginPage";

const loginToUI = new loginPage();

Cypress.Commands.add('loginAPI', (username, password) => {
    cy.request({
        method: 'POST',
        url: '/auth/login',
        body: {username, password},
    }).then(({body}) => {
        window.localStorage.setItem('authToken', body.token)
    })
})

Cypress.Commands.add('login', (email = Cypress.env('username'),
                               password = Cypress.env('password')) => {
    loginToUI.login(email, password);

})
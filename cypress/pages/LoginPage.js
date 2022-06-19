class loginPage {
    login(email, password){
        cy.visit('/auth/login');
        cy.get('[data-test="login"]').type(email);
        cy.get('[data-test="password"]').type(password);

        cy.get('[data-test="submit-button"]').click();
    }

}

export default loginPage
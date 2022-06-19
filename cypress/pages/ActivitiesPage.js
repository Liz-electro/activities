class activitiesPage {

    open() {
        cy.visit('/activities');

        cy.location().should((loc) => {
            expect(loc.pathname).to.contain('/activities/list/user/')
        })
    }

    addNewActivity(activityType) {

        cy.get('[data-test="addButton-button"]').click();

        cy.get('[data-test="activity-subject"]').type(activityType);


        switch (activityType) {
            case 'Meeting':
                cy.get('.form-styles__Content-sc-ieodm8-1 > :nth-child(1) > .cui5-button-group > :nth-child(2)').click();
                break;
            case 'Task':
                cy.get('.cui5-button-group > :nth-child(3) > .cui5-icon').click();
                break;
            case 'Deadline':
                cy.get('.cui5-button-group > :nth-child(3) > .cui5-icon').click();
                break;
            case 'Email':
                cy.get('.cui5-button-group > :nth-child(4) > .cui5-icon').click();
                break;
            case 'Lunch':
                cy.get('.cui5-button-group > :nth-child(5) > .cui5-icon').click();
                break;
            default:
                break;
        }


        cy.get('[data-test="save-activity-button"]').click();
    }

    verifyCreated(activityType) {
        cy.get('[data-test="subject-label"]').should('have.text', activityType + 'New');
    }


}

export default activitiesPage
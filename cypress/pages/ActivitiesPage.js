class activitiesPage {

    open() {
        cy.visit('/activities');

        cy.location().should((loc) => {
            expect(loc.pathname).to.contain('/activities/list/user/')
        })
    }

    validatePage() {
        cy.get('[data-test="filter-menu-button"]').should('contain', Cypress.env('username'));
        expect(cy.get('[data-test="addButton-button"]')).to.exist;
    }

    addNewActivity(activityType) {
        cy.get('[data-test="addButton-button"]').click({force: true});

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
                cy.get('.cui5-button-group > :nth-child(5) > .cui5-icon').click();
                break;
            case 'Lunch':
                cy.get('.cui5-button-group > :nth-child(6) > .cui5-icon').click();
                break;
            default:
                break;
        }

        cy.get('[data-test="save-activity-button"]').click();
    }

    verifyCreated(activityType) {
        cy.get('[data-test="subject-label"]').should('have.text', activityType + 'New');
        cy.get('#icon-sm-ac-' + activityType.toLowerCase()).should('exist');
    }

    deleteActivities() {
        cy.get('[data-test="table-header-select-all"]').click();
        cy.get('[data-test="bulk-edit-delete-async"]').click();
        cy.get('.cui5-button--variant-negative').click();
    }

    verifyNoActivitiesExist() {
        cy.get('.warningMessage').should('have.text', '\'\\n\\t\\t\\tNo activities found\\n\\t\\t\\t\\n\\t\\t\\t\\tTry resetting your filters or create new activity\\n\\t\\t\\t\\n\\t\\t');
    }

    editActivityName(newName) {
        cy.get('[data-test="subject-label"]').click();
        cy.get('.gridCell__editIconWrapper').click();
        cy.get('#text-20Xou4Bi').type(newName);
        cy.get('[data-test="subject-save"]').click();
    }

    editActivity(newName) {
        cy.get('[data-test="subject-label"] > a').click({force: true});

        cy.get('[data-test="activity-subject"]').clear().type(newName);
        cy.get('[data-test="save-activity-button"]').click();
    }

    bulkEditActivity(newName) {
        cy.get('[data-test="table-header-select-all"]').click({force: true});
        cy.get('[data-coachmark="bulk-edit-subject"] > .cui5-select > .cui5-select__box > span').click({force: true});

        cy.get('[data-coachmark="bulk-edit-subject"] > .cui5-input > .cui5-input__box > input').type(newName);

        cy.get('.cui5-button--variant-negative').click();
    }


}

export default activitiesPage
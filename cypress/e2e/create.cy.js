import {deleteTestDataIfExist} from "../support/help";
import activitiesPage from "../pages/ActivitiesPage";

const activities = new activitiesPage();

describe('User should have an ability to create activities', () => {
    beforeEach(() => {
        cy.login();

        activities.open();

        deleteTestDataIfExist();
    })



    it('User should have a possibility to see correct Activities page', () => {

        cy.get('[data-test="filter-menu-button"]').should('contain', Cypress.env('username'));

    })


    it('User should have a possibility to create a Call', () => {

        activities.addNewActivity('Call');

        activities.verifyCreated('Call');

    })

    it('User should have a possibility to create a Meeting', () => {

        activities.addNewActivity('Meeting');

        activities.verifyCreated('Meeting');
    })

    it('User should have a possibility to create a Task', () => {

        activities.addNewActivity('Task');

        activities.verifyCreated('Task');

    })

    it('User should have a possibility to create a Deadline', () => {

        activities.addNewActivity('Deadline');

        activities.verifyCreated('Deadline');

    })

})

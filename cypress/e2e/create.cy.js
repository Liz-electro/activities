import {deleteTestDataIfExists} from "../support/help";
import activitiesPage from "../pages/ActivitiesPage";

const activities = new activitiesPage();

describe('User should have  a possibility to create activities', () => {
    beforeEach(() => {
        cy.login();

        activities.open();

        deleteTestDataIfExists();
    })



    it('User should have a possibility to see correct Activities page', () => {

        activities.validatePage();

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

    it('User should have a possibility to create a Email', () => {

        activities.addNewActivity('Email');

        activities.verifyCreated('Email');

    })

    it('User should have a possibility to create a Lunch', () => {

        activities.addNewActivity('Lunch');

        activities.verifyCreated('Lunch');

    })

})

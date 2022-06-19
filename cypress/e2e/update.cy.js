import {deleteTestDataIfExist} from "../support/help";
import activitiesPage from "../pages/ActivitiesPage";

const activities = new activitiesPage();

describe('User should have an ability to update created activities', () => {
    beforeEach(() => {
        cy.login();

        activities.open();

        deleteTestDataIfExist();
    })

    it('User should have a possibility to update created Activity directly', () => {

        activities.addNewActivity('Call');

        activities.editActivity('New call')

        activities.verifyCreated('New call');
    })

    it.only('User should have a possibility to update created Activity using Bulk edit', () => {

        activities.addNewActivity('Meeting');
        activities.bulkEditActivity('New call');

        activities.verifyCreated('New call');
    })

    it('User should have a possibility to update created Activity from the Activities list', () => {

        activities.addNewActivity('Call');

        activities.editActivityName('New call');

        activities.verifyCreated('New call');


    })
})

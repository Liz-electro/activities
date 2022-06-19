import activitiesPage from "../pages/ActivitiesPage";

const activities = new activitiesPage();

describe('User should have an ability to delete created activities', () => {
    beforeEach(() => {
        cy.login();

        activities.open();

    })


    it('User should have a possibility to delete all the activities', () => {

        activities.addNewActivity('Test deleted activity');
        activities.deleteActivities();
        activities.verifyNoActivitiesExist();

    })
})

import activitiesPage from "../pages/ActivitiesPage";

const activities = new activitiesPage();

export function deleteTestDataIfExists() {
    cy.get('body').then((body) => {
        if (body.find('[data-test="table-header-select-all"]').length > 0) {
            activities.deleteActivities();
        }
    });
}
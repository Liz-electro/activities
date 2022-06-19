

export function deleteTestDataIfExist() {
    cy.get('body').then((body) => {
        if (body.find('[data-test="table-header-select-all"]').length > 0) {
            cy.get('[data-test="table-header-select-all"]').click();
            cy.get('[data-test="bulk-edit-delete-async"]').click();
            cy.get('.cui5-button--variant-negative').click();
        }
    });
}
const getAngular = () => cy.window().its('angular');

export const getAngularScope = (element) => {
    return cy.wrap(element)
        .then(e => getAngular().then(ng => ng.element(element).scope()));
};
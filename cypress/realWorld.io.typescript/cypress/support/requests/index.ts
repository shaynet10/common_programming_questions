const apiBaseUrl = 'https://api.realworld.io/api';

export const interceptRequestGetArticels = () => {
    const url = `${apiBaseUrl}/articles?*`;
    cy.intercept({ url, method: 'GET' }).as('getArticels');
};

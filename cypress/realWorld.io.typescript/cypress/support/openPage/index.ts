import * as mainPageSelectors from '../mainPage/selectors';
import * as signUpPageSelectors from '../signUpPage/selectors';
import * as requests from '../requests';

const baseUrl = 'https://demo.realworld.io';
const pageLoadedSelectorByPath = {
    '/': mainPageSelectors.articleImage,
    '/#/register': signUpPageSelectors.emailInput,
};

const isVisible = (selector) => Cypress.$(`${selector}:visible`).length > 0;

export const waitForPageToLoad = (path) => {
    cy.waitUntil(() => isVisible(pageLoadedSelectorByPath[path]), {
        verbose: true,
        customCheckMessage: `is page loaded: ${path}`,
        timeout: 10000,
        interval: 1000,
    });
    // cy.get(mainPageSelectors.articleImage({ timeout: 10000 }).should('be.visible');
}

const openPage = (path) => {
    requests.interceptRequestGetArticels();
    cy.visit(`${baseUrl}${path}`);
    cy.waitForNetworkIdle(2000);
    waitForPageToLoad(path);
    if (path === '/') {
        cy.wait('@getArticels');
    }
};

export const openPageMain = () => openPage('/');
export const openPageSignUp = () => openPage('/#/register');

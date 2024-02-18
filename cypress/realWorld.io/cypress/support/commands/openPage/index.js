import { isVisible } from 'cypress-extender';
import * as mainPageSelectors from '../mainPage/selectors';
import * as signUpPageSelectors from '../signUpPage/selectors';

const baseUrl = 'https://demo.realworld.io';

const pageLoadedSelectorByPath = {
    '/': mainPageSelectors.articleImage,
    '/#/register': signUpPageSelectors.emailInput,
};

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
    cy.visit(`${baseUrl}${path}`);
    cy.waitForNetworkIdle(2000);
    waitForPageToLoad(path);
};

export const openPageMain = () => openPage('/');
export const openPageSignUp = () => openPage('/#/register');

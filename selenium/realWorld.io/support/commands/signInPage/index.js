import * as selectors from './selectors.js';

export const getEmailInput = () => cy.get(selectors.emailInput);
export const getPasswordInput = () => cy.get(selectors.passwordInput);
export const getSigninButton = () => cy.get(selectors.signInButton);
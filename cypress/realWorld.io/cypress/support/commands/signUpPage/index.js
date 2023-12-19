import * as selectors from './selectors';

export const getTitle = () => cy.get(selectors.mainTitle);
export const getHaveAnAccountLink = () => cy.get(selectors.haveAnAccountLink);
export const getUsernameInput = () => cy.get(selectors.usernameInput);
export const getPasswordInput = () => cy.get(selectors.passwordInput);
export const getEmailInput = () => cy.get(selectors.emailInput);
export const getSignUpButton = () => cy.get(selectors.signUpButton);

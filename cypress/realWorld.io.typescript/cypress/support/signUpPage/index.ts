import * as selectors from './selectors';
import { waitForPageToLoad } from '../openPage';

export const getTitle = () => cy.get(selectors.mainTitle);
export const getHaveAnAccountLink = () => cy.get(selectors.haveAnAccountLink);
export const getUsernameInput = () => cy.get(selectors.usernameInput);
export const getPasswordInput = () => cy.get(selectors.passwordInput);
export const getEmailInput = () => cy.get(selectors.emailInput);
export const getSignUpButton = () => cy.get(selectors.signUpButton);

export const signUp = (username, password, email) => {
    getUsernameInput().clear().type(username);
    getPasswordInput().clear().type(password);
    getEmailInput().clear().type(email);
    getSignUpButton().click();
    waitForPageToLoad('/');
};
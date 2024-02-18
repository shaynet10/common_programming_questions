import * as selectors from './selectors';

export const getEmailInput = () => cy.get(selectors.emailInput);
export const getPasswordInput = () => cy.get(selectors.passwordInput);
export const getSigninButton = () => cy.get(selectors.signInButton);

/** 
 * @name signIn
 * @function
 * @param {String} email The email to perform signin with.
 * @param {String} password The password to perform signin with.
 * */
export const signIn = (email, password) => {
    getEmailInput().clear().type(email);
    getPasswordInput().clear().type(password);
    getSigninButton().click();
    cy.waitForNetworkIdle(10000);
    
}
import * as selectors from './selectors';

export const getTitle = (page) => page.locator(selectors.mainTitle);
export const getHaveAnAccountLink = (page) => page.locator(selectors.haveAnAccountLink);
export const getUsernameInput = (page) => page.locator(selectors.usernameInput);
export const getPasswordInput = (page) => page.locator(selectors.passwordInput);
export const getEmailInput = (page) => page.locator(selectors.emailInput);
export const getSignUpButton = (page) => page.locator(selectors.signUpButton);

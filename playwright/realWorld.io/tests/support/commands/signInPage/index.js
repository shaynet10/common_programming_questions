import * as selectors from './selectors';

export const getEmailInput = (page) => page.locator(selectors.emailInput);
export const getPasswordInput = (page) => page.locator(selectors.passwordInput);
export const getSigninButton = (page) => page.locator(selectors.signInButton);
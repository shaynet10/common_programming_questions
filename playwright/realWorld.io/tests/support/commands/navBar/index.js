import * as selectors from './selectors';

export const getSignUpButton = (page) => page.locator(selectors.headerButtonSignUp);
export const getSignInButton = (page) => page.locator(selectors.headerButtonSignIn);
export const getHomeButton = (page) => page.locator(selectors.headerButtonHome);
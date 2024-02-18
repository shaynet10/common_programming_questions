import * as selectors from './selectors';

export const getSignUpButton = () => cy.get(selectors.headerButtonSignUp);
export const getSignInButton = () => cy.get(selectors.headerButtonSignIn);
export const getHomeButton = () => cy.get(selectors.headerButtonHome);
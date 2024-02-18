export * as general from './general/index';
export * as openPage from './openPage/index';
export * as navBar from './general/navBar/index';
export * as mainPage from './mainPage/index';
export * as signUpPage from './signUpPage/index';
export * as signInPage from './signInPage/index';
export * as requests from './requests/index';

declare global {
    namespace Cypress {
      interface Chainable {
      }
    }
  }
  
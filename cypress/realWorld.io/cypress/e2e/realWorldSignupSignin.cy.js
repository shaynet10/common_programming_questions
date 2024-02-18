/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { openPage, navBar, mainPage, signUpPage, signInPage } from '../support/commands';

describe('real world io - signup signin', () => {
    const signUpUsername = `${faker.internet.userName()}_${Date.now()}`;
    const signUpEmail = `${signUpUsername}@example.com`;
    const signUpPassword = '123456';

    beforeEach(() => {
        openPage.openPageSignUp();
    });
    

    it('signup and signin', () => { 
        signUpPage.signUp(signUpUsername, signUpPassword, signUpEmail);
        navBar.getSignInButton().click();
        cy.waitForNetworkIdle(2000);
        signInPage.signIn(signUpEmail, signUpPassword);
        mainPage.getTitle().should('be.visible').and('include.text', 'conduit');
    });
});


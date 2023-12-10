import { navBar } from '../support/commands';

describe('real world io', () => {
    before(() => {
        cy.visit('https://demo.realworld.io');
    });
    
    it('sanity tests', () => {
        navBar.getHomeButton().should('be.visible');
        navBar.getSignInButton().should('be.visible');
        navBar.getSignUpButton().should('be.visible');
    });
});


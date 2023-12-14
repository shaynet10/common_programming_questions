import { general, navBar, mainPage } from '../support/commands';

describe('real world io', () => {
    const author = 'Anah';

    before(() => {
        cy.visit('https://demo.realworld.io');
    });
    
    it('sanity tests', () => {
        navBar.getHomeButton().should('be.visible');
        navBar.getSignInButton().should('be.visible');
        navBar.getSignUpButton().should('be.visible');
        mainPage.getTitle().should('be.visible').and('include.text', 'conduit');
        mainPage.getSubTitle().should('be.visible').and('include.text', 'A place to share your knowledge');
        mainPage.getTabButton()
            .should('be.visible')
            .then(tabButton => {
                const ngClick = tabButton.attr('ng-click');
                const className = tabButton.attr('class');
                cy.wrap(ngClick).should('include', 'type: ').and('include', 'all');
                cy.wrap(className).should('include', 'active');
        });
        mainPage.getArticleLikes().eq(0).should('not.have.text', '0');
        mainPage.getArticleAuthor().eq(0).should('be.visible').and('include.text', author);
        mainPage.getArticlePublishDate().eq(0).invoke('text').then(pubDate => {
            const isValidDate = /\w{5,}\s+\d{1,2},\s+\d{4}/.test(pubDate);
            cy.wrap(isValidDate).should('eq', true);
        });
        mainPage.getArticleTitle().eq(0).should('be.visible').and('not.have.text', '');
        mainPage.getArticleDescription().eq(0).should('be.visible').and('not.have.text', '');
    });
});


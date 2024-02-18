import { openPage, navBar, mainPage, requests } from '../support/index';

describe('real world io - sanity', () => {
    beforeEach(() => {
        requests.interceptRequestGetArticels();
        openPage.openPageMain();
    });

    it('sanity - validate article request', () => {
        cy.get<{ response: { statusCode: number } }>('@getArticels')
        .then(data => {
                const statusCode = data.response.statusCode;
                cy.wrap(statusCode).should('eq', 200);
            });
    });
    
    it('sanity - buttons', () => {
        navBar.getHomeButton().should('be.visible');
        navBar.getSignInButton().should('be.visible');
        navBar.getSignUpButton().should('be.visible');
        mainPage.getTabButton()
        .should('be.visible')
        .then(tabButton => {
            const ngClick = tabButton.attr('ng-click');
            const className = tabButton.attr('class');
            cy.wrap(ngClick).should('include', 'type: ').and('include', 'all');
            cy.wrap(className).should('include', 'active');
        });
    });

    it('sanity - titles', () => {
        mainPage.getTitle().should('be.visible').and('include.text', 'conduit');
        mainPage.getSubTitle().should('be.visible').and('include.text', 'A place to share your knowledge');
    });

    it('sanity - article', () => {        
        mainPage.article.getLikes().eq(0).should('not.have.text', '0');
        mainPage.article.getAuthor().eq(0).should('be.visible').and('not.have.text', '');
        mainPage.article.getPublishDate().eq(0).invoke('text').then(pubDate => {
            const isValidDate = /\w{5,}\s+\d{1,2},\s+\d{4}/.test(pubDate);
            cy.wrap(isValidDate).should('eq', true);
        });
        mainPage.article.getTitle().eq(0).should('be.visible').and('not.have.text', '');
        mainPage.article.getDescription().eq(0).should('be.visible').and('not.have.text', '');
    });
});


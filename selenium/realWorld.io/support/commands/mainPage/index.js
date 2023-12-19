import * as selectors from './selectors.js';

export const getTitle = () => cy.get(selectors.greenTitle);
export const getSubTitle = () => cy.get(selectors.greenSubTitle);
export const getTabButton = () => cy.get(selectors.tabButton);
export const getArticleLikes = () => cy.get(selectors.articleLikesButtonContainer);
export const getArticleAuthor = () => cy.get(selectors.articleAuthorUsername);
export const getArticlePublishDate = () => cy.get(selectors.articlePublishDate);
export const getArticleTitle = () => cy.get(selectors.articleTitle);
export const getArticleDescription = () => cy.get(selectors.articleDescription);

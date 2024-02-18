import * as selectors from './selectors';

export const getLikes = () => cy.get(selectors.articleLikesButtonContainer);
export const getAuthor = () => cy.get(selectors.articleAuthorUsername);
export const getPublishDate = () => cy.get(selectors.articlePublishDate);
export const getTitle = () => cy.get(selectors.articleTitle);
export const getDescription = () => cy.get(selectors.articleDescription);
export const getImage = (options = {}) => cy.get(selectors.articleImage, options);

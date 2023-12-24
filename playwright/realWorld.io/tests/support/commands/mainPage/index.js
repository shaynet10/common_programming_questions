import * as selectors from './selectors';

export const getTitle = (page) => page.locator(selectors.greenTitle);
export const getSubTitle = (page) => page.locator(selectors.greenSubTitle);
export const getTabButton = (page) => page.locator(selectors.tabButton);
export const getArticleLikes = (page) => page.locator(selectors.articleLikesButtonContainer);
export const getArticleAuthor = (page) => page.locator(selectors.articleAuthorUsername);
export const getArticlePublishDate = (page) => page.locator(selectors.articlePublishDate);
export const getArticleTitle = (page) => page.locator(selectors.articleTitle);
export const getArticleDescription = (page) => page.locator(selectors.articleDescription);
export { selectors };
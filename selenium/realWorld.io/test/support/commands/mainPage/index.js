import * as selectors from './selectors.js';
import { find } from '../general/index.js';

export const getTitle = () => find(selectors.greenTitle);
export const getSubTitle = () => find(selectors.greenSubTitle);
export const getTabButton = () => find(selectors.tabButton);
export const getArticleLikes = () => find(selectors.articleLikesButtonContainer);
export const getArticleAuthor = () => find(selectors.articleAuthorUsername);
export const getArticlePublishDate = () => find(selectors.articlePublishDate);
export const getArticleTitle = () => find(selectors.articleTitle);
export const getArticleDescription = () => find(selectors.articleDescription);

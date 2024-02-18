import * as selectors from './selectors';
export * as article from './article';

export const getTitle = () => cy.get(selectors.greenTitle);
export const getSubTitle = () => cy.get(selectors.greenSubTitle);
export const getTabButton = () => cy.get(selectors.tabButton);

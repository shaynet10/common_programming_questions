import {Builder, By, Key, until} from 'selenium-webdriver';

let driver;

const getAngular = () => cy.window().its('angular');

export const getAngularScope = (element) => {
    return cy.wrap(element)
        .then(e => getAngular().then(ng => ng.element(element).scope()));
};

export const getDriver = async() => {
    if (!driver) {
        driver = await new Builder().forBrowser('chrome').build();
    }
    return driver;
};
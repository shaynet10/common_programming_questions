import {Builder, By, Key, until} from 'selenium-webdriver';

let driver;

export const getDriver = async() => {
    if (!driver) {
        driver = await new Builder().forBrowser('chrome').build();
    }
    return driver;
};

export const find = async(css) => {
    const driver = await getDriver();
    await driver.wait(until.elementLocated(By.css(css)), 10000);
    const element = (await driver.findElements(By.css(css)))[0];
    return element;
};

export const waitForDisplayed = async (element) => {
    const driver = await getDriver();
    driver.wait(async() => {
        const isDisplayed = await element.isDisplayed();
        return isDisplayed;
    }, 10000);
};

const isPageLoaded = async(driver) => {
    const results = await driver.executeScript('return document.readyState');
    return results === "complete";
};

const waitForPageToLoad = async() => {
    const driver = await getDriver();
    await driver.wait(async() => {
        const isLoaded = await isPageLoaded(driver);
        return isLoaded;
    }, 10000);
};

export const visit = async(url) => {
    const driver = await getDriver();
    await driver.get(url);
    await waitForPageToLoad();
};

export const quit = async () => {
    const driver = await getDriver();
    await driver.quit();
};
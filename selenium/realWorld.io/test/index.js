import { general, navBar, mainPage } from './support/commands/index.js';
import { expect } from 'chai';


describe('real world', () => {
    const author = 'Anah';

    before(async () => {
        await general.visit('https://demo.realworld.io');
        await general.waitForDisplayed(await mainPage.getTabButton());
    });

    after(async () => {
        await general.quit();
    });

    it ('sanity tests', async() => {
        await general.waitForDisplayed(await navBar.getHomeButton());
        await general.waitForDisplayed(await navBar.getSignInButton());
        await general.waitForDisplayed(await navBar.getSignUpButton());
        await general.waitForDisplayed(await mainPage.getTitle());
        await general.waitForDisplayed(await mainPage.getSubTitle());
        await general.waitForDisplayed(await mainPage.getTabButton());
        const likes = await (await mainPage.getArticleLikes()).getText();
        expect(Number(likes)).to.not.equal(0);

    });
});

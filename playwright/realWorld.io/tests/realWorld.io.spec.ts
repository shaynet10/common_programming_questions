import { test, expect, chromium } from '@playwright/test';
import { faker } from '@faker-js/faker';

import * as navBar from './support/commands/navBar';
import * as mainPage from './support/commands/mainPage';
import * as signUpPage from './support/commands/signUpPage';
import * as signInPage from './support/commands/signInPage';

test.describe('RealWorld.io', () => {
    let page;
    const author = 'Anah';

    test.beforeAll(async () => {
        const browser = await chromium.launch();
        page = await browser.newPage();

        await page.goto('https://demo.realworld.io');  
        await page.waitForSelector(mainPage.selectors.articleTitle);
    });

    test('sanity tests', async () => {
        const homeButton = await navBar.getHomeButton(page).first();
        const signInButton = await navBar.getSignInButton(page).first();
        const signUpButton = await navBar.getSignUpButton(page).first();
        const title = await mainPage.getTitle(page).first();
        const subTitle = await mainPage.getSubTitle(page).first();
        const tabBtn = await mainPage.getTabButton(page).first();
        const articleTitle = await mainPage.getArticleTitle(page).first();
        const articleDescription = await mainPage.getArticleDescription(page).first();

        await expect(homeButton).toBeVisible();
        await expect(signInButton).toBeVisible();
        await expect(signUpButton).toBeVisible();
        await expect(title).toBeVisible();
        await expect(title).toContainText('conduit');
        await expect(subTitle).toBeVisible();
        await expect(subTitle).toContainText('A place to share your knowledge');
        
        const tabBtnNgClickAttr = await tabBtn.getAttribute('ng-click');
        const tabBtnNgClickClassName = await tabBtn.getAttribute('class');
        await expect(tabBtnNgClickAttr).toContain('all');
        await expect(tabBtnNgClickClassName).toContain('active');

        await expect(mainPage.getArticleLikes(page).nth(0)).not.toHaveText('0');
        await expect(mainPage.getArticleAuthor(page).nth(0)).toBeVisible();
        await expect(mainPage.getArticleAuthor(page).nth(0)).toContainText(author);
        
        const pubDate = await mainPage.getArticlePublishDate(page).nth(0).innerText();
        const isValidDate = /\w{5,}\s+\d{1,2},\s+\d{4}/.test(pubDate);
        await expect(isValidDate).toEqual(true);
        await expect(articleTitle).toBeVisible();
        await expect(articleTitle).not.toHaveText('');
        await expect(articleDescription).toBeVisible();
        await expect(articleDescription).not.toHaveText('');
    });

    test.only('signup and signin', async () => {
        const signUpUsername = `${faker.internet.userName()}_${Date.now()}`;
        const signUpEmail = `${signUpUsername}@example.com`;
        const signUpPassword = '123456';
    
        await navBar.getSignUpButton(page).click();
        await page.waitForLoadState('networkidle');
        await signUpPage.getUsernameInput(page).clear();
        await signUpPage.getUsernameInput(page).type(signUpUsername);
        await signUpPage.getPasswordInput(page).clear();
        await signUpPage.getPasswordInput(page).type(signUpPassword);
        await signUpPage.getEmailInput(page).clear();
        await signUpPage.getEmailInput(page).type(signUpEmail);
        await signUpPage.getSignUpButton(page).click();
        await page.waitForLoadState('networkidle');
        const titleAfterSignUp = await mainPage.getTitle(page);
        await expect(titleAfterSignUp).toBeVisible();
        await expect(titleAfterSignUp).toContainText('conduit');
        await navBar.getSignInButton(page).click();
        await page.waitForLoadState('networkidle');
        await signInPage.getEmailInput(page).clear();
        await signInPage.getEmailInput(page).type(signUpEmail);
        await signInPage.getPasswordInput(page).clear();
        await signInPage.getPasswordInput(page).type(signUpPassword);
        await signInPage.getSigninButton(page).click();
        await page.waitForLoadState('networkidle');
        const titleAfterSignIn = await mainPage.getTitle(page); 
        await expect(titleAfterSignIn).toBeVisible();
        await expect(titleAfterSignIn).toContainText('conduit');
    });

});

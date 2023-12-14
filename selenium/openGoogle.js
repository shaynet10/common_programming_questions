
const {Builder, By, Key, until} = require('selenium-webdriver');

(
    async function example() {
    
    const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

    // let driver = await new Builder().forBrowser('chrome').build();
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url
        await driver.get('https://www.google.com');
        const element = await driver.findElement(By.name('q'));
        await element.sendKeys('puppeteer-mass-screenshots', Key.ENTER);
        await driver.wait(until.elementLocated(By.css('#rso a[href]')), 10000);
        const firstResult = (await driver.findElements(By.css('#rso a[href]>h3')))[0];
        console.log(await firstResult.getAttribute('textContent'));
        console.log(firstResult);
        await firstResult.click();
        await sleep(1000);
        for (let i=0; i<3; i++) {
            driver.executeScript(`window.scrollBy(0, 1000);`);
            await sleep(1000);
        }
        await sleep(3000);
    }
    finally{
        driver.quit();
    }
})();
  


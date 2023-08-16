import { test, expect, chromium, Page, Browser, webkit } from '@playwright/test';
import { APIRoutes } from '../utils/constants/routes';

test('User authorization', async () => {
    var browser: Browser;
    var page: Page;
    await test.step('Launch browser and open page', async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        await page.goto("https://demoqa.com/login", { timeout: 0 });
    });

    await test.step('Find login inputs and type credentials', async () => {
        await page.type('#userName', process.env.TEST_USER_LOGIN);
        await page.type('#password', process.env.TEST_USER_PASSWORD);
    });

    const userInfo = await test.step('Submit the login form', async () => {
        await page.click('#login');
        await page.waitForURL(process.env.BASE_URL + APIRoutes.Profile);
        await page.waitForLoadState();
        const userName = await page.innerText('#userName-value');
        return userName;
    });

    expect(userInfo).toBe(process.env.TEST_USER_LOGIN);
})
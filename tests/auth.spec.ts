import { test, expect, Page } from '@playwright/test';
import { APIRoutes } from '../utils/constants/routes';

var page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test('User authorization', async () => {

    await test.step('Launch browser and open page', async () => {
        await page.goto(process.env.BASE_URL + APIRoutes.Login, { timeout: 0 });
    });

    await test.step('Find login inputs and type credentials', async () => {
        await page.type('#userName', process.env.TEST_USER_LOGIN);
        await page.type('#password', process.env.TEST_USER_PASSWORD);
    });

    const userInfo: string = await test.step('Submit the login form', async () => {
        await page.click('#login');
        await page.waitForURL(process.env.BASE_URL + APIRoutes.Profile);
        await page.waitForLoadState();
        const userName = await page.innerText('#userName-value');
        return userName;
    });

    expect(userInfo, 'user name displayed correctly').toBe(process.env.TEST_USER_LOGIN);
})
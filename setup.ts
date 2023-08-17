import { Browser, chromium, Page } from "@playwright/test";
import { APIRoutes } from './utils/constants/routes';

module.exports = async () => {
    const browser: Browser = await chromium.launch();
    const page: Page = await browser.newPage();

    await page.goto(process.env.BASE_URL + APIRoutes.Login, { timeout: 0 });
    await page.fill('#userName', process.env.TEST_USER_LOGIN!);
    await page.fill('#password', process.env.TEST_USER_PASSWORD!);
    await page.click('#login');
    await page.waitForURL(process.env.BASE_URL + APIRoutes.Profile);
    await page.context().storageState({ path: './contexts/page-context.json' });
    await browser.close();
};
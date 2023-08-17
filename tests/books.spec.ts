import test, { expect, Locator, Page } from '@playwright/test';
import { APIRoutes } from '../utils/constants/routes';

var page: Page;

test.use({ storageState: './contexts/page-context.json' });

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(process.env.BASE_URL + APIRoutes.BookStore);
});

test.describe('Book Store page', async () => {
    test('Check search form', async () => {
        let searchInput = await page.getByPlaceholder('Type to search');
        await searchInput.fill('Speaking');
        const locator: Locator = await page.locator('[id="see-book-Speaking JavaScript"] a');
        await expect(locator, 'has correct search result').toHaveText('Speaking JavaScript');
        await searchInput.fill('');
    });

    test('Check quantity dropdown menu', async () => {
        await page.locator('select[aria-label="rows per page"]').selectOption("20");
        const table: Locator = await page.locator('.rt-tbody');
        const rows: number = await table.locator('.rt-tr-group').count();
        await expect(rows, 'has correct number of rows').toBe(20);
    });

    test('Check pagination buttons', async () => {
        await page.locator('select[aria-label="rows per page"]').selectOption("5");
        await page.click('.-pagination .-next');
        let currentPage: Locator = await page.locator('[aria-label="jump to page"]');
        await expect(currentPage, 'switching to next page after click on button Next').toHaveValue('2');
        await page.click('.-pagination .-previous');
        await expect(currentPage, 'switching to previous page after click on button Previous').toHaveValue('1');
    })
});
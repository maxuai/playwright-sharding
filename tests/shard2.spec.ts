import {test, expect} from '@playwright/test';

test.describe('shard 2', () => {

    test('get started link', async ({page}) => {
        await page.goto('https://playwright.dev/');
        // Click the get started link.
        await page.getByRole('link', {name: 'Get started'}).click();
        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
    });

    test('search button', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('button', {name: 'Search'})).toBeEnabled();
    })
})

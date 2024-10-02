import {test, expect} from '@playwright/test';

test.describe('shard 5', () => {

    test('has title', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('get started link', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', {name: 'Get started'}).click();
        await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
    });

    test('search button', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('button', {name: 'Search'})).toBeEnabled();
    })

    test('star link', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', {name: 'Star microsoft/playwright on GitHub'})).toBeVisible();
    })

    test('dark mode button', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('button', {name: 'Switch between dark and light mode (currently light mode)'})).toBeEnabled();
    })
})

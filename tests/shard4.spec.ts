import {test, expect} from '@playwright/test';

test.describe('shard 4', () => {

    test('search button', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('button', {name: 'Search'})).toBeEnabled();
    })

    test('star link', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('link', {name: 'Star microsoft/playwright on GitHub'})).toBeVisible();
    })
})

import {test, expect} from '@playwright/test';

test.describe('shard 1', () => {

    test('has title', async ({page}) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });
})

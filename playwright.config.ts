import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    retries: 0,
    workers: process.env.SHARDING ? 1 : undefined,
    reporter: process.env.SHARDING ? [['blob'], ['list']] : 'list',
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
    ],
});

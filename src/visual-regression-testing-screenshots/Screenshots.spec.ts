import * as puppeteer from 'puppeteer';
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

test('visual regression testing on screenshot', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const screenshot = await page.screenshot();
    browser.close();

    expect(screenshot).toMatchImageSnapshot({
        failureThreshold: '0.05',
        failureThresholdType: 'percent'
    });
});

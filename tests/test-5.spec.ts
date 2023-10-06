import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByLabel('Facebook').click();
  await page.locator('.x1uvtmcs > .__fb-light-mode').click();
  // await page.goto('https://www.facebook.com/TodoServisCostaRa')

});
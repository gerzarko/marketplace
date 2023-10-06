import { test, expect } from '@playwright/test';

test('test link to instragram page', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByLabel('Instagram').click();
  await page.getByRole('heading', { name: 'todoserviscostarica' }).click();
});
import { test, expect } from '@playwright/test';

test('test light mode and dark mode', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.goto('https://todoservis.com/');
  await page.getByLabel('Toggle between Dark and Light mode').click();
});
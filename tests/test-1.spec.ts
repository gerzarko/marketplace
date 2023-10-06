import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.locator('.btn-primary').first().click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('germanzarkovich@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://todoservis.com/services')
});
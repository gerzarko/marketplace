import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('germanzarkovich@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
});



test('test light mode and dark mode', async ({ page }) => {
  await page.goto('https://todoservis.com/');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.goto('https://todoservis.com/');
  await page.getByLabel('Toggle between Dark and Light mode').click();
});
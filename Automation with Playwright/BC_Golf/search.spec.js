import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-web.golfsafaris.click/#/sign-in?redirectURL=%2Fdashboard');
  await page.getByLabel('Email / Username *').click();
  await page.getByPlaceholder('Enter your email / username...').fill('admin');
  await page.getByLabel('Password *').click();
  await page.getByPlaceholder('Enter your password...').fill('password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('app-itinerary-search').getByRole('button').click();
  await page.getByPlaceholder('Search for a reservation').click();
  await page.getByPlaceholder('Search for a reservation').fill('11494');
  await page.getByText('BC24-11494 Nov 28, 2024 - Nov 30,').click();
  await expect(page.getByRole('heading', { name: 'BC24-11494 Confirmed' }).locator('span')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Jay Mi' })).toBeVisible();
  await page.locator('.ng-tns-c188-50 > button').click();
  await expect(page.getByText('CA$2,020.81')).toBeVisible();
});
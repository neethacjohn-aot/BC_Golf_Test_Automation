import { test, expect } from '@playwright/test';

test('Dev Login', async ({ page }) => {
  await page.goto('https://dev-web.golfsafaris.click/#/sign-in?redirectURL=%2Fdashboard');
  await page.getByLabel('Email / Username *').click();
  await page.getByPlaceholder('Enter your email / username...').fill('admin');
  await page.getByLabel('Password *').click();
  await page.getByPlaceholder('Enter your password...').fill('password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
 await expect(page.locator('text=            Recently Booked Reservations            ')).toBeVisible;
 await expect(page.locator('text=Dashboard')).toBeVisible;
  await page.getByRole('button', { name: 'admin' }).click();
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
  await expect(page.locator('text=Dashboard')).toBeHidden

 
});
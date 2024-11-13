import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-web.golfsafaris.click/#/sign-in?redirectURL=%2Fdashboard');
  await page.getByLabel('Email / Username *').click();
  await page.getByPlaceholder('Enter your email / username...').fill('admin');
  await page.getByPlaceholder('Enter your email / username...').press('Tab');
  await page.getByPlaceholder('Enter your password...').fill('password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Reporting').dblclick();

 // await page.getByText('Reporting').click();
  await page.getByText('XLSX Sales Tracker A complete').click();
  await page.locator('#mat-select-value-3').click();
  await page.getByRole('option', { name: '2024' }).locator('span').first().click();
  await page.locator('ui-form-field:nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  await page.getByRole('option', { name: 'PROPOSAL' }).locator('span').first().click();
  await page.getByRole('option', { name: 'CUSTOMER_APPROVED' }).locator('mat-pseudo-checkbox').click();
  await page.getByText('AWAITING_CONFIRMATION').click();
  await page.getByRole('option', { name: 'CONFIRMED' }).locator('span').first().click();
  await page.getByText('VOUCHER_SENT').click();
  await page.getByText('COMPLETED').click();
  await page.getByText('AWAITING_DEPOSIT').click();
  await page.locator('.cdk-overlay-container > div:nth-child(3)').click();
  //const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Generate Report' }).click();
  await page.waitForTimeout(2000);
  //const download = await downloadPromise;
  await page.getByText('Vendor Tracking Report (Misc. and Activities) A database Quicksight report').click();
  await expect(page.locator('#mat-dialog-1').getByText('Vendor Tracking Report (Misc')).toBeVisible();
  await expect(page.getByRole('button')).toBeVisible();
  await page.getByRole('button').click();
  await page.getByText('Vendor Tracking Report (Golf) A database Quicksight report generated').click();
  await expect(page.locator('#mat-dialog-2').getByText('Vendor Tracking Report (Golf)')).toBeVisible();
  await page.getByRole('button').click();
  await page.getByText('Trip Status Report').click();
  await expect(page.locator('#mat-dialog-3').getByText('Trip Status Report')).toBeVisible();
  await page.getByRole('button').click();
});
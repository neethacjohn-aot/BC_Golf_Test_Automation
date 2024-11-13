import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-web.golfsafaris.click/#/sign-in?redirectURL=%2Fdashboard');
  await page.getByLabel('Email / Username *').click();
  await page.getByPlaceholder('Enter your email / username...').fill('admin');
  await page.getByLabel('Password *').click();
  await page.getByPlaceholder('Enter your password...').fill('password123!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('app-new-reservation').getByRole('button').click();
  await page.locator('app-customer-select').getByRole('button').click();
  await page.getByRole('textbox', { name: 'Search for an existing' }).click();
  await page.getByRole('textbox', { name: 'Search for an existing' }).fill('Neetha.john');
  await page.getByText('neetha.john@aot-technologies.').click();
  await page.getByRole('button', { name: 'Select Customer' }).click();

  
  //await page.keyboard.press('Enter');

  

  //await page.pause();

  //await page.locator('ui-form-field').filter({ hasText: 'Sales Agent Admin User' }).getByRole('button').click();
  //await page.getByRole('combobox', { name: 'Enter agents name' }).fill('Neetha');
  //await page.getByText('Neetha 2').click();
  await page.locator('#mat-input-2').click();
  await page.getByLabel('Next month').click();
  await page.getByLabel('Next month').click();
  await page.getByLabel('January 15,').click();
  await page.locator('#mat-input-4').dblclick();
  await page.locator('#mat-input-4').fill('6');
  await page.getByPlaceholder('Enter a destination...').click();
 

  await page.getByPlaceholder('Enter a destination...').fill('Vancouver');
  await page.getByPlaceholder('Enter a destination...').click();

  await page.keyboard.press('Space');
  //await page.getByPlaceholder('Enter a destination...').click();
  // await page.keyboard.press('Backspace');
   page.getByRole('option', { name: 'Vancouver Island' }).locator('span').first();

  await page.getByRole('button', { name: 'Create' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.goto('https://dev-web.golfsafaris.click/#/dashboard');
  const page1 = await page1Promise;
  await page1.goto('https://dev-web.golfsafaris.click/#/reservations/01d54754a6#new-service');
});
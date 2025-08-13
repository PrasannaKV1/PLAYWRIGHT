import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://newdbthree.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.locator('input[name="userName"]').fill('dbthree05');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Go to My School' }).click();
  await page.getByText('Academic Setup').click();
  await page.getByRole('tab', { name: 'Grades and subject' }).click();
  await page.getByText('Go back Save Changes').click();
});

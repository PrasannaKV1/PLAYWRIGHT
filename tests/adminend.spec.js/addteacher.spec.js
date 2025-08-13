import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fulllicence.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('fulllicense');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByTestId('VisibilityIcon').locator('path').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Go to My School' }).click();
  await page.getByRole('tabpanel', { name: 'School Notice Board' }).click();
  await page.getByRole('tab', { name: 'Private Notice Board' }).click();
  await page.getByRole('button', { name: 'Create notice' }).click();
  await page.getByTestId('content-input').click();
  await page.getByTestId('content-input').fill('dfbdfjfsfdjsd');
  await page.getByTestId('select-button').click();
  await page.getByRole('option', { name: 'General' }).click();
  await page.getByRole('textbox', { name: 'Description*' }).click();
  await page.getByRole('textbox', { name: 'Description*' }).fill('sdsdsdsd');
  await page.getByRole('radio', { name: 'Publish right now' }).check();
  await page.getByRole('button', { name: 'Send' }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fulllicence.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('fulllicense');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByText('Hello AdminPlease login to').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Users' }).click();
  await page.getByRole('row', { name: 'Tr Marina Mendes' }).getByLabel('Delete Teacher').click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('button', { name: 'Go to page' }).click();
  await page.getByRole('row', { name: 'Primary Tr primarytr' }).getByLabel('Delete Teacher').click();
  await page.getByText('The user will be permanently').click();
  await page.getByRole('button', { name: 'Delete account' }).click();
});
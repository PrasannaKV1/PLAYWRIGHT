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
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Users' }).click();
  await page.getByLabel('Add teacher(s)').click();
  await page.getByRole('textbox', { name: 'Full Name*' }).click();
  function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Usage in Playwright
const randomStr = generateRandomString(8);

  await page.getByRole('textbox', { name: 'Full Name*' }).fill('#name', randomStr);
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill('prasannakv@gmail.com');
  await page.locator('div').filter({ hasText: /^Date of Birth\*$/ }).getByLabel('Choose date').click();
  await page.getByRole('button', { name: 'Aug 12,' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Contact Number*' }).click();
  await page.getByRole('textbox', { name: 'Contact Number*' }).fill('87374878343');
  await page.getByRole('textbox', { name: 'Address Line 1*' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Address Line 1*' }).click({
    button: 'right'
  });
  await page.getByRole('textbox', { name: 'Address Line 1*' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1*' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1*' }).fill('sdhshdd');
  await page.getByRole('textbox', { name: 'Pincode*' }).click();
  await page.getByRole('textbox', { name: 'Pincode*' }).fill('577589');
 // await page.getByTestId('bi-submit-click').click();
// After clicking "Continue", wait for Academic Details tab to load
await page.getByRole('button', { name: 'Continue' }).click();

// Now wait for combobox to appear
const deptCombo = page.getByRole('combobox', { name: /Department/i });
await deptCombo.waitFor({ state: 'visible', timeout: 60000 });
await deptCombo.click();

 //await page.getByRole('combobox', { name: 'Department* ShowingAll' }).click();
  await page.getByRole('option', { name: 'Mathematics' }).click();
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'English' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root.MuiBackdrop-invisible').click();
  await page.getByText('Continue').click();
  await page.getByTestId('gradeSelect').getByLabel('').click();
  await page.getByRole('option', { name: 'Grade 6' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root.MuiBackdrop-invisible').click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('menuitem', { name: 'Select All' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root.MuiBackdrop-invisible').click();
  await page.getByText('Grade Selection *Select').click();
  await page.getByRole('button', { name: 'Continue' }).click();
});
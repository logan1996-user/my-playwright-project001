import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://www.dominos.co.in/');
    await page.getByRole('button', { name: 'ORDER ONLINE NOW' }).click();
    await page.getByText('Skip').click();
    await page.waitForURL('**/66627');
  });
});

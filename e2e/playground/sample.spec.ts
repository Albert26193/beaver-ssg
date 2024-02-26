import { test, expect } from '@playwright/test';

const siteUrl = 'http://localhost:5173';

test('Verify that the page renders properly', async ({ page }) => {
  await page.goto(siteUrl);
  await page.waitForSelector('.beaver-doc', { timeout: 5000 });

  const res = await page.evaluate(async () => {
    const pageContent = document.body.innerText;
    console.log(pageContent);
    return pageContent.includes('beaver');
  });
  expect(res).toBe(true);
});

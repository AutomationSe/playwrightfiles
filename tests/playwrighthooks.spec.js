const { test, expect } = require('@playwright/test');

test.only('Home Page Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click('(//button[normalize-space()="Log in"])[1]');

    // Homepage - wait for products to load
    await expect(page.locator('.hrefch')).toHaveCount(9);

    // Logout
    await page.locator('#logout2').click();
});

test('Add product to cart', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    // Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.click('(//button[normalize-space()="Log in"])[1]');

    //Add product to cart
    await page.locator('').click()
    


});

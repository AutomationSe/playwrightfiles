import {expect, test} from "@playwright/test";

test('Locators', async ({page}) =>{
    await page.goto("https://demoblaze.com/");

    //click on login button - property
    await page.locator('id=login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.click("button[onclick='logIn()']");


    //verify logout link presence
    const logoutlink = await page.locator('//a[normalize-space()=\'Log out\']');
    await expect(logoutlink).toBeVisible();
    await page.close();
})

{expect}
{test}
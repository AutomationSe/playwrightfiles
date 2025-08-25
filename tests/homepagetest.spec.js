const {test, expect} = require('@playwright/test')

test('Home Page',async ({page})=> {
    await page.goto('https://demoblaze.com/');
    var pageTitle = await page.title();
    console.log("Page Title is ", pageTitle);
    await expect(page).toHaveTitle('STORE');

    // Correct way to get the URL is using page.url()
    const pageURL = page.url();
    console.log('Page URL is ', pageURL)
    await expect(page).toHaveURL('https://demoblaze.com/')
    await page.close();
})
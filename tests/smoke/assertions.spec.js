const {test, expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    // Navigate to the URL before each test
    await page.goto('https://demo.nopcommerce.com/register');
});

test.skip('capture webTitle', async ({page})=>{
    // The page is already at the correct URL here
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // expect locator.tobevisible
    const  logoelement = await page.locator('.header-logo')
    await expect(logoelement).toBeVisible();

    //Control is enabled and disable
    const searchstorebox = await page.locator('#small-searchterms');
    await expect(searchstorebox).toBeEnabled()

    //radio button checked/not
    const checkbutton = await page.locator('#gender-male');
    await checkbutton.click()
    await expect(checkbutton).toBeChecked()

    //checkbox
    const inputNewsletter = page.locator("xpath=//*[@id='Newsletter']")
    await inputNewsletter.click()
    await expect(inputNewsletter).toBeEnabled()

    //Element has attribute/not
    const buttonRegister = page.locator("#register-button")
    await expect(buttonRegister).toHaveAttribute('type', 'submit')

    //expect(locator).toHaveText()  Element matches text

    await expect(await page.locator('.page title h1')).toHaveText('Register')

    //expect(locator).toContainText()  Element contains text
    await expect(await page.locator('.page title h1')).toContainText('Register')

    //expect(locator).toHaveValue(value) Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //expect(locator).toHaveCount()
    // const datedropdown = await page
});
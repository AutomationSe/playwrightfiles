const {test,expect} = require('@playwright/test');

test('handle radio button', async ({page})=>{
    await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });

    // Locate the Yes radio button
    const yesRadio = page.locator("//input[@id='yesRadio']");

    // Check the radio button
    await yesRadio.check();

    // Assert using Playwright's built-in locator expectations
    await expect(yesRadio).toBeChecked();

    // Alternative way (using boolean):
    const isYesChecked = await yesRadio.isChecked();
    expect(isYesChecked).toBeTruthy();

    // Assert another radio button is not selected (optional)
    const noRadio = page.locator("//input[@id='noRadio']");
    const isNoChecked = await noRadio.isChecked();
    expect(isNoChecked).toBeFalsy();
})
const{test,expect} = require("@playwright/test")

test("autosuggestdropdown", async ({page})=>{
    await page.goto("https://www.redbus.in/");

    // Locate the input inside the "From" field
    const fromInput = page.locator("//input[@id='src']");
    await fromInput.fill("Delhi");

    // Wait for suggestion to appear
    await page.waitForSelector("//li[contains(text(),'ISBT Kashmiri Gate')]");

    // Get all suggestions
    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]");
    for (let option of fromCityOptions) {
        const value = await option.textContent();
        console.log(value);
    }

    await page.waitForTimeout(3000);
})
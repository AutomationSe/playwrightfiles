const {test,expect} = require("@playwright/test")

test("Multipleselectdropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.selectOption('#colors', ['Blue','Red','Yellow'])

    //assertions
    const options = await page.locator('#colors option')
    await expect(options).toHaveCount(7)

    const sample_options = await page.$$('#colors option')
    console.log("Number of options: ", sample_options.length)
    await expect(sample_options.length).toBe(7);

    await page.waitForTimeout(5000);
})
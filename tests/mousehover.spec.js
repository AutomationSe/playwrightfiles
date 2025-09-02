const {test,expect} = require("@playwright/test")

test("Mouseoveraction", async ({page})=>{
    await page.goto("https://demoqa.com/menu")

    const desktop = await page.locator("(//a[normalize-space()='Main Item 2'])[1]");
    const mac = await page.locator("(//a[@href='#'][normalize-space()='Sub Item'])[2]");

    //mouse hover
    await desktop.hover()
    await mac.hover()

    await page.waitForTimeout(5000)
    await mac.click()

})
const {test,expect} = require("@playwright/test");
const {isContext} = require("node:vm");

test('checkbox handle',async ({page})=>{
    // const checkbox = await
    await page.goto("https://testautomationpractice.blogspot.com/")
    //single checkbox
    await page.locator("//input[@type=\"checkbox\" and @id=\"sunday\"]").check()
    /*expect(await page.locator("//input[@type=\"checkbox\" and @id=\"sunday\"]")).toBeChecked()
    expect(await page.locator("//input[@type=\"checkbox\" and @id=\"sunday\"]").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@type=\"checkbox\" and @id=\"monday\"]").isChecked()).toBeFalsy();*/

    //multiple checkboxes
    const  checkboxlocaters = [
        "//input[@type=\"checkbox\" and @id=\"sunday\"]",
        "//input[@type=\"checkbox\" and @id=\"monday\"]",
        "//input[@type=\"checkbox\" and @id=\"tuesday\"]"
    ]

    for (const locater of checkboxlocaters){
        await page.locator(locater).check(); // select multiple checkboxes
    }
    await page.waitForTimeout(5000);
    for (const locater of checkboxlocaters){
        if (await page.locator(locater).isChecked());
            {
                await page.locator(locater).uncheck(); // select multiple checkboxes
            }
        }

    await page.waitForTimeout(5000);

})


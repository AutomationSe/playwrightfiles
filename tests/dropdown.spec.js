const {test,expect} = require("@playwright/test")
const {debuglog} = require("node:util");

test("Dropdown", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const countryDropdown = page.locator("#country");

    // Scroll into view
    await countryDropdown.scrollIntoViewIfNeeded();

    // Select by label
    // await countryDropdown.selectOption({ label: "India" });
    // await countryDropdown.selectOption("India");
    // await page.locator("#country").selectOption({value: 'uk'});
    // await page.locator("#country").selectOption({index: 1})
    // await page.selectOption("#country",'India')

    //Assertions in dropdown
    //check no of options in dropdrown - Approach 1
/*  const options = await page.locator('#country option')
    await expect(options).toHaveCount(10);*/

    //approach 2
    //Check number of options in dropdown
    /*  const appro_options = await page.$$('#country option')
        console.log("Number of options: ", appro_options.length)
        await expect(appro_options.length).toBe(10);*/

    //approach 3
/*    const content = await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy();*/

    const options = await page.$$('#country option')
    let status = false;
    for (const option of options){
        // console.log(await option.textContent())
        let value = await option.textContent();
        if (value.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    await page.waitForTimeout(3000);
})
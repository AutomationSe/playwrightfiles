const {test,expect} = require('@playwright/test')

test("transcriptkeyboard", async ({page})=>{
    await page.goto("https://gotranscript.com/text-compare");

    // await page.locator('name="text1"').fill("Welcome to Automation");
    await page.type("(//textarea[@placeholder='Paste one version of the text here.'])[1]", 'Welcome to Automation');

    //Ctrl A
    await page.keyboard.press('Control+A')
    //Ctrl C
    await page.keyboard.press('Control+C')
    //Tab
    await page.keyboard.press('Tab')
    //Ctrl V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);
})
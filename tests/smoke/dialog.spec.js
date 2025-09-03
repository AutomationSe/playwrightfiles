const{test,expect} = require("@playwright/test");

test.skip("Alert with OK", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //enabling alert handling //Dialog window handler
    await page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click('//button[@id="alertBtn"]');
})

test.skip("confirmation dialog with ok", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //enabling alert handling //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        // await dialog.accept();
        // await dialog.dismiss(); //close by using cancel
        await dialog.accept(); //click accept
    })

    await page.click('//button[@id=\'confirmBtn\']');
    await expect(page.locator("(//p[@id='demo'])[1]")).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
})

test("prompt dialog", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //enabling alert handling //Dialog window handler
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('senel');
    })

    await page.click('//button[@id=\'promptBtn\']');
    await expect(page.locator("(//p[@id='demo'])[1]")).toHaveText('Hello senel! How are you today?');
    await page.waitForTimeout(5000);
})
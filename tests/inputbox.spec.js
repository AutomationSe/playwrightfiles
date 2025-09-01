const {test,expect} =  require('@playwright/test')

test('handle inputbox',async ({page})=>{
    await page.goto("https://demoqa.com/text-box");
    //inputbox
    //name
    await page.fill("//input[@id='userName']", "John");
    await page.locator("//input[@id='userEmail']").fill("john@gmail.com")
    //textarea
    const currentAddress = page.locator("//textarea[@id='currentAddress']");
    await expect(currentAddress).toBeVisible();
    await expect(currentAddress).toBeEmpty();
    await expect(currentAddress).toBeEditable();
    await currentAddress.fill("no:16, battaramulla road, ethulkotte, kotte");

    const peraddress = page.locator("//textarea[@id='permanentAddress']");
    await expect(peraddress).toBeVisible();
    await expect(peraddress).toBeEmpty();
    await expect(peraddress).toBeEditable();
    await peraddress.fill("no:16, battaramulla road, ethulkotte, kotte");
    await page.waitForTimeout(5000);

    const submitbutton = page.locator("//button[@id='submit']");
    await submitbutton.click()
})
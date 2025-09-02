const {test,expect} = require('@playwright/test')

test("Date Picker", async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.fill('#datepicker', '03/15/2024')
    //handledate.spec.js
    //date picker element
    const year = "2024"
    const month = "March"
    const date = "20"
    //Using while loop until we get the expected date
    //ui-datepicker-month
    //ui-datepicker-year
    await page.click('#datepicker')
    while (true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear == year && currentMonth == month){
            break;
        }
        await page.locator('[title ="Prev"]').click()
    }

/*    const dates = await page.$$("//a[@class='ui-state-default']")
    for (const dt of dates){
        if (await dt.textContent()==date){
            await dt.click();
            break;
        }
    }*/

    //date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);

})

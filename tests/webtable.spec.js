const{test,expect} = require("@playwright/test")
/*const {machine} = require("node:os");
const {match} = require("node:assert");*/

test("webtable", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator('#productTable')
    // total number of rows & columns
    const coloumns = await table.locator('thead tr th')
    console.log('Number of coloumns: ', await coloumns.count());
    expect(await coloumns.count()).toBe(4);

    const rows= await table.locator('tbody tr')
    console.log('Number of rows: ', await rows.count())
    expect(await rows.count()).toBe(5)

/*    const matchedrow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    matchedrow.locator('input').check()*/

    //Select Multiple products by re-usable function
    await selectproduct(rows,page,'Product 1')
    await selectproduct(rows,page,'Product 3')
    await selectproduct(rows,page,'Product 5')

    await page.waitForTimeout(5000);

})

async function selectproduct(rows, page, name) {
    const matchedrow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })
    await matchedrow.locator('input').check()
}
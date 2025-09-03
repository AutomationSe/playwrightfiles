const {test,expect} = require('@playwright/test')

test('Drag and Drop', async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const dragbox = await page.locator('(//div[@id=\'draggable\'])[1]')
        const dropbox = await page.locator('(//div[@id=\'droppable\'])[1]')

/*
        //approach 1
        await dragbox.hover();
        await page.mouse.down();

        await dropbox.hover();
        await page.mouse.up();
*/
        //approach 2
        await dragbox.dragTo(dropbox)
        await page.waitForTimeout(5000);
})
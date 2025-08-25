import {request} from "@playwright/test";

const {test,expected} = request

test('Built-inlocaters', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})
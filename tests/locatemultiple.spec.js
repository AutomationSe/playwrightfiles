const {test,expect} = require('@playwright/test');


test('locatemultipleelements',async ({page}) =>{
   await page.goto("https://demoblaze.com/")
    // const links = await page.$$('a');

/*   for (const link of links){
       const linktext = await  link.textContent();
       console.log(linktext);
   }*/

   const allproducts = await page.$$("//div[@id='tbodyid']//h4/a")
    for (const product of allproducts){
        const productName = await product.textContent();
        console.log(productName)
    }
})
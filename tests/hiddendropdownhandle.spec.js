const { test, expect } = require("@playwright/test");

test("hiddendropdownhandle", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("(//input[@placeholder='Username'])[1]").fill("Admin");
    await page.locator("(//input[@placeholder='Password'])[1]").fill("admin123");
    await page.locator("(//button[normalize-space()='Login'])[1]").click();

    await page.waitForTimeout(3000);

    await page.locator("(//span[normalize-space()='PIM'])[1]").click();
    await expect(page.locator("(//h5[normalize-space()='Employee Information'])[1]")).toHaveText("Employee Information");

    // Click dropdown
    const clickdropdown = page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[2]");
    await clickdropdown.click();
    await page.waitForTimeout(2000);
    // Wait for dropdown options to appear
    const options = await page.locator("div[role='option']").all(); // <-- correct selector for options
    for (let option of options) {
        const jobTitle = await option.textContent();
        // console.log(jobTitle.trim());
        if (jobTitle.includes('QA Lead')){
            await option.click();
            break
        }
    }
    await page.waitForTimeout(5000);
});

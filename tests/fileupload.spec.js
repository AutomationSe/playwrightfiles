const { test, expect } = require('@playwright/test');

test('Multiple File Upload', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // Upload files
    await page.locator('#filesToUpload')
        .setInputFiles(['tests/uploadfiles/Nixsala_Resume.pdf','tests/uploadfiles/Nixsala_Resume 1.pdf']);

    await page.waitForTimeout(3000);

    // Check uploaded files list
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('Nixsala_Resume.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('Nixsala_Resume 1.pdf');

    await page.waitForTimeout(3000);

    // Remove files
    await page.locator('#filesToUpload').setInputFiles([]);
    await page.waitForTimeout(3000);

    // Verify "No Files Selected"
    await expect(page.locator('ul#fileList li')).toHaveText('No Files Selected');

    await page.waitForTimeout(5000);
});

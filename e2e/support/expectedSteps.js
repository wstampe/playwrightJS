const { test, expect, toBeVisible } = require('@playwright/test');
const {elementHelper} = require("../support/elementHelper");
const {dataStore} = require("../support/dataStore");
const {pageElements} = require("../support/pageElements");

let expectedSteps = {


    /* -- checkOnCorrectPageURL -- ====================================================================================================== */

    checkOnCorrectPageURL: async function checkOnCorrectPageURL(currentPage,page) {
        await test.step('Verify you are on Correct Page Url - : [' + currentPage + ']', async () => {
            dataStore.setCurrentPage(currentPage);
            let expectedURL = pageElements.getApplicationPage('page', currentPage)
            await expect(async () => {
                let actualURL = page.url()
                await expect(expectedURL).toEqual(actualURL)
            }).toPass({
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

    /* ================================================================================================================================ */

    /* -- checkElementIsVisible -- ==================================================================================================== */

    checkElementIsVisible: async function checkElementIsVisible(currentElement, page) {
        await test.step('Check Element Is Visible - : [' + currentElement + ']', async () => {
            let strCSS = elementHelper.getElementCSS(currentElement)
            await expect(async () => {
                await expect(page.locator(strCSS)).toBeVisible();
            }).toPass({
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

    /* ================================================================================================================================ */

    /* -- checkTextInElement -- ======================================================================================================= */

    checkTextInElement: async function checkTextInElement(currentElement, strTxt, page) {
        await test.step('Verify Text is correct in element - : [' + currentElement + '(' + strTxt + ')' + ']', async () => {
            let strCSS = elementHelper.getElementCSS(currentElement)
            await expect(async () => {
                await expect(page.locator(strCSS)).toBeVisible();
                const strActualText = await page.locator(strCSS).textContent()
                expect(strTxt).toEqual(strActualText)
            }).toPass({
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
    },
    /* ================================================================================================================================ */

    /* -- checkTextInNthElement -- ==================================================================================================== */

    checkTextInNthElement: async function checkTextInNthElement(currentElement, strTxt, strIndex, page) {
        await test.step('Verify Text is correct in nth element - : [' + currentElement + '(' + strIndex + ') - ' + '(' + strTxt + ')' + ']', async () => {
            const indexStr = pageElements.convertTextToIndex(strIndex)
            let strCSS = elementHelper.getElementCSS(currentElement)
            await expect(async () => {
                await expect(await page.locator(strCSS).locator('nth=' + indexStr)).toBeVisible()
                const strActualText = await page.locator(strCSS).locator('nth=' + indexStr).textContent()
                expect(strTxt).toEqual(strActualText)
            }).toPass({
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
    }
    /* ================================================================================================================================ */
};

module.exports = {expectedSteps};

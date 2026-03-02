const { test, expect, toBeVisible } = require('@playwright/test');
const {elementHelper} = require("../support/elementHelper");
const {dataStore} = require("../support/dataStore");
const {pageElements} = require("../support/pageElements");

let expectedSteps = {

/* ============================================================================================================
name : checkOnCorrectPageURL
desc : Verify you are on Correct URL based on the currentPage param
=============================================================================================================== */

    checkOnCorrectPageURL: async function checkOnCorrectPageURL(currentPage,page) {
        await test.step('Verify you are on Correct Page Url - : [' + currentPage + ']', async () => {

            // Set the current page you are on
            dataStore.setCurrentPage(currentPage);
            // Retrieve URL from the page.json
            let expectedURL = pageElements.getApplicationPage('page', currentPage)

            // Try and Retry Block
            await expect(async () => {
            // Get actual URL and Compare it with the expected one based on the currentPage
                let actualURL = page.url()
                await expect(expectedURL).toEqual(actualURL)
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

/* ============================================================================================================
name : checkElementIsVisible
desc : check that the element is visible based on currentElement param.
=============================================================================================================== */
    checkElementIsVisible: async function checkElementIsVisible(currentElement, page) {
        await test.step('Check Element Is Visible - : [' + currentElement + ']', async () => {

            // Get selector for Current Element
            let strCSS = elementHelper.getElementCSS(currentElement)

            // Try and Retry Block
            await expect(async () => {
                await expect(page.locator(strCSS)).toBeVisible();
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

/* ============================================================================================================
name : checkTextInElement
desc : check that the element has the correct text content based on currentElement param.
=============================================================================================================== */
    checkTextInElement: async function checkTextInElement(currentElement, strTxt, page) {
        await test.step('Verify Text is correct in element - : [' + currentElement + '(' + strTxt + ')' + ']', async () => {
            // Get selector for Current Element

            let strCSS = elementHelper.getElementCSS(currentElement)
            // Try and Retry Block
            await expect(async () => {
                // Verify the element is accessible
                await expect(page.locator(strCSS)).toBeVisible();

                // Get actual element text and Compare it with the expected text.
                const strActualText = await page.locator(strCSS).textContent()
                expect(strTxt).toEqual(strActualText)
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
    },

/* ============================================================================================================
name : checkTextInNthElement
desc : check that the element has the correct text content based on currentElement param.
=============================================================================================================== */
    checkTextInNthElement: async function checkTextInNthElement(currentElement, strTxt, strIndex, page) {
        await test.step('Verify Text is correct in nth element - : [' + currentElement + '(' + strIndex + ') - ' + '(' + strTxt + ')' + ']', async () => {

            // Get integer index based on string (ie. 'first' => 0)
            const indexStr = pageElements.convertTextToIndex(strIndex)
            // Get selector for Current Element
            let strCSS = elementHelper.getElementCSS(currentElement)
            // Try and Retry Block
            await expect(async () => {
                // Verify the nth element is accessible
                await expect(await page.locator(strCSS).locator('nth=' + indexStr)).toBeVisible()
                // Get actual nth element text and Compare it with the expected text.
                const strActualText = await page.locator(strCSS).locator('nth=' + indexStr).textContent()
                expect(strTxt).toEqual(strActualText)
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
    }
};

module.exports = {expectedSteps};

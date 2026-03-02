const {test, expect, toBeVisible} = require('@playwright/test');
const {elementHelper} = require("../support/elementHelper");
const {dataStore} = require("../support/dataStore");
const {pageElements} = require("../support/pageElements");

let actionSteps = {


/* ============================================================================================================
name : navigateToURL
desc : navigate to URL based on the currentPage param
=============================================================================================================== */
    navigateToURL: async function navigateToURL(currentPage, page) {
        await test.step('Navigate To URL - : [' + currentPage + ']', async () => {
            // Set the current page you are on
            dataStore.setCurrentPage(currentPage);
            // Retrieve URL from the page.json
            let expectedURL = pageElements.getApplicationPage('page', currentPage);

            // Vefiry network traffic
            // page.on('request', request => console.log('\x1b[36m >> requeste: >> \x1b[0m', request.method(), request.url()));
            // page.on('response', response => console.log('\x1b[31m >> response: >> \x1b[0m', response.status(), response.url()));

            // Navigate to the URL
            await page.goto(expectedURL);
        });
        return 0
    },

/* ============================================================================================================
name : clickElement
desc : click on the element based on currentElement param.
=============================================================================================================== */
    clickElement: async function clickElement(currentElement, page) {
        await test.step('Click Element - : [' + currentElement + ']', async () => {
            // Try and Retry Block
            await expect(async () => {
                // Get selector for Current Element
                let strCSS = elementHelper.getElementCSS(currentElement);
                // Verify element is accessible
                await expect(page.locator(strCSS)).toBeVisible();
                // Click on the element
                await page.locator(strCSS).click();
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

/* ============================================================================================================
name : clickNthElement
desc : click on the nthe element based on currentElement and index params.
=============================================================================================================== */

    clickNthElement: async function clickNthElement(currentElement, strIndex, page) {
        await test.step('Click Nth Element - : [' + currentElement + '(' + strIndex + ')' + ']', async () => {
            // Get integer index based on string (ie. 'first' => 0)
            const indexStr = pageElements.convertTextToIndex(strIndex)
            // Get selector for Current Element
            let strCSS = elementHelper.getElementCSS(currentElement)
            // Try and Retry Block
            await expect(async () => {
                // Verify the nth element is accessible
                await expect(await page.locator(strCSS).locator('nth=' + indexStr)).toBeVisible()
                // Click on the nth element
                await page.locator(strCSS).locator('nth=' + indexStr).click();
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

/* ============================================================================================================
name : fillElement
desc : fill the text inside element based on currentElement and text params.
=============================================================================================================== */
    fillElement: async function fillElement(currentElement, strTxt, page) {
        await test.step('Fill Element - : [' + currentElement + '(' + strTxt + ')' + ']', async () => {
            // Get selector for Current Element
            let strCSS = elementHelper.getElementCSS(currentElement)

            // Try and Retry Block
            await expect(async () => {
                // Verify the element is accessible
                await expect(page.locator(strCSS)).toBeVisible();
                // Fill the text in the element
                await page.locator(strCSS).fill(strTxt);
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    },

/* ============================================================================================================
name : clearElement
desc : fill the text inside element based on currentElement and text params.
=============================================================================================================== */
    clearElement: async function clearElement(currentElement, page) {
        await test.step('Clear Element - : [' + currentElement + ']', async () => {
            // Get selector for Current Element
            let strCSS = elementHelper.getElementCSS(currentElement)

            // Try and Retry Block
            await expect(async () => {
                // Verify the element is accessible
                await expect(page.locator(strCSS)).toBeVisible();
                // Fill the text in the element with a blank string
                await page.locator(strCSS).fill('');
            }).toPass({
                // Set intervals for 3 retries
                intervals: [1_000, 2_000, 5_000],
                timeout: 20_000
            });
        });
        return 0
    }
};

module.exports = {actionSteps};


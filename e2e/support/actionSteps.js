const { test, expect, toBeVisible } = require('@playwright/test');

const {elementHelper} = require("../support/elementHelper");

const {dataStore} = require("../support/dataStore");

const {pageElements} = require("../support/pageElements");



let actionSteps = {



    /* -- navigateToURL -- ============================================================================================================ */

    navigateToURL: async function navigateToURL(currentPage, page) {

        await test.step('Navigate To URL - : [' + currentPage + ']', async () => {

            dataStore.setCurrentPage(currentPage);

            let expectedURL = pageElements.getApplicationPage('page', currentPage);

            // page.on('request', request => console.log('\x1b[36m >> requeste: >> \x1b[0m', request.method(), request.url()));

            // page.on('response', response => console.log('\x1b[31m >> response: >> \x1b[0m', response.status(), response.url()));

            await page.goto(expectedURL);

        });

        return 0

    },

    /* ================================================================================================================================ */



    /* -- clickElement -- ============================================================================================================ */

    clickElement: async function clickElement(currentElement, page) {

        await test.step('Click Element - : [' + currentElement + ']', async () => {

            await expect(async () => {

                let strCSS = elementHelper.getElementCSS(currentElement);

                await expect(page.locator(strCSS)).toBeVisible();

                await page.locator(strCSS).click();

            }).toPass({

                intervals: [1_000, 2_000, 5_000],

                timeout: 20_000

            });

        });

        return 0

    },

    /* ================================================================================================================================ */



    /* -- clickNthElement -- ============================================================================================================ */

    clickNthElement: async function clickNthElement(currentElement, strIndex, page) {

        await test.step('Click Nth Element - : [' + currentElement + '(' + strIndex + ')' + ']', async () => {

            const indexStr = pageElements.convertTextToIndex(strIndex)

            let strCSS = elementHelper.getElementCSS(currentElement)

            await expect(async () => {

                await expect(await page.locator(strCSS).locator('nth=' + indexStr)).toBeVisible()

                await page.locator(strCSS).locator('nth=' + indexStr).click();

            }).toPass({

                intervals: [1_000, 2_000, 5_000],

                timeout: 20_000

            });

        });

        return 0

    },

    /* ================================================================================================================================ */



    /* -- fillElement -- ============================================================================================================= */

    fillElement: async function fillElement(currentElement, strTxt, page) {

        await test.step('Fill Element - : [' + currentElement + '(' + strTxt + ')' + ']', async () => {

            let strCSS = elementHelper.getElementCSS(currentElement)

            await expect(async () => {

                await expect(page.locator(strCSS)).toBeVisible();

                await page.locator(strCSS).fill(strTxt);

            }).toPass({

                intervals: [1_000, 2_000, 5_000],

                timeout: 20_000

            });

        });

        return 0

    },

    /* ================================================================================================================================ */



    /* -- clearElement -- ============================================================================================================= */

    clearElement: async function clearElement(currentElement,page) {

        await test.step('Clear Element - : [' + currentElement + ']', async () => {

            let strCSS = elementHelper.getElementCSS(currentElement)

            await expect(async () => {

                await expect(page.locator(strCSS)).toBeVisible();

                await page.locator(strCSS).fill('');

            }).toPass({

                intervals: [1_000, 2_000, 5_000],

                timeout: 20_000

            });

        });

        return 0

    }

};

/* ================================================================================================================================ */



module.exports = {actionSteps};


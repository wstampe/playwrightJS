const {test, expect, toBeVisible} = require('@playwright/test');
const {elementHelper} = require("../../support/elementHelper");
const {dataStore} = require("../../support/dataStore");
const {actionSteps} = require("../../support/actionSteps");
const {expectedSteps} = require("../../support/expectedSteps");
const {pageElements} = require("../../support/pageElements");
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");

test.beforeEach(async ({}, testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async ({}, testInfo) => {
    hooksHelper.afterHook(testInfo);
})

test.describe(' Two Tests', () => {
    /* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */
    /* Name: Check the Products in the Inventory Page
    /* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */

    test('Check the Products in the Inventory Page', {tag: ['@smoke', '@inventory', '@login']}, async ({page}) => {
        await actionSteps.navigateToURL(process.env.ENTRY_PAGE, page);
        await expectedSteps.checkOnCorrectPageURL(process.env.ENTRY_PAGE, page);
        await actionSteps.fillElement('username', 'standard_user', page)
        await actionSteps.fillElement('password', 'secret_sauce', page)
        await actionSteps.clickElement('login', page)
        await expectedSteps.checkOnCorrectPageURL('saucedemo_inventory', page);
        await expectedSteps.checkElementIsVisible('inventory heading', page)
        await expectedSteps.checkTextInElement('inventory heading', 'Swag Labs', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Backpack', 'first', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Bike Light', 'second', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Bolt T-Shirt', 'third', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Fleece Jacket', 'fourth', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Onesie', 'fifth', page)
        await actionSteps.clickNthElement('inventory item name', 'fourth', page)
        await expectedSteps.checkTextInNthElement('inventory item name', 'Sauce Labs Fleece Jacket', 'first', page)
        await expectedSteps.checkTextInElement('back to products', 'Back to products', page)
    });

    /* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */
    /* Name: Add product to cart and checkout
    /* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */
    test('Add product to cart and checkout', {tag: ['@cart']}, async ({page}) => {        await actionSteps.navigateToURL(process.env.ENTRY_PAGE, page);
        await expectedSteps.checkOnCorrectPageURL(process.env.ENTRY_PAGE, page);

        await actionSteps.fillElement('username', 'standard_user', page)
        await actionSteps.fillElement('password', 'secret_sauce', page)
        await actionSteps.clickElement('login', page)

        await expectedSteps.checkOnCorrectPageURL('saucedemo_inventory', page);
        await actionSteps.clickElement('add to cart sauce labs bike light', page)
        await actionSteps.clickElement('shopping cart link', page)

        await expectedSteps.checkOnCorrectPageURL('your_cart', page);

        await actionSteps.clickElement('checkout button', page)
    });
});


/* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */
/* Name: Purchase a full product
/* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */

test('Purchase a full product', {tag: ['@cart', '@single']}, async ({page}) => {


    await actionSteps.navigateToURL(process.env.ENTRY_PAGE, page);
    await expectedSteps.checkOnCorrectPageURL(process.env.ENTRY_PAGE, page);
    await actionSteps.fillElement('username', 'standard_user', page)
    await actionSteps.fillElement('password', 'secret_sauce', page)
    await actionSteps.clickElement('login', page)

    await expectedSteps.checkOnCorrectPageURL('saucedemo_inventory', page);

    await actionSteps.clickElement('add to cart sauce labs bike light', page)
    await actionSteps.clickElement('shopping cart link', page)

    await expectedSteps.checkOnCorrectPageURL('your_cart', page);
    await actionSteps.clickElement('checkout button', page)
    await expectedSteps.checkOnCorrectPageURL('checkout_page', page);

    await expectedSteps.checkTextInElement("title", "Checkout: Your Information", page)
    await actionSteps.fillElement('first name', 'joe', page)
    await actionSteps.fillElement('last name', 'blow', page)
    await actionSteps.fillElement('post code', '3000', page)

    await actionSteps.clickElement('continue button', page)
    await expectedSteps.checkTextInElement("title", "Checkout: Overview", page)
    await actionSteps.clickElement('finish button', page)

    await expectedSteps.checkTextInElement("complete header", "Thank you for your order!", page)
    await page.waitForTimeout(4000);

});

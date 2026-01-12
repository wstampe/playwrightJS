const { test, expect, toBeVisible } = require('@playwright/test');
const {elementHelper} = require("../../support/elementHelper");
const {dataStore} = require("../../support/dataStore");
const {actionSteps} = require("../../support/actionSteps");
const {expectedSteps} = require("../../support/expectedSteps");
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");
const {testData} = require("../../support/testData");
// const {dotenv} = require('dotenv')

test.beforeEach(async({ },testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async({ },testInfo) => {
    hooksHelper.afterHook(testInfo);
})

/* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */
/* Name: Enter an Incorrect Password
/* =.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=. */

test('Enter an Incorrect Password', { tag: ['@login', '@smoke' ] },async ({ page }, testInfo ) => {
    await actionSteps.navigateToURL(process.env.ENTRY_PAGE, page);
    await expectedSteps.checkOnCorrectPageURL(process.env.ENTRY_PAGE, page);

    await actionSteps.fillElement('username','standard_user', page)
    await actionSteps.fillElement('password','error_pw', page)
    await actionSteps.clickElement('login', page)
    await expectedSteps.checkElementIsVisible('error button', page)
    await expectedSteps.checkTextInElement('error heading','Epic sadface: Username and password do not match any user in this service', page)
});

test('Enter different usernames', { tag: ['@login', '@smoke', '@jdata' ] },async ({ page }, testInfo ) => {
    let dataJson = testData.returnTestData(testInfo.title);
    console.log(process.env.LOG_LEVEL_EXT);
    await actionSteps.navigateToURL(process.env.ENTRY_PAGE, page);

    let scr = await page.locator('.login_logo').screenshot();
    await testInfo.attach('screenshot', { body: scr, contentType: 'image/png' });
    await expectedSteps.checkOnCorrectPageURL(process.env.ENTRY_PAGE, page);
    scr = await page.locator('.submit-button.btn_action').screenshot();
    await testInfo.attach('screenshot', { body: scr, contentType: 'image/png' });


//    for (const jData of dataJson.loginData){
//        await console.log(jData.user + ': ' + jData.password + ': ' + jData.message)
//        await actionSteps.fillElement('username',jData.user, page)
//        await actionSteps.fillElement('password',jData.password, page)
//        await actionSteps.clickElement('login', page)
//        await expectedSteps.checkElementIsVisible('error button', page)
//        await expectedSteps.checkTextInElement('error heading',jData.message, page)
//        await actionSteps.clearElement('username',page)
//        await actionSteps.clearElement('password',page)

//    }
});

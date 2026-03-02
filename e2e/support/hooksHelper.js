let hooksHelper = {

/* ============================================================================================================
name : beforeHook
desc : Run function that is used by hooks (ie this is run BEFORE each test)
=============================================================================================================== */
    beforeHook: async function beforeHook(testInfo) {
        // Colour format for test header.
        await console.log("\x1b[32m[-START]\x1b[32m" + "\x1b[33m = - = - = - = - = " + testInfo.title + ": = - = - = - = - =  \x1b[0m")
        return 0
    },

/* ============================================================================================================
name : afterHook
desc : Run function that is used by hooks (ie this is run AFTER each test)
=============================================================================================================== */
    afterHook: async function afterHook(testInfo) {
        // Colour format for test header based of run status [Red = Fail, Green=Pass)
        if(testInfo.status == 'passed') {
            await console.log("\x1b[32m[" + testInfo.status.toUpperCase() + "]\x1b[32m" + "\x1b[33m = - = - = - = - = " + testInfo.title + ": = - = - = - = - =  \x1b[0m");
        } else {
            await console.log("\x1b[31m[" + testInfo.status.toUpperCase() + "]\x1b[32m" + "\x1b[33m = - = - = - = - = " + testInfo.title + ": = - = - = - = - =  \x1b[0m");
        }
        return 0
    }
};

module.exports = {hooksHelper};

//test.beforeAll(async() => {
//test.afterAll(async() => {
//test.beforeEach(async({ },testInfo) => {
//test.afterEach(async({ },testInfo) => {

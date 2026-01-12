let hooksHelper = {

    /* -- beforeHook -- ==================================================================================================== */

    beforeHook: async function beforeHook(testInfo) {

        await console.log("\x1b[32m[-START]\x1b[32m" + "\x1b[33m = - = - = - = - = " + testInfo.title + ": = - = - = - = - =  \x1b[0m")

        return 0

    },



    /* -- afterHook -- ==================================================================================================== */

    afterHook: async function afterHook(testInfo) {

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

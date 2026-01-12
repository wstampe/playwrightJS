const { test, expect, toBeVisible } = require('@playwright/test');
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");

test.beforeEach(async({ },testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async({ },testInfo) => {
    hooksHelper.afterHook(testInfo);
})

test('API POST request', async({request}) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Raghav",
            "job": "teacher"
        }
    })

    let jsonBody = (await response.json())
    expect(response.status()).toBe(201)
    expect(jsonBody.name).toBe('Raghav');
});

test('API Demo', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
});
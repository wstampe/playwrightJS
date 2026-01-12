const {test, expect, toBeVisible} = require('@playwright/test');
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");

test.beforeEach(async ({}, testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async ({}, testInfo) => {
    hooksHelper.afterHook(testInfo);
})


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
test('Names 503 Error', async ({request}) => {
    const response = await request.get("http://localhost:4545/names_error");
    let jsonBody = (await response.json())
    expect(response.status()).toBe(503)
    expect(jsonBody.message).toBe('names_503_reponse');
});

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('Dummy', async ({request}) => {
    const response = await request.get("http://localhost:4545/dummy");
    let jsonBody = (await response.json())
    expect(response.status()).toBe(200)
    expect(jsonBody.message).toBe('200 Success Response');
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('Sally names', async ({request}) => {
    const response = await request.post("http://localhost:4545/names_mapper", {
        data: {"name": "sally"},
        headers: {
            'Accept': 'application/json'
        }
    });
    let jsonBody = (await response.json())
    expect(response.status()).toBe(200);
    expect(jsonBody).toEqual(
        {
            "name": "sally",
            "age": "35"
        });
    expect(jsonBody.name).toBe("sally");
    expect(jsonBody.age).toBe("35");
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('Warren Names', async ({request}) => {
    const response = await request.post("http://localhost:4545/names_mapper", {
        data: {"name": "warren"},
        headers: {
            'Accept': 'application/json'
        }
    });

    let jsonBody = (await response.json())
    expect(response.status()).toBe(200);
    expect(jsonBody).toEqual(
        {
            "name": "warren",
            "age": "31"
        });
    expect(jsonBody.name).toBe("warren");
    expect(jsonBody.age).toBe("31");
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('400 Names', async ({request}) => {
    const response = await request.post("http://localhost:4545/names_mapper", {
        data: {"name": "names_400_reponse"},
        headers: {
            'Accept': 'application/json'
        }
    });

    let jsonBody = (await response.json())
    expect(response.status()).toBe(400);
    expect(jsonBody).toEqual(
        {
            "message": "names_400_reponse"
        });
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('500 Names', async ({request}) => {
    const response = await request.post("http://localhost:4545/names_mapper", {
        data: {"name": "names_500_reponse"},
        headers: {
            'Accept': 'application/json'
        }
    });

    let jsonBody = (await response.json())
    expect(response.status()).toBe(500);
    expect(jsonBody).toEqual(
        {
            "message": "names_500_reponse"
        });
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

test('PS4', async ({request}) => {
    const response = await request.get("http://localhost:4546/PS4");
    let jsonBody = (await response.json())
    expect(jsonBody).toEqual(
        {
            "message": "Playstation 4!"
        });
    expect(response.status()).toBe(200)
    expect(jsonBody.message).toBe('Playstation 4!');
});


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*





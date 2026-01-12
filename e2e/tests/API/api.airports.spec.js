const { test, expect, toBeVisible } = require('@playwright/test');
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");

test.beforeEach(async({ },testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async({ },testInfo) => {
    hooksHelper.afterHook(testInfo);
})

test('https://jsonplaceholder.typicode.com/posts/1', async({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    let jsonBody = (await response.json())
    expect(response.status()).toBe(200);
    expect(jsonBody).toEqual({
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
});

test('Jsonplaceholder {/posts} : 201 : id should be 101', async({request}) => {
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        },
        headers: {
            'Accept': 'application/json'
        }
    });

    let jsonBody = (await response.json())
    expect(response.status()).toBe(201);
    expect(jsonBody).toEqual(
        {
            "title": "foo",
            "body": "bar",
            "userId": 1,
            "id": 101
        });
    expect(jsonBody.id).toBe(101);
});

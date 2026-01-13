const { test, expect, toBeVisible } = require('@playwright/test');
const {constants} = require("../../support/constants");
const {hooksHelper} = require("../../support/hooksHelper");
test.beforeEach(async({ },testInfo) => {
    hooksHelper.beforeHook(testInfo);
})

test.afterEach(async({ },testInfo) => {
    hooksHelper.afterHook(testInfo);
})


test('Boredapi {/api/activity}: 503 : should return a 503 response', async({request}) => {

    const response = await request.get('https://www.boredapi.com/api/activity', {
        headers: {            'Accept':  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language':  'en-US,en;q=0.9',
            'Connection':  'keep-alive',
            'Referer':  'https://apipheny.io/',
            'Sec-Fetch-Dest':  'document',
            'Sec-Fetch-Mode':  'navigate',
            'Sec-Fetch-Site':  'cross-site',
            'Sec-Fetch-User':  '?1',
            'Upgrade-Insecure-Requests':  '1',
            'User-Agent':  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'sec-ch-ua':  '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
            'sec-ch-ua-mobile':  '?0',
            'sec-ch-ua-platform':  '"macOS"'
        }
    });
    expect(response.status()).toBe(503);
});

test('Agify {?name=giggidy}: 200: giggidy will be 37 years old', async({request}) => {
    const response = await request.get('https://api.agify.io/', { params: {"name": "giggidy"}});
    let jsonBody = (await response.json())
    expect(response.status()).toBe(200);
    expect(jsonBody.count).toBe(6);
    expect(jsonBody.name).toBe('giggidy');
    expect(jsonBody.age).toBe(38);
});

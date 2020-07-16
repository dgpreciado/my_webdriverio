const { percySnapshot } = require('@percy/webdriverio');

describe("Percy test", () => {
    it("screenshot", async ()=>{
        await browser.url('https://www.utep.edu/');
        await percySnapshot(browser, 'test_photo' );
    });
});

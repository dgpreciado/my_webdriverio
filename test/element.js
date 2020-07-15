const { percySnapshot } = require('@percy/webdriverio');

describe("first test",() => {
    it("enters a value", ()=>{
        browser.url("https://www.google.com/");
        browser.maximizeWindow();
        const search = $('[name="q"]');
        search.setValue('selenium');
        browser.keys("\uE007");
        // browser.takeScreenshot();
        // browser.saveScreenshot("C:\\Users\\dgpreciado\\Desktop\\test.png")
        browser.url("https://www.utep.edu/")
        percySnapshot(browser ,"utepSnap");
        // const promise = new Promise((resolve, reject) => {
        //     resolve('success');
        // });
        // promise.then(() => {
        //     percySnapshot(browser ,"googleSnap");
        // }).catch((err) => {
        //     console.log(err);
        // })
    })
});

// describe("Percy test",() => {
//     it("screenshot", ()=>{
//         browser.url('https://www.utep.edu/');
//         percySnapshot(browser, 'test_photo', );
//     });
// });
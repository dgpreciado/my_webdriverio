// const { percySnapshot } = require('@percy/webdriverio');

// describe("Percy test", () => {
//     it("screenshot", async ()=>{
//         await browser.url('https://www.utep.edu/');
//         await percySnapshot(browser, 'test_photo' );
//     });
// });

//run command:  npx wdio run wdio.conf.js 

describe("test 1", () => {
    it("go to www 1", ()=>{
        browser.maximizeWindow
        browser.url('https://www.utep.edu/');
        console.log("test1a");
    });
    it("go to www 2", ()=>{
        browser.maximizeWindow
        browser.url('https://www.utep.edu/');
        console.log("test1b");
    });
});
describe("test 2", () => {
    it("go to my utep 1", ()=>{
        browser.maximizeWindow
        browser.url('https://my.utep.edu/My');
        console.log("test2a");
    });
    it("go to my utep 2", ()=>{
        browser.maximizeWindow
        browser.url('https://my.utep.edu/My');
        console.log("test2b");
    });
});

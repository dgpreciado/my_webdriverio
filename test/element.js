describe("first test",() => {
    it("enters a value", ()=>{
        browser.url("https://www.google.com/");
        const search = $('[name="q"]');
        search.setValue('selenium');
    })
});
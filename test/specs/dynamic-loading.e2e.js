const dynamicLoadingPage = require("../pageobjects/dynamic-loading.page");

describe('Dynamic Loading Page', ()=> {
    it('wait for the hidden element to show', ()=>{

        
            dynamicLoadingPage.open();
            dynamicLoadingPage.startButton.click();
            dynamicLoadingPage.elementLoading.waitForDisplayed({reverse:true});

            expect(dynamicLoadingPage.text.getText()).toEqual("Hello World!");
    });
});
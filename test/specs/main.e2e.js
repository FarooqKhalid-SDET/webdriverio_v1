const internetPage = require("../pageobjects/internet.page")

describe('Main Page', () => {
    it('Verify List Items', ()=>{
        browser.url('/');
        browser.maximizeWindow();
        
        internetPage.getLiText();
        //internetPage.getSpecificElementText(3);
    });

    it("Is Footer Displayed", ()=>{
        console.log(internetPage.pageFooter.isDisplayed());
    })

    it("Does the Header Exist", ()=> {
        console.log(internetPage.pageHeader.isExisting());
    })

    it("Is Footer in viewport?", ()=>{
        console.log(internetPage.pageFooter.isDisplayedInViewport());
    })

    it("Is Header in viewport?", ()=>{
        console.log(internetPage.pageHeader.isDisplayedInViewport());
    })

    it("Is Sub-Header is Enabled?", ()=>{
        console.log(internetPage.subHeading.isEnabled());
    })

    it("Click Element", ()=>{
        internetPage.clickOnLink();
    })
});
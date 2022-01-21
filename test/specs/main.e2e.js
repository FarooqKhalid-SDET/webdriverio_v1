describe('Main Page', () => {
    it('Verify List Items', ()=>{
        browser.url('/');

        const listExamples = $$("ul li");
        console.log(listExamples)
        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});
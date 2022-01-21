const Page = require('./page');

class DynamicLoadingPage extends Page{
    get startButton(){
        return $("#start button");
    }

    get text(){
        return $("#finish h4");
    }

    get elementLoading(){
        return $("#loading");
    }

    open(){
        super.open('/dynamic_loading/1');
    }
}

module.exports = new DynamicLoadingPage();
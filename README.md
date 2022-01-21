# webdriverio_v1

1- Parallel Execution 
Currently I set the max instance of browser to 5 but if you need to execute more tests in paraller you just need to update "maxInstances" of chrome in "wdio.conf.js".

2- Allure Report
Installation:        npm install allure-commandline --save-dev
Get Allure Reports:  allure serve  allure-results --clean -o allure-report
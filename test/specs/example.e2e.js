const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('Should logout and verify logout alert message', () => {
        //const btnLogout = $('a[href="/logout"]')
        //const flashAlert = $('#flash')

        //btnLogout.click();
        SecurePage.btnLogout.click();
        expect(SecurePage.flashAlert).toHaveTextContaining("You logged out of the secure area!");
        //SecurePage.btnLogout.click();
        //expect(SecurePage.flashAlert).toHaveTextContaining("You logged out of the secure area!");
    });
});



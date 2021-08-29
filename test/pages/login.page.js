//login.page.js

const Page = require ('./page');

class LoginPage extends Page{

        //page locators:

        get inputUsername() { return $('#txtUsername') }
        get inputPassword() { return $('#txtPassword') }
        get loginBtn() { return $('#btnLogin') }

        //page actions:  

        async open () {
            await super.open('/')
        }
    
        async login (username,password) {
            await this.inputUsername.setValue(username);
            await this.inputPassword.setValue(password);
            await this.loginBtn.click();
        }
 
    }

module.exports = new LoginPage();
//home.page.js

const Page = require ('./page');

class HomePage extends Page{

        //page locators:

        get dashboardHeader() { return $('div.head > h1') }

        //page actions:  
        
        async isDashboardHeaderExist () {
        //   await this.dashboardHeader.waitForDisplayed({ timeout: 3000 } );
          return await this.dashboardHeader.isDisplayed();  
        }
 
    }

module.exports = new HomePage();

const utils = require('./utils');

const valtekCommands = {
    clickOnAcceptCookies: function(){
        return this.waitForElementVisible('@cookiesButton', 100)
          .click('@cookiesButton')
          .waitForElementNotVisible('@cookiesButton', 100);
    },
    launchHomePage: function(){
        
         this.waitForElementVisible('body', 100);
         if(this.isVisible('@cookiesButton')){
             return this.clickOnAcceptCookies();
         } else{
            return this.clickOnAcceptCookies();
         }
    },

    scrollToElement: function(){
       return this.waitForElementVisible('@recentBlogLocator', 100)
          .getLocationInView('@recentBlogLocator');
    }
 
};

module.exports = {
    commands: [valtekCommands, utils],
    url: function() { 
        return this.api.launchUrl; 
      },
    elements: {

        cookiesButton: {
            selector: "//a[@id='CybotCookiebotDialogBodyButtonAccept']",
            locateStrategy: 'xpath'
        },
        valtechConfirmText: {
            selector: "//span[@class='highlighted--white-on-black']",
            locateStrategy: 'xpath'
        },
        valtechFooter:{
            selector: ".foot__offices"
        },
        recentBlogLocator: {
            selector: ".bloglisting__item__heading--big [href]"
        },
        menu: {
            selector: ".header__navigation__menu .navigation__menu__item:"
        }
    }
};
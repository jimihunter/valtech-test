
module.exports = {
    '@tags':['about'],
    'Recent Blogs Display' : function (client) {
      const  valtech = client.page.homePage();
      const aboutPage = client.page.aboutPage();
      let about = 'nth-of-type(1)'
      valtech.navigate()
         .launchHomePage()
         .click('.header__navigation__menu .navigation__menu__item:nth-of-type(1)')
      aboutPage
         .waitForElementVisible('@aboutHeader', 100)
         .getText('@aboutHeader', function(result){
            this.assert.equal(result.value, 'About');
          })
         

      client.end();
        
    }
  };
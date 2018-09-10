
module.exports = {
    '@tags':['about'],
    'About Page Header' : function (client) {
      client.maximizeWindow();
      const  valtech = client.page.homePage();
      const aboutPage = client.page.aboutPage();
      valtech.navigate()
         .launchHomePage()
         .waitForElementVisible('@aboutMenu', 100)
         .click('@aboutMenu')
         
      aboutPage
         .waitForElementVisible('@aboutHeader', 100)
         .getText('@aboutHeader', function(result){
            this.assert.equal(result.value, 'About');
          })
      client.end();
    },

      'Services Page Header' : function (client) {
        client.maximizeWindow();
        const  valtech = client.page.homePage();
        const servicePage = client.page.servicePage();
        valtech.navigate()
               .launchHomePage()
               .waitForElementVisible('@servicesMenu', 100)
               .click('@servicesMenu')
               
        servicePage
               .waitForElementVisible('@servicesHeader', 100)
               .getText('@servicesHeader', function(result){
                  this.assert.equal(result.value, 'Services');
                }),
         

      client.end();
        
    },

    'Work Page Header' : function (client) {
      client.maximizeWindow();
      const  valtech = client.page.homePage();
      const workPage = client.page.workPage();
      valtech.navigate()
         .launchHomePage()
         .waitForElementVisible('@workMenu', 100)
         .click('@workMenu')
         
      workPage
         .waitForElementVisible('@workHeader', 100)
         .getText('@workHeader', function(result){
            this.assert.equal(result.value, 'Work');
          })
         

      client.end();
        
    }
    
  };



module.exports = {
    '@tags':['demo'],
    'Recent Blogs Display' : function (client) {
      client.maximizeWindow();
      const  valtech = client.page.homePage();
      valtech.navigate()
         .launchHomePage()
         .scrollToElement()
         .getText('@recentBlogLocator', function(result){
           this.assert.equal(result.value, 'Project Requirements Elicitation');
         });

      client.end();
        
    }
  };

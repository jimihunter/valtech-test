
module.exports = {
    '@tags':['demo'],
    'Recent Blogs Display' : function (client) {
      const  valtech = client.page.val();
      valtech.navigate()
         .launchHomePage()
         .scrollToElement()
         .getText('@recentBlogLocator', function(result){
           this.assert.equal(result.value, 'Project Requirements Elicitation');
         });

      client.end();
        
    }
  };
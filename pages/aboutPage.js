
const utils = require('./utils');

module.exports = {
    //commands: [valtekCommands, utils],
    url: function() { 
        return this.api.launchUrl + '/about/'; 
      },
    elements: {

        aboutHeader: {
            selector: "h1",
            
        },
    }
};
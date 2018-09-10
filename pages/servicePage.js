
const utils = require('./utils');

module.exports = {
    //commands: [valtekCommands, utils],
    url: function() { 
        return this.api.launchUrl + '/services/'; 
      },
    elements: {

        servicesHeader: {
            selector: "h1",
            
        },
    }
};
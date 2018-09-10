
const utils = require('./utils');

module.exports = {
    //commands: [valtekCommands, utils],
    url: function() { 
        return this.api.launchUrl + '/work/'; 
      },
    elements: {

        workHeader: {
            selector: "h1",
            
        },
    }
};
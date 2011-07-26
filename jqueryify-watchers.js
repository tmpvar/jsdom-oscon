var request = require('request');
var jsdom  = require("jsdom");

request({uri: 'http://www.github.com/tmpvar/jsdom'},
  function(e, r, body) {
    var window = jsdom.jsdom(body).createWindow();
    jsdom.jQueryify(window, './jquery.js' , function() {
      console.log(
        'jsdom has %s watchers!',
        window.$('li.watchers a').text()
      );
      process.exit();
    });
  }
);



var jsdom  = require("jsdom");
var jquery = 'file://' + __dirname + '/jquery.js';

jsdom.env(
  'http://www.github.com/tmpvar/jsdom',
  [jquery],
  function(e, window) {
    console.log(
      'jsdom has %s watchers!',
      window.$('li.watchers a').text()
    );
  }
);



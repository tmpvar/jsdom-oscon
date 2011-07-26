var jsdom = require('jsdom');
var url = process.argv[2];
var selector = process.argv[3];
var jquery = 'file://' + __dirname + '/jquery.js';

jsdom.env(url, [jquery], function(e, w) {
  var results = [];
  var $ = w.$;

  $(selector).each(function() {
    results.push($.trim($(this).text()));
  });
  
  console.log(JSON.stringify(results));
  process.exit();
});
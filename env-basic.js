var jsdom = require("jsdom");

jsdom.env(
  '<div class="testing">Hello World, It works</div>',
  ['./jquery.js'],
  function(errors, window) {
    window.$('body').append();
    console.log(window.$('.testing').text());
  }
);
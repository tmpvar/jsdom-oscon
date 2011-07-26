var jsdom  = require("jsdom"),
    window = jsdom.jsdom().createWindow();

jsdom.jQueryify(window, './jquery.js' , function() {
  window.$('body').append(
    '<div class="testing">Hello World, It works</div>'
  );
  console.log(window.$('.testing').text());
});


// Usage: node --trace_gc leak.js
var jsdom = require('jsdom');
var iteration = 0;
var jquery = 'file://' + __dirname + '/jquery.js';

function next() {
  jsdom.env('<a />', [jquery], function(e, w) {
    iteration++;
    console.log('document #%d', iteration);
    process.nextTick(next);
  });
}

next();




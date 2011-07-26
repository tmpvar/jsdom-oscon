// Usage: node --trace_gc no-leak.js
var jsdom = require('jsdom');
var iteration = 0;

function next() {
  jsdom.env('<a />', function(e, w) {
    iteration++;
    console.log('document #%d', iteration);
    process.nextTick(next);
  });
}

next();




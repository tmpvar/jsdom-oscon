var zip = process.argv[2].replace(/ /g, '+');
var url = 'http://www.weather.com/weather/today/';
var jquery = 'file://' + __dirname + '/jquery.js';

require('jsdom').env(url + zip, [jquery], function(e, window) {
  var $ = window.$;
  var city = $('#twc_loc_head')[0].firstChild.nodeValue;
  var temp = $('.twc-col-1.twc-forecast-temperature').text();
  console.log('In %sthe temperature is %s', city, temp);
});


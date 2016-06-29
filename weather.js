simply.fullscreen(true);
simply.scrollable(true);
simply.body('Obtaining position...', true);
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var hourlyUrl = 'http://api.wunderground.com/api/faa942d410d5139c/hourly/q/' + coords.latitude + ',' + coords.longitude + '.json';
  var forecastUrl = 'http://api.wunderground.com/api/faa942d410d5139c/forecast/q/' + coords.latitude + ',' + coords.longitude + '.json';
  var textbody = '';
  ajax({ url: hourlyUrl, type: 'json' }, function(data) {
    for (var i = 0; i < 12; i++) {
      textbody = textbody +
                  data.hourly_forecast[i].FCTTIME.hour_padded + ':' +
                  data.hourly_forecast[i].temp.english + ' ' +
                  // data.hourly_forecast[i].wx.substring(0,10).replace('/', ' ') +
                  data.hourly_forecast[i].icon.replace('mostly', 'm ').replace('partly', 'p ').replace('chance', 'ch ').substring(0,10) +
                  '\n';
    }
    simply.body(textbody, true);
  });
  textbody = textbody + '\n';
  ajax({ url: forecastUrl, type: 'json' }, function(data) {
    for (var i = 0; i < 3; i++) {
      textbody = textbody +
                  data.forecast.simpleforecast.forecastday[i].date.day + ':' +
                  data.forecast.simpleforecast.forecastday[i].high.fahrenheit + ' ' +
                  data.forecast.simpleforecast.forecastday[i].low.fahrenheit + ' ' +
                  data.forecast.simpleforecast.forecastday[i].icon.replace('mostly', '').replace('partly', '').replace('chance', '').substring(0,10) +
                  '\n';
    }
    simply.body(textbody, false);
  });
});

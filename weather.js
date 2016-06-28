simply.fullscreen(true);
simply.scrollable(true);
simply.body('Obtaining position...', true);
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var weatherUrl = 'http://api.wunderground.com/api/faa942d410d5139c/hourly/q/' + coords.latitude + ',' + coords.longitude + '.json';
  var textbody = '';
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
    for (var i = 0; i < 12; i++) {
      textbody = textbody +
                  data.hourly_forecast[i].FCTTIME.hour_padded + ':' +
                  data.hourly_forecast[i].temp.english + ' ' +
                  // data.hourly_forecast[i].wx.substring(0,10).replace('/', ' ') +
                  data.hourly_forecast[i].icon +
                  '\n';
    }
    simply.body(textbody, true);
  });
});

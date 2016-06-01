simply.fullscreen(true);
simply.scrollable(true);
navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var weatherUrl = 'http://api.wunderground.com/api/faa942d410d5139c/hourly/q/NY/Cold_Spring_Harbor.json';
  var textbody = '';
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
    for (var i = 0; i < 12; i++) {
      textbody = textbody + data.hourly_forecast[i].FCTTIME.hour_padded + '\n';
    }
    simply.body(textbody, true);
  });
});

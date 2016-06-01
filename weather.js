navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var weatherUrl = 'http://api.wunderground.com/api/faa942d410d5139c/hourly/q/NY/Cold_Spring_Harbor.json';
  ajax({ url: weatherUrl, type: 'json' }, function(data) {
    simply.text({ title: data.reponse.version, subtitle: data.response.version });
  });
});


$(document).ready(function() {
  $('form').submit(function(){
    var api_key = '67039519f90c61ce8a85b23eae3defc9';
    var city = $('input:text[name=city]').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +
    '&units=imperial&appid=' + api_key, function(label){
        var weather = '';
        weather += "<p>" + "<h1>City: </h1>" + label['name'] + "</p>";
        weather += "<p>" + "<h1>Weather: </h1>" + label['weather'][0]['description'] + "</p>";
        weather += "<p>" + "<h1>Temperature: </h1>" + label['main']['temp'] + " F</p>";
      $('#results').html(weather);}, 'jsonp');
    return false;
  })
});
